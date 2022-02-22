'use strict';

$(document).ready(function () {
    // Остановка анимации кружка при управлении слайдером
    $('.intro__navigation-arrow').click(function () {
        $('.intro__navigation-time-block').removeClass('animate');
    });
});