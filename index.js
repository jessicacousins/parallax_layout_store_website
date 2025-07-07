document.addEventListener("DOMContentLoaded", () => {
  // bubbles
  const bubbleContainers = document.querySelectorAll(".bubbles");
  bubbleContainers.forEach((container) => {
    for (let i = 0; i < 20; i++) {
      const b = document.createElement("div");
      b.classList.add("bubble");
      const size = Math.random() * 40 + 20; // reminder: 20px–60px
      b.style.width = `${size}px`;
      b.style.height = `${size}px`;
      b.style.left = `${Math.random() * 100}%`;
      b.style.animationDuration = `${Math.random() * 6 + 4}s`;
      b.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(b);
    }
  });

  // parallax on scroll effect
  window.addEventListener("scroll", handleParallax);

  // reveal-on-scroll effect
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  items.forEach((item) => observer.observe(item));
});

function handleParallax() {
  const scrollY = window.pageYOffset;
  document.querySelectorAll("[data-parallax-speed]").forEach((section) => {
    const speed = parseFloat(section.dataset.parallaxSpeed);
    const offset = section.offsetTop;
    const yPos = -(scrollY - offset) * speed;
    section.style.backgroundPosition = `center ${yPos}px`;
  });
}
