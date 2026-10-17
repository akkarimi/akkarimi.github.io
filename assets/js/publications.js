/* Publications page: search + year/type/topic filters, kept in the URL
   (e.g. /publications/?topic=robustness) so filtered views can be linked. */
(function () {
  'use strict';
  var form = document.querySelector('[data-pub-filters]');
  if (!form) return;
  var items = Array.prototype.slice.call(document.querySelectorAll('.pub[data-year]'));
  var groups = document.querySelectorAll('[data-year-group]');
  var count = document.querySelector('[data-pub-count]');
  var empty = document.querySelector('[data-pub-empty]');
  var toggle = document.querySelector('[data-filters-toggle]');
  var activeBadge = document.querySelector('[data-filters-active]');
  var fields = ['year', 'type', 'topic'];

  function state() {
    return {
      q: form.q.value.trim().toLowerCase(),
      year: form.year.value, type: form.type.value, topic: form.topic.value
    };
  }

  function apply(updateUrl) {
    var s = state();
    var terms = s.q ? s.q.split(/\s+/) : [];
    var shown = 0;
    items.forEach(function (el) {
      var ok = (!s.year || el.dataset.year === s.year) &&
               (!s.type || el.dataset.type === s.type) &&
               (!s.topic || (' ' + el.dataset.topics + ' ').indexOf(' ' + s.topic + ' ') !== -1) &&
               terms.every(function (t) { return el.dataset.search.indexOf(t) !== -1; });
      el.hidden = !ok;
      if (ok) shown++;
    });
    groups.forEach(function (g) { g.hidden = !g.querySelector('.pub:not([hidden])'); });
    empty.hidden = shown !== 0;
    count.textContent = shown === items.length
      ? items.length + ' publications'
      : 'Showing ' + shown + ' of ' + items.length + ' publications';

    var n = fields.filter(function (f) { return s[f]; }).length;
    activeBadge.textContent = n ? ' (' + n + ')' : '';

    if (updateUrl) {
      var params = new URLSearchParams();
      if (s.q) params.set('q', form.q.value.trim());
      fields.forEach(function (f) { if (s[f]) params.set(f, s[f]); });
      var qs = params.toString();
      history.replaceState(null, '', location.pathname + (qs ? '?' + qs : '') + location.hash);
    }
  }

  // Restore filters from the URL
  var params = new URLSearchParams(location.search);
  if (params.get('q')) form.q.value = params.get('q');
  fields.forEach(function (f) {
    var v = params.get(f);
    if (v && form[f].querySelector('option[value="' + CSS.escape(v) + '"]')) form[f].value = v;
  });

  var timer;
  form.q.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(function () { apply(true); }, 120); });
  form.addEventListener('change', function () { apply(true); });
  form.addEventListener('submit', function (e) { e.preventDefault(); });
  document.querySelectorAll('[data-filters-reset]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault();
      form.reset();
      apply(true);
      form.q.focus();
    });
  });

  // Phones: the selects live behind a "Filter" button
  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    form.classList.toggle('is-open', open);
  });
  if (fields.some(function (f) { return form[f].value; })) toggle.click();

  apply(false);
})();
