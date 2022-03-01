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