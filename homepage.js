
  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.dropdown-toggle');
    const menu = document.querySelector('.dropdown-menu');

    if (toggleBtn && menu) {
      toggleBtn.addEventListener('click', function (e) {
        e.stopPropagation(); // Biar gak langsung ditutup
        menu.classList.toggle('show');
      });

      window.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
          menu.classList.remove('show');
        }
      });
    }
  });

