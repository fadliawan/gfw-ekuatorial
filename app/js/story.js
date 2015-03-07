(function($) {

  "use strict";

  $('.js-image-carousel').jCarouselLite({
    auto: true,
    timeout: 5*1000,
    responsive: true
  });

  $(window).trigger('resize');

})(jQuery);