"""Two-site discussion service. Run behind HTTPS with one scheduled worker."""
import base64
import hashlib
import hmac
import io
import json
import os
import secrets
import smtplib
import sqlite3
import time
from contextlib import contextmanager
from email.message import EmailMessage
from pathlib import Path
from urllib.parse import urlparse

from flask import Flask, abort, jsonify, request, send_file, send_from_directory
from PIL import Image, UnidentifiedImageError

ROOT = Path(__file__).parent
DATA = Path(os.environ.get('FORUM_DATA', ROOT / 'data'))
DATA.mkdir(parents=True, exist_ok=True)
(DATA / 'uploads').mkdir(exist_ok=True)
SECRET = os.environ.get('FORUM_SECRET', '')
SITES = {
    'sajjal': {'owner': 'Sajjal Bajaj', 'title': 'Odoo Forum', 'origin': 'https://www.sajjalbajaj.in'},
    'ankush': {'owner': 'Ankush Kaura', 'title': 'Technical Discussions', 'origin': 'https://www.ankushkaura.in'},
}
app = Flask(__name__, static_folder=None)
app.config['MAX_CONTENT_LENGTH'] = 26 * 1024 * 1024


@contextmanager
def database():
    connection = sqlite3.connect(DATA / 'forum.sqlite', timeout=30)
    connection.row_factory = sqlite3.Row
    connection.execute('PRAGMA foreign_keys=ON')
    try:
        yield connection
        connection.commit()
    finally:
        connection.close()


def initialise():
    with database() as db:
        db.executescript('''
        PRAGMA journal_mode=WAL;
        CREATE TABLE IF NOT EXISTS people (
          id TEXT PRIMARY KEY, site TEXT NOT NULL, email TEXT NOT NULL,
          name TEXT NOT NULL, phone TEXT NOT NULL DEFAULT '', UNIQUE(site,email));
        CREATE TABLE IF NOT EXISTS topics (
          id TEXT PRIMARY KEY, site TEXT NOT NULL, person TEXT NOT NULL,
          title TEXT NOT NULL, context TEXT NOT NULL, state TEXT NOT NULL DEFAULT 'Open',
          accepted TEXT, created REAL NOT NULL, FOREIGN KEY(person) REFERENCES people(id));
        CREATE TABLE IF NOT EXISTS posts (
          id TEXT PRIMARY KEY, topic TEXT NOT NULL, parent TEXT,
          person TEXT, guest TEXT, display TEXT NOT NULL, body TEXT NOT NULL,
          kind TEXT NOT NULL DEFAULT 'community', source TEXT,
          created REAL NOT NULL, hidden INTEGER NOT NULL DEFAULT 0,
          FOREIGN KEY(topic) REFERENCES topics(id), FOREIGN KEY(parent) REFERENCES posts(id));
        CREATE TABLE IF NOT EXISTS subscriptions (
          topic TEXT NOT NULL, person TEXT NOT NULL, mode TEXT NOT NULL,
          PRIMARY KEY(topic,person), FOREIGN KEY(topic) REFERENCES topics(id),
          FOREIGN KEY(person) REFERENCES people(id));
        CREATE TABLE IF NOT EXISTS uploads (
          id TEXT PRIMARY KEY, site TEXT NOT NULL, actor TEXT NOT NULL,
          post TEXT, name TEXT NOT NULL, mime TEXT NOT NULL, path TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS jobs (
          post TEXT PRIMARY KEY, due REAL NOT NULL, state TEXT NOT NULL DEFAULT 'pending');
        CREATE TABLE IF NOT EXISTS mail (
          id TEXT PRIMARY KEY, site TEXT NOT NULL, recipient TEXT NOT NULL,
          subject TEXT NOT NULL, body TEXT NOT NULL, topic TEXT,
          attempts INTEGER NOT NULL DEFAULT 0, due REAL NOT NULL, sent REAL, error TEXT);
        CREATE TABLE IF NOT EXISTS reports (
          id TEXT PRIMARY KEY, site TEXT NOT NULL, post TEXT NOT NULL,
          reason TEXT NOT NULL, created REAL NOT NULL);
        CREATE TABLE IF NOT EXISTS limits (key TEXT PRIMARY KEY, count INTEGER NOT NULL, expires REAL NOT NULL);
        CREATE TABLE IF NOT EXISTS used_tokens (digest TEXT PRIMARY KEY, expires REAL NOT NULL);
        ''')


