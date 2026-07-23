/* Blog listing: client-side search + tag filtering (progressive enhancement) */
(function () {
  'use strict';
  var list = document.getElementById('blog-list');
  if (!list) return; // only runs on the blog listing page

  var cards = Array.prototype.slice.call(list.querySelectorAll('.blog-card'));
  var search = document.getElementById('blog-search');
  var tagBar = document.getElementById('blog-tags');
  var empty = document.getElementById('blog-empty');
  var activeTag = 'all';
  var query = '';

  function apply() {
    var shown = 0;
    cards.forEach(function (card) {
      var title = card.getAttribute('data-title') || '';
      var tags = ' ' + (card.getAttribute('data-tags') || '') + ' ';
      var matchQuery = !query || title.indexOf(query) !== -1;
      var matchTag = activeTag === 'all' || tags.indexOf(' ' + activeTag + ' ') !== -1;
      var show = matchQuery && matchTag;
      card.hidden = !show;
      if (show) shown++;
    });
    if (empty) empty.hidden = shown !== 0;
  }

  if (search) {
    search.addEventListener('input', function () {
      query = search.value.trim().toLowerCase();
      apply();
    });
  }

  if (tagBar) {
    tagBar.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-tag]');
      if (!btn) return;
      activeTag = btn.getAttribute('data-tag');
      Array.prototype.forEach.call(tagBar.querySelectorAll('button'), function (b) {
        b.classList.toggle('is-active', b === btn);
      });
      apply();
    });
  }
})();
