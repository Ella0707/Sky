let reviewSlider = new Swiper('.reviews__content', {
    slidesPerView: 1.5,
    speed: 800,
    spaceBetween: 53,
    slidesOffsetAfter: 30,

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

      breakpoints: {
        769: {
          slidesPerView: 3,
          spaceBetween: 71,
        }
    }
});


let partnersSlider = new Swiper('.partners__content', {
  slidesPerView: 2,
  speed: 800,

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

    breakpoints: {
      769: {
        slidesPerView: 5,
      }
  }
});


$('.header__burger-menu').on('click', function (e) {
  e.preventDefault();
  document.body.classList.toggle('lock');
  $('.header__burger-menu').toggleClass("active");
  $('.header__menu').toggleClass("active");
  $('.header').toggleClass("active");
});


$(".menu-item-open").click(function(e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $(this).next(".header__menu-sub-list").toggleClass('active');
})




const seeAlsoSlider = new Swiper('.seeAlso__slider', {
  direction: 'horizontal',
  slidesPerView: 3,
  slidesPerGroup: 3,
  speed: 800,
  slidesOffsetAfter: 30,

  pagination: {
      el: '.seeAlso__pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
          if (number < 10) {
              return ('0' + number);
          } else {
              return number;
          }
      },
      formatFractionTotal: function (number) {
          if (number < 10) {
              return ('0' + number);
          } else {
              return number;
          }
      },
  },

  navigation: {
      nextEl: '.seeAlso__paginationArrow--right',
      prevEl: '.seeAlso__paginationArrow--left',
  },

  scrollbar: {
      el: '.seeAlso__scrollBar',
      draggable: true,
  },

  breakpoints: {
      2880: {
          spaceBetween: 90,
      },
      1920: {
          spaceBetween: 60,
      },
      1440: {
          spaceBetween: 50,
      },
      768: {
          spaceBetween: 40,
      },
      600: {
          spaceBetween: 30,
          slidesPerView: 1.5,
          slidesPerGroup: 1,
      },
      0: {
          spaceBetween: 20,
          slidesPerView: 1.5,
          slidesPerGroup: 1,
      }
  },
});