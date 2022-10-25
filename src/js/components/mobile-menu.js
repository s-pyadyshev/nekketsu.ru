export const mobileMenu = (() => {
  const init = function () {
    const toggleMenuButton = document.querySelectorAll(".js-toggle-menu");

    if (!toggleMenuButton) {
      return;
    }

    const header = document.querySelector(".header");
    const body = document.getElementsByTagName("body")[0];

    header.addEventListener("click", (event) => {
      if (event.target.className.includes("js-toggle-menu")) {
        body.classList.toggle("mobile-menu-active");
      }
    });
  };

  return {
    init,
  };
})();
