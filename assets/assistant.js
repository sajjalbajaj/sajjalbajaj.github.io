/* Canned "AI" assistant: a floating chat widget with preset answers plus free-text
   keyword matching. No backend, no cost. Injected on every page via one <script>. */
(function () {
  'use strict';
  if (document.querySelector('.bot')) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Knowledge base (edit freely) ---
  var KB = [
    { q: 'What does Sajjal do?',
      keywords: ['do', 'role', 'job', 'work', 'title', 'position', 'who', 'about'],
      a: "Sajjal is an <strong>ERP Consultant &amp; Project Manager</strong> at Master Software Solutions. He also works as a Scrum Master, Business Analyst and Team Lead, having grown from a developer over nearly 10 years." },
    { q: 'How much experience?',
      keywords: ['experience', 'years', 'long', 'many', 'senior'],
      a: "Nearly <strong>10 years</strong> in IT (since June 2016) across development, team leadership, project management, business analysis and ERP consulting." },
    { q: 'What are his skills?',
      keywords: ['skill', 'stack', 'tech', 'technolog', 'tool', 'know', 'language', 'expert'],
      a: "Leadership &amp; delivery (Agile/Scrum, PM, BA), ERP &amp; data (Odoo, Power BI, Data Warehousing, UiPath), and development (PHP, Python, JavaScript, jQuery, WordPress, AngularJS, Ionic), plus AWS &amp; Google Cloud." },
    { q: 'Certifications?',
      keywords: ['cert', 'csm', 'scrum master', 'power bi', 'pmi', 'qualif', 'odoo', 'ai for all'],
      a: "Certified ScrumMaster (CSM), Microsoft Power BI Data Analyst Associate, Odoo 19 Functional Certification, Kickoff PMI, and Intel's AI For All (AI Aware &amp; AI Appreciate)." },
    { q: 'Tell me about the blog',
      keywords: ['blog', 'article', 'post', 'writ', 'read', 'latest'],
      a: "Sajjal writes about IT, ERP, Power BI, AI and software delivery. Browse everything on the <a href=\"/blog/\">Blog page</a> →" },
    { q: 'How can I contact him?',
      keywords: ['contact', 'reach', 'email', 'mail', 'hire', 'connect', 'talk', 'call', 'phone', 'whatsapp'],
      a: "Easiest by <a href=\"mailto:sajjalbajaj@gmail.com\">email</a>, <a href=\"tel:+919914089472\">phone</a>, <a href=\"https://wa.me/919914089472\" target=\"_blank\" rel=\"noopener\">WhatsApp</a>, or <a href=\"https://www.linkedin.com/in/sajjal-bajaj/\" target=\"_blank\" rel=\"noopener\">LinkedIn</a>." },
    { q: 'Where is he based?',
      keywords: ['where', 'location', 'based', 'city', 'country', 'live', 'india'],
      a: "Mohali (Sahibzada Ajit Singh Nagar), Punjab, India." }
  ];
  var SUGGESTED = [0, 4, 3, 5];
  var GREETING = "Hi! 👋 I'm Sajjal's assistant. Ask me about his experience, skills, certifications, or the blog, or type your own question.";
  var FALLBACK = "I'm a simple assistant, so I didn't quite catch that. Try a suggested question below, or reach Sajjal directly by <a href=\"mailto:sajjalbajaj@gmail.com\">email</a> or <a href=\"https://wa.me/919914089472\" target=\"_blank\" rel=\"noopener\">WhatsApp</a>.";

  // --- Build DOM ---
  var root = document.createElement('div');
  root.className = 'bot no-print';
  root.innerHTML = [
    '<div class="bot__panel" role="dialog" aria-label="Chat with Sajjal\'s assistant" aria-hidden="true">',
      '<div class="bot__head">',
        '<span class="bot__avatar" aria-hidden="true">SB</span>',
        '<div class="bot__id"><p class="bot__name">Sajjal\'s Assistant</p><p class="bot__sub">Ask about my work &amp; blog</p></div>',
        '<button class="bot__close" type="button" aria-label="Close chat"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button>',
      '</div>',
      '<div class="bot__msgs" aria-live="polite"></div>',
      '<div class="bot__chips"></div>',
      '<form class="bot__input"><input type="text" placeholder="Type your question…" aria-label="Type your question" autocomplete="off" /><button type="submit" aria-label="Send"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg></button></form>',
    '</div>',
    '<button class="bot__fab" type="button" aria-label="Open assistant" aria-expanded="false">',
      '<span class="bot__ring" aria-hidden="true"></span>',
      '<svg class="bot__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a2 2 0 0 1 2 2v1h3a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H8l-4 3V8a3 3 0 0 1 3-3h3V4a2 2 0 0 1 2-2z"/><circle cx="9.5" cy="12" r="1.3"/><circle cx="14.5" cy="12" r="1.3"/></svg>',
    '</button>'
  ].join('');
  document.body.appendChild(root);

  var fab = root.querySelector('.bot__fab');
  var panel = root.querySelector('.bot__panel');
  var closeBtn = root.querySelector('.bot__close');
  var msgs = root.querySelector('.bot__msgs');
  var chipsWrap = root.querySelector('.bot__chips');
  var form = root.querySelector('.bot__input');
  var input = form.querySelector('input');
  var started = false;

  function scrollDown() { msgs.scrollTop = msgs.scrollHeight; }

  function addUser(text) {
    var d = document.createElement('div');
    d.className = 'bot__msg bot__msg--user';
    d.textContent = text;
    msgs.appendChild(d);
    scrollDown();
  }

  function addBot(html) {
    var typing = document.createElement('div');
    typing.className = 'bot__msg bot__msg--bot bot__typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(typing);
    scrollDown();
    setTimeout(function () {
      typing.remove();
      var d = document.createElement('div');
      d.className = 'bot__msg bot__msg--bot';
      d.innerHTML = html;
      msgs.appendChild(d);
      scrollDown();
    }, reduce ? 0 : 480);
  }

  function findAnswer(text) {
    var q = text.toLowerCase(), best = null, score = 0;
    KB.forEach(function (item) {
      var s = 0;
      item.keywords.forEach(function (k) { if (q.indexOf(k) !== -1) s++; });
      if (s > score) { score = s; best = item; }
    });
    return score > 0 ? best.a : FALLBACK;
  }

  function ask(text) { addUser(text); addBot(findAnswer(text)); }

  function renderChips() {
    chipsWrap.innerHTML = '';
    SUGGESTED.forEach(function (i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'bot__chip';
      b.textContent = KB[i].q;
      b.addEventListener('click', function () { ask(KB[i].q); });
      chipsWrap.appendChild(b);
    });
  }

  function setOpen(open) {
    root.classList.toggle('is-open', open);
    fab.setAttribute('aria-expanded', String(open));
    panel.setAttribute('aria-hidden', String(!open));
    if (open && !started) { started = true; renderChips(); addBot(GREETING); }
    if (open) { setTimeout(function () { input.focus(); }, 300); }
  }

  fab.addEventListener('click', function (e) { e.stopPropagation(); setOpen(!root.classList.contains('is-open')); });
  closeBtn.addEventListener('click', function () { setOpen(false); });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = input.value.trim();
    if (!v) return;
    input.value = '';
    ask(v);
  });
  document.addEventListener('click', function (e) {
    if (root.classList.contains('is-open') && !root.contains(e.target)) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && root.classList.contains('is-open')) { setOpen(false); fab.focus(); }
  });
})();
