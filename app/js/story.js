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

  $('.js-image-carousel--full-bleed').jCarouselLite({
    auto: true,
    timeout: 5*1000,
    responsive: true
  });

  $(window).trigger('resize');

})(jQuery);