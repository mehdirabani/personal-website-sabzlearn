const navToggle = document.querySelector(".nav__toggle");

navToggle.addEventListener("click", function () {
  navToggle.clssList.toggle("nav__toggle--open");
});
