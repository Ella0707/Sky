// селект на странице поддержка среднего бизнеса в форме

let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
      this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
      let text = this.innerText,
          select = this.closest('.select'),
          currentText = select.querySelector('.select__current');
      currentText.innerText = text;
      select.classList.remove('is-active');
  }
};

select();

// счетчик на странице поддержка ср бизнеза
const counter = function () {
  const btns = document.querySelectorAll('.counter__btn');


  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector('.counter__value');
      const currentValue = +inp.value;
      let newValue;

      if (direction === 'plus') {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }

      inp.value = newValue;
    })
  })

}

counter();



// выбор акции стр. поддрежка ср бизнеса 

$(".payment__checkbox-input").on('click', function () {
  if ( $(this).is(':checked') ) {
    $(this).parent(this).addClass('chose');
  }
  else {
    $(this).parent(this).removeClass('chose');
  }
})


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


// открытие доп информации в калькуляторе страницы услуг
$(document).ready(function () {
  $('.spoller-item-wrap').click(function (event) {
      $(this).toggleClass('active').next().slideToggle(300);
  });
});

// Табы расчет стоимости страница услуг
const tabsBtn   = document.querySelectorAll(".tab-btn");
const tabsItems = document.querySelectorAll(".tab-item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tab-btn').click();



// range-slider

var $range = $(".js-range-slider"),
    $input = $(".js-input"),
    min = 0;
    max = 80;
    

$range.ionRangeSlider({
    type: "single",
    skin: "round",
    min: min,
    max: max,
    onStart: function(data) {
        $input.prop("value", data.from);
    },
    onChange: function(data) {
        $input.prop("value", data.from);
    }
});




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


// Подсчет итоговой суммы
let calc_amount = function () {
  let amount = 0;
  $('.calculate__calc-price.check').find('span').each(function () {
      amount = amount + Number($(this).text().slice(0, -1));
  });
  $('.calculate__total').text(amount);
};

// Подсчет стоимости услуги
let calculate = function (id, quantity) {
  $('.' + id).each(function () {
      let price = $(this).attr('price');
      $(this).find('input').attr('value', price * quantity);
      $(this).find('span').html(price * quantity + '<sup>₽</sup>');
  });

  calc_amount();
};

// Добавление класса для открытия контента для мобильной версии
let toggleCalcPriceInfo = function () {
  $('.calculate__calc-row').each(function () {
      if ($(this).find('.calculate__amount').attr('value') > 0) {
          $(this).addClass('show');
      } else {
          $(this).removeClass('show');
      }
  });
};

// Настройка кастомных чекбоксов
$('.calculate__calc-price').click(function () {
  $('.calculate__calc-price').each(function () {
      if ($(this).find('input').prop('checked')) {
          $(this).addClass('check');
      } else {
          $(this).removeClass('check');
      }
  });

  calc_amount();
});

// Функция для выбора количества услуг
$('.calculate__minus-icon').click(function () {
  let count = $(this).parent().find('.calculate__amount');
  if (count.attr('value') > 0) {
      count.attr('value', count.attr('value') - 1);
  }

  calculate(count.attr('id'), count.attr('value'));
  toggleCalcPriceInfo();
});

// Функция для выбора количества услуг
$('.calculate__plus-icon').click(function () {
  let count = $(this).parent().find('.calculate__amount');
  count.attr('value', Number(count.attr('value')) + 1);

  calculate(count.attr('id'), count.attr('value'));
  toggleCalcPriceInfo();
});

$

$('.calculate__checkbox').click(function () {
  if ($(this).find('input').prop('checked')) {
      $(this).addClass('check');
  } else {
      $(this).removeClass('check');
  }
});

