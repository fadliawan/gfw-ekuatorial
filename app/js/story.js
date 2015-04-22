// Carousel
(function($) {

  "use strict";

  if (!$('.js-image-carousel').length) return;

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

  if (!$('.js-swm-video').length) return;

  mapboxgl.accessToken = 'pk.eyJ1IjoiZWt1YXRvcmlhbCIsImEiOiJGM0JvYm9nIn0.u9T-Oicf307a3MwSd5AfqQ';

  var hoverData = [
    {
      src: 'Aerial_Palangkaraya_1',
      title: 'Petak Batuah',
      body: 'Permukiman transmigran pada lahan eks program Pengembangan Lahan Gambut di Kabupaten Kapuas, Kalimantan Tengah. Buruknya akses darat untuk menjual panen beras memicu sebagian transmigran menyerah dan berniat mengganti tanamannya dengan sawit.',
      coords: [-2.6160421, 114.5014161]
    },
    {
      src: 'Aerial_Palangkaraya_2',
      title: 'Resor Lamunti',
      body: 'Total, sudah 2.982 hektare sertifikat tanah garapan di eks program Pengembangan Lahan Gambut yang diserahkan transmigran kepada perusahaan sawit untuk kebun plasma. Tersisa sengketa 187,7 hektare yang menolak nilai ganti rugi yang jauh di bawah ekspektasi.',
      coords: [-2.615245, 114.550969]
    },
    {
      src: 'Aerial_Palangkaraya_3',
      title: 'Desa Dadahup',
      body: 'Masyarakat Dayak Ngaju ialah penghuni asli Desa Dadahup di muara Sungai Kapuas. Turun-temurun mereka mengelola tambak pasang-surut (beje) dan mengusahakan rotan. Sejak proyek lahan gambut dibuka, nyaris seluruh kebun rotan hancur dan beje tak menghasilkan.',
      coords: [-2.6570695, 114.6021289]
    },
    {
      src: 'Aerial_Palangkaraya_4',
      title: 'Jembatan Tumbang Nusa',
      body: 'Menghubungkan Palangkaraya (Kalimantan Tengah) dan Banjarmasin (Kalimantan Selatan). Jembatan sepanjang 10 kilometer tersebut sesungguhnya ruas jalan yang ditinggikan untuk menghindari pasang surut di wilayah rawa gambut.',
      coords: [-2.416534, 114.163688]
    },
    {
      src: 'Aerial_Palangkaraya_5',
      title: 'Taman Nasional Sebangau, Resort Mangkok',
      body: 'Terletak di antara Sungai Sebangau dan Sungai Katingan. Inilah hutan rawa gambut yang masih tersisa di Kalimantan Tengah setelah gagalnya proyek Pengembangan Lahan Gambut sejuta hektare pada 1995.',
      coords: [-2.579775, 114.038755]
    },
    {
      src: 'Palangkaraya_Interview_1',
      title: 'Lambung Oskar Nyalin',
      body: 'Lambung Oskar Nyalin, 61, adalah transmigran lokal asal Desa Dadahup, Kabupaten Kapuas. Wilayah adatnya yang semula bentang tropis dengan kubah-kubah gambut sedalam 20 meter dalam sekejap telah berubah menjadi lahan mandul. ',
      coords: [-2.6570695, 114.6021289]
    }
  ];

  var VideoWithMap = {

    data: null,

    map: null,
    $video: $('.js-swm-video'),
    $title: $('.js-swm-text__title'),
    $body: $('.js-swm-text__body'),

    currentIndex: 0,

    init: function() {
      this.bindEvents();

      this.initText();
      this.initVideo();
      this.initMap();
    },

    bindEvents: function() {
      var self = this;

      $('.js-swm-control--next').on('click', function() {
        self.display(self.nextIndex());
      });

      $('.js-swm-control--prev').on('click', function() {
        self.display(self.prevIndex());
      });
    },

    initText: function() {
      this.displayText(0);
    },

    initVideo: function() {
      this.displayVideo(0);
    },

    initMap: function() {
      this.map = new mapboxgl.Map({
        container: 'swm-map',
        style: 'https://www.mapbox.com/mapbox-gl-styles/styles/outdoors-v7.json',
        center: this.data[0].coords,
        zoom: 11
      });
    },

    display: function(index) {
      this.displayText(index);
      this.displayVideo(index);
      this.map.flyTo(this.data[index].coords);
    },

    displayText: function(index) {
      this.$title.text(this.data[index].title);
      this.$body.text(this.data[index].body);
    },

    displayVideo: function(index) {
      this.$video.find('.js-vid-src--webm').prop('src', 'videos/' + this.data[index].src + '.webm');
      this.$video.find('.js-vid-src--mp4').prop('src', 'videos/' + this.data[index].src + '.mp4');
      this.$video[0].load();
    },

    nextIndex: function() {
      if (++this.currentIndex === this.data.length) {
        this.currentIndex = 0;
      }
      return this.currentIndex;
    },

    prevIndex: function() {
      if (--this.currentIndex < 0) {
        this.currentIndex = this.data.length - 1;
      }
      return this.currentIndex;
    }

  };

  VideoWithMap.data = hoverData;
  VideoWithMap.init();

})(jQuery);