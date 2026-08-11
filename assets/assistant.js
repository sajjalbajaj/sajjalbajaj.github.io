/* Canned "AI" assistant: a floating chat widget with preset answers plus free-text
   keyword matching. No backend, no cost. Injected on every page via one <script>.
   Auto-opens on blog posts to help readers with ERP questions and route them to Sajjal. */
(function () {
  'use strict';
  if (document.querySelector('.bot')) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Knowledge base (edit freely) ---
  var KB = [
    // --- ERP / services: most relevant to blog readers and potential clients ---
    { q: 'How can you help my business?',
      keywords: ['help', 'business', 'partner', 'collab', 'work with', 'service', 'consult', 'hire', 'engage', 'company', 'we need', 'looking for', 'project', 'you do for', 'solution'],
      a: "I help businesses choose, implement and get real value from <strong>ERP and CRM</strong> (Odoo, Microsoft Dynamics 365, Salesforce), plus <strong>Power BI</strong> reporting and automation. Whether you're moving off spreadsheets, starting fresh, or rescuing a stalled project, I guide it end to end as a hands-on partner. Tell me about your business, or reach me on <a href=\"https://wa.me/919914089472\" target=\"_blank\" rel=\"noopener\">WhatsApp</a> or <a href=\"mailto:sajjalbajaj@gmail.com\">email</a> and we'll map out the first step." },
    { q: 'Which industries have you worked with?',
      keywords: ['industr', 'sector', 'steel', 'construction', 'coffee', 'water', 'milk', 'dairy', 'trading', 'manufactur', 'subcontract', 'dropship', 'worked with', 'clients', 'experience in', 'similar'],
      a: "Across many, including <strong>steel, construction, coffee, water, milk &amp; dairy, trading, manufacturing, subcontracting and dropshipping</strong>. In each, I've mapped ERP to real operations: inventory, production, purchasing and supply chain. If you're in one of these or similar, I've likely solved a version of your challenge before." },
    { q: 'What is ERP and do I need one?',
      keywords: ['what is erp', 'need erp', 'need one', 'enterprise resource', 'erp for', 'should i'],
      a: "An ERP is one connected system that runs your business: finance, inventory, sales, purchasing and more, with a single source of truth. If you're juggling spreadsheets, re-keying data, or can't get a real-time picture, it's probably time. Tell me your setup and I'll tell you honestly whether ERP fits." },
    { q: 'Why Odoo?',
      keywords: ['odoo', 'why odoo'],
      a: "Odoo is a flexible, cost-effective ERP covering CRM, sales, inventory, accounting, manufacturing and more in one connected suite. It's my go-to for small and mid-sized businesses that want capability without enterprise-scale cost. Happy to check if it fits you." },
    { q: 'How much does ERP or Odoo cost?',
      keywords: ['cost', 'price', 'pricing', 'budget', 'expensive', 'how much', 'afford'],
      a: "ERP cost comes down to licensing, implementation and ongoing running. For Odoo, licensing is rarely the big number, implementation scope is. Control the scope and you control the cost. Tell me your size and needs and I can help you scope it sensibly." },
    { q: 'How long does implementation take?',
      keywords: ['how long', 'timeline', 'implement', 'go live', 'go-live', 'duration', 'rollout', 'fast'],
      a: "It depends on scope, but the smart approach is always the same: start with a lean, high-value first phase, prove it, then expand. That keeps timelines and budgets under control. I can help you plan a realistic phased rollout." },
    { q: 'Can you migrate or upgrade my system?',
      keywords: ['migrat', 'upgrade', 'odoo 20', 'version', 'move to', 'switch', 'transfer'],
      a: "Yes. Whether it's moving from spreadsheets or another system, or upgrading Odoo versions (Odoo 20 is on the way), I plan and run migrations: inventory your customizations, test on a copy, then a clean cut-over. Tell me about your current setup." },
    { q: 'Do you do CRM too?',
      keywords: ['crm', 'sales', 'customer', 'lead', 'pipeline', 'salesforce', 'dynamics'],
      a: "Yes, CRM as well as ERP, across <strong>Odoo, Microsoft Dynamics 365 and Salesforce</strong>. I help you pick the right one, set it up, and, just as important, get your team actually using it. What are you trying to improve?" },
    { q: 'Power BI and reporting?',
      keywords: ['power bi', 'report', 'dashboard', 'data', 'analytics', 'insight', 'kpi', 'metric'],
      a: "Absolutely, I'm a certified Power BI Data Analyst. I build dashboards that turn your ERP and business data into decisions: sales, finance, inventory and leadership views, live and trustworthy. Tell me what you need to see." },
    { q: 'How does AI help in ERP?',
      keywords: ['ai', 'artificial intelligence', 'automation', 'automate', 'agent', 'machine learning'],
      a: "AI is genuinely useful in ERP now: reading invoices, scoring leads, drafting content, summarising, and increasingly acting inside your systems. The trick is clean data, guardrails and starting with one real task. I can help you find where AI actually pays off for you." },
    // --- About Sajjal ---
    { q: 'What does Sajjal do?',
      keywords: ['role', 'job', 'title', 'position', 'who', 'about him', 'about sajjal'],
      a: "Sajjal is an <strong>ERP &amp; CRM Consultant and Project Manager</strong> at Master Software Solutions, also a Scrum Master, Business Analyst and Team Lead, with nearly 10 years of experience." },
    { q: 'How much experience?',
      keywords: ['experience', 'years', 'long', 'many', 'senior', 'expert'],
      a: "Nearly <strong>10 years</strong> in IT (since 2016) across development, team leadership, project management, business analysis and ERP/CRM consulting." },
    { q: 'Certifications?',
      keywords: ['cert', 'csm', 'scrum master', 'pmi', 'qualif', 'certified'],
      a: "Certified ScrumMaster (CSM), Microsoft Power BI Data Analyst Associate, Odoo 19 Functional Certification, Kickoff PMI, and Intel's AI For All (AI Aware &amp; AI Appreciate)." },
    { q: 'Tell me about the blog',
      keywords: ['blog', 'article', 'post', 'writ', 'read', 'latest'],
      a: "Sajjal writes practical notes on ERP, Odoo, CRM, Power BI and AI. Browse them all on the <a href=\"/blog/\">Blog page</a> &rarr;" },
    { q: 'How can I contact him?',
      keywords: ['contact', 'reach', 'email', 'mail', 'connect', 'talk', 'call', 'phone', 'whatsapp', 'get in touch', 'linkedin'],
      a: "Easiest by <a href=\"https://wa.me/919914089472\" target=\"_blank\" rel=\"noopener\">WhatsApp</a>, <a href=\"mailto:sajjalbajaj@gmail.com\">email</a>, <a href=\"tel:+919914089472\">phone</a>, or <a href=\"https://www.linkedin.com/in/sajjal-bajaj/\" target=\"_blank\" rel=\"noopener\">LinkedIn</a>." },
    { q: 'Where is he based?',
      keywords: ['where', 'location', 'based', 'city', 'country', 'live', 'india', 'mohali'],
      a: "Mohali (Sahibzada Ajit Singh Nagar), Punjab, India, working with clients locally and remotely." }
  ];
  var SUGGESTED = [0, 2, 1, 14];
  var GREETING = "Hi! 👋 I'm Sajjal's ERP assistant. Ask me anything about <strong>ERP, Odoo, CRM, inventory, Power BI or AI</strong>, or tell me about your business and I'll show how we can help. What's your question?";
  var FALLBACK = "Good question. I'm a simple assistant so I may not have the perfect answer, but Sajjal will. He helps businesses with ERP, Odoo, CRM and Power BI across industries like steel, construction, coffee, water, milk, trading, manufacturing, subcontracting and dropshipping. Tell me a little about your business, or reach him on <a href=\"https://wa.me/919914089472\" target=\"_blank\" rel=\"noopener\">WhatsApp</a> or <a href=\"mailto:sajjalbajaj@gmail.com\">email</a>.";

  // --- Build DOM ---
  var root = document.createElement('div');
  root.className = 'bot no-print';
  root.innerHTML = [
    '<div class="bot__panel" role="dialog" aria-label="Chat with Sajjal\'s ERP assistant" aria-hidden="true">',
      '<div class="bot__head">',
        '<span class="bot__avatar" aria-hidden="true">SB</span>',
        '<div class="bot__id"><p class="bot__name">Sajjal\'s ERP Assistant</p><p class="bot__sub">ERP, Odoo, Power BI &amp; your project</p></div>',
        '<button class="bot__close" type="button" aria-label="Close chat"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button>',
      '</div>',
      '<div class="bot__msgs" aria-live="polite"></div>',
      '<div class="bot__chips"></div>',
      '<form class="bot__input"><input type="text" placeholder="Ask your ERP question…" aria-label="Type your question" autocomplete="off" /><button type="submit" aria-label="Send"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg></button></form>',
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

  function seen() { try { return sessionStorage.getItem('bot_seen'); } catch (e) { return null; } }
  function markSeen() { try { sessionStorage.setItem('bot_seen', '1'); } catch (e) {} }
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
    markSeen();
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

  // Proactively greet readers on blog posts, once per browser session.
  function isBlogPost() { return /^\/blog\/\d{4}\//.test(location.pathname); }
  if (isBlogPost() && !seen()) {
    setTimeout(function () {
      if (seen()) return;
      if (!root.classList.contains('is-open')) setOpen(true);
    }, reduce ? 900 : 2800);
  }
})();
