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

if ($(document).width() >= 768) {
    const stages_slider = new Swiper('.stages__slider', {
        direction: 'horizontal',
        slidesPerView: 4.42,
        speed: 400,
        allowTouchMove: false,

        breakpoints: {
            3000: {
                spaceBetween: 70,
            },
            1920: {
                spaceBetween: 45,
            },
            1600: {
                spaceBetween: 37.5,
            },
            1300: {
                spaceBetween: 32,
            },
            1024: {
                spaceBetween: 25,
            },
            769: {
                spaceBetween: 20,
            },
            0: {
                enabled: false,
            }
        },

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
                    $('.stages__wrapper').css('transform', 'translateX(' + (-40.7 * stages_slider.activeIndex) + 'rem)');
                    items.removeClass('last');
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
}

const placement_slider_green = new Swiper('.placement__image-slider--green', {
    direction: 'horizontal',
    slidesPerView: 1,
    speed: 400,

    pagination: {
        el: '.placement__image-pagination--green',
        type: 'bullets',
        clickable: true,
    },

    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
});

const placement_slider_lilac = new Swiper('.placement__image-slider--lilac', {
    direction: 'horizontal',
    slidesPerView: 1,
    speed: 400,

    pagination: {
        el: '.placement__image-pagination--lilac',
        type: 'bullets',
        clickable: true,
    },

    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
});

const placement_slider_orange = new Swiper('.placement__image-slider--orange', {
    direction: 'horizontal',
    slidesPerView: 1,
    speed: 400,

    pagination: {
        el: '.placement__image-pagination--orange',
        type: 'bullets',
        clickable: true,
    },

    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
});

const video_reviews_slider = new Swiper('.video-reviews__slider', {
    direction: 'horizontal',
    slidesPerView: 4,
    speed: 400,

    breakpoints: {
        3000: {
            spaceBetween: 70,
        },
        1920: {
            spaceBetween: 45,
        },
        1600: {
            spaceBetween: 37.5,
        },
        1300: {
            spaceBetween: 32,
        },
        1024: {
            spaceBetween: 25,
        },
        769: {
            spaceBetween: 20
        },
        0: {
            slidesPerView: 1,
            grid: {
                rows: 2,
                fill: 'row',
            },
            pagination: {
                el: '.video-reviews__pagination--mobile',
            },
        }
    },

    navigation: {
        nextEl: '.video-reviews__navigation-arrow-right',
        prevEl: '.video-reviews__navigation-arrow-left',
    },

    pagination: {
        el: '.video-reviews__pagination',
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
            $('.video-reviews__navigation-time-block').addClass('animate');
        },
        autoplayStop: function () {
            $('.video-reviews__navigation-time-block').removeClass('animate');
        },
        slideChange: function () {
            $('.video-reviews__navigation-time-block').removeClass('animate');
        },
        transitionEnd: function (slider) {
            if (slider.autoplay.running) {
                $('.video-reviews__navigation-time-block').addClass('animate');
            }
        },
    }
});