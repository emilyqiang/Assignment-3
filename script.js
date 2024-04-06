//linking object to mySwiper element
var swiper = new Swiper(".mySwiper", {
    //slide settings
    slidesPerView: "auto",
    spaceBetween: 30,
    //linking functions to elements
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    }
  });

