const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.getElementById('navbar');
const header = document.querySelector('#mobileHeader')

hamburgerMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');
  header.classList.toggle('mobileHeaderBarra')
});

navbar.addEventListener('click', () => {
  navbar.classList.toggle('active');
  header.classList.remove('mobileHeaderBarra')
});