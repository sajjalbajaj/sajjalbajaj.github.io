// Forum API for both owner sites. Privileged keys never leave this function.
// Public reads select explicit fields. Every write validates a site-scoped session.
const SITES: Record<string, {owner: string; origin: string; email?: string}> = {
  sajjal: {owner: 'Sajjal Bajaj', origin: 'https://www.sajjalbajaj.in', email: 'sajjalbajaj@gmail.com'},
  ankush: {owner: 'Ankush Kaura', origin: 'https://www.ankushkaura.in'},
};
const BUCKET = 'forum-attachments';
const MAX_FILE = 25 * 1024 * 1024;
const now = () => Date.now() / 1000;
const id = () => crypto.randomUUID();
const encoder = new TextEncoder();
const apiUrl = Deno.env.get('SUPABASE_URL') || '';
const keyMap = JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS') || '{}');
const serviceKey = keyMap.default || Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const storageHeaders: Record<string, string> = {apikey: serviceKey};
if (!serviceKey.startsWith('sb_secret_')) storageHeaders.Authorization = `Bearer ${serviceKey}`;
let settingsCache: Record<string, string> | null = null;

class HttpError extends Error {
  constructor(public status: number, message: string) { super(message); }
}
function fail(status: number, message: string): never { throw new HttpError(status, message); }

