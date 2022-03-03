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
        $('body').css('padding-bottom', $('.footer').outerHeight());
    });

    // Бургер меню
    $('.header__burger-icon').click(function () {
        $('.header__menu').addClass('open');
        $('body').addClass('lock');
    });
    $('.header__menu-close').click(function () {
        $('.header__menu').removeClass('open');
        $('body').removeClass('lock');
    });

    // Секция list-services
    $('.list-services__title-block').click(function () {
        $(this).find('.list-services__title-block-btn-icon-block').toggleClass('open');
        $(this).parent().find('.list-services__content-block').slideToggle()
    });
    $('.list-services__item-icon').click(function () {
        $(this).toggleClass('open');
        $(this).parent().parent().find('.list-services__list').slideToggle();
    });

    // Секция doctors описание
    $('.doctors__item-arrow').click(function () {
        let desc_block = $(this).parent().find('.doctors__description-block'),
            item = $(this).parent(),
            open = function () {
            if ($(document).width() > 768) {
                item.css('margin-bottom', 'calc(' + desc_block.outerHeight() + 'px + 9rem)');
            } else {
                item.css('margin-bottom', 'calc(' + desc_block.outerHeight() + 'px + 25rem)');
            }
                desc_block.addClass('show');
                item.addClass('open');
            };

        if (item.hasClass('open')) {
            $('.doctors__item').removeAttr('style').removeClass('open');
            $('.doctors__description-block').removeClass('show');
        } else {
            $('.doctors__item').removeAttr('style').removeClass('open');
            $('.doctors__description-block').removeClass('show');
            setTimeout(open, 300);
        }
    });

    // Секция min-cleansing, ховер для вопроса
    $('.min-cleansing__question').hover(function () {
        $(this).parent().find('.min-cleansing__question-hover-block').fadeToggle(250);
    });

    // Секция recovery-procedure раскрытие текстового блока в мобилке
    $('.recovery-procedure__text-block-btn').click(function () {
        $('.recovery-procedure__text-block').addClass('open');
        $(this).css('display', 'none');
    });
});

let map_icon;
if ($(document).width() > 768) {
    map_icon = 'img/map-icon.svg';
} else {
    map_icon = 'img/map-icon-mob.svg';
}

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.683260, 37.519431],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'Наркологическая клиника Liberty'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: map_icon,
            // Размеры метки.
            iconImageSize: [508, 162],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-508, -162]
        });

    myMap.geoObjects.add(myPlacemark);
});