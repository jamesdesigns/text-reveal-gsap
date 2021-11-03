gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-title", {
  x: -2900,
  backgroundPosition: '2900px 0',
  scrollTrigger: {
    trigger: "body",
    start: 'top top',
    scrub: true,
  }
});

gsap.to(".hero-cta", {
  y: 80,
  scrollTrigger: {
    trigger: "body",
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  }
});