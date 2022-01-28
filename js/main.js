let reviewSlider = new Swiper('.reviews__content', {
    slidesPerView: 3,
    speed: 800,
    spaceBetween: 71,
  
    navigation: {
        nextEl: '.reviews__control-arrow-next',
        prevEl: '.reviews__control-arrow-prew',
    },

    scrollbar: {
        el: '.reviews__control-scrollbar',
        draggable: true,
      },

      pagination: {
        el: '.reviews__control-fraction',
        type: 'fraction',
        formatFractionCurrent: function (number) {
          return ('0' + number).slice(-2);
        },
        
        formatFractionTotal: function (number) {
          return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + '<span class="asd">/</span>' + '<span class="' + totalClass + '"></span>';
        }
      },
});


let partnersSlider = new Swiper('.partners__content', {
  slidesPerView: 5,
  speed: 800,
  // spaceBetween: 71,

  navigation: {
      nextEl: '.partners__control-arrow-next',
      prevEl: '.partners__control-arrow-prew',
  },

  scrollbar: {
      el: '.partners__control-scrollbar',
      draggable: true,
    },

    pagination: {
      el: '.partners__control-fraction',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      
      formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + '<span class="asd">/</span>' + '<span class="' + totalClass + '"></span>';
      }
    },
});


$('.header__burger-menu').on('click', function (e) {
  e.preventDefault();
  document.body.classList.toggle('lock');
  $('.header__burger-menu').toggleClass("active");
  $('.header__menu').toggleClass("active");
  $('.header').toggleClass("active");
});