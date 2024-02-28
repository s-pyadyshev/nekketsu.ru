const vhFix = () => {
  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      vh = window.innerHeight;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }
};

export { vhFix };

// .module {
// 	height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
// 	height: calc(var(--vh, 1vh) * 100);
// }
