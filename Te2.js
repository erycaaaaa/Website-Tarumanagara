document.querySelectorAll(".dropdown > a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const menu = link.nextElementSibling;
    if (menu && menu.classList.contains("dropdown-menu")) {
      e.preventDefault();
      menu.classList.toggle("show");
    }
  });
});
