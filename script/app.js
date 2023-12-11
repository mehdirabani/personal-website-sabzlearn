const navToggle = document.querySelector(".nav__toggle");
const menuMobile = document.querySelector(".menu");
const resumeListItems = document.querySelectorAll(".resume-list__item");

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("nav__toggle--open");
  menuMobile.classList.toggle("menu--open");
});

resumeListItems.forEach((resumeListItem) => {
  resumeListItem.addEventListener("click", function () {
    document
      .querySelector(".resume-list__item--active")
      .classList.remove("resume-list__item--active");
    this.classList.add("resume-list__item--active");
  });
});