async function database(path: string, options: {method?: string; body?: unknown; query?: Record<string, string>; prefer?: string} = {}) {
  const url = new URL(`${apiUrl}/rest/v1/${path}`);
  for (const [key, value] of Object.entries(options.query || {})) url.searchParams.set(key, value);
  const response = await fetch(url, {
    method: options.method || 'GET',
    headers: {...storageHeaders, 'Content-Type': 'application/json', Prefer: options.prefer || 'return=representation'},
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    if (response.status === 400 && data?.code === 'P0001') fail(400, data.message);
    console.error('Database operation failed', response.status, data?.code);
    fail(503, 'The forum could not save this request. Please try again.');
  }
  return data;
}
const rows = (table: string, query: Record<string, string>) => database(table, {query});
const insert = (table: string, body: unknown, prefer?: string) => database(table, {method: 'POST', body, prefer});
const update = (table: string, query: Record<string, string>, body: unknown) => database(table, {method: 'PATCH', query, body});
const rpc = (name: string, body: unknown) => database(`rpc/${name}`, {method: 'POST', body});

async function settings() {
  if (!settingsCache) {
    settingsCache = Object.fromEntries((await rows('forum_settings', {select: 'key,value'})).map((entry: any) => [entry.key, entry.value]));
  }
  return settingsCache!;
}
function base64url(bytes: Uint8Array) {
  let text = '';
  for (const value of bytes) text += String.fromCharCode(value);
  return btoa(text).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function unbase64(value: string) {
  return Uint8Array.from(atob(value.replace(/-/g, '+').replace(/_/g, '/')), character => character.charCodeAt(0));
}
async function digest(value: string) { return base64url(new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(value)))); }
async function signingKey() {
  const secret = (await settings()).token_secret;
  if (!secret) fail(503, 'Forum authentication is awaiting configuration.');
  return crypto.subtle.importKey('raw', encoder.encode(secret), {name: 'HMAC', hash: 'SHA-256'}, false, ['sign', 'verify']);
}
async function sign(payload: Record<string, unknown>, seconds = 2592000) {
  const value = base64url(encoder.encode(JSON.stringify({...payload, expires: now() + seconds})));
  return value + '.' + base64url(new Uint8Array(await crypto.subtle.sign('HMAC', await signingKey(), encoder.encode(value))));
}
async function decode(token: string) {
  try {
    if (token.length > 4000) throw Error();
    const [value, signature, extra] = token.split('.');
    if (extra || !signature || !await crypto.subtle.verify('HMAC', await signingKey(), unbase64(signature), encoder.encode(value))) throw Error();
    const payload = JSON.parse(new TextDecoder().decode(unbase64(value)));
    if (!Number.isFinite(payload.expires) || payload.expires < now()) throw Error();
    return payload;
  } catch (_) { fail(401, 'Your session or verification link has expired. Verify your email again.'); }
}
async function actor(req: Request, site: string) {
  const token = req.headers.get('Authorization')?.replace(/^Bearer /i, '');
  if (!token) return {};
  const result = await decode(token);
  if (result.site !== site || result.purpose !== 'session') fail(403, 'This session belongs to a different forum.');
  return result;
}
async function owner(req: Request, site: string, current: any, required = false) {
  const configured = Deno.env.get(`FORUM_ADMIN_${site.toUpperCase()}`);
  const supplied = req.headers.get('X-Admin-Key');
  if (configured && supplied && await digest(configured) === await digest(supplied)) return true;
  if (current.person) {
    const people = await rows('people', {select: 'email', id: `eq.${current.person}`, site: `eq.${site}`});
    const ownerEmail = Deno.env.get(`FORUM_OWNER_EMAIL_${site.toUpperCase()}`) || SITES[site].email;
    if (ownerEmail && people[0]?.email === ownerEmail.toLowerCase()) return true;
  }
  if (required) fail(403, 'Verify the site owner email or enter a valid owner key.');
  return false;
}
function field(data: any, key: string, maximum: number, required = true) {
  const value = typeof data[key] === 'string' ? data[key].trim() : '';
  if ((required && !value) || value.length > maximum) fail(400, `Check ${key}. Maximum length is ${maximum} characters.`);
  return value;
}
async function limitedBody(req: Request | Response, limit: number) {
  if (Number(req.headers.get('Content-Length')) > limit) fail(413, 'The file or request is too large.');
  const reader = req.body?.getReader();
  if (!reader) return new Uint8Array();
  let size = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const {value, done} = await reader.read();
    if (done) break;
    size += value.length;
    if (size > limit) { await reader.cancel(); fail(413, 'The file or request is too large.'); }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return bytes;
}
async function json(req: Request) {
  try {
    const result = JSON.parse(new TextDecoder().decode(await limitedBody(req, 40000)));
    if (!result || Array.isArray(result) || typeof result !== 'object') throw Error();
    return result;
  } catch (error) {
    if (error instanceof HttpError) throw error;
    fail(400, 'Send a valid JSON object.');
  }
}
async function rate(key: string, maximum: number, window: number) {
  if (!await rpc('forum_rate', {p_key: key, p_max: maximum, p_window: window})) fail(429, 'Too many requests. Please try again later.');
}
function link(site: string, topic = '', post = '') {
  const url = new URL('/forum/', SITES[site].origin);
  if (topic) url.searchParams.set('topic', topic);
  if (post) url.searchParams.set('post', post);
  return url.toString();
}
async function topic(site: string, topicId: string, visible = true) {
  if (!/^[a-zA-Z0-9_-]{1,80}$/.test(topicId)) fail(404, 'Discussion not found.');
  const result = await rows('topics', {select: '*', id: `eq.${topicId}`, site: `eq.${site}`});
  if (!result[0]) fail(404, 'Discussion not found.');
  if (visible) {
    const root = await rows('posts', {select: 'id', topic: `eq.${topicId}`, parent: 'is.null', hidden: 'eq.false', limit: '1'});
    if (!root.length) fail(404, 'Discussion not found.');
  }
  return result[0];
}
async function mailReady(site: string) {
  return Boolean(Deno.env.get('BREVO_API_KEY')?.trim() && Deno.env.get(`MAIL_FROM_${site.toUpperCase()}`)?.trim());
}
async function mutate(site: string, current: any, action: string, data: any, isOwner = false) {
  return rpc('forum_mutate', {
    p_site: site, p_actor: current.person || null,
    p_guest: data.guest ? (current.person || current.guest || null) : null,
    p_action: action, p_data: data, p_owner: isOwner,
  });
}
function response(data: unknown, status = 200) { return Response.json(data, {status}); }

