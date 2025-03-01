console.log('test')


console.log('test')

const swiper = new Swiper('.testimonial-container', {
    // Optional parameters
    loop: true,
 
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1200:{
            slidesPerView: 4
        }
    },
  
  });
  console.log('test')
