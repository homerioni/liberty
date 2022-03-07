'use strict';

$(document).ready(function () {
    let body_lock = function () {
        $('body').addClass('lock');
    };
    let body_unlock = function () {
        $('body').removeClass('lock');
    };

    // Маска для тедефона
    $('.input-phone').mask('+7 (999) 999-99-99');

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
        body_lock();
    });
    $('.header__menu-close').click(function () {
        $('.header__menu').removeClass('open');
        body_unlock()
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

    // Страница prices.html настройка табов
    $('.page-price-block__tab').click(function () {
        let tab = $(this);
        setTimeout(function () {
            tab.toggleClass('open');
        }, 100)
        tab.parent().find('.prices').slideToggle(500);
    });

    // Закрытие для модальных
    let close = function (modal) {
        modal.removeClass('open');
        setTimeout(function () {
            modal.removeClass('send');
        }, 300);
        body_unlock();
    };

    // Модальное окно modal-callback
    $('.popup-callback').click(function () {
        $('.modal-callback').addClass('open');
        body_lock();
    });
    $('.modal-callback__start-btn').click(function () {
        $('.modal-callback').addClass('send');
    });
    $('.modal-callback__close').click(function () {
        close($('.modal-callback'));
    });
    $('.modal-callback__finish-btn').click(function () {
        close($('.modal-callback'));
    });
    $('.modal-callback__bg').click(function () {
        close($('.modal-callback'));
    });

    // Модальное окно modal-help
    $('.popup-help').click(function () {
        $('.modal-help').addClass('open');
        body_lock();
    });
    $('.modal-help__start-btn').click(function () {
        $('.modal-help').addClass('send');
    });
    $('.modal-help__close').click(function () {
        close($('.modal-help'));
    });
    $('.modal-help__finish-btn').click(function () {
        close($('.modal-help'));
    });
    $('.modal-help__bg').click(function () {
        close($('.modal-help'));
    });

    // Галерея для одной фотки
    $('.open-gallery').click(function () {
        $('.modal-gallery__body').html('<img src="' + $(this).parent().find('img').attr('src') + '" alt="">');
        $('.modal-gallery').addClass('open');
        body_lock();
    });
    $('.modal-gallery__close').click(function () {
        close($('.modal-gallery'));
    });
    $('.modal-gallery__bg').click(function () {
        close($('.modal-gallery'));
    });

    // Галерея лицензий
    $('.licenses-gallery').click(function () {
        $('.modal-licenses-gallery').addClass('open');
        body_lock();
    });
    $('.modal-licenses-gallery__close').click(function () {
        close($('.modal-licenses-gallery'));
    });
    $('.modal-licenses-gallery__bg').click(function () {
        close($('.modal-licenses-gallery'));
    });

    // Модальное окно modal-calculate
    $('.popup-calculate').click(function () {
        $('.modal-calculate').addClass('open');
        body_lock();
    });
    $('.modal-calculate__btn--one').click(function () {
        $('.modal-calculate').addClass('two');
    });
    $('.modal-calculate__btn--two').click(function () {
        $('.modal-calculate').removeClass('two').addClass('three');
    });
    $('.modal-calculate__btn--three').click(function () {
        $('.modal-calculate').removeClass('three').addClass('finish');
    });
    $('.modal-calculate__close').click(function () {
        $('.modal-calculate').removeClass('open');
        setTimeout(function () {
            $('.modal-calculate').removeClass('two three finish');
        }, 300);
        body_unlock();
    });
    $('.modal-calculate__bg').click(function () {
        $('.modal-calculate').removeClass('open');
        setTimeout(function () {
            $('.modal-calculate').removeClass('two three finish');
        }, 300);
        body_unlock();
    });
    $('.modal-calculate__btn--finish').click(function () {
        $('.modal-calculate').removeClass('open');
        setTimeout(function () {
            $('.modal-calculate').removeClass('two three finish');
        }, 300);
        body_unlock();
    });
    if (!$('.modal-calculate').hasClass('finish')) {
        $('.modal-calculate__step-item--one').click(function () {
            $('.modal-calculate').removeClass('two three');
        });
        $('.modal-calculate__step-item--two').click(function () {
            $('.modal-calculate').removeClass('three').addClass('two');
        });
        $('.modal-calculate__step-item--three').click(function () {
            $('.modal-calculate').removeClass('two').addClass('three');
        });
    }
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