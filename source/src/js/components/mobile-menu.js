export const mobileMenu = (() => {
  const init = () => {
    const mobileMenuOpen = document.querySelector(".js-open-menu");

    if (!mobileMenuOpen) {
      return;
    }

    const mobileMenuClose = document.querySelector(".js-close-menu");
    const body = document.querySelector("body");

    mobileMenuOpen.addEventListener("click", function () {
      body.classList.toggle("mobile-menu-active");
      mobileMenuClose.focus();
    });

    mobileMenuClose.addEventListener("click", function () {
      body.classList.toggle("mobile-menu-active");
    });
  };

  return {
    init,
  };
})();
