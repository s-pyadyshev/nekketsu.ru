import Swiper from "swiper";
import { Navigation, Thumbs } from "swiper/modules";
export const sliderThumbs = (function () {
  const init = function () {
    const swiperThumbs = document.querySelectorAll(".slider-thumbs");
    const swiperThumbsNav = document.querySelectorAll(".slider-thumbs-nav");

    for (let i = 0; i < swiperThumbs.length; i += 1) {
      swiperThumbs[i].classList.add(`slider-thumbs-${i}`);
      swiperThumbsNav[i].classList.add(`slider-thumbs-nav-${i}`);

      const galleryThumbs = new Swiper(`.slider-thumbs-nav-${i}`, {
        spaceBetween: 10,
        slidesPerView: 4,
      });

      const gallerySwiper = new Swiper(`.slider-thumbs-${i}`, {
        spaceBetween: 10,
        modules: [Navigation, Thumbs],
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: galleryThumbs,
        },
      });
    }
  };

  return {
    init,
  };
})();
