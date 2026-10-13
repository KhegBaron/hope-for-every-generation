(function () {
  // Mobile menu
  var menuToggle = document.getElementById('menuToggle');
  var mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      var open = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.focus();
      }
    });
  }

  // Keep the footer year current
  var year = document.getElementById('year');
  if (year) { year.textContent = new Date().getFullYear(); }

  // Old single-page links (e.g. /#about) now point to their own pages
  var legacy = { about: 'about.html', leadership: 'leadership.html', collaboration: 'collaboration.html', give: 'give.html' };
  var hash = location.hash.replace('#', '');
  var isHome = /(^|\/)(index\.html)?$/.test(location.pathname);
  if (isHome && legacy[hash]) { location.replace(legacy[hash]); }
})();
