/* Plain JavaScript forum client shared by both owner sites. */
(() => {
  'use strict';
  const root = document.querySelector('.forum-app');
  if (!root) return;
  const site = root.dataset.site;
  const apiBase = root.dataset.api === 'same-origin' ? '' : root.dataset.api;
  const apiReady = root.dataset.api === 'same-origin' || Boolean(apiBase);
  const storageKey = `forum-${site}`;
  let token = sessionStorage.getItem(storageKey) || '';
  let adminKey = '';
  function verified() {
    try { return Boolean(JSON.parse(atob(token.split('.')[0].replace(/-/g,'+').replace(/_/g,'/'))).person); }
    catch (_) { return false; }
  }
  let current = null;
  let topics = [];
  let attachedFiles = [];
  let parentId = '';
  let parentName = '';
  let composingReply = false;
  const ownerName = site === 'sajjal' ? 'Sajjal Bajaj' : 'Ankush Kaura';
  const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const date = value => new Intl.DateTimeFormat('en-IN', {dateStyle:'medium',timeStyle:'long',timeZone:'Asia/Kolkata'}).format(new Date(value * 1000));
  const query = new URLSearchParams(location.search);
  root.innerHTML = `
    <div class="f-heading"><div><p class="f-muted">${escape(ownerName)} · Community</p><h1>${site === 'sajjal' ? 'Odoo, discussed together.' : 'Build, ask, figure it out.'}</h1><p class="f-muted">${site === 'sajjal' ? 'Questions from real implementations. Practical answers from guides and the community.' : 'Discuss a guide, share an issue, and work through it with Ankush and the community.'}</p></div><button class="f-primary" id="f-ask">Ask a question</button></div>
    <div id="f-message" class="f-notice" role="status" aria-live="polite"></div>
    <div class="f-toolbar"><input id="f-search" type="search" placeholder="Search discussions" aria-label="Search discussions"><select id="f-filter" aria-label="Discussion status"><option value="all">All discussions</option><option>Open</option><option>Answered</option><option>Resolved</option><option value="unanswered">Unanswered</option></select><button id="f-signin">Verify email / sign in</button></div>
    <div class="f-layout"><section id="f-content" aria-label="Discussions"></section><aside class="f-aside"><h3>A useful question gets further</h3><p>${site === 'sajjal' ? 'Include your Odoo version, edition, hosting, and the app involved. Tell us what you tried.' : 'Include the tool, version, guide step, and what you expected to happen.'}</p><h3>Your contact details stay private</h3><p>Your question appears as “Question author”. You can choose a public name when answering someone else, or reply as a guest.</p><h3>Answers from the guides</h3><p>When a published guide answers your question, an automated reply appears under ${escape(ownerName)}’s name with its source. Target response time is within 10 minutes.</p><button class="f-link" id="f-owner">Owner tools</button></aside></div>
    <dialog id="f-identity"><form id="f-identity-form"><div class="f-dialog-head"><h2>Keep your conversation going</h2><button type="button" data-close aria-label="Close">×</button></div><p class="f-muted">Verify your email to ask a question, post by name, and receive replies. These contact details stay private.</p><label for="f-name">Private name *</label><input id="f-name" name="name" autocomplete="name" required maxlength="100"><label for="f-email">Private email *</label><input id="f-email" type="email" name="email" autocomplete="email" required maxlength="254"><label for="f-phone">Phone · optional</label><input id="f-phone" name="phone" type="tel" autocomplete="tel" maxlength="40"><div class="f-actions"><button class="f-primary">Send verification link</button></div><p class="f-muted" id="f-identity-message" role="status"></p></form></dialog>
    <dialog id="f-compose"><form id="f-compose-form"><div class="f-dialog-head"><h2 id="f-compose-title">Ask the community</h2><button type="button" data-close aria-label="Close">×</button></div><div id="f-question-fields"><label for="f-title">Question title *</label><input id="f-title" maxlength="180"><label for="f-context">${site === 'sajjal' ? 'Odoo version, edition, hosting, and app' : 'Tool, version, environment, and guide step'}</label><input id="f-context" maxlength="1000" placeholder="${site === 'sajjal' ? 'For example, Odoo 19 Enterprise · Odoo.sh · Sales' : 'For example, Python 3.12 · Ubuntu · Step 4'}"><p id="f-related" class="f-muted"></p></div><div id="f-reply-fields" hidden><label for="f-mode">Public author</label><select id="f-mode"><option value="named">Use a public display name</option><option value="guest">Reply as guest</option></select><label for="f-display">Public display name</label><input id="f-display" maxlength="80"><label class="f-check"><input type="checkbox" id="f-followup">This reply includes a follow-up question</label></div><label for="f-body">Message *</label><textarea id="f-body" required maxlength="20000" placeholder="What happened? What have you tried? What would you like help with?"></textarea><label for="f-files">Attachments · optional</label><input id="f-files" type="file" multiple accept="image/jpeg,image/png,image/webp,video/mp4,application/pdf,text/plain"><small>Up to 5 files, 25 MB each. Screenshots, MP4, PDF, or text logs. Files will be public. Remove passwords and customer details before uploading.</small><div id="f-file-list" class="f-file-list"></div><label for="f-subscription">Email notifications for this thread</label><select id="f-subscription"><option value="all">All questions and answers</option><option value="direct">Direct replies only</option><option value="none">No emails</option></select><p class="f-muted" id="f-author-preview"></p><details><summary>Preview message</summary><div id="f-preview" class="f-preview"></div></details><div class="f-actions"><button class="f-primary" id="f-submit">Publish</button><span class="f-saved">Your draft is saved in this browser.</span></div><p id="f-compose-message" role="status"></p></form></dialog>
    <dialog id="f-admin"><div class="f-dialog-head"><h2>Owner tools</h2><button data-close aria-label="Close">×</button></div><form id="f-admin-form"><label for="f-admin-key">Owner access key</label><input id="f-admin-key" type="password" required autocomplete="off"><div class="f-actions"><button class="f-primary">Open moderation</button></div></form><div id="f-admin-results"></div></dialog>`;
  const $ = selector => root.querySelector(selector);
  const message = text => { $('#f-message').textContent = text; };
  const saveToken = value => { token = value; sessionStorage.setItem(storageKey, token); };
  async function api(path, options = {}) {
    if (!apiReady) throw new Error('The forum service address is awaiting configuration. Posting will open once the service is connected.');
    const headers = {...(options.body instanceof FormData ? {} : {'Content-Type':'application/json'}), ...options.headers};
    if (token) headers.Authorization = `Bearer ${token}`;
    const response = await fetch(`${apiBase}/api/${site}${path}`, {...options, headers});
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'The request failed. Please try again.');
    return result;
  }
  const post = (path, body, headers) => api(path, {method:'POST', body:JSON.stringify(body), headers});
  function publicLink(topic, reply) {
    const url = new URL(location.href);
    url.search = new URLSearchParams({topic, ...(reply ? {post:reply} : {})});
    url.hash = '';
    return url.toString();
  }
  function showList() {
    current = null;
    const needle = $('#f-search').value.toLowerCase();
    const filter = $('#f-filter').value;
    const matches = topics.filter(topic => `${topic.title} ${topic.context}`.toLowerCase().includes(needle) && (filter === 'all' || (filter === 'unanswered' ? topic.replies === 0 : topic.state === filter)));
    $('#f-content').innerHTML = matches.length ? matches.map(topic => `<article class="f-topic"><div class="f-meta"><span class="f-status">${escape(topic.state)}</span><time>${escape(date(topic.created))}</time><span>${topic.replies} ${topic.replies === 1 ? 'reply' : 'replies'}</span></div><h2><button data-topic="${escape(topic.id)}">${escape(topic.title)}</button></h2><p class="f-context">${escape(topic.context)}</p></article>`).join('') : '<p class="f-empty">No discussions here yet. Ask the first question or try another search.</p>';
  }
  async function loadList() {
    const result = await api('/topics');
    topics = result.topics;
    showList();
  }
  async function openTopic(id, replyId) {
    current = await api(`/topics/${encodeURIComponent(id)}`);
    const topic = current.topic;
    $('#f-content').innerHTML = `<button class="f-link" id="f-back">← All discussions</button><div class="f-meta"><span class="f-status">${escape(topic.state)}</span><time>${escape(date(topic.created))}</time></div><h2>${escape(topic.title)}</h2><p class="f-context">${escape(topic.context)}</p><div class="f-settings"><label for="f-thread-sub">Email notifications</label><select id="f-thread-sub"><option value="all">All questions and answers</option><option value="direct">Direct replies only</option><option value="none">No emails</option></select><button class="f-link" id="f-save-sub">Save preference</button></div>${topic.accepted ? '<p class="f-notice">An accepted answer is marked below. <button class="f-link" data-jump="'+escape(topic.accepted)+'">Go to answer</button></p>' : ''}<div id="f-posts"></div>${current.can_resolve ? '<button class="f-link" id="f-reopen">Reopen discussion</button>' : ''}`;
    $('#f-thread-sub').value = current.subscription;
    if (!['all','direct','none'].includes(current.subscription)) $('#f-thread-sub').value = 'all';
    const postsById = new Map(current.posts.map(reply => [reply.id, reply]));
    for (const reply of current.posts) {
      const parent = postsById.get(reply.parent);
      const card = document.createElement('article');
      card.className = `f-post${reply.kind === 'guide' ? ' f-guide' : ''}`;
      card.id = `post-${reply.id}`;
      card.innerHTML = `<div class="f-meta"><strong>${escape(reply.display)}</strong>${reply.kind === 'guide' ? '<span class="f-status">Automated answer from my guides</span>' : reply.kind === 'owner' ? '<span class="f-status">Site owner</span>' : ''}${topic.accepted === reply.id ? '<span class="f-status">Accepted answer</span>' : ''}<time datetime="${new Date(reply.created * 1000).toISOString()}">${escape(date(reply.created))}</time></div>${parent ? '<div class="f-parent">Replying to <button class="f-link" data-jump="'+escape(parent.id)+'">'+escape(parent.display)+'</button></div>' : ''}<div class="f-post-body"></div><div class="f-files"></div><div class="f-post-actions"><button class="f-link" data-reply="${escape(reply.id)}">Reply</button><button class="f-link" data-copy="${escape(reply.id)}">Copy link</button><button class="f-link" data-report="${escape(reply.id)}">Report</button>${current.can_resolve && reply.parent ? '<button class="f-link" data-accept="'+escape(reply.id)+'">Accept answer and resolve</button>' : ''}${adminKey ? '<button class="f-link" data-hide="'+escape(reply.id)+'">Hide post</button>' : ''}</div>`;
      card.querySelector('.f-post-body').textContent = reply.body;
      if (reply.source && /^https:\/\//.test(reply.source)) {
        const source = document.createElement('a'); source.href = reply.source; source.textContent = 'Read the source guide'; source.rel = 'noopener'; source.target = '_blank'; card.querySelector('.f-post-body').append(document.createElement('br'), source);
      }
      for (const file of reply.files) {
        const link = document.createElement('a'); link.href = `${apiBase}/api/${site}/uploads/${encodeURIComponent(file.id)}`; link.textContent = file.name; link.target = '_blank'; link.rel = 'noopener'; card.querySelector('.f-files').append(link);
      }
      $('#f-posts').append(card);
    }
    if (replyId) jump(replyId);
  }
  function jump(id) {
    const element = document.getElementById(`post-${id}`);
    if (element) { element.scrollIntoView({behavior:'smooth',block:'center'}); element.classList.add('f-highlight'); }
  }
  function saveDraft() {
    const key = composingReply ? `${storageKey}-reply-draft` : `${storageKey}-draft`;
    localStorage.setItem(key, JSON.stringify({title:$('#f-title').value,body:$('#f-body').value,context:$('#f-context').value,parent:parentId,topic:current?.topic.id}));
    $('#f-preview').textContent = $('#f-body').value;
  }
  function compose(reply) {
    composingReply = Boolean(reply);
    parentId = reply?.id || '';
    parentName = reply?.display || '';
    attachedFiles = [];
    $('#f-files').value = '';
    $('#f-file-list').textContent = '';
    $('#f-compose-message').textContent = '';
    $('#f-question-fields').hidden = composingReply;
    $('#f-reply-fields').hidden = !composingReply;
    $('#f-title').required = !composingReply;
    $('#f-compose-title').textContent = composingReply ? `Reply to ${parentName}` : 'Ask the community';
    $('#f-body').value = '';
    if (reply) {
      try { const draft = JSON.parse(localStorage.getItem(`${storageKey}-reply-draft`) || '{}'); if (draft.parent === reply.id) $('#f-body').value = draft.body || ''; } catch (_) { /* Ignore an invalid draft. */ }
    }
    if (!reply) {
      let draft = {};
      try { draft = JSON.parse(localStorage.getItem(`${storageKey}-draft`) || '{}'); } catch (_) { /* Ignore an old draft with an invalid format. */ }
      $('#f-title').value = draft.title || (query.get('title') ? `Question about ${query.get('title')}`.slice(0,180) : '');
      $('#f-context').value = draft.context || (query.get('guide') || '');
      $('#f-body').value = draft.body || '';
    }
    $('#f-author-preview').textContent = composingReply ? 'Preview your public display name before publishing. The original question author keeps their anonymous label.' : 'Public author · Question author. Your contact details stay private.';
    $('#f-preview').textContent = $('#f-body').value;
    $('#f-compose').showModal();
  }
  root.addEventListener('click', async event => {
    const target = event.target.closest('button');
    if (!target) return;
    try {
      if (target.hasAttribute('data-close')) return target.closest('dialog').close();
      if (target.dataset.topic) { history.pushState({},'',publicLink(target.dataset.topic)); await openTopic(target.dataset.topic); }
      if (target.dataset.jump) jump(target.dataset.jump);
      if (target.id === 'f-back') { history.pushState({},'',location.pathname); await loadList(); }
      if (target.id === 'f-ask') compose();
      if (target.id === 'f-signin') $('#f-identity').showModal();
      if (target.dataset.reply) compose(current.posts.find(reply => reply.id === target.dataset.reply));
      if (target.dataset.copy) { await navigator.clipboard.writeText(publicLink(current.topic.id,target.dataset.copy)); message('Reply link copied.'); }
      if (target.dataset.report) { const reason = prompt('What should the moderator review?'); if (reason) { await post('/reports',{post:target.dataset.report,reason}); message('Report sent to the moderator.'); } }
      if (target.dataset.accept) { await post(`/topics/${current.topic.id}/resolve`,{accepted:target.dataset.accept,state:'Resolved'}); await openTopic(current.topic.id); }
      if (target.id === 'f-reopen') { await post(`/topics/${current.topic.id}/resolve`,{state:'Open'}); await openTopic(current.topic.id); }
      if (target.id === 'f-save-sub') { await post(`/topics/${current.topic.id}/subscription`,{mode:$('#f-thread-sub').value}); message('Email preference saved.'); }
      if (target.id === 'f-owner') $('#f-admin').showModal();
      if (target.dataset.hide) { await post('/moderate',{post:target.dataset.hide,hidden:true},{'X-Admin-Key':adminKey}); await openTopic(current.topic.id); }
    } catch (error) { message(error.message); }
  });
  $('#f-search').addEventListener('input', showList);
  $('#f-filter').addEventListener('change', showList);
  $('#f-title').addEventListener('input', () => {
    saveDraft();
    const phrase = $('#f-title').value.toLowerCase();
    $('#f-related').textContent = phrase.length > 5 && topics.some(topic => topic.title.toLowerCase().includes(phrase)) ? 'A similar discussion exists. Search the discussions before publishing.' : '';
  });
  $('#f-body').addEventListener('input', saveDraft);
  $('#f-context').addEventListener('input', saveDraft);
  $('#f-mode').addEventListener('change', () => {
    const guest = $('#f-mode').value === 'guest';
    $('#f-display').disabled = guest;
    $('#f-author-preview').textContent = guest ? 'Public author · Guest. Verify your email if you would like notifications.' : 'Your chosen display name appears publicly on this reply.';
  });
  $('#f-identity-form').addEventListener('submit', async event => {
    event.preventDefault();
    const button = event.submitter;
    button.disabled = true;
    try { const data = {...Object.fromEntries(new FormData(event.target)),return_topic:current?.topic.id || ''}; const result = await post('/identity',data); $('#f-identity-message').textContent = result.message; }
    catch (error) { $('#f-identity-message').textContent = error.message; }
    finally { button.disabled = false; }
  });
  $('#f-compose-form').addEventListener('submit', async event => {
    event.preventDefault();
    const submit = $('#f-submit');
    submit.disabled = true;
    try {
      const guest = composingReply && $('#f-mode').value === 'guest';
      if (!verified() && !guest && !adminKey) {
        saveDraft();
        $('#f-compose').close(); $('#f-identity').showModal();
        throw new Error('Your draft is saved. Verify your email, then return to publish.');
      }
      if (!token && guest) saveToken((await post('/guest',{})).token);
      const selected = [...$('#f-files').files];
      if (selected.length > 5 || selected.some(file => file.size > 25*1024*1024)) throw new Error('Choose up to five files of 25 MB each.');
      for (let index = attachedFiles.length; index < selected.length; index++) {
        $('#f-compose-message').textContent = `Uploading ${index + 1} of ${selected.length}…`;
        const form = new FormData(); form.append('file',selected[index]);
        attachedFiles.push((await api('/uploads',{method:'POST',body:form})).id);
      }
      const body = {body:$('#f-body').value,files:attachedFiles,subscription:$('#f-subscription').value};
      let result;
      if (composingReply) {
        Object.assign(body,{parent:parentId,guest,display:$('#f-display').value,question:$('#f-followup').checked});
        result = await post(`/topics/${current.topic.id}/posts`,body,adminKey ? {'X-Admin-Key':adminKey} : {});
        if (result.token) saveToken(result.token);
        await openTopic(current.topic.id,result.id);
      } else {
        Object.assign(body,{title:$('#f-title').value,context:$('#f-context').value});
        result = await post('/topics',body);
        history.pushState({},'',publicLink(result.id,result.post));
        await openTopic(result.id,result.post);
      }
      localStorage.removeItem(composingReply ? `${storageKey}-reply-draft` : `${storageKey}-draft`);
      $('#f-compose').close();
      message('Published. Your conversation is ready for replies.');
    } catch (error) { $('#f-compose-message').textContent = error.message; message(error.message); }
    finally { submit.disabled = false; }
  });
  $('#f-files').addEventListener('change', () => {
    attachedFiles = [];
    $('#f-file-list').textContent = [...$('#f-files').files].map(file => file.name).join(' · ');
  });
  $('#f-admin-form').addEventListener('submit', async event => {
    event.preventDefault();
    try {
      const candidate = $('#f-admin-key').value;
      const result = await api('/admin',{headers:{'X-Admin-Key':candidate}});
      adminKey = candidate;
      $('#f-admin-key').value = '';
      $('#f-admin-results').textContent = `${result.reports.length} reports · ${result.mail.length} queued or failed emails. Open a discussion to publish an owner reply or hide a post.`;
      for (const report of result.reports) {
        const paragraph = document.createElement('p'); paragraph.textContent = `Reported post ${report.post} — ${report.reason}`; $('#f-admin-results').append(paragraph);
      }
      if (current) await openTopic(current.topic.id);
    } catch (error) { $('#f-admin-results').textContent = error.message; }
  });
  async function start() {
    try {
      if (!apiReady) { message('The forum page is ready. The owner needs to connect its server address to enable discussions and uploads.'); $('#f-content').innerHTML = '<p class="f-empty">Discussions will appear here when the forum service is connected.</p>'; return; }
      const hash = new URLSearchParams(location.hash.slice(1));
      const justVerified = hash.has('verify');
      if (hash.has('verify')) { saveToken((await post('/verify',{token:hash.get('verify')})).token); history.replaceState({},'',location.pathname+location.search); message('Email verified. Open “Ask a question” to restore and publish your draft.'); }
      if (hash.has('unsubscribe')) { await post('/unsubscribe',{token:hash.get('unsubscribe')}); history.replaceState({},'',location.pathname+location.search); message('Unsubscribed from this discussion.'); }
      const config = await api('/config');
      if (!config.email_ready || !config.posting_ready) message('Forum setup is in progress. Email verification and posting will open after the owner completes configuration.');
      if (query.has('topic')) await openTopic(query.get('topic'),query.get('post'));
      else await loadList();
      if (justVerified && current) {
        try { const draft = JSON.parse(localStorage.getItem(`${storageKey}-reply-draft`) || '{}'); const parent = current.posts.find(reply => reply.id === draft.parent); if (parent) compose(parent); } catch (_) { /* An old draft can be ignored. */ }
      }
    } catch (error) { message(error.message); }
  }
  window.addEventListener('popstate', () => { const params=new URLSearchParams(location.search); (params.has('topic') ? openTopic(params.get('topic'),params.get('post')) : loadList()).catch(error => message(error.message)); });
  start();
})();
