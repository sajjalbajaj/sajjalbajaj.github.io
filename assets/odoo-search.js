/* Odoo guides page (/odoo/): search with suggestions as you type.
   Progressive enhancement: the search box stays hidden without JavaScript. The index is built
   from the guide lists already on the page, so there is no server or third-party service.
   Titles rank highest, then tags, the subject and finally the description. Handles Odoo
   shorthand (BoM, PO, MRP), plurals and one or two typos. */
(function () {
  'use strict';
  var root = document.getElementById('hub-search');
  if (!root) return;

  var form = root.querySelector('form');
  var input = document.getElementById('hub-q');
  var box = root.querySelector('.hub-search__box');
  var pop = document.getElementById('hub-pop');
  var list = document.getElementById('hub-suggest');
  var note = document.getElementById('hub-note');
  var empty = document.getElementById('hub-empty');
  var emptyQ = document.getElementById('hub-empty-q');
  var live = document.getElementById('hub-live');
  var status = document.getElementById('hub-status');
  var statusText = document.getElementById('hub-status-text');
  var clearBtn = document.getElementById('hub-clear');
  var page = root.closest('section') || document.body;
  var narrow = window.matchMedia('(max-width: 640px)');
  var coarse = window.matchMedia('(pointer: coarse)');

  var MAX_ROWS = 8;   // subjects + guides shown in the dropdown
  var MAX_TOPICS = 2;
  var LQ = '\u201C', RQ = '\u201D', DOT = ' \u00B7 ';

  // Words that narrow nothing on this page: they help ranking but are never required.
  var SOFT = ['odoo', 'how', 'to', 'do', 'i', 'a', 'an', 'the', 'and', 'or', 'of', 'in', 'on', 'for', 'with',
    'my', 'your', 'is', 'what', 'set', 'up', 'setup', 'guide', 'guides', 'using', 'use'];
  // Odoo shorthand, mapped to the words the guides use. A match here outranks a plain prefix
  // match, so "po" finds purchase orders before point of sale.
  var ABBREV = {
    bom: ['bill of materials', 'bills of materials'], boms: ['bill of materials', 'bills of materials'],
    mrp: ['manufacturing'], mo: ['manufacturing order'], mos: ['manufacturing order'], wo: ['work order'],
    po: ['purchase order'], pos: ['point of sale'], rfq: ['request for quotation'], so: ['sales order'],
    uom: ['unit of measure', 'units of measure'], plm: ['product lifecycle'], qc: ['quality'],
    coa: ['chart of accounts'], wms: ['warehouse']
  };
  // Related wording: widens the results but ranks below direct matches.
  var RELATED = {
    gst: ['tax'], vat: ['tax'], hr: ['employee'], crm: ['pipeline', 'lead'], ecommerce: ['online store']
  };

  /* ---------- Text helpers ---------- */
  function norm(s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/\b([a-z])-(?=[a-z])/g, '$1')   // e-invoice -> einvoice, e-commerce -> ecommerce
      .replace(/[^a-z0-9]+/g, ' ').trim();
  }
  // A light stemmer, applied to both the query and the index: invoices / invoicing / invoice -> invoic.
  function stem(w) {
    if (w.length > 5 && /ing$/.test(w)) return w.slice(0, -3);
    if (w.length > 4 && /ies$/.test(w)) return w.slice(0, -3) + 'y';
    if (w.length > 4 && /(ches|shes|xes|sses)$/.test(w)) return w.slice(0, -2);
    if (w.length > 3 && /s$/.test(w) && !/ss$/.test(w)) w = w.slice(0, -1);
    if (w.length > 5 && /e$/.test(w)) return w.slice(0, -1);
    return w;
  }
  function field(s) {
    var str = norm(s);
    var raw = str ? str.split(' ') : [];
    return { str: str, pad: ' ' + str + ' ', raw: raw, stem: raw.map(stem), compact: str.replace(/ /g, '') };
  }
  function tokenOf(w) {
    return { raw: w, stem: stem(w), abbrev: (ABBREV[w] || []).map(norm), related: (RELATED[w] || []).map(norm) };
  }
  function hasPhrase(f, phrases) {
    for (var j = 0; j < phrases.length; j++) {
      if (f.pad.indexOf(' ' + phrases[j]) !== -1) return true;
    }
    return false;
  }
  // 4 = shorthand expansion, 3 = a word starts with the token, 2 = related wording,
  // 1 = found inside a word, 0 = no match.
  function hit(f, t, inside) {
    if (hasPhrase(f, t.abbrev)) return 4;
    for (var i = 0; i < f.raw.length; i++) {
      if (f.raw[i].lastIndexOf(t.raw, 0) === 0 || f.stem[i].lastIndexOf(t.stem, 0) === 0) return 3;
    }
    if (hasPhrase(f, t.related)) return 2;
    if (inside && t.raw.length >= 4 && f.compact.indexOf(t.raw) !== -1) return 1;
    return 0;
  }
  // Optimal string alignment distance (Levenshtein plus adjacent swaps).
  function distance(a, b) {
    var d = [], i, j;
    for (i = 0; i <= a.length; i++) d[i] = [i];
    for (j = 0; j <= b.length; j++) d[0][j] = j;
    for (i = 1; i <= a.length; i++) {
      for (j = 1; j <= b.length; j++) {
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
    return d[a.length][b.length];
  }

  /* ---------- Index, built from the lists on the page ---------- */
  var groups = [], items = [];
  Array.prototype.forEach.call(page.querySelectorAll('.hub-group'), function (sec) {
    var h = sec.querySelector('h2');
    var blurb = sec.querySelector('.services__lead');
    var g = { id: sec.id, el: sec, title: h ? h.textContent.trim() : '', items: [] };
    g.T = field(g.title);
    g.B = field(blurb ? blurb.textContent : '');
    Array.prototype.forEach.call(sec.querySelectorAll('li'), function (li) {
      var a = li.querySelector('a');
      if (!a) return;
      var it = {
        li: li, href: a.getAttribute('href'), title: a.textContent.trim(), group: g, order: items.length,
        setup: !!li.querySelector('.hub-kind'),
        T: field(a.textContent), K: field(li.getAttribute('data-k')), D: field(li.getAttribute('data-d'))
      };
      g.items.push(it);
      items.push(it);
    });
    groups.push(g);
  });
  if (!items.length) return;

  // Vocabulary for typo correction, most frequent words first.
  var counts = {};
  function count(w) { if (w.length >= 3 && !/^\d+$/.test(w)) counts[w] = (counts[w] || 0) + 1; }
  items.forEach(function (it) { it.T.raw.forEach(count); it.K.raw.forEach(count); });
  groups.forEach(function (g) { g.T.raw.forEach(count); });
  var vocab = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; });

  /* ---------- Matching and ranking ---------- */
  // Points per field, indexed by the level hit() returns (0 none ... 4 shorthand).
  var TW = [0, 4, 7, 10, 11], KW = [0, 1, 3, 5, 5], SW = [0, 0, 2, 3, 3], DW = [0, 1, 2, 2, 2];

  function scoreItem(it, t) {
    var s = Math.max(TW[hit(it.T, t, true)], KW[hit(it.K, t, true)], SW[hit(it.group.T, t, false)]);
    if (!s && t.raw.length >= 3) s = DW[hit(it.D, t, true)];
    return s;
  }
  function scoreTopic(g, t) {
    return Math.max([0, 0, 7, 10, 11][hit(g.T, t, false)], [0, 0, 3, 4, 4][hit(g.B, t, false)]);
  }
  function parse(q) {
    var text = norm(q);
    if (!text) return null;
    var words = text.split(' ');
    var req = words.filter(function (w) { return SOFT.indexOf(w) === -1; });
    var soft = words.filter(function (w) { return SOFT.indexOf(w) !== -1; });
    if (!req.length) { req = words; soft = []; }
    return { text: text, phrase: words.length > 1 ? text : '', req: req.map(tokenOf), soft: soft.map(tokenOf), fixed: '' };
  }
  function run(p) {
    var arts = [], tops = [];
    items.forEach(function (it) {
      var s = 0;
      for (var i = 0; i < p.req.length; i++) {
        var x = scoreItem(it, p.req[i]);
        if (!x) return;
        s += x;
      }
      p.soft.forEach(function (t) {
        if (hit(it.T, t, false) === 3) s += 2;
        else if (hit(it.K, t, false) === 3) s += 1;
      });
      if (p.phrase && it.T.pad.indexOf(' ' + p.phrase) !== -1) s += 8;
      if (it.setup) s += 0.5;
      arts.push({ it: it, s: s });
    });
    arts.sort(function (a, b) { return b.s - a.s || a.it.order - b.it.order; });
    if (p.text.length >= 2) {
      groups.forEach(function (g) {
        var s = 0;
        for (var i = 0; i < p.req.length; i++) {
          var x = scoreTopic(g, p.req[i]);
          if (!x) return;
          s += x;
        }
        tops.push({ g: g, s: s });
      });
      tops.sort(function (a, b) { return b.s - a.s; });
    }
    return { arts: arts, tops: tops, p: p };
  }
  function closest(w) {
    if (w.length < 4) return '';
    var limit = w.length >= 7 ? 2 : 1, best = '', bestD = limit + 1;
    vocab.forEach(function (v) {
      for (var L = w.length - 1; L <= w.length + 1 && L <= v.length; L++) {
        var d = distance(w, v.slice(0, L)) + (L === v.length ? 0 : 0.1);
        if (d < bestD) { bestD = d; best = v; }
      }
    });
    return best;
  }
  function search(q) {
    var p = parse(q);
    if (!p) return null;
    var r = run(p);
    if (!r.arts.length && !r.tops.length) {
      var changed = false;
      var fixedReq = p.req.map(function (t) {
        if (items.some(function (it) { return scoreItem(it, t) > 0; })) return t;
        var w = closest(t.raw);
        if (!w) return t;
        changed = true;
        return tokenOf(w);
      });
      if (changed) {
        var p2 = { text: p.text, phrase: '', req: fixedReq, soft: p.soft, fixed: fixedReq.map(function (t) { return t.raw; }).join(' ') };
        var r2 = run(p2);
        if (r2.arts.length || r2.tops.length) r = r2;
      }
    }
    return r;
  }

  /* ---------- Rendering ---------- */
  function highlight(el, text, p) {
    var lower = text.toLowerCase(), marks = [];
    var needles = [];
    p.req.forEach(function (t) {
      needles.push(t.raw);
      if (t.stem !== t.raw) needles.push(t.stem);
      needles = needles.concat(t.abbrev, t.related);
    });
    needles.forEach(function (n) {
      if (!n) return;
      var from = 0, i;
      while ((i = lower.indexOf(n, from)) !== -1) {
        if (i === 0 || n.length >= 4 || !/[a-z0-9]/.test(lower.charAt(i - 1))) marks.push([i, i + n.length]);
        from = i + 1;
      }
    });
    marks.sort(function (a, b) { return a[0] - b[0]; });
    var merged = [];
    marks.forEach(function (m) {
      var lastM = merged[merged.length - 1];
      if (lastM && m[0] <= lastM[1]) lastM[1] = Math.max(lastM[1], m[1]);
      else merged.push([m[0], m[1]]);
    });
    var pos = 0;
    merged.forEach(function (m) {
      if (m[0] > pos) el.appendChild(document.createTextNode(text.slice(pos, m[0])));
      var mk = document.createElement('mark');
      mk.textContent = text.slice(m[0], m[1]);
      el.appendChild(mk);
      pos = m[1];
    });
    if (pos < text.length) el.appendChild(document.createTextNode(text.slice(pos)));
  }

  var opts = [], active = -1, last = null, filtering = false, liveTimer = 0, scrolled = false;

  function addOption(title, meta, href, p) {
    var li = document.createElement('li');
    li.id = 'hub-opt-' + opts.length;
    li.className = 'hub-suggest__opt';
    li.setAttribute('role', 'option');
    li.setAttribute('aria-selected', 'false');
    var a = document.createElement('a');
    a.href = href;
    a.tabIndex = -1;
    var t = document.createElement('span');
    t.className = 'hub-suggest__title';
    highlight(t, title, p);
    var m = document.createElement('span');
    m.className = 'hub-suggest__meta';
    m.textContent = meta;
    a.appendChild(t);
    a.appendChild(m);
    li.appendChild(a);
    list.appendChild(li);
    opts.push(li);
  }
  function addShowAll(n) {
    var li = document.createElement('li');
    li.id = 'hub-opt-' + opts.length;
    li.className = 'hub-suggest__all';
    li.setAttribute('role', 'option');
    li.setAttribute('aria-selected', 'false');
    li.setAttribute('data-action', 'all');
    li.textContent = 'Show all ' + n + ' matching guides';
    list.appendChild(li);
    opts.push(li);
  }
  function plural(n, one, many) { return n + ' ' + (n === 1 ? one : many); }
  function announce(msg) {
    clearTimeout(liveTimer);
    liveTimer = setTimeout(function () { live.textContent = msg; }, 600);
  }
  function setActive(i) {
    if (active >= 0 && opts[active]) {
      opts[active].classList.remove('is-active');
      opts[active].setAttribute('aria-selected', 'false');
    }
    active = i;
    if (i >= 0 && opts[i]) {
      opts[i].classList.add('is-active');
      opts[i].setAttribute('aria-selected', 'true');
      input.setAttribute('aria-activedescendant', opts[i].id);
      opts[i].scrollIntoView({ block: 'nearest' });
    } else {
      input.removeAttribute('aria-activedescendant');
    }
  }
  function hidePop() {
    pop.hidden = true;
    input.setAttribute('aria-expanded', 'false');
    setActive(-1);
  }
  function render(r) {
    list.textContent = '';
    opts = [];
    active = -1;
    input.removeAttribute('aria-activedescendant');
    if (!r) { hidePop(); announce(''); return; }

    var tops = r.tops.slice(0, MAX_TOPICS);
    var arts = r.arts.slice(0, MAX_ROWS - tops.length);
    tops.forEach(function (x) {
      addOption(x.g.title, 'Subject' + DOT + plural(x.g.items.length, 'guide', 'guides'), '#' + x.g.id, r.p);
    });
    arts.forEach(function (x) {
      addOption(x.it.title, (x.it.setup ? 'Setup guide' + DOT : '') + x.it.group.title, x.it.href, r.p);
    });
    if (r.arts.length > arts.length) addShowAll(r.arts.length);

    note.hidden = !r.p.fixed;
    if (r.p.fixed) note.textContent = 'Showing matches for ' + LQ + r.p.fixed + RQ;
    var none = !opts.length;
    empty.hidden = !none;
    if (none) emptyQ.textContent = input.value.trim();
    list.hidden = none;
    pop.hidden = false;
    input.setAttribute('aria-expanded', none ? 'false' : 'true');

    announce(none ? 'No guides match.' :
      plural(r.arts.length, 'guide matches', 'guides match') +
      (tops.length ? ', plus ' + plural(tops.length, 'subject', 'subjects') : '') +
      '. Use the up and down arrow keys to review suggestions.');
  }
  function update() {
    last = search(input.value);
    render(last);
  }

  /* ---------- Show every match on the page ---------- */
  // Put subjects, and the guides inside them, in the given order (page order when rank is null).
  var groupParent = groups[0].el.parentNode;
  var groupAnchor = groups[groups.length - 1].el.nextSibling;
  function arrange(rank) {
    function r(it) { return rank ? rank(it) : it.order; }
    var best = {};
    items.forEach(function (it) {
      var id = it.group.id;
      if (!(id in best) || r(it) < best[id]) best[id] = r(it);
    });
    groups.slice().sort(function (a, b) { return best[a.id] - best[b.id]; }).forEach(function (g) {
      groupParent.insertBefore(g.el, groupAnchor);
      var ul = g.el.querySelector('ul');
      g.items.slice().sort(function (a, b) { return r(a) - r(b); }).forEach(function (it) { ul.appendChild(it.li); });
    });
  }

  function showAll() {
    if (!last || !last.arts.length) return;
    var rankOf = {};
    last.arts.forEach(function (x, i) { rankOf[x.it.order] = i; });
    items.forEach(function (it) { it.li.hidden = !(it.order in rankOf); });
    groups.forEach(function (g) {
      g.el.hidden = !g.items.some(function (it) { return !it.li.hidden; });
    });
    // Most relevant subject first, most relevant guide first within it.
    arrange(function (it) { return it.order in rankOf ? rankOf[it.order] : 1e6 + it.order; });
    page.classList.add('is-filtering');
    filtering = true;
    hidePop();
    var msg = plural(last.arts.length, 'guide matches', 'guides match') + ' ' + LQ + (last.p.fixed || input.value.trim()) + RQ + '.';
    statusText.textContent = msg;
    status.hidden = false;
    announce(msg + ' They are listed below by subject, most relevant first.');
    if (coarse.matches) input.blur();
  }
  function clearFilter() {
    if (!filtering) return;
    items.forEach(function (it) { it.li.hidden = false; });
    groups.forEach(function (g) { g.el.hidden = false; });
    arrange(null);
    page.classList.remove('is-filtering');
    filtering = false;
    status.hidden = true;
  }
  function reset() {
    input.value = '';
    last = null;
    sentTerm = '';
    clearTimeout(trackTimer);
    clearFilter();
    render(null);
  }
  function choose(li) {
    if (li.getAttribute('data-action') === 'all') { showAll(); return; }
    var a = li.querySelector('a');
    hidePop();
    if (a) a.click();
  }

  /* ---------- Search analytics (GA4) ---------- */
  // Sends a GA4 `search` event once a search settles: after a two-second pause in typing, or straight
  // away when a suggestion is chosen or Enter is pressed. search_term fills GA4's built-in "Search term"
  // report; search_results is the number of matching guides (0 = a topic with no guide yet). Nothing
  // else is sent, terms that look like an email address or phone number are never sent, and nothing
  // happens if GA4 is not configured.
  var sentTerm = '', trackTimer = 0, trackPending = false;
  function track() {
    clearTimeout(trackTimer);
    trackPending = false;
    if (typeof window.gtag !== 'function') return;
    var term = input.value.trim().toLowerCase().replace(/\s+/g, ' ').slice(0, 100);
    if (term.length < 3 || term === sentTerm) return;
    if (term.indexOf('@') !== -1 || /\d{6,}/.test(term.replace(/[\s()+.\-]/g, ''))) return;
    sentTerm = term;
    window.gtag('event', 'search', { search_term: term, search_results: last ? last.arts.length : 0 });
  }
  function trackSoon() {
    clearTimeout(trackTimer);
    trackPending = true;
    trackTimer = setTimeout(track, 2000);
  }

  /* ---------- Events ---------- */
  input.addEventListener('input', function () {
    clearFilter();
    update();
    trackSoon();
    // On phones, lift the box towards the top so the keyboard does not hide the suggestions.
    if (!scrolled && narrow.matches && box.getBoundingClientRect().top > window.innerHeight * 0.25) {
      scrolled = true;
      box.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  });
  input.addEventListener('focus', function () {
    if (!filtering && input.value.trim()) update();
  });
  input.addEventListener('blur', function () {
    setTimeout(function () { if (!root.contains(document.activeElement)) hidePop(); }, 150);
  });
  input.addEventListener('keydown', function (e) {
    var k = e.key;
    if (k === 'ArrowDown' || k === 'ArrowUp') {
      if (pop.hidden) {
        if (input.value.trim() && !filtering) { e.preventDefault(); update(); }
        return;
      }
      if (!opts.length) return;
      e.preventDefault();
      var n = opts.length;
      if (k === 'ArrowDown') setActive(active < n - 1 ? active + 1 : 0);
      else setActive(active > 0 ? active - 1 : n - 1);
    } else if (k === 'Escape') {
      if (!pop.hidden) { e.preventDefault(); hidePop(); }
      else if (input.value || filtering) { e.preventDefault(); reset(); }
    } else if (k === 'Tab' && !list.hidden) {
      hidePop();
    }
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    track();
    if (!pop.hidden && active >= 0 && opts[active]) choose(opts[active]);
    else showAll();
  });
  // Keep focus in the box while clicking a suggestion.
  pop.addEventListener('mousedown', function (e) {
    if (e.target.closest('[role="option"]')) e.preventDefault();
  });
  list.addEventListener('click', function (e) {
    var li = e.target.closest('[role="option"]');
    if (!li) return;
    track();
    if (li.getAttribute('data-action') === 'all') { showAll(); return; }
    var a = li.querySelector('a');
    if (a && a.getAttribute('href').charAt(0) === '#') hidePop();
  });
  clearBtn.addEventListener('click', function () {
    reset();
    input.focus();
  });
  document.addEventListener('click', function (e) {
    if (!root.contains(e.target)) hidePop();
  });
  window.addEventListener('pageshow', hidePop);
  window.addEventListener('pagehide', function () { if (trackPending) track(); });

  root.hidden = false;
})();
