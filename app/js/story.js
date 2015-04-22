// Carousel
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

// Mapbox GL
(function($) {

  "use strict";

  mapboxgl.accessToken = 'pk.eyJ1IjoiZWt1YXRvcmlhbCIsImEiOiJGM0JvYm9nIn0.u9T-Oicf307a3MwSd5AfqQ';

  var VideoWithMap = {

    data: null,

    map: null,

    $video: $('.js-swm-video'),

    init: function() {
      this.initMap();
    },

    initText: function() {


    },

    initVideo: function() {

    },

    initMap: function() {
      this.map = new mapboxgl.Map({
        container: 'swm-map',
        style: 'https://www.mapbox.com/mapbox-gl-styles/styles/outdoors-v7.json',
        center: [-2.6160421, 114.5014161],
        zoom: 9
      });
    }

  };

  VideoWithMap.init();

})(jQuery);