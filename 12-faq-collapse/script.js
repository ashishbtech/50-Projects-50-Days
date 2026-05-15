const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    // toggle.parentNode targets the specific .faq div wrapped around the button
    toggle.parentNode.classList.toggle('active');
  });
});