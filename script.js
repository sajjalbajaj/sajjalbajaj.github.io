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

  /* ---------- Copy-link (blog share) ---------- */
  $$('[data-copy-link]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var url = window.location.href;
      var done = function () {
        var note = btn.parentNode && btn.parentNode.querySelector('.share__copied');
        if (note) { note.classList.add('show'); setTimeout(function () { note.classList.remove('show'); }, 1600); }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done, done);
      } else {
        var t = document.createElement('textarea');
        t.value = url; document.body.appendChild(t); t.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(t); done();
      }
    });
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
    $$('.stat__num[data-count]').forEach(function (el) {
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
      a: "I'm Sajjal Bajaj, an Odoo ERP consultant and project manager at Master Software Solutions in Mohali. I help manufacturers, distributors and traders implement Odoo: requirements and process mapping, configuration, testing, training and go-live." },
    { q: 'How many years of experience?',
      a: "I've worked in software delivery since July 2016: six years as a developer and team lead, then business analysis and project management from 2022, and ERP consulting focused on Odoo since October 2024." },
    { q: "What's your current role?",
      a: "At Master Software Solutions I work as ERP consultant, project manager and business analyst, mainly on Odoo projects covering inventory, purchasing, manufacturing and sales." },
    { q: 'What is your tech stack?',
      a: "Development: PHP, Python, JavaScript, jQuery, AngularJS, Ionic/Cordova, WordPress, HTML5 & CSS. ERP & data: Odoo, Data Warehousing, Power BI, UiPath. Cloud: AWS (S3) and Google Cloud (GCP, GKE). All wrapped in Agile/Scrum delivery." },
    { q: 'Are you certified?',
      a: "I've earned the Odoo 19 Functional Certification (2026), Microsoft Certified: Power BI Data Analyst Associate (2024) and Certified ScrumMaster (2020), and completed PMI's Kickoff course and Intel's AI For All programme." },
    { q: 'What are you working on lately?',
      a: "Odoo projects for manufacturing and distribution, Odoo 19 setup guides on this site, and in September 2026 I exhibited for Master Software Solutions at Odoo Experience India 2026 and presented its route-planning module for Odoo." },
    { q: 'How can I reach you?',
      a: "Email sajjalbajaj@gmail.com, WhatsApp or call +91 99140 89472, or message me on LinkedIn (linkedin.com/in/sajjal-bajaj). Tell me briefly what you make or sell and what isn't working." }
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
