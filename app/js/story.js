(function($) {

  "use strict";

  $('.js-image-carousel').jCarouselLite({
    auto: true,
    timeout: 10*1000,
    responsive: true
  });

  $(window).trigger('resize');

})(jQuery);