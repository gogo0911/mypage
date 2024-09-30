window.addEventListener('load',()=>{
    var swiper = new Swiper(".mySwiper", {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 1000, // 페이드 전환 속도 (밀리초 단위)
        lastedSlides: false,
        loop:true,
        slidesPerView: 1,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
    });
});

window.addEventListener('load',()=>{
  var swiper = new Swiper(".mySwiper2", {
      effect: 'fade',
      fadeEffect: {
          crossFade: true
      },
      speed: 700, // 페이드 전환 속도 (밀리초 단위)
      lastedSlides: false,
      loop:true,
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // }
  });
});