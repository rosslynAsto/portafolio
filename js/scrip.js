var swiper = new Swiper(".mySwiper1", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 3,
    spaceBetween: 50,
      }
    }
   
});

var swiper= new Swiper(".mySwiper2", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },

});

const iconMenu = document.querySelector("#iconMenu");
const menu = document.querySelector("#menu");

iconMenu.addEventListener('click', function(){
  menu.classList.toggle("menu__show");
});
 















