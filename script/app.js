const navToggle = document.querySelector(".nav__toggle");
const menuMobile = document.querySelector(".menu");

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("nav__toggle--open");
  menuMobile.classList.toggle("menu--open");
});
