'use strict';

$(document).ready(function () {
    $('.video-reviews__item-rating').each(function () {
        let rating = $(this).attr('rating');
        if (rating <= 2) {
            $(this).find('.video-reviews__item-rating-svg:nth-child(-n+' + rating + ')').addClass('orange');
            $(this).parent().find('.video-reviews__item-rating-text').text('Отрицательный отзыв');
        } else if (rating == 3) {
            $(this).find('.video-reviews__item-rating-svg:nth-child(-n+' + rating + ')').addClass('orange');
            $(this).parent().find('.video-reviews__item-rating-text').text('Нейтральный отзыв');
        } else {
            $(this).find('.video-reviews__item-rating-svg:nth-child(-n+' + rating + ')').addClass('green');
            $(this).parent().find('.video-reviews__item-rating-text').text('Положительный отзыв');
        }
    });
});