def signed(data, seconds=2592000):
    if len(SECRET) < 32:
        abort(503, 'The forum owner must configure FORUM_SECRET before accepting posts.')
    payload = base64.urlsafe_b64encode(json.dumps({**data, 'expires': time.time() + seconds}).encode()).decode()
    signature = hmac.new(SECRET.encode(), payload.encode(), hashlib.sha256).hexdigest()
    return payload + '.' + signature


def decoded(token):
    try:
        payload, signature = token.rsplit('.', 1)
        expected = hmac.new(SECRET.encode(), payload.encode(), hashlib.sha256).hexdigest()
        if not SECRET or not hmac.compare_digest(signature, expected):
            raise ValueError()
        data = json.loads(base64.urlsafe_b64decode(payload))
        if data['expires'] < time.time():
            raise ValueError()
        return data
    except (ValueError, KeyError, TypeError):
        abort(401, 'This sign-in link has expired. Request a new email.')


def actor(site, required=False):
    token = request.headers.get('Authorization', '').removeprefix('Bearer ')
    data = decoded(token) if token else {}
    if data and (data.get('site') != site or data.get('purpose') != 'session'):
        abort(403)
    if required and not data.get('person'):
        abort(401, 'Verify your email before asking a question or posting by name.')
    return data


def owner(site):
    configured = os.environ.get('FORUM_ADMIN_' + site.upper(), '')
    if not configured or not hmac.compare_digest(request.headers.get('X-Admin-Key', ''), configured):
        abort(403)


def text_field(data, key, maximum, required=True):
    value = str(data.get(key, '')).strip()
    if (required and not value) or len(value) > maximum:
        abort(400, f'Check {key}. Maximum length is {maximum} characters.')
    return value


def site_url(site, topic='', post=''):
    origin = os.environ.get('FORUM_PUBLIC_URL', '').rstrip('/')
    return f'{origin}/{site}/?topic={topic}' + (f'&post={post}' if post else '')


def queue_mail(db, site, recipient, subject, body, topic=None):
    db.execute('INSERT INTO mail(id,site,recipient,subject,body,topic,due) VALUES(?,?,?,?,?,?,?)',
               (secrets.token_urlsafe(18), site, recipient, subject, body, topic, time.time()))


@app.before_request
def guard():
    parts = request.path.strip('/').split('/')
    if len(parts) < 2 or parts[0] != 'api':
        return
    site = parts[1]
    if site not in SITES:
        abort(404)
    allowed = {SITES[site]['origin'], SITES[site]['origin'].replace('www.', ''),
               os.environ.get('FORUM_PUBLIC_URL', '').rstrip('/')}
    origin = request.headers.get('Origin')
    if origin and origin not in allowed:
        abort(403)
    if request.method == 'OPTIONS':
        return '', 204
    if request.method == 'POST':
        # Trust proxy headers only when the deployment explicitly enables ProxyFix.
        key = f'{site}:{request.remote_addr}:{int(time.time() // 3600)}'
        with database() as db:
            db.execute('DELETE FROM limits WHERE expires < ?', (time.time(),))
            db.execute('INSERT INTO limits VALUES(?,1,?) ON CONFLICT(key) DO UPDATE SET count=count+1',
                       (key, time.time() + 3600))
            count = db.execute('SELECT count FROM limits WHERE key=?', (key,)).fetchone()[0]
        if count > 100:
            abort(429, 'Too many requests. Please try again later.')


@app.after_request
def headers(response):
    origin = request.headers.get('Origin')
    parts = request.path.strip('/').split('/')
    if len(parts) > 1 and parts[0] == 'api' and parts[1] in SITES:
        allowed = {SITES[parts[1]]['origin'], SITES[parts[1]]['origin'].replace('www.', ''),
                   os.environ.get('FORUM_PUBLIC_URL', '').rstrip('/')}
        if origin in allowed:
            response.headers['Access-Control-Allow-Origin'] = origin
            response.headers['Vary'] = 'Origin'
            response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, X-Admin-Key'
            response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['Referrer-Policy'] = 'no-referrer'
    response.headers['Cache-Control'] = 'no-store'
    return response


