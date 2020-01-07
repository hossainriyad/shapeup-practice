$('.carousel1').owlCarousel({
    loop:true,
    nav:false,
    margin:30,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    // Autoplay
    autoplay: {
        delay: 2000,
      },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
