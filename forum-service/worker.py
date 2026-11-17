"""Persistent guide-answer and SMTP queue worker. Run exactly one instance."""
import json
import os
import re
import smtplib
import time
import urllib.request
from email.message import EmailMessage
from urllib.parse import urlparse

from app import DATA, SITES, database, get_topic, notify
import secrets


def words(value):
    return set(re.findall(r'[a-z0-9]+', value.lower())) - {'how','do','i','a','the','is','can','to','in','of','my','please'}


def guides(site):
    # Only owner-published structured FAQ answers qualify for unattended publication.
    url = os.environ.get('GUIDE_INDEX_' + site.upper())
    if not url:
        return []
    parsed = urlparse(url)
    if parsed.scheme != 'https' or parsed.netloc != urlparse(SITES[site]['origin']).netloc:
        raise ValueError('Guide index must be on the configured owner website')
    class NoRedirect(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *args, **kwargs):
            return None
    with urllib.request.build_opener(NoRedirect).open(url, timeout=15) as response:
        content = response.read(4000001)
    if len(content) > 4000000:
        raise ValueError('Guide index exceeds limit')
    return json.loads(content)


def answer_job(post_id, cache):
    with database() as db:
        post = db.execute('SELECT * FROM posts WHERE id=?', (post_id,)).fetchone()
        if not post or post['hidden']:
            db.execute("UPDATE jobs SET state='skipped' WHERE post=?", (post_id,))
            return
        topic = db.execute('SELECT * FROM topics WHERE id=?', (post['topic'],)).fetchone()
        site = topic['site']
    if site not in cache:
        cache[site] = guides(site)
    question = post['body'] if post['parent'] else topic['title']
    query = words(question)
    match = None
    for guide in cache[site]:
        source = urlparse(guide.get('url', ''))
        if source.scheme != 'https' or source.netloc != urlparse(SITES[site]['origin']).netloc:
            continue
        for faq in guide.get('faqs', []):
            candidate = words(faq.get('q', ''))
            similarity = len(query & candidate) / max(len(query | candidate), 1)
            # A complete, nearly identical FAQ question is required. Numeric versions must match.
            numbers = lambda text: set(re.findall(r'\b\d+(?:\.\d+)?\b', text))
            if similarity >= 0.9 and len(query) >= 3 and numbers(question + ' ' + topic['context']).issubset(numbers(faq['q'] + ' ' + guide.get('title', ''))):
                match = (faq, guide['url'])
                break
    with database() as db:
        # Serialize final checks and insertion against simultaneous community replies.
        db.execute('BEGIN IMMEDIATE')
        job = db.execute('SELECT state FROM jobs WHERE post=?', (post_id,)).fetchone()
        if not job or job['state'] != 'pending':
            return
        competing = db.execute('SELECT 1 FROM posts WHERE parent=? AND hidden=0', (post_id,)).fetchone()
        topic = get_topic(db, site, post['topic'])
        if match and not competing and topic['state'] != 'Resolved':
            faq, source = match
            reply_id = secrets.token_urlsafe(12)
            db.execute('INSERT INTO posts(id,topic,parent,display,body,kind,source,created) VALUES(?,?,?,?,?,?,?,?)',
                       (reply_id, post['topic'], post_id, SITES[site]['owner'], faq['a'], 'guide', source, time.time()))
            db.execute("UPDATE topics SET state='Answered' WHERE id=?", (post['topic'],))
            notify(db, site, post['topic'], reply_id, post_id, None,
                   SITES[site]['owner'] + ' — automated answer from my guides\n\n' + faq['a'] + '\n\nSource\n' + source)
        db.execute("UPDATE jobs SET state=? WHERE post=?", ('answered' if match and not competing else 'skipped', post_id))


def send_mail(row):
    site = row['site']
    message = EmailMessage()
    message['From'] = os.environ['MAIL_FROM_' + site.upper()]
    message['To'] = row['recipient']
    message['Subject'] = row['subject']
    domain = urlparse(SITES[site]['origin']).netloc
    message['Message-ID'] = f'<{row["id"]}@{domain}>'
    if row['topic']:
        root = f'<forum-{site}-{row["topic"]}@{domain}>'
        message['In-Reply-To'] = root
        message['References'] = root
    message.set_content(row['body'])
    with smtplib.SMTP(os.environ['SMTP_HOST'], int(os.environ.get('SMTP_PORT', '587')), timeout=30) as smtp:
        smtp.starttls()
        if os.environ.get('SMTP_USER'):
            smtp.login(os.environ['SMTP_USER'], os.environ['SMTP_PASSWORD'])
        smtp.send_message(message)


def tick():
    with database() as db:
        jobs = db.execute("SELECT post FROM jobs WHERE state='pending' AND due<=? LIMIT 50", (time.time(),)).fetchall()
    cache = {}
    for job in jobs:
        try:
            answer_job(job['post'], cache)
        except Exception as error:
            # Keep pending jobs retryable. Log no participant details or tokens.
            print('Guide job failed:', type(error).__name__, flush=True)
    with database() as db:
        messages = db.execute('SELECT * FROM mail WHERE sent IS NULL AND due<=? AND attempts<8 LIMIT 50', (time.time(),)).fetchall()
    for row in messages:
        try:
            send_mail(row)
            with database() as db:
                db.execute('UPDATE mail SET sent=?,error=NULL WHERE id=?', (time.time(), row['id']))
        except Exception as error:
            with database() as db:
                db.execute('UPDATE mail SET attempts=attempts+1,due=?,error=? WHERE id=?',
                           (time.time() + min(3600, 30 * 2 ** row['attempts']), type(error).__name__, row['id']))


if __name__ == '__main__':
    while True:
        tick()
        time.sleep(15)