@app.errorhandler(Exception)
def errors(error):
    code = getattr(error, 'code', 500)
    if code == 500:
        app.logger.exception('Forum request failed')
    return jsonify(error=getattr(error, 'description', 'The request failed. Please try again.')), code


@app.get('/<site>/')
def page(site):
    if site not in SITES:
        abort(404)
    return send_from_directory(ROOT / 'web', f'{site}.html')


@app.get('/assets/<path:name>')
def assets(name):
    return send_from_directory(ROOT / 'web', name)


@app.get('/api/<site>/config')
def config(site):
    return jsonify(**SITES[site], email_ready=bool(os.environ.get('SMTP_HOST') and os.environ.get('MAIL_FROM_' + site.upper())),
                   posting_ready=len(SECRET) >= 32)


def valid_email(value):
    # Use delimiter checks instead of a backtracking expression on untrusted input.
    if value.count('@') != 1 or any(character.isspace() for character in value):
        return False
    local, _, domain = value.partition('@')
    host, dot, suffix = domain.rpartition('.')
    return bool(local and host and dot and suffix)


@app.post('/api/<site>/identity')
def identity(site):
    data = request.get_json()
    name = text_field(data, 'name', 100)
    email = text_field(data, 'email', 254).lower()
    phone = text_field(data, 'phone', 40, False)
    if not valid_email(email):
        abort(400, 'Enter a valid email address.')
    public_url = urlparse(os.environ.get('FORUM_PUBLIC_URL', ''))
    if public_url.scheme != 'https' or not public_url.netloc:
        abort(503, 'The owner must configure the HTTPS forum address before email sign-in can open.')
    if not os.environ.get('SMTP_HOST') or not os.environ.get('MAIL_FROM_' + site.upper()):
        abort(503, 'Email delivery is awaiting configuration. Your details have not been saved.')
    # Personal fields are stored server-side, never in the email URL.
    person = secrets.token_urlsafe(18)
    with database() as db:
        existing = db.execute('SELECT id FROM people WHERE site=? AND email=?', (site, email)).fetchone()
        if existing:
            person = existing['id']
        else:
            db.execute('INSERT INTO people VALUES(?,?,?,?,?)', (person, site, email, name, phone))
        token = signed({'site': site, 'person': person, 'purpose': 'verify', 'nonce': secrets.token_hex(16)}, 1800)
        return_topic = str(data.get('return_topic', ''))
        if return_topic and not db.execute('SELECT 1 FROM topics WHERE id=? AND site=?', (return_topic, site)).fetchone():
            return_topic = ''
        link = site_url(site, return_topic) + '#verify=' + token
        queue_mail(db, site, email, 'Confirm your forum email',
                   f'Open this link to verify your email and return to your saved question or reply. It expires in 30 minutes.\n\n{link}\n\nIf you did not request it, ignore this email.')
    return jsonify(message='Check your email, then open the verification link in this browser.')


@app.post('/api/<site>/verify')
def verify(site):
    token = request.get_json().get('token', '')
    data = decoded(token)
    if data.get('site') != site or data.get('purpose') != 'verify':
        abort(403)
    digest = hashlib.sha256(token.encode()).hexdigest()
    with database() as db:
        db.execute('DELETE FROM used_tokens WHERE expires < ?', (time.time(),))
        if db.execute('SELECT 1 FROM used_tokens WHERE digest=?', (digest,)).fetchone():
            abort(401, 'This link has already been used. Request another sign-in email.')
        db.execute('INSERT INTO used_tokens VALUES(?,?)', (digest, data['expires']))
    return jsonify(token=signed({'site': site, 'person': data['person'], 'purpose': 'session'}))


