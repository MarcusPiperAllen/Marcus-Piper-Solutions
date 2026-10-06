// Phone menu that follows you: hides while scrolling down, comes back on any scroll up.
// Also adds a "Top" button after the first screen or so. Desktop keeps the always-visible header.
(function () {
  var header = document.querySelector('header');
  if (!header) return;
  var phone = window.matchMedia('(max-width: 768px)');

  var topBtn = document.createElement('button');
  topBtn.type = 'button';
  topBtn.className = 'back-to-top';
  topBtn.setAttribute('aria-label', 'Back to top');
  topBtn.textContent = '↑ Top';
  topBtn.addEventListener('click', function () {
    header.classList.remove('header-hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.body.appendChild(topBtn);

  var lastY = window.scrollY;
  var ticking = false;

  function update() {
    var y = window.scrollY;
    if (!phone.matches) {
      header.classList.remove('header-hidden');
      topBtn.classList.remove('visible');
    } else {
      if (y > lastY + 6 && y > header.offsetHeight * 2) {
        header.classList.add('header-hidden');
      } else if (y < lastY - 6 || y <= header.offsetHeight) {
        header.classList.remove('header-hidden');
      }
      topBtn.classList.toggle('visible', y > window.innerHeight * 1.5);
    }
    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  // Keyboard users: show the menu whenever focus moves into it.
  header.addEventListener('focusin', function () {
    header.classList.remove('header-hidden');
  });

  update();
})();
