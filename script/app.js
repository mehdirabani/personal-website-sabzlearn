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
    document
      .querySelector(".resume__content--show")
      .classList.remove("resume__content--show");
    this.classList.add("resume-list__item--active");
    let contentid = this.getAttribute("deta-content-id");
    document.querySelector(contentid).classList.add("resume__content--show");
  });
});
// slider
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    720: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    1200: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1400: {
      spaceBetween: 30,
      slidesPerView: 4,
    },
  },
});