// Remove JPEG EXIF/IPTC/comments and PNG metadata without decoding large images.
function cleanImage(bytes: Uint8Array, mime: string) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const pieces: Uint8Array[] = [];
  if (mime === 'image/jpeg') {
    if (bytes[0] !== 255 || bytes[1] !== 216) fail(400, 'Invalid JPEG image.');
    pieces.push(bytes.subarray(0, 2));
    let offset = 2;
    while (offset < bytes.length) {
      if (bytes[offset] !== 255) fail(400, 'Invalid JPEG image.');
      const marker = bytes[offset + 1];
      if (marker === 218) { pieces.push(bytes.subarray(offset)); break; }
      if (marker === 217) { pieces.push(bytes.subarray(offset, offset + 2)); break; }
      if (offset + 4 > bytes.length) fail(400, 'Invalid JPEG image.');
      const length = view.getUint16(offset + 2) + 2;
      if (length < 4 || offset + length > bytes.length) fail(400, 'Invalid JPEG image.');
      if (![225, 237, 254].includes(marker)) pieces.push(bytes.subarray(offset, offset + length));
      offset += length;
    }
  } else if (mime === 'image/png') {
    if (bytes.length < 20 || ![137,80,78,71,13,10,26,10].every((value,index) => bytes[index] === value)) fail(400, 'Invalid PNG image.');
    pieces.push(bytes.subarray(0,8));
    let offset = 8;
    while (offset + 12 <= bytes.length) {
      const length = view.getUint32(offset);
      const type = new TextDecoder().decode(bytes.subarray(offset + 4, offset + 8));
      if (offset + length + 12 > bytes.length) fail(400, 'Invalid PNG image.');
      if (['IHDR','PLTE','IDAT','IEND','tRNS','sRGB','gAMA','cHRM'].includes(type)) pieces.push(bytes.subarray(offset,offset + length + 12));
      offset += length + 12;
      if (type === 'IEND') break;
    }
  } else {
    if (new TextDecoder().decode(bytes.subarray(0,4)) !== 'RIFF' || new TextDecoder().decode(bytes.subarray(8,12)) !== 'WEBP') fail(400, 'Invalid WebP image.');
    // WebP metadata is removed client-side by the JPEG export before upload.
    fail(400, 'Please export this WebP image as JPG or PNG before uploading.');
  }
  const result = new Uint8Array(pieces.reduce((sum, piece) => sum + piece.length, 0));
  let offset = 0;
  for (const piece of pieces) { result.set(piece, offset); offset += piece.length; }
  return result;
}

async function upload(req: Request, site: string, current: any) {
  const actorId = current.person || current.guest;
  if (!actorId) fail(401, 'Verify your email or start a guest session before uploading.');
  await rate(`upload:${site}:${actorId}`, 20, 86400);
  const bytes = await limitedBody(req, MAX_FILE + 1024 * 1024);
  const form = await new Request('https://forum.invalid', {method: 'POST', headers: {'Content-Type': req.headers.get('Content-Type') || ''}, body: bytes}).formData();
  const file = form.get('file');
  if (!(file instanceof File) || file.size > MAX_FILE) fail(400, 'Choose a file up to 25 MB.');
  let content = new Uint8Array(await file.arrayBuffer());
  const mime = file.type;
  if (mime.startsWith('image/')) content = cleanImage(content, mime);
  else if (mime === 'video/mp4' && new TextDecoder().decode(content.subarray(4,8)) === 'ftyp') { /* MP4 download. */ }
  else if (mime === 'application/pdf' && new TextDecoder().decode(content.subarray(0,5)) === '%PDF-') { /* PDF download. */ }
  else if (mime === 'text/plain') {
    try { new TextDecoder('utf-8', {fatal: true}).decode(content); } catch (_) { fail(400, 'Use UTF-8 text logs.'); }
  } else fail(400, 'Use JPG, PNG, MP4, PDF, or UTF-8 text.');
  const uploadId = id();
  const path = `${site}/${uploadId}`;
  const stored = await fetch(`${apiUrl}/storage/v1/object/${BUCKET}/${path}`, {
    method: 'POST', headers: {...storageHeaders, 'Content-Type': mime, 'x-upsert': 'false'}, body: content,
  });
  if (!stored.ok) fail(503, 'The attachment could not be stored. Please try again.');
  try {
    await insert('uploads', {id: uploadId, site, actor: actorId, post: null, name: file.name.replace(/[\r\n/\\]/g,'_').slice(0,150), mime, path, created: now()});
  } catch (error) {
    await fetch(`${apiUrl}/storage/v1/object/${BUCKET}`, {method:'DELETE',headers:{...storageHeaders,'Content-Type':'application/json'},body:JSON.stringify({prefixes:[path]})});
    throw error;
  }
  return response({id: uploadId, name: file.name}, 201);
}

