(function($) {

  "use strict";

  var ACTIVE_PIN_CLASS = 'active';

  /// Maps ///

  var $allMaps = $('.js-map:not(.js-map-indonesia)');
  var $allPins = $('.js-map-pin');
  // var $allPinLines = $('.js-pin-line');
  // var $allPinTexts = $('.js-pin-text');

  var locations = ['aceh', 'riau', 'tesso', 'kalteng', 'papua'];
  var $maps = {}, $area = {}, $pins = {};

  $allMaps.on('click', function() {
    $allPins.removeClass(ACTIVE_PIN_CLASS);
    $(this).fadeOut();
  });

  locations.forEach(function(location) {
    $maps[location] = $('.js-map-' + location);
    $area[location] = $('.js-area-' + location);
    $pins[location] = $('.js-map-pin-' + location);

    $pins[location].on('mouseenter', function() {
      if ($pins[location].hasClass(ACTIVE_PIN_CLASS)) return;

      $allMaps.fadeOut();

      var mapLocation = location === 'tesso' ? 'riau' : location;
      $maps[mapLocation].fadeIn();

      showPin($pins[location]);
    });
  });

  function showPin($pin) {
    if ($pin.hasClass(ACTIVE_PIN_CLASS)) return;

    $allPins.removeClass(ACTIVE_PIN_CLASS);
    $pin.addClass(ACTIVE_PIN_CLASS);
  }

  /// Mute Button ///

  var introVideo = $('.js-intro-video')[0];
  var $muteButton = $('.js-mute-button');

  $muteButton.on('click', function () {
    introVideo.volume = 1 - introVideo.volume;

    $muteButton.toggleClass('muted');
  });

})(jQuery);