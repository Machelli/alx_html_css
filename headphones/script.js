const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');     // For the "X"
    mobileMenu.classList.toggle('active');    // Show/hide the menu
  });

