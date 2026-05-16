// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

// 1. Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// 2. Hero Animations
const tlHero = gsap.timeline();
tlHero.to(".hero-title", {
  y: 0,
  opacity: 1,
  duration: 1.2,
  ease: "power3.out",
  delay: 0.5
})
  .to(".hero-subtitle", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  }, "-=0.8")
  .to(".scroll-indicator", {
    opacity: 1,
    duration: 1
  }, "-=0.5");

// Parallax Hero Elements
gsap.to(".floating-elements", {
  yPercent: 30,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// 3. About Section Reveal Animations
gsap.from(".about-text", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 70%",
  },
  x: -50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".about-visual", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 70%",
  },
  x: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// 4. Swiper Initialization (3D Coverflow)
const swiper = new Swiper('.highlights-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
});

// 5. Culture Section Background Morph
gsap.to(".culture", {
  scrollTrigger: {
    trigger: ".culture",
    start: "top center",
    end: "bottom center",
    scrub: true
  },
  backgroundColor: "#111f14", // Morphs slightly darker
});

// Staggered reveal for culture items
gsap.from(".culture-item", {
  scrollTrigger: {
    trigger: ".culture-grid",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "back.out(1.7)"
});

// 6. CTA Parallax Effect
gsap.to(".stars", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".cta",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
