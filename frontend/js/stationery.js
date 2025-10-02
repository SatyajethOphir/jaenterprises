gsap.registerPlugin(ScrollTrigger);

// Hero Animation
gsap.from(".hero.stationery-hero h1", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero.stationery-hero p", {
  opacity: 0,
  y: -30,
  duration: 1,
  delay: 0.3,
  ease: "power3.out"
});

gsap.from(".hero.stationery-hero .hero-btn", {
  opacity: 1,
  scale: 0.8,
  duration: 1,
  delay: 0.6,
  ease: "back.out(1.7)"
});

// About Section
if(document.querySelector(".about")){
  gsap.from(".about", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
}

// Products Section
if(document.querySelectorAll(".products .card").length){
  gsap.from(".products .card", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".products",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
}

// Social Media Fade-in
if(document.querySelector(".social-media")){
  gsap.from(".social-media", {
    opacity:1,
    y: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".social-media",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
}

// Testimonials Animation (staggered)
const testimonialContainer = document.querySelector('.testimonial-cards');
if(testimonialContainer){
  gsap.from(".testimonial-card", {
    scrollTrigger: {
      trigger: testimonialContainer,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
  });
}
