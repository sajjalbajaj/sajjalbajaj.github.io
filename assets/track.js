/* Contact-click measurement. Sends a GA4 `contact_click` event when a visitor uses an
   email, phone, WhatsApp or LinkedIn link. Only the method and the page section are sent:
   never the address, number or any message text. Does nothing if GA4 is not configured. */
(function () {
  'use strict';
  function methodFor(a) {
    var t = a.getAttribute('data-track');
    if (t) return t;
    var h = (a.getAttribute('href') || '').toLowerCase();
    if (h.indexOf('mailto:') === 0) return 'email';
    if (h.indexOf('tel:') === 0) return 'phone';
    if (h.indexOf('wa.me/') !== -1 || h.indexOf('whatsapp') !== -1) return 'whatsapp';
    if (h.indexOf('linkedin.com/in/') !== -1) return 'linkedin';
    return null;
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var method = methodFor(a);
    if (!method || typeof window.gtag !== 'function') return;
    var section = a.closest('section[id], footer, .wa, .bot, .services__cta, .cta');
    var where = section ? (section.id || section.className.split(' ')[0]) : 'page';
    window.gtag('event', 'contact_click', { method: method, link_location: where });
  }, true);
})();
