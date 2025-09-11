// Animate timeline, education, achievements, and contact on scroll
document.addEventListener("DOMContentLoaded", () => {
  // Select all animated items
  const items = document.querySelectorAll(
    ".timeline-item, .edu-item, .achievement-item, .contact-info, .contact-form"
  );

  function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    items.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;

      // When item enters the viewport
      if (itemTop < triggerBottom) {
        item.classList.add("show");

        // Handle timeline dots separately
        const dot = item.querySelector(".timeline-dot");
        if (dot) {
          dot.classList.add("active");
        }
      }
    });
  }

  // Run on scroll
  window.addEventListener("scroll", checkScroll);

  // Run once on page load
  checkScroll();
});
