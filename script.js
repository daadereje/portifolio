// Animate timeline, education, achievements, and contact on scroll
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(
    ".timeline-item, .edu-item, .achievement-item, .contact-info, .contact-form"
  );

  function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    items.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;

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

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // run on page load
});

// Handle contact form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };

      try {
        const res = await fetch("https://portifolio-gsyt.onrender.com/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

        if (res.ok) {
          alert("✅ Message sent successfully!");
          form.reset();
        } else {
          alert("⚠️ Failed to send message.");
        }
      } catch (err) {
        alert("⚠️ Error connecting to server.");
      }
    });
  }
});
