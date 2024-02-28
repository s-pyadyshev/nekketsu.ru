export const toggle = (() => {
  const init = () => {
    const collapseLinks = document.querySelectorAll("[data-collapse-target]");

    if (!collapseLinks.length) {
      return;
    }

    collapseLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        const collapseTarget = event.target.dataset.collapseTarget;

        const collapseTargets = document.querySelectorAll(
          `[data-collapse-target="${collapseTarget}"]`
        );

        const target = document.querySelector(
          `[data-collapse-content="${collapseTarget}"]`
        );

        target.classList.toggle("active");
        collapseTargets.forEach((target) => target.classList.toggle("active"));
      });
    });
  };

  return {
    init,
  };
})();
