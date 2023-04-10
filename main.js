// gsap.registerPlugin(ScrollTrigger);

// const sections = gsap.utils.toArray(".panel"),
//   container = document.querySelector(".container");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     end: () => "+=" + container.offsetWidth,
//   },
// });
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".panel"),
  container = document.querySelector(".container");

const updateScrollTrigger = () => {
  if (window.innerWidth < 768 || document.activeElement.getElementsByClassName == "qr-text") {
    // Disable ScrollTrigger animation when the keyboard is open or the viewport width is less than 768px
    ScrollTrigger.getAll().forEach((trigger) => {
      trigger.disable();
    });
  } else {
    // Enable ScrollTrigger animation when the keyboard is closed and the viewport width is greater than or equal to 768px
    ScrollTrigger.getAll().forEach((trigger) => {
      trigger.enable();
    });
  }
};

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + container.offsetWidth,
  },
});

// Detect when the keyboard is open or closed
window.addEventListener("resize", updateScrollTrigger);
window.addEventListener("focusout", updateScrollTrigger);
