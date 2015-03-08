(function($) {

  "use strict";

  $('.js-image-carousel')
  .jCarouselLite({
    autoCSS: false,
    auto: true,
    timeout: 5*1000,
    btnNext: '.js-carousel-arrow--next',
    btnPrev: '.js-carousel-arrow--prev'
  })
  .on('mouseenter', function() {
    $(this).trigger('pauseCarousel');
  })
  .on('mouseleave', function() {
    $(this).trigger('resumeCarousel');
  });

  $('.js-image-carousel--full-bleed')
  .jCarouselLite({
    autoCSS: false,
    auto: true,
    timeout: 5*1000,
    btnNext: '.js-carousel-arrow--next',
    btnPrev: '.js-carousel-arrow--prev',
    responsive: true
  })
  .on('mouseenter', function() {
    $(this).trigger('pauseCarousel');
  })
  .on('mouseleave', function() {
    $(this).trigger('resumeCarousel');
  });

  $(window)
  .on('resize', function() {
    $('.js-image-carousel--full-bleed').trigger('refreshCarousel');
  })
  .trigger('resize');

})(jQuery);