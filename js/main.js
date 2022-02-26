'use strict';

$(document).ready(function () {
    // Настройка оценок для отзывов
    $('.review-rating').each(function () {
        let rating = $(this).attr('rating');
        if (rating <= 2) {
            $(this).find('.review-rating__svg:nth-child(-n+' + rating + ')').addClass('orange');
            $(this).parent().find('.review-rating__text').text('Отрицательный отзыв');
        } else if (rating == 3) {
            $(this).find('.review-rating__svg:nth-child(-n+' + rating + ')').addClass('orange');
            $(this).parent().find('.review-rating__text').text('Нейтральный отзыв');
        } else {
            $(this).find('.review-rating__svg:nth-child(-n+' + rating + ')').addClass('green');
            $(this).parent().find('.review-rating__text').text('Положительный отзыв');
        }
    });

    // Footer в мобильной версии
    $('.footer__item--title').click(function () {
        $(this).parent().toggleClass('open');
        $('body').css('padding-bottom', $('.footer').height() / 5 + 20 + 'rem');
    });
});