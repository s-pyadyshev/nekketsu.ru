export const videoVimeo = (function () {
  const init = function () {
    const videoPlayButtons = document.querySelectorAll(".js-play-video");

    if (!videoPlayButtons.length) {
      return;
    }

    videoPlayButtons.forEach((playButton) => {
      playButton.addEventListener("click", function (event) {
        let iframe = event.target.previousElementSibling;
        let videoOverlay =
          event.target.previousElementSibling.previousElementSibling;
        let videoPlayerElement =
          event.target.previousElementSibling.previousElementSibling
            .parentElement;
        let player = new Vimeo.Player(iframe);

        player.play();

        player.on("play", () => {
          videoOverlay.style.display = "none";
          event.target.style.display = "none";
          iframe.style.opacity = "1";
          videoPlayerElement.classList.add("is-playing");
        });

        player.on("pause", () => {
          videoOverlay.style.display = "block";
          event.target.style.display = "block";
          iframe.style.opacity = "0";
          videoPlayerElement.classList.remove("is-playing");
        });
      });
    });
  };

  return {
    init,
  };
})();
