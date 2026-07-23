/* =====================================================================
   Sajjal Bajaj - portfolio interactions
   Vanilla JS · progressive enhancement · respects reduced-motion
   ===================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Theme toggle ---------- */
  var toggle = $('[data-theme-toggle]');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      toggle.setAttribute('aria-pressed', String(next === 'dark'));
    });
  }

  /* ---------- Mobile nav ---------- */
  var burger = $('[data-nav-toggle]');
  var links  = $('#nav-links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    $$('a', links).forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Nav shadow on scroll + back-to-top ---------- */
  var nav = $('.nav');
  var toTop = $('[data-to-top]');
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle('is-scrolled', y > 8);
    if (toTop) toTop.classList.toggle('is-visible', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---------- Print buttons ---------- */
  $$('[data-print]').forEach(function (b) {
    b.addEventListener('click', function () { window.print(); });
  });

  /* ---------- Footer year ---------- */
  var yearEl = $('#year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Avatar image fallback ---------- */
  var avImg = $('.avatar__img');
  if (avImg) {
    avImg.addEventListener('error', function () {
      avImg.style.display = 'none';
      var mono = avImg.nextElementSibling;
      if (mono) mono.hidden = false;
    });
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = $$('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Count-up stats ---------- */
  var counted = false;
  function countUp() {
    if (counted) return; counted = true;
    $$('.stat__num').forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;
      var suffix = el.getAttribute('data-suffix') || '';
      if (reduceMotion) { el.textContent = target + suffix; return; }
      var start = null, dur = 1100;
      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
  var statsEl = $('.stats');
  if (statsEl && 'IntersectionObserver' in window && !reduceMotion) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { countUp(); so.disconnect(); } });
    }, { threshold: 0.4 });
    so.observe(statsEl);
  } else {
    countUp();
  }

  /* ---------- Active nav link ---------- */
  var navLinks = $$('#nav-links a');
  var sections = navLinks
    .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
    .filter(Boolean);
  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = en.target.id;
        navLinks.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Ask my portfolio (canned Q&A) ---------- */
  var QA = [
    { q: 'What do you do?',
      a: "I'm Sajjal Bajaj, an ERP Consultant and Project Manager. Day to day I wear several hats: Scrum Master, Business Analyst, Team Lead, and ERP Consultant, having grown from a hands-on developer over nearly 10 years." },
    { q: 'How many years of experience?',
      a: "Nearly 10 years. My tech journey began in June 2016 as a developer, and I've been building, leading, and delivering ever since." },
    { q: "What's your current role?",
      a: "At Master Software Solutions I currently serve as ERP Consultant, Project Manager, Business Analyst, and Team Lead, implementing ERP (Odoo & Microsoft), running Agile delivery, and keeping teams and clients aligned." },
    { q: 'What is your tech stack?',
      a: "Development: PHP, Python, JavaScript, jQuery, AngularJS, Ionic/Cordova, WordPress, HTML5 & CSS. ERP & data: Odoo, Data Warehousing, Power BI, UiPath. Cloud: AWS (S3) and Google Cloud (GCP, GKE). All wrapped in Agile/Scrum delivery." },
    { q: 'Are you certified?',
      a: "Yes! Certified ScrumMaster (CSM), Microsoft Power BI Data Analyst Associate, Odoo 19 Functional Certification, Kickoff PMI, and Intel's AI For All (AI Aware & AI Appreciate)." },
    { q: 'What are you into lately?',
      a: "AI and Microservices: I've been collaborating with Intel-powered AI initiatives, alongside ERP implementations with Odoo and Microsoft, and turning data into insight with Power BI." },
    { q: 'How can I reach you?',
      a: "Easiest by email at sajjalbajaj@gmail.com, by phone at +91 99140 89472, or connect on LinkedIn (linkedin.com/in/sajjal-bajaj). I'd love to chat." }
  ];

  var chipsWrap = $('#ask-chips');
  var answerEl  = $('#ask-answer');
  var typingTimer = null;

  function typeAnswer(text) {
    if (typingTimer) { clearInterval(typingTimer); typingTimer = null; }
    if (reduceMotion) { answerEl.textContent = text; return; }
    answerEl.textContent = '';
    var caret = document.createElement('span');
    caret.className = 'caret';
    answerEl.appendChild(caret);
    var i = 0;
    typingTimer = setInterval(function () {
      if (i >= text.length) { clearInterval(typingTimer); typingTimer = null; caret.remove(); return; }
      caret.insertAdjacentText('beforebegin', text.charAt(i));
      i++;
    }, 14);
  }

  if (chipsWrap && answerEl) {
    QA.forEach(function (item, idx) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'ask__q';
      b.textContent = item.q;
      b.setAttribute('role', 'listitem');
      b.addEventListener('click', function () {
        $$('.ask__q', chipsWrap).forEach(function (x) { x.classList.remove('is-active'); });
        b.classList.add('is-active');
        typeAnswer(item.a);
      });
      chipsWrap.appendChild(b);
    });
  }

  /* ---------- WhatsApp chat widget ---------- */
  var wa = $('#wa');
  var waToggle = $('[data-wa-toggle]');
  var waPop = $('#wa-pop');
  var waClose = $('[data-wa-close]');
  var waBadge = $('.wa__badge');
  function waSet(open) {
    if (!wa) return;
    wa.classList.toggle('is-open', open);
    waToggle.setAttribute('aria-expanded', String(open));
    waPop.setAttribute('aria-hidden', String(!open));
    if (open && waBadge && waBadge.parentNode) waBadge.parentNode.removeChild(waBadge);
  }
  if (wa && waToggle && waPop) {
    waToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      waSet(!wa.classList.contains('is-open'));
    });
    if (waClose) waClose.addEventListener('click', function () { waSet(false); });
    document.addEventListener('click', function (e) {
      if (wa.classList.contains('is-open') && !wa.contains(e.target)) waSet(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && wa.classList.contains('is-open')) { waSet(false); waToggle.focus(); }
    });
  }
})();
