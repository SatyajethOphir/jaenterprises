// =========================
// MAIN SCRIPT
// =========================
document.addEventListener("DOMContentLoaded", () => {

  // -------------------------
  // NAVBAR TOGGLE (MOBILE)
  // -------------------------
  const navToggle = document.querySelector('.nav-toggle');
  const navOverlay = document.querySelector('.nav-overlay');
  const navbar = document.querySelector('.navbar');

  if (navToggle && navOverlay) {
    navToggle.addEventListener('click', () => {
      navOverlay.classList.toggle('active'); // slide overlay
      navToggle.classList.toggle('toggle');  // animate hamburger
    });

    // Close overlay when a link is clicked
    navOverlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navOverlay.classList.remove('active');
        navToggle.classList.remove('toggle');
      });
    });
  }

  // -------------------------
  // SMOOTH SCROLL FOR ANCHORS
  // -------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // -------------------------
  // GSAP ANIMATIONS
  // -------------------------
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Navbar fade-in
    if (navbar) {
      gsap.from(navbar, {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power2.out"
      });
    }

    // Fade-in all sections
    document.querySelectorAll('section').forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });

    // Footer fade-in
    const footer = document.querySelector("footer");
    if (footer) {
      gsap.from(footer, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    }

    // Social icons hover animation
    document.querySelectorAll('.social-icons a').forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, { scale: 1.2, duration: 0.3, ease: "power2.out" });
      });
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });

    // Navbar link hover effect (desktop)
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, { scale: 1.05, color: "#0078d7", duration: 0.2 });
      });
      link.addEventListener('mouseleave', () => {
        gsap.to(link, { scale: 1, color: "#333", duration: 0.2 });
      });
    });
  }

});
