// Author: Abdus Samad Arefi
// Date: 2025-02-24



// Swiper JS
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 1000,
  autoplay: {
    delay: 3000,
    reverseDirection: true
  },
  loop: true,



  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      0:{
          slidesPerView: 1
      },
      480:{
          slidesPerView: 2,
          spaceBetween: 20,
      },
      640:{
          slidesPerView: 4,
          spaceBetween: 20,
      }
  },

});