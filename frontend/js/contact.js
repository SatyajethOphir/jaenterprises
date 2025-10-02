gsap.registerPlugin(ScrollTrigger);

// Hero Animations
gsap.from(".hero.contact-hero h1", {opacity:0, y:-50, duration:1, ease:"power3.out"});
gsap.from(".hero.contact-hero p", {opacity:0, y:-30, duration:1, delay:0.3, ease:"power3.out"});
gsap.from(".hero.contact-hero .hero-btn", {opacity:0, scale:0.8, duration:1, delay:0.6, ease:"back.out(1.7)"});

// Contact Form Animation
gsap.from(".contact-form-section h2", {opacity:0, y:50, duration:1, ease:"power3.out", scrollTrigger:{
  trigger: ".contact-form-section",
  start:"top 80%",
  toggleActions:"play none none none"
}});

gsap.from(".contact-form-section form", {opacity:0, y:50, duration:1, delay:0.3, ease:"power3.out", scrollTrigger:{
  trigger: ".contact-form-section",
  start:"top 80%",
  toggleActions:"play none none none"
}});

// Contact Info Animation
gsap.from(".contact-info h2", {opacity:0, y:50, duration:1, ease:"power3.out", scrollTrigger:{
  trigger: ".contact-info",
  start:"top 80%",
  toggleActions:"play none none none"
}});

gsap.from(".contact-info p", {opacity:0, y:50, stagger:0.2, duration:1, ease:"power3.out", scrollTrigger:{
  trigger: ".contact-info",
  start:"top 80%",
  toggleActions:"play none none none"
}});
