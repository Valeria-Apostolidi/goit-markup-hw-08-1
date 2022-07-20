(() => {
  const refs = {
    openMenuBtn: document.querySelector(".btn-menu-open"),
    closeMenuBtn: document.querySelector(".btn-menu-close"),
    menu: document.querySelector(".site-menu"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
      document.body.classList.toggle("menu-open");
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
