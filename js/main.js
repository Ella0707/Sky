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
    if ($(this).is(':checked')) {
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


$(".menu-item-open").click(function (e) {
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



// Табы в табах калькулятор
class Tabs {
    constructor(root) {
        this.root = root;
        this.list = this.root.querySelector(':scope > [data-list]');
        this.buttons = new Map([...this.list.querySelectorAll(':scope > [data-target]')]
            .map(entry => [
                entry.dataset.target,
                entry,
            ])
        );
        this.containers = new Map([...this.root.querySelectorAll(':scope > [data-tab]')]
            .map(entry => [entry.dataset.tab, entry])
        );
        this.salt = Math.random().toString(36).slice(2);
        this.current = null;
        this.active = null;
    }

    select(name) {
        const keys = [...this.buttons.keys()];

        for (let [key, button] of this.buttons.entries()) {
            button.setAttribute('aria-selected', key === name);
        }

        for (let [key, container] of this.containers.entries()) {
            if (key === name) {
                container.removeAttribute('hidden');
            } else {
                container.setAttribute('hidden', true);
            }
        }

        this.active = keys.indexOf(name);
    }

    init() {
        const keys = [...this.buttons.keys()];

        this.list.setAttribute('role', 'tablist');

        this.list.addEventListener('keydown', event => {
            if (event.code === 'Home') {
                event.preventDefault();

                this.buttons.get(keys[0]).focus();
            }

            if (event.code === 'End') {
                event.preventDefault();

                this.buttons.get(keys[keys.length - 1]).focus();
            }

            if (event.code === 'ArrowLeft') {
                event.preventDefault();

                this.buttons.get(keys[Math.max(0, this.current - 1)]).focus();
            }

            if (event.code === 'ArrowRight') {
                event.preventDefault();

                this.buttons.get(keys[Math.min(keys.length - 1, this.current + 1)]).focus();
            }
        });

        for (let [key, button] of this.buttons.entries()) {
            button.setAttribute('tabindex', '0');
            button.setAttribute('id', `button_${this.salt}_${key}`);
            button.setAttribute('role', 'tab');
            button.setAttribute('aria-controls', `container_${this.salt}_${key}`);

            button.addEventListener('click', event => {
                event.preventDefault();

                this.select(key);
            });

            button.addEventListener('focus', event => {
                this.current = keys.indexOf(key);
            });

            button.addEventListener('keypress', event => {
                if (event.code === 'Enter' || event.code === 'Space') {
                    event.preventDefault();

                    this.select(key);
                }
            });
        }

        for (let [key, container] of this.containers.entries()) {
            container.setAttribute('id', `container_${this.salt}_${key}`);
            container.setAttribute('role', 'tabpanel');
            container.setAttribute('aria-labelledby', `button_${this.salt}_${key}`);
        }

        this.select(keys[0]);
    }

    static create(element) {
        const instance = new Tabs(element);
        instance.init();

        return instance;
    }
}

const containers = document.querySelectorAll('[data-tabs]');

for (let container of containers) {
    const tabs = Tabs.create(container);
    console.log(tabs)
}



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
const calc_amount = function () {
    let amount = 0;
    $('.calculate__calc-price.check').find('span').each(function () {
        amount = amount + Number($(this).text().slice(0, -1));
    });
    $('.calculate__total').text(amount);
};



// Подсчет стоимости услуги
const calculate = function (id, quantity) {
    $('.' + id).each(function () {
        let price = $(this).attr('price');
        $(this).find('input').attr('value', price * quantity);
        $(this).find('span').html(price * quantity + '<sup>₽</sup>');
    });

    calc_amount();
};

// Добавление класса для открытия контента для мобильной версии
const toggleCalcPriceInfo = function () {
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

$('.calculate__checkbox').click(function () {
    if ($(this).find('input').prop('checked')) {
        $(this).addClass('check');
    } else {
        $(this).removeClass('check');
    }
});



// Подсчет стоимости услуг и вывод data-rental
const rent_calculate = function () {
    let amount = 0;
    $('.rent-calculate__quantity').each(function () {
        amount = amount + $(this).attr('value') * $(this).attr('price');
    });
    $('.rent-calculate__input-radio').each(function () {
        if ($(this).prop('checked')) {
            amount = amount + Number($(this).attr('price'));
        }
    });
    $('.rent-calculate__price').each(function () {
        let amount_disc = amount * (1 - $(this).parent().attr('discount') / 100);
        $(this).text('₽ ' + amount_disc);
    });
    $('.rent-calculate__total').text(function () {
        $('.rent-calculate__offer-input').each(function () {
            if ($(this).prop('checked')) {
                let discount = Number($(this).parent().find('.rent-calculate__price-block').attr('discount'));
                if (discount > 0) {
                    $('.rent-calculate__total').text(amount * (1 - discount / 100));
                    $('.rent-calculate__total-price--old .rent-calculate__total').text(amount);
                    $('.rent-calculate__total-action').text(discount + '%');
                    $('.rent-calculate__total-price--old').addClass('show');
                    $('.rent-calculate__total-action-text').addClass('show');
                } else {
                    $('.rent-calculate__total').text(amount);
                    $('.rent-calculate__total-price--old').removeClass('show');
                    $('.rent-calculate__total-action-text').removeClass('show');
                }
            }
        });
    });
}

// Функция для подсчет изменений во время изменения чекбокса
$('.rent-calculate__offer-input').change(function () {
    rent_calculate();
});

// Функция для выбора количества услуг data-rental
$('.rent-calculate__minus-icon').click(function () {
    let count = $(this).parent().find('.rent-calculate__quantity');
    if (count.attr('value') > 0) {
        count.attr('value', count.attr('value') - 1);
    }

    rent_calculate();
});

// Функция для выбора количества услуг data-rental
$('.rent-calculate__plus-icon').click(function () {
    let count = $(this).parent().find('.rent-calculate__quantity');
    count.attr('value', Number(count.attr('value')) + 1);

    rent_calculate();
});

// Функция для подсчет изменений во время изменения чекбокса
$('.rent-calculate__input-radio').change(function () {
    rent_calculate();
});


// range-slider

var $range = $(".cpu-slider"),
    $input = $(".cpu-input"),
    min = 0;
max = 80;


$range.ionRangeSlider({
    type: "single",
    skin: "round",
    min: min,
    max: max,
    onStart: function (data) {
        $input.prop("value", data.from);
    },
    onChange: function (data) {
        $input.prop("value", data.from);
    }
});

var $ramRange = $(".ram-slider"),
    $ramInput = $(".ram-input"),
    min = 0;
max = 640;


$ramRange.ionRangeSlider({
    type: "single",
    skin: "round",
    min: min,
    max: max,
    onStart: function (data) {
        $ramRange.prop("value", data.from);
    },
    onChange: function (data) {
        $ramInput.prop("value", data.from);
    }
});

var $sasRange = $(".sas-slider"),
    $sasInput = $(".sas-input"),
    min = 0;
max = 4000;


$sasRange.ionRangeSlider({
    type: "single",
    skin: "round",
    min: min,
    max: max,
    onStart: function (data) {
        $sasRange.prop("value", data.from);
    },
    onChange: function (data) {
        $sasInput.prop("value", data.from);
    }
});

var $ssdRange = $(".ssd-slider"),
    $ssdInput = $(".ssd-input"),
    min = 0;
max = 4000;


$ssdRange.ionRangeSlider({
    type: "single",
    skin: "round",
    min: min,
    max: max,
    onStart: function (data) {
        $ssdRange.prop("value", data.from);
    },
    onChange: function (data) {
        $ssdInput.prop("value", data.from);
    }
});

var $hddRange = $(".hdd-slider"),
    $hddInput = $(".hdd-input"),
    min = 0;
max = 4000;


$hddRange.ionRangeSlider({
    type: "single",
    skin: "round",
    min: min,
    max: max,
    onStart: function (data) {
        $hddRange.prop("value", data.from);
    },
    onChange: function (data) {
        $hddInput.prop("value", data.from);
    }
});


var $trafficRange = $(".traffic-slider"),
    $trafficInput = $(".traffic-input"),
    min = 0;
max = 4000;


$trafficRange.ionRangeSlider({
    type: "single",
    skin: "round",
    min: min,
    max: max,
    onStart: function (data) {
        $trafficRange.prop("value", data.from);
    },
    onChange: function (data) {
        $trafficInput.prop("value", data.from);
    }
});


var $ipRange = $(".ip-slider"),
    $ipInput = $(".ip-input"),
    min = 0;
max = 4000;


$ipRange.ionRangeSlider({
    type: "single",
    skin: "round",
    min: min,
    max: max,
    onStart: function (data) {
        $ipRange.prop("value", data.from);
    },
    onChange: function (data) {
        $ipInput.prop("value", data.from);
    }
});


var $serverRange = $(".server-slider"),
    $serverInput = $(".server-input"),
    min = 0;
max = 4000;


$serverRange.ionRangeSlider({
    type: "single",
    skin: "round",
    min: min,
    max: max,
    onStart: function (data) {
        $serverRange.prop("value", data.from);
    },
    onChange: function (data) {
        $serverInput.prop("value", data.from);
    }
});


var $officeRange = $(".office-slider"),
    $officeInput = $(".office-input"),
    min = 0;
max = 4000;


$officeRange.ionRangeSlider({
    type: "single",
    skin: "round",
    min: min,
    max: max,
    onStart: function (data) {
        $officeRange.prop("value", data.from);
    },
    onChange: function (data) {
        $officeInput.prop("value", data.from);
    }
});


var $SQLRange = $(".SQL-slider"),
    $SQLInput = $(".SQL-input"),
    min = 0;
max = 4000;


$SQLRange.ionRangeSlider({
    type: "single",
    skin: "round",
    min: min,
    max: max,
    onStart: function (data) {
        $SQLRange.prop("value", data.from);
    },
    onChange: function (data) {
        $SQLInput.prop("value", data.from);
    }
});


var $mailRange = $(".mail-slider"),
    $mailInput = $(".mail-input"),
    min = 0;
max = 4000;


$mailRange.ionRangeSlider({
    type: "single",
    skin: "round",
    min: min,
    max: max,
    onStart: function (data) {
        $mailRange.prop("value", data.from);
    },
    onChange: function (data) {
        $mailInput.prop("value", data.from);
    }
});



// переключение класса актив у  табов в калькуляторе 
$(".tabs__button").click(function (e) {
    e.preventDefault();
    $(".tabs__button").removeClass('active');
    $(this).addClass('active');
})


// переключение класса актив у внутренних табов в калькуляторе 
$(".tabs__button-inner").click(function (e) {
    e.preventDefault();
    $(".tabs__button-inner").removeClass('active');
    $(this).addClass('active');
})


$(".packages__content-title").click(function (e) {
    e.preventDefault();
    $(".packages__content-title").removeClass('active');
    $(this).addClass('active');
})


//   Табы в цене стр услуги
const tabsBtn = document.querySelectorAll(".tab-btn");
const tabsItems = document.querySelectorAll(".tab-item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tab-btn').click();





