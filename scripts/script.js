const mySwiper = new Swiper(".main-brands__swiper", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //   spaceBetween: 16,
  breakpoints: {
    320: { enabled: true },
    768: { enabled: false },
  },
});
let repairBrandsSection = document.querySelector(".main-brands");
console.log(repairBrandsSection);

let repairBrandsSwiper = repairBrandsSection.querySelector(
  ".main-brands__swiper"
);
console.log(repairBrandsSwiper);

let wrapperRepairBrands = repairBrandsSection.querySelector(
  ".main-brands__cards"
);
let brendsButtonMore = repairBrandsSection.querySelector(
  ".main-brands__swiper-button"
);
let buttonIcon = brendsButtonMore.children;
console.log(buttonIcon);
brendsButtonMore.addEventListener("click", function () {
  if (repairBrandsSection.classList.contains("main-brands--larger")) {
    repairBrandsSection.classList.remove("main-brands--larger");
    wrapperRepairBrands.classList.remove("main-brands__cards--larger");
    brendsButtonMore.classList.remove("button_icon--rotate");
    brendsButtonMore.textContent = "Показать все";
  } else {
    repairBrandsSection.classList.add("main-brands--larger");
    wrapperRepairBrands.classList.add("main-brands__cards--larger");
    brendsButtonMore.classList.add("button_icon--rotate");

    brendsButtonMore.textContent = "Скрыть";
  }
});
