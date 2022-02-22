'use strict';

const intro_slider = new Swiper('.intro', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    speed: 400,

    navigation: {
        nextEl: '.intro__navigation-arrow--right',
        prevEl: '.intro__navigation-arrow--left',
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
        delay: 4600,
        disableOnInteraction: true,
    },
});