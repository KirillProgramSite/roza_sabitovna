const sliderFitback = new Swiper('.fitback', {
  loop: true,
  effect:"coverflow",
  simulateTouch:false,
  autoplay:true,
  speed:1000,
  disableOnInteraction:false,

  autoplay: {
   delay: 3000,
 },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});