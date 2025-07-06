document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", handleParallax);

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
