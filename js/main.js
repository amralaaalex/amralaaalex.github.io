
// Placeholder JS for DataAutomationXP
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for your message! We'll get back to you shortly.");
    form.reset();
  });
});
