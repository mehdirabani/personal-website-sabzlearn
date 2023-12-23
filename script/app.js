const navToggle = document.querySelector(".nav__toggle");
const menuMobile = document.querySelector(".menu");
const resumeListItems = document.querySelectorAll(".resume-list__item");
const portfolioListItems = document.querySelectorAll(".portfolio-list__item");
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

portfolioListItems.forEach((portfolioListItem) => {
  portfolioListItem.addEventListener("click", function () {
    document
      .querySelector(".portfolio-list__item--active")
      .classList.remove("portfolio-list__item--active");
    document
      .querySelector(".portfolio-content--show")
      .classList.remove("portfolio-content--show");
    this.classList.add("portfolio-list__item--active");
    let contentId = this.getAttribute("deta-content-id");
    document.querySelector(contentId).classList.add("portfolio-content--show");
  });
});



// Slider
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  spaceBetween: 40,
  breakpoints: {
    720: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});
