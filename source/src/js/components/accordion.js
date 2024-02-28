export const accordion = (() => {
  const init = () => {
    const accordionList = document.querySelectorAll(".accordion-list");

    if (!accordionList.length) {
      return;
    }

    const toggleAccordion = (event) => {
      const accordionItem = event.target.closest(".accordion__header");

      accordionItem.parentElement.classList.toggle("active");
      console.log(accordionItem);
      if (accordionItem.parentElement.classList.contains("active")) {
        accordionItem.nextElementSibling.style.maxHeight =
          accordionItem.nextElementSibling.scrollHeight + "px";
      } else {
        accordionItem.nextElementSibling.style.maxHeight = "0";
      }
    };

    accordionList.forEach((accordion) => {
      accordion.addEventListener("click", toggleAccordion);
    });
  };

  return {
    init,
  };
})();