@app.get('/api/<site>/topics')
def topics(site):
    with database() as db:
        rows = db.execute('''SELECT t.id,t.title,t.context,t.state,t.created,
            (SELECT count(*)-1 FROM posts p WHERE p.topic=t.id AND hidden=0) replies
            FROM topics t WHERE site=? AND EXISTS (SELECT 1 FROM posts root WHERE root.topic=t.id AND root.parent IS NULL AND root.hidden=0) ORDER BY created DESC LIMIT 200''', (site,)).fetchall()
    return jsonify(topics=[dict(row) for row in rows])


def get_topic(db, site, topic):
    result = db.execute('SELECT * FROM topics WHERE id=? AND site=?', (topic, site)).fetchone()
    if not result:
        abort(404)
    return result


@app.get('/api/<site>/topics/<topic>')
def topic_detail(site, topic):
    current = actor(site)
    with database() as db:
        row = get_topic(db, site, topic)
        posts = db.execute('SELECT * FROM posts WHERE topic=? AND hidden=0 ORDER BY created,id', (topic,)).fetchall()
        if not any(post['parent'] is None for post in posts):
            abort(404)
        result = []
        for post in posts:
            public = {key: post[key] for key in ('id','parent','display','body','kind','source','created')}
            public['files'] = [dict(f) for f in db.execute('SELECT id,name,mime FROM uploads WHERE post=?', (post['id'],))]
            result.append(public)
        subscription = db.execute('SELECT mode FROM subscriptions WHERE topic=? AND person=?',
                                  (topic, current.get('person', ''))).fetchone()
        public_topic = {key: row[key] for key in ('id','title','context','state','accepted','created')}
    return jsonify(topic=public_topic, posts=result, can_resolve=row['person'] == current.get('person'),
                   subscription=subscription['mode'] if subscription else 'none')


def subscribe(db, topic, person, mode):
    if mode not in ('all', 'direct', 'none'):
        abort(400)
    if person:
        db.execute('INSERT INTO subscriptions VALUES(?,?,?) ON CONFLICT(topic,person) DO UPDATE SET mode=excluded.mode',
                   (topic, person, mode))


def attach(db, site, post, actor_id, ids):
    if not isinstance(ids, list) or len(ids) > 5:
        abort(400, 'Attach up to five files.')
    for upload in ids:
        row = db.execute('SELECT * FROM uploads WHERE id=? AND site=? AND actor=? AND post IS NULL',
                         (upload, site, actor_id)).fetchone()
        if not row:
            abort(400, 'An attachment is missing or already attached.')
        db.execute('UPDATE uploads SET post=? WHERE id=?', (post, upload))


def notify(db, site, topic, post, parent, author, body):
    row = get_topic(db, site, topic)
    direct = db.execute('SELECT person FROM posts WHERE id=?', (parent,)).fetchone() if parent else None
    subscribers = db.execute('''SELECT p.id,p.email,s.mode FROM subscriptions s
        JOIN people p ON p.id=s.person WHERE s.topic=? AND p.site=?''', (topic, site)).fetchall()
    for recipient in subscribers:
        if recipient['id'] == author or recipient['mode'] == 'none':
            continue
        if recipient['mode'] == 'direct' and (not direct or direct['person'] != recipient['id']):
            continue
        token = signed({'site': site, 'person': recipient['id'], 'topic': topic, 'purpose': 'unsubscribe'}, 31536000)
        queue_mail(db, site, recipient['email'], 'New reply — ' + row['title'],
                   body[:4000] + '\n\nOpen this reply\n' + site_url(site, topic, post)
                   + '\n\nManage or unsubscribe\n' + site_url(site, topic) + '#unsubscribe=' + token, topic)


@app.post('/api/<site>/topics')
def create_topic(site):
    current = actor(site, True)
    data = request.get_json()
    title = text_field(data, 'title', 180)
    body = text_field(data, 'body', 20000)
    context = text_field(data, 'context', 1000, False)
    topic, post = secrets.token_urlsafe(12), secrets.token_urlsafe(12)
    with database() as db:
        db.execute('INSERT INTO topics(id,site,person,title,context,created) VALUES(?,?,?,?,?,?)',
                   (topic, site, current['person'], title, context, time.time()))
        db.execute('INSERT INTO posts(id,topic,person,display,body,created) VALUES(?,?,?,?,?,?)',
                   (post, topic, current['person'], 'Question author', body, time.time()))
        attach(db, site, post, current['person'], data.get('files', []))
        subscribe(db, topic, current['person'], data.get('subscription', 'all'))
        db.execute('INSERT INTO jobs(post,due) VALUES(?,?)', (post, time.time() + 60))
    return jsonify(id=topic, post=post), 201


