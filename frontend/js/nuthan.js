// ===============================
// NUTHAN MEDICALS INTERACTIONS
// ===============================

// NAVBAR TOGGLE
const navToggle = document.querySelector(".nav-toggle");
const navOverlay = document.querySelector(".nav-overlay");

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navOverlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});

// Close nav when clicking a link
document.querySelectorAll(".nav-overlay a").forEach(link => {
    link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navOverlay.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
});

// ===============================
// SCROLL-DOWN BUTTON
// ===============================
const scrollDown = document.querySelector(".scroll-down");
if (scrollDown) {
    scrollDown.addEventListener("click", () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    });
}

// ===============================
// GSAP ANIMATIONS
// ===============================
gsap.registerPlugin(ScrollTrigger);

// HERO ANIMATION
gsap.from(".medical-hero h1", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out",
});
gsap.from(".medical-hero p", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
});

// SECTION FADE-IN ON SCROLL
gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 60,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
    });
});

// ===============================
// TESTIMONIAL SLIDER
// ===============================
const testimonials = document.querySelector(".testimonial-cards");
let scrollPosition = 0;

function autoSlide() {
    if (!testimonials) return;

    const cardWidth = testimonials.querySelector(".testimonial-card").offsetWidth + 20;
    scrollPosition += cardWidth;

    if (scrollPosition >= testimonials.scrollWidth - testimonials.clientWidth) {
        scrollPosition = 0;
    }

    testimonials.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
    });
}

setInterval(autoSlide, 3500); // every 3.5s

// ===============================
// SMOOTH SCROLL FOR NAV LINKS
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth",
            });
        }
    });
});

// ===============================
// FORM VALIDATION (BASIC)
// ===============================
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", (e) => {
        const name = form.querySelector("#name").value.trim();
        const email = form.querySelector("#email").value.trim();
        const medicine = form.querySelector("#medicine").value.trim();

        if (!name || !email || !medicine) {
            e.preventDefault();
            alert("Please fill in all required fields before submitting.");
        }
    });
}
gsap.utils.toArray(".bg-shape").forEach(shape => {
    gsap.to(shape, {
        x: () => gsap.utils.random(-20, 20),
        y: () => gsap.utils.random(-20, 20),
        duration: gsap.utils.random(5, 10),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});