export const mobileMenu = (function () {
  const init = function () {
    var $mobileMenuToggle = $(".js-toggle-menu");

    if (!$mobileMenuToggle.length) {
      return;
    }

    var $body = $("body");

    $mobileMenuToggle.on("click", function () {
      $body.toggleClass("mobile-menu-active");
    });
  };

  return {
    init,
  };
})();