@app.post('/api/<site>/topics/<topic>/posts')
def reply(site, topic):
    data = request.get_json()
    current = actor(site)
    is_owner = bool(request.headers.get('X-Admin-Key'))
    if is_owner:
        owner(site)
    guest = data.get('guest', False)
    if not guest and not is_owner:
        current = actor(site, True)
    parent = text_field(data, 'parent', 50)
    body = text_field(data, 'body', 20000)
    post = secrets.token_urlsafe(12)
    guest_id = current.get('guest') or current.get('person') or secrets.token_urlsafe(18)
    with database() as db:
        row = get_topic(db, site, topic)
        if not db.execute('SELECT 1 FROM posts WHERE id=? AND topic=? AND hidden=0', (parent, topic)).fetchone():
            abort(400, 'Choose an existing reply in this discussion.')
        display = SITES[site]['owner'] if is_owner else 'Question author'
        if not is_owner and row['person'] != current.get('person'):
            display = 'Guest ' + hashlib.sha256((topic + guest_id).encode()).hexdigest()[:6] if guest else text_field(data, 'display', 80)
            if display.casefold() in (SITES[site]['owner'].casefold(), 'question author'):
                abort(400, 'Choose a different public display name.')
        db.execute('INSERT INTO posts(id,topic,parent,person,guest,display,body,kind,created) VALUES(?,?,?,?,?,?,?,?,?)',
                   (post, topic, parent, current.get('person'), guest_id if guest else None, display, body,
                    'owner' if is_owner else 'community', time.time()))
        attach(db, site, post, current.get('person') or guest_id, data.get('files', []))
        subscribe(db, topic, current.get('person'), data.get('subscription', 'all'))
        next_state = 'Open' if data.get('question') else 'Answered'
        db.execute('UPDATE topics SET state=? WHERE id=?', (next_state, topic))
        notify(db, site, topic, post, parent, current.get('person'), display + '\n\n' + body)
        if data.get('question') and not is_owner:
            db.execute('INSERT INTO jobs(post,due) VALUES(?,?)', (post, time.time() + 60))
    result = {'id': post}
    if not current:
        result['token'] = signed({'site': site, 'guest': guest_id, 'purpose': 'session'})
    return jsonify(result), 201


@app.post('/api/<site>/guest')
def guest_session(site):
    return jsonify(token=signed({'site': site, 'guest': secrets.token_urlsafe(18), 'purpose': 'session'}))


@app.post('/api/<site>/topics/<topic>/subscription')
def subscription(site, topic):
    current = actor(site, True)
    with database() as db:
        get_topic(db, site, topic)
        subscribe(db, topic, current['person'], request.get_json().get('mode'))
    return jsonify(ok=True)


@app.post('/api/<site>/unsubscribe')
def unsubscribe(site):
    data = decoded(request.get_json().get('token', ''))
    if data.get('site') != site or data.get('purpose') != 'unsubscribe':
        abort(403)
    with database() as db:
        subscribe(db, data['topic'], data['person'], 'none')
    return jsonify(ok=True)


@app.post('/api/<site>/topics/<topic>/resolve')
def resolve(site, topic):
    current = actor(site)
    data = request.get_json()
    with database() as db:
        row = get_topic(db, site, topic)
        if row['person'] != current.get('person'):
            owner(site)
        post = data.get('accepted')
        if post and not db.execute('SELECT 1 FROM posts WHERE id=? AND topic=? AND parent IS NOT NULL AND hidden=0', (post, topic)).fetchone():
            abort(400)
        state = data.get('state', 'Resolved')
        if state not in ('Open', 'Answered', 'Resolved'):
            abort(400)
        db.execute('UPDATE topics SET state=?,accepted=? WHERE id=?', (state, post, topic))
    return jsonify(ok=True)