async function route(req: Request, site: string, path: string, current: any) {
  if (req.method === 'GET' && path === '/config') {
    return response({owner:SITES[site].owner, origin:SITES[site].origin, email_ready: await mailReady(site), posting_ready: Boolean((await settings()).token_secret)});
  }
  if (req.method === 'GET' && path === '/topics') {
    return response({topics: await rpc('forum_topics',{p_site:site})});
  }
  const detailMatch = path.match(/^\/topics\/([\w-]+)$/);
  if (req.method === 'GET' && detailMatch) {
    const item = await topic(site, detailMatch[1]);
    const posts: any[] = [];
    let page;
    do {
      page = await rows('posts', {select: 'id,parent,display,body,kind,source,created,files:uploads(id,name,mime)', topic: `eq.${item.id}`, hidden: 'eq.false', order: 'created.asc,id.asc',limit:'1000',offset:String(posts.length)});
      posts.push(...page);
    } while (page.length === 1000);
    const subscription = current.person ? await rows('subscriptions', {select: 'mode', topic: `eq.${item.id}`, person: `eq.${current.person}`}) : [];
    const {id, title, context, state, accepted, created} = item;
    return response({topic: {id,title,context,state,accepted,created}, posts, can_resolve: item.person === current.person, subscription: subscription[0]?.mode || 'none'});
  }
  const attachment = path.match(/^\/uploads\/([\w-]+)$/);
  if (req.method === 'GET' && attachment) {
    const files = await rows('uploads', {select: 'name,mime,path,post', id: `eq.${attachment[1]}`, site: `eq.${site}`});
    const file = files[0];
    if (!file?.post) fail(404, 'Attachment not found.');
    const posts = await rows('posts', {select: 'topic', id: `eq.${file.post}`, hidden: 'eq.false'});
    if (!posts[0]) fail(404, 'Attachment not found.');
    await topic(site, posts[0].topic);
    const stored = await fetch(`${apiUrl}/storage/v1/object/authenticated/${BUCKET}/${file.path}`, {headers: storageHeaders});
    if (!stored.ok) fail(404, 'Attachment not found.');
    return new Response(stored.body, {headers: {'Content-Type': file.mime, 'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(file.name)}`}});
  }
  if (req.method === 'GET' && path === '/admin') {
    await owner(req, site, current, true);
    return response({
      reports: await rows('reports', {select: 'id,post,reason,created', site: `eq.${site}`, order: 'created.desc', limit: '100'}),
      mail: await rows('mail', {select: 'id,attempts,error', site: `eq.${site}`, sent: 'is.null', limit: '100'}),
    });
  }
  if (req.method !== 'POST') fail(404, 'Page not found.');
  if (path === '/uploads') return upload(req, site, current);
  const data = await json(req);
  if (path === '/guest') return response({token: await sign({site, guest: id(), purpose: 'session'})});
  if (path === '/identity') {
    if (!await mailReady(site)) fail(503, 'Email verification is awaiting the owner’s email-provider setup. Your details have not been saved.');
    const name = field(data, 'name', 100);
    const email = field(data, 'email', 254).toLowerCase();
    const phone = field(data, 'phone', 40, false);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fail(400, 'Enter a valid email address.');
    await rate(`verify:${site}:${await digest(email)}`, 3, 3600);
    const existing = await rows('people', {select: 'id', site: `eq.${site}`, email: `eq.${email}`});
    let personId = existing[0]?.id;
    if (!personId) {
      const created = await database('people', {method:'POST',query:{on_conflict:'site,email'},body:{id:id(),site,email,name,phone},prefer:'resolution=ignore-duplicates,return=representation'});
      personId = created[0]?.id || (await rows('people', {select:'id',site:`eq.${site}`,email:`eq.${email}`}))[0].id;
    }
    const token = await sign({site, person: personId, purpose: 'verify', nonce: id()}, 1800);
    const returnTopic = data.return_topic ? (await topic(site, field(data, 'return_topic', 80))).id : '';
    const url = link(site, returnTopic) + '#verify=' + token;
    await insert('mail', {id:id(),site,recipient:email,subject:'Confirm your forum email',body:`Open this link to verify your email. It expires in 30 minutes.\n\n${url}\n\nIf you did not request this email, ignore it.`,due:now()});
    return response({message: 'Check your email, then open the verification link to publish your saved question or reply.'});
  }
  if (path === '/verify') {
    const payload = await decode(field(data, 'token', 4000));
    if (payload.site !== site || payload.purpose !== 'verify') fail(403, 'Invalid verification link.');
    const result = await database('used_tokens', {method:'POST',query:{on_conflict:'digest'},body:{digest:await digest(data.token),expires:payload.expires},prefer:'resolution=ignore-duplicates,return=representation'});
    if (!result.length) fail(401, 'This verification link has already been used. Request another email.');
    return response({token: await sign({site,person:payload.person,purpose:'session'})});
  }
  if (path === '/unsubscribe') {
    const payload = await decode(field(data, 'token', 4000));
    if (payload.site !== site || payload.purpose !== 'unsubscribe') fail(403, 'Invalid unsubscribe link.');
    await mutate(site,{person:payload.person},'subscribe',{topic:payload.topic,subscription:'none'});
    return response({ok:true});
  }
  if (path === '/topics') {
    if (!current.person) fail(401, 'Verify your email before asking a question.');
    field(data,'title',180); field(data,'body',20000); field(data,'context',1000,false);
    data.request_key = field(data,'request_key',100);
    return response(await mutate(site,current,'question',data),201);
  }
  const actionMatch = path.match(/^\/topics\/([\w-]+)\/(posts|resolve|subscription)$/);
  if (actionMatch) {
    data.topic = actionMatch[1];
    await topic(site,data.topic);
    if (actionMatch[2] === 'posts') {
      field(data,'body',20000); field(data,'parent',80);
      data.request_key = field(data,'request_key',100);
      if (!current.person && !current.guest && !await owner(req,site,current)) fail(401,'Start a guest session or verify your email.');
      const isOwner = await owner(req,site,current);
      // The public client cannot choose guide attribution or a source URL.
      delete data.kind; delete data.source;
      return response(await mutate(site,current,'reply',data,isOwner),201);
    }
    if (actionMatch[2] === 'subscription') {
      if (!current.person) fail(401,'Verify your email to receive notifications.');
      return response(await mutate(site,current,'subscribe',{topic:data.topic,subscription:data.mode}));
    }
    return response(await mutate(site,current,'resolve',data,await owner(req,site,current)));
  }
  if (path === '/reports') {
    const posts = await rows('posts',{select:'topic',id:`eq.${field(data,'post',80)}`,hidden:'eq.false'});
    if (!posts[0]) fail(404,'Post not found.');
    await topic(site,posts[0].topic);
    await insert('reports',{id:id(),site,post:data.post,reason:field(data,'reason',1000),created:now()});
    return response({ok:true});
  }
  if (path === '/moderate') {
    await owner(req,site,current,true);
    const posts = await rows('posts',{select:'topic',id:`eq.${field(data,'post',80)}`});
    if (!posts[0]) fail(404,'Post not found.');
    await topic(site,posts[0].topic,false);
    return response(await mutate(site,current,'moderate',{...data,topic:posts[0].topic},true));
  }
  fail(404,'Page not found.');
}

function words(value: string) {
  const stop = new Set(['how','do','i','a','the','is','can','to','in','of','my','please']);
  return new Set((value.toLowerCase().match(/[a-z0-9]+/g) || []).filter(word => !stop.has(word)));
}
async function processGuide(job: any, cache: Map<string, any[]>) {
  const posts = await rows('posts',{select:'*',id:`eq.${job.post}`,hidden:'eq.false'});
  const question = posts[0];
  if (!question) { await update('jobs',{post:`eq.${job.post}`},{state:'skipped',claimed_until:null}); return; }
  const item = await topic((await rows('topics',{select:'site',id:`eq.${question.topic}`}))[0].site,question.topic);
  if (!cache.has(item.site)) {
    const url = `${SITES[item.site].origin}/forum-guide-index.json`;
    const result = await fetch(url,{redirect:'error',signal:AbortSignal.timeout(12000)});
    if (!result.ok) throw Error('Guide index unavailable');
    const bytes = await limitedBody(result,4000000);
    cache.set(item.site,JSON.parse(new TextDecoder().decode(bytes)));
  }
  const queryText = question.parent ? question.body : item.title;
  const query = words(queryText);
  const numbers = (text: string) => new Set(text.match(/\b\d+(?:\.\d+)?\b/g) || []);
  let match: any = null;
  for (const guide of cache.get(item.site) || []) {
    if (!String(guide.url || '').startsWith(SITES[item.site].origin + '/')) continue;
    for (const faq of guide.faqs || []) {
      const candidate = words(String(faq.q));
      const intersection = [...query].filter(word => candidate.has(word)).length;
      const similarity = intersection / Math.max(new Set([...query,...candidate]).size,1);
      const guideNumbers = numbers(faq.q + ' ' + guide.title);
      const context = /^https:\/\//.test(item.context) ? '' : item.context;
      if (query.size >= 3 && similarity >= 0.9 && [...numbers(queryText+' '+context)].every(number => guideNumbers.has(number))) {
        match = {body:faq.a,source:guide.url}; break;
      }
    }
    if (match) break;
  }
  let state = 'skipped';
  if (match) {
    const result = await mutate(item.site,{},'reply',{
      topic:item.id,parent:question.id,body:match.body,source:match.source,
      kind:'guide',request_key:'guide-'+question.id,files:[],subscription:'none',
    },true);
    if (!result.skipped) state='answered';
  }
  await update('jobs',{post:`eq.${job.post}`},{state,claimed_until:null});
}
async function processMail(mail: any) {
  if (!await mailReady(mail.site)) throw Error('Email provider awaiting configuration');
  const apiKey = Deno.env.get('BREVO_API_KEY')!.trim();
  const senderEmail = Deno.env.get(`MAIL_FROM_${mail.site.toUpperCase()}`)!.trim();
  if (apiKey.startsWith('xsmtpsib-')) throw Error('Brevo SMTP key supplied. A transactional API key is required.');
  let body = mail.body;
  if (mail.person && mail.topic) {
    const token = await sign({site:mail.site,person:mail.person,topic:mail.topic,purpose:'unsubscribe'},31536000);
    body += '\n\nManage or unsubscribe\n'+link(mail.site,mail.topic)+'#unsubscribe='+token;
  }
  const domain = new URL(SITES[mail.site].origin).hostname;
  const headers: Record<string,string> = {'X-Mailin-custom':`forum:${mail.id}`};
  if (mail.topic) {
    headers['In-Reply-To'] = `<forum-${mail.site}-${mail.topic}@${domain}>`;
    headers.References = headers['In-Reply-To'];
  }
  const result = await fetch('https://api.brevo.com/v3/smtp/email',{
    method:'POST',headers:{'api-key':apiKey,'Content-Type':'application/json'},
    body:JSON.stringify({sender:{name:SITES[mail.site].owner,email:senderEmail},to:[{email:mail.recipient}],subject:mail.subject,textContent:body,headers}),
    signal:AbortSignal.timeout(15000),
  });
  if (!result.ok) {
    const detail = await result.json().catch(() => ({}));
    const message = String(detail.message || '').toLowerCase();
    // Store only categorized provider errors, never credentials or raw response data.
    if (message.includes('ip') && (message.includes('unrecogn') || message.includes('unauthoriz'))) throw Error('Brevo blocked the server IP. Authorize the recognized request in Brevo.');
    if (message.includes('key not found')) throw Error('Brevo did not recognize the API key. Check its value and active status.');
    if (message.includes('permission') || message.includes('access denied for resource')) throw Error('Brevo API key lacks the required transactional email permission.');
    throw Error(`Email provider returned ${result.status}`);
  }
  await update('mail',{id:`eq.${mail.id}`},{sent:now(),error:null,claimed_until:null});
}
async function worker(req: Request) {
  const supplied = req.headers.get('X-Worker-Key') || '';
  if (await digest(supplied) !== await digest((await settings()).worker_secret || id())) fail(403,'Worker access required.');
  const jobs = await rpc('forum_claim',{p_queue:'jobs',p_count:10});
  const cache = new Map<string,any[]>();
  for (const job of jobs) {
    try { await processGuide(job,cache); }
    catch (_) { await update('jobs',{post:`eq.${job.post}`},{due:now()+120,claimed_until:null}); }
  }
  let sent=0;
  // Do not consume retry attempts while the email provider is unconfigured.
  if (await mailReady('sajjal') || await mailReady('ankush')) {
    const messages = await rpc('forum_claim',{p_queue:'mail',p_count:10});
    await Promise.all(messages.map(async (mail: any) => {
      try { await processMail(mail); sent++; }
      catch (error) { await update('mail',{id:`eq.${mail.id}`},{attempts:mail.attempts+1,due:now()+Math.min(3600,30*2**mail.attempts),error:String((error as Error).message).slice(0,100),claimed_until:null}); }
    }));
  }
  const expired = await rpc('forum_expired_uploads',{});
  if (expired.length) {
    const removed = await fetch(`${apiUrl}/storage/v1/object/${BUCKET}`, {
      method:'DELETE',headers:{...storageHeaders,'Content-Type':'application/json'},
      body:JSON.stringify({prefixes:expired.map((file: any) => file.path)}),
    });
    if (removed.ok) await database('uploads',{method:'DELETE',query:{id:`in.(${expired.map((file: any) => file.id).join(',')})`,post:'is.null'}});
  }
  // Verification tokens and rate buckets no longer needed after their expiry.
  await database('used_tokens',{method:'DELETE',query:{expires:`lt.${now()}`}});
  await database('limits',{method:'DELETE',query:{expires:`lt.${now()}`}});
  return response({processed:jobs.length,sent});
}

Deno.serve(async (req: Request) => {
  let result: Response;
  const origin = req.headers.get('Origin') || '';
  const allowed = Object.values(SITES).flatMap(site => [site.origin,site.origin.replace('www.','')]);
  try {
    if (origin && !allowed.includes(origin)) fail(403,'This website is not allowed to access the forum.');
    const url = new URL(req.url);
    const path = url.pathname.replace(/^.*\/forum(?=\/|$)/,'');
    if (req.method === 'OPTIONS') result = new Response(null,{status:204});
    else if (path === '/worker' && req.method === 'POST') result = await worker(req);
    else {
      const match = path.match(/^\/api\/(sajjal|ankush)(\/.*)$/);
      if (!match) fail(404,'Page not found.');
      const [,site,routePath] = match;
      if (origin && origin.replace('www.','') !== SITES[site].origin.replace('www.','')) fail(403,'This request belongs to a different forum.');
      if (req.method === 'POST') {
        const address = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
        await rate(`requests:${site}:${await digest(address)}`,100,3600);
      }
      result = await route(req,site,routePath,await actor(req,site));
    }
  } catch (error) {
    if (!(error instanceof HttpError)) console.error('Forum request failed', (error as Error).name);
    result = response({error:error instanceof HttpError ? error.message : 'The request failed. Please try again.'},error instanceof HttpError ? error.status : 500);
  }
  const headers = new Headers(result.headers);
  headers.set('Cache-Control','no-store');
  headers.set('X-Content-Type-Options','nosniff');
  headers.set('Referrer-Policy','no-referrer');
  if (allowed.includes(origin)) {
    headers.set('Access-Control-Allow-Origin',origin);
    headers.set('Vary','Origin');
    headers.set('Access-Control-Allow-Headers','Content-Type,Authorization,X-Admin-Key');
    headers.set('Access-Control-Allow-Methods','GET,POST,OPTIONS');
  }
  return new Response(result.body,{status:result.status,headers});
});
