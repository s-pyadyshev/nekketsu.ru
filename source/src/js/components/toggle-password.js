export const togglePassword = (function () {
  const init = function () {
    const $togglePasswordButton = $(".js-toggle-password");

    if (!$togglePasswordButton.length) {
      return;
    }

    $togglePasswordButton.children(".input-password-hide").hide();

    $togglePasswordButton.on("click", function () {
      const $passwordInput = $(this).next("input");
      const $passwordIconShow = $(this).children(".input-password-show");
      const $passwordIconHide = $(this).children(".input-password-hide");

      if ($passwordInput.attr("type") === "password") {
        $passwordInput.attr("type", "text");
        $passwordIconShow.hide();
        $passwordIconHide.show();
        $(this).attr("aria-label", "Hide password.");
      } else {
        $passwordInput.attr("type", "password");
        $passwordIconShow.show();
        $passwordIconHide.hide();
        $(this).attr(
          "aria-label",
          "Show password as plain text. " +
            "Warning: this will display your password on the screen."
        );
      }
    });
  };

  return {
    init,
  };
})();