@app.post('/api/<site>/uploads')
def upload(site):
    current = actor(site)
    actor_id = current.get('person') or current.get('guest')
    if not actor_id:
        abort(401, 'Start a guest session or verify your email before uploading.')
    item = request.files.get('file')
    if not item:
        abort(400)
    content = item.read(25 * 1024 * 1024 + 1)
    if len(content) > 25 * 1024 * 1024:
        abort(413)
    # Images are decoded and re-encoded to discard metadata and active content.
    mime = item.mimetype
    try:
        if mime in ('image/jpeg', 'image/png', 'image/webp'):
            picture = Image.open(io.BytesIO(content))
            if picture.width * picture.height > 20000000:
                abort(400, 'Image is too large.')
            result = io.BytesIO()
            picture.convert('RGB').save(result, 'JPEG', quality=90)
            content, mime = result.getvalue(), 'image/jpeg'
        elif mime == 'video/mp4' and content[4:8] == b'ftyp':
            pass
        elif mime == 'application/pdf' and content.startswith(b'%PDF-'):
            pass
        elif mime == 'text/plain':
            content.decode('utf-8')
        else:
            abort(400, 'Use JPG, PNG, WebP, MP4, PDF, or UTF-8 text.')
    except (UnidentifiedImageError, UnicodeDecodeError, Image.DecompressionBombError):
        abort(400, 'This file could not be read.')
    key = secrets.token_urlsafe(24)
    path = DATA / 'uploads' / key
    path.write_bytes(content)
    try:
        with database() as db:
            db.execute('INSERT INTO uploads VALUES(?,?,?,NULL,?,?,?)',
                       (key, site, actor_id, Path(item.filename or 'attachment').name[:150], mime, str(path)))
    except Exception:
        path.unlink(missing_ok=True)
        raise
    return jsonify(id=key, name=item.filename), 201


@app.get('/api/<site>/uploads/<key>')
def download(site, key):
    with database() as db:
        row = db.execute('''SELECT u.* FROM uploads u JOIN posts p ON p.id=u.post
                          JOIN topics t ON t.id=p.topic WHERE u.id=? AND u.site=? AND t.site=? AND p.hidden=0''',
                         (key, site, site)).fetchone()
    if not row:
        abort(404)
    return send_file(row['path'], mimetype=row['mime'], as_attachment=True, download_name=row['name'])


@app.post('/api/<site>/reports')
def report(site):
    data = request.get_json()
    with database() as db:
        row = db.execute('SELECT p.id FROM posts p JOIN topics t ON t.id=p.topic WHERE p.id=? AND t.site=?',
                         (data.get('post'), site)).fetchone()
        if not row:
            abort(404)
        db.execute('INSERT INTO reports VALUES(?,?,?,?,?)',
                   (secrets.token_urlsafe(12), site, row['id'], text_field(data, 'reason', 1000), time.time()))
    return jsonify(ok=True)


@app.get('/api/<site>/admin')
def admin(site):
    owner(site)
    with database() as db:
        return jsonify(reports=[dict(r) for r in db.execute('SELECT * FROM reports WHERE site=?', (site,))],
                       mail=[dict(r) for r in db.execute('SELECT id,attempts,error FROM mail WHERE site=? AND sent IS NULL', (site,))])


@app.post('/api/<site>/moderate')
def moderate(site):
    owner(site)
    data = request.get_json()
    with database() as db:
        if not db.execute('SELECT p.id FROM posts p JOIN topics t ON t.id=p.topic WHERE p.id=? AND t.site=?',
                          (data.get('post'), site)).fetchone():
            abort(404)
        db.execute('UPDATE posts SET hidden=? WHERE id=?', (int(bool(data.get('hidden'))), data['post']))
        if data.get('attachment'):
            db.execute('UPDATE uploads SET post=NULL WHERE id=? AND post=? AND site=?',
                       (data['attachment'], data['post'], site))
    return jsonify(ok=True)


initialise()
