/* akkarimi.com — small progressive enhancements. The site works without this file. */
(function () {
  'use strict';
  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* Old one-page links (/#teaching, /#cv) → their new pages */
  var moved = { '#teaching': '/teaching/', '#cv': '/cv/' };
  if (location.pathname === '/' && moved[location.hash]) location.replace(moved[location.hash]);

  /* ── Theme toggle: remembers an explicit choice, otherwise follows the OS ── */
  var themeBtn = document.querySelector('[data-theme-toggle]');
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  function isDark() {
    var t = root.getAttribute('data-theme');
    return t ? t === 'dark' : systemDark.matches;
  }
  function syncThemeButton() {
    if (!themeBtn) return;
    themeBtn.setAttribute('aria-pressed', String(isDark()));
    themeBtn.setAttribute('aria-label', isDark() ? 'Switch to light mode' : 'Switch to dark mode');
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncThemeButton();
    });
    systemDark.addEventListener && systemDark.addEventListener('change', syncThemeButton);
    syncThemeButton();
  }

  /* ── Mobile menu ── */
  var header = document.querySelector('[data-header]');
  var navBtn = document.querySelector('[data-nav-toggle]');
  var nav = document.getElementById('site-nav');
  function setMenu(open) {
    header.classList.toggle('nav-open', open);
    navBtn.setAttribute('aria-expanded', String(open));
    navBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  if (navBtn && nav) {
    navBtn.addEventListener('click', function () {
      var open = navBtn.getAttribute('aria-expanded') !== 'true';
      setMenu(open);
      if (open) { var first = nav.querySelector('a'); first && first.focus(); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('nav-open')) { setMenu(false); navBtn.focus(); }
    });
    document.addEventListener('click', function (e) {
      if (header.classList.contains('nav-open') && !header.contains(e.target)) setMenu(false);
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', function (m) { if (m.matches) setMenu(false); });
  }

  /* ── Header condenses once the page is scrolled ── */
  if (header) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        header.classList.toggle('is-condensed', window.scrollY > 24);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Gentle fade-in for [data-reveal] blocks ── */
  var reveals = document.querySelectorAll('[data-reveal]');
  if (reduceMotion.matches || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ── Toast messages ── */
  var toast = document.querySelector('[data-toast]');
  var toastTimer;
  function say(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 2200);
  }

  /* ── Publication buttons: [data-toggle] shows/hides a panel, [data-copy] copies BibTeX ── */
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-toggle]');
    if (t) {
      var panel = document.getElementById(t.getAttribute('data-toggle'));
      if (!panel) return;
      var open = t.getAttribute('aria-expanded') !== 'true';
      t.setAttribute('aria-expanded', String(open));
      if (panel.hasAttribute('data-collapsible')) panel.classList.toggle('is-open', open);
      else panel.hidden = !open;
      return;
    }
    var c = e.target.closest('[data-copy]');
    if (c) {
      var src = document.getElementById(c.getAttribute('data-copy'));
      if (!src) return;
      var text = src.textContent;
      var reveal = function () {
        src.hidden = false;
        var range = document.createRange(); range.selectNodeContents(src);
        var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range);
        say('Select and copy the BibTeX below');
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(function () { say('BibTeX copied to clipboard'); }, reveal);
      } else {
        reveal();
      }
    }
  });

  /* ── Footer year stays current even between rebuilds ── */
  var y = document.querySelector('[data-current-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
