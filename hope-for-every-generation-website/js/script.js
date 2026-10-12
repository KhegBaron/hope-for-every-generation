(function () {
  var pages = document.querySelectorAll('.page');
  var navLinks = document.querySelectorAll('[data-nav]');
  var menuToggle = document.getElementById('menuToggle');
  var mainNav = document.getElementById('mainNav');
  var validPages = ['home', 'about', 'leadership', 'collaboration', 'give'];

  function showPage(id, updateHash) {
    if (validPages.indexOf(id) === -1) { id = 'home'; }

    pages.forEach(function (p) {
      p.classList.toggle('active', p.id === 'page-' + id);
    });

    document.querySelectorAll('.main-nav .nav-link').forEach(function (l) {
      l.classList.toggle('active', l.getAttribute('data-nav') === id);
    });

    if (updateHash !== false) {
      history.replaceState(null, '', '#' + id);
    }

    window.scrollTo(0, 0);
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  navLinks.forEach(function (el) {
    el.addEventListener('click', function () {
      showPage(el.getAttribute('data-nav'));
    });
  });

  menuToggle.addEventListener('click', function () {
    var open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  window.addEventListener('hashchange', function () {
    showPage(location.hash.replace('#', ''), false);
  });

  var initial = (location.hash || '#home').replace('#', '');
  showPage(initial, false);
})();
