import scrollToSmooth from "scrolltosmooth/dist/scrolltosmooth.esm";

let smoothScroll = new scrollToSmooth("button", {
  targetAttribute: "data-scrollto",
  duration: 400,
  durationRelative: false,
  durationMin: false,
  durationMax: false,
});

smoothScroll.init();
