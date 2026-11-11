/* Progressive enhancement only. Every link in the nav is a real <a> in the HTML;
   this script adds the mobile sheet, click-to-open menus and the currency switch. */
(function () {
  'use strict';

  var body = document.body;
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  var triggers = Array.prototype.slice.call(document.querySelectorAll('.nav-link[aria-controls]'));
  var mql = window.matchMedia('(min-width: 1024px)');

  function closeAllMenus(except) {
    triggers.forEach(function (t) {
      if (t !== except) t.setAttribute('aria-expanded', 'false');
    });
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = menuBtn.getAttribute('aria-expanded') !== 'true';
      menuBtn.setAttribute('aria-expanded', String(open));
      nav.setAttribute('data-open', String(open));
      body.setAttribute('data-nav-open', String(open));
      if (!open) closeAllMenus();
    });
  }

  triggers.forEach(function (t) {
    t.addEventListener('click', function () {
      var open = t.getAttribute('aria-expanded') !== 'true';
      // On desktop only one menu is open at a time; on the mobile sheet several may be.
      if (mql.matches) closeAllMenus(t);
      t.setAttribute('aria-expanded', String(open));
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeAllMenus();
      if (menuBtn && menuBtn.getAttribute('aria-expanded') === 'true') menuBtn.click();
    }
  });

  document.addEventListener('click', function (e) {
    if (!mql.matches) return;
    if (!e.target.closest('.has-menu')) closeAllMenus();
  });

  mql.addEventListener('change', function () {
    closeAllMenus();
    if (menuBtn && menuBtn.getAttribute('aria-expanded') === 'true') menuBtn.click();
  });

  /* ---- Pricing currency switch. Fixed prices per currency (never converted); the
     numbers already sit in the HTML as data attributes, JS only rewrites the text. ---- */
  var SYMBOL = { ZAR: 'R', USD: '$', EUR: '€', GBP: '£' };
  var ZAR_TZ = { 'Africa/Johannesburg': 1, 'Africa/Maseru': 1, 'Africa/Mbabane': 1 };

  function detectCurrency() {
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (ZAR_TZ[tz]) return 'ZAR';
      if (tz === 'Europe/London') return 'GBP';
      if (tz.indexOf('Europe/') === 0) return 'EUR';
      if (tz.indexOf('America/') === 0) return 'USD';
    } catch (e) {
      /* fall through */
    }
    try {
      var region = (navigator.language || '').toLowerCase().split('-')[1];
      if (region === 'za') return 'ZAR';
      if (region === 'gb') return 'GBP';
      if (region === 'us') return 'USD';
    } catch (e2) {
      /* fall through */
    }
    return 'ZAR';
  }

  function fmt(cur, n) {
    if (cur === 'ZAR') return String(Math.round(n));
    var s = n.toFixed(2);
    return cur === 'EUR' ? s.replace('.', ',') : s;
  }

  function setCurrency(cur) {
    document.querySelectorAll('.price[data-zar]').forEach(function (el) {
      var amount = parseFloat(el.getAttribute('data-' + cur.toLowerCase()));
      var text = cur === 'EUR' ? fmt(cur, amount) + ' €' : SYMBOL[cur] + fmt(cur, amount);
      el.firstChild.nodeValue = text;
    });
    document.querySelectorAll('.segmented [data-currency]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-currency') === cur));
    });
    document.querySelectorAll('[data-zar-only]').forEach(function (el) {
      el.hidden = cur !== 'ZAR';
    });
  }

  var seg = document.querySelector('.segmented');
  if (seg) {
    seg.addEventListener('click', function (e) {
      var b = e.target.closest('[data-currency]');
      if (b) setCurrency(b.getAttribute('data-currency'));
    });
    setCurrency(detectCurrency());
  }
})();
