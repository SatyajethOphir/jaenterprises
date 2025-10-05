gsap.registerPlugin(ScrollTrigger);

/* -------------------------
   HERO ANIMATION
------------------------- */
const heroTimeline = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

heroTimeline
    .from(".hero-tagline", { opacity: 0, y: -20, duration: 0.8, ease: "power3.out" })
    .from(".hero-content h1", { opacity: 0, y: -50, scale: 0.95 }, "-=0.4")
    .from(".hero-content p", { opacity: 0, y: -30, scale: 0.95 }, "-=0.6")
    // .from(".hero-buttons a", { opacity: 0, y: 20, stagger: 0.2, ease: "power3.out" }, "-=0.5");

// -------------------------
// Hero Scroll Parallax (only subtle)
gsap.to(".hero-content h1", {
    yPercent: 10, // moves 10% down on scroll
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

gsap.to(".hero-content p", {
    yPercent: 5, // moves 5% down on scroll
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// -------------------------
// Animated Shapes
gsap.to(".shape1", { y: 30, x: 20, rotation: 360, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });
gsap.to(".shape2", { y: -25, x: -15, rotation: -360, duration: 12, repeat: -1, yoyo: true, ease: "sine.inOut" });
gsap.to(".shape3", { y: 20, x: -25, rotation: 180, duration: 14, repeat: -1, yoyo: true, ease: "sine.inOut" });

// -------------------------
// DIVISIONS CARDS ANIMATION
gsap.from(".divisions .card", {
    opacity: 0,
    y: 50,
    stagger: 0.25,
    duration: 1,
    ease: "power3.out",
    scale: 0.95,
    scrollTrigger: {
        trigger: ".divisions",
        start: "top 85%",
        toggleActions: "play none none none"
    }
});

// Hover effect for cards
document.querySelectorAll(".divisions .card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.07, boxShadow: "0 15px 30px rgba(0,0,0,0.15)", duration: 0.4, ease: "power3.out" });
    });
    card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", duration: 0.4, ease: "power3.out" });
    });
});
