'use strict';

const intro_slider = new Swiper('.intro', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    speed: 400,

    navigation: {
        nextEl: '.intro__navigation-arrow-right',
        prevEl: '.intro__navigation-arrow-left',
    },

    pagination: {
        el: '.intro__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },

    on: {
        init: function () {
            $('.intro__navigation-time-block').addClass('animate');
        },
        autoplayStop: function () {
            $('.intro__navigation-time-block').removeClass('animate');
        },
        slideChange: function () {
            $('.intro__navigation-time-block').removeClass('animate');
        },
        transitionEnd: function (slider) {
            if (slider.autoplay.running) {
                $('.intro__navigation-time-block').addClass('animate');
            }
        },
    }
});

const stages_slider = new Swiper('.stages__slider', {
    direction: 'horizontal',
    slidesPerView: 4.42,
    speed: 400,
    spaceBetween: 45,

    navigation: {
        nextEl: '.stages__navigation-arrow-right',
        prevEl: '.stages__navigation-arrow-left',
    },

    pagination: {
        el: '.stages__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },

    on: {
        init: function () {
            $('.stages__item')[4].classList.add('last');
        },
        autoplayStop: function () {
            $('.stages__navigation-time-block').removeClass('animate');
        },
        slideChange: function (slider) {
            if (stages_slider.activeIndex % 2 !== 0) {
                $('.stages__bg-line').addClass('reverse');
            } else {
                $('.stages__bg-line').removeClass('reverse');
            }
            let items = $('.stages__item'),
                index = stages_slider.activeIndex + 4,
                index_before = index - 1;
            items[index_before].classList.remove('last');
            if (index !== items.length) {
                items[index].classList.add('last');
                $('.stages__slider').removeClass('last');
            } else {
                $('.stages__wrapper').css('transform', 'translateX(' + (slider.previousTranslate - 407) + 'px)');
            }
            $('.stages__navigation-time-block').removeClass('animate');
        },
        transitionEnd: function (slider) {
            if (slider.autoplay.running) {
                $('.stages__navigation-time-block').addClass('animate');
            }
        },
    }
});