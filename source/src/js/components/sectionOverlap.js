// export { throttle } from "../helpers";

function throttle(func, wait) {
  let waiting = false;
  return function () {
    if (waiting) {
      return;
    }

    waiting = true;
    setTimeout(() => {
      func.apply(this, arguments);
      waiting = false;
    }, wait);
  };
}

export const sectionOverlap = (function () {
  const init = function () {
    const overlapElements = document.querySelectorAll(".section-overlap");

    if (!overlapElements.length) {
      return;
    }

    function applySectionOverlap() {
      for (let i = 0; i < overlapElements.length; i++) {
        const overlapElement = overlapElements[i];
        const overlapHeight = overlapElement.offsetHeight;
        const halfHeight = overlapHeight / 2;

        overlapElement.style.marginBottom = `-${halfHeight}px`;
        overlapElement.style.marginTop = `-${halfHeight}px`;

        const previousElement = overlapElement.previousElementSibling;
        if (previousElement) {
          const previousPaddingBottom = parseFloat(
            getComputedStyle(previousElement).paddingBottom
          );
          previousElement.style.paddingBottom =
            previousPaddingBottom + halfHeight + "px";
        }

        const nextElement = overlapElement.nextElementSibling;
        if (nextElement) {
          const nextPaddingTop = parseFloat(
            getComputedStyle(nextElement).paddingTop
          );
          nextElement.style.paddingTop = nextPaddingTop + halfHeight + "px";
        }
      }
    }

    applySectionOverlap();

    const applySectionOverlapThrottle = throttle(() => {}, 200);

    window.addEventListener("resize", applySectionOverlapThrottle);
  };

  return {
    init,
  };
})();
