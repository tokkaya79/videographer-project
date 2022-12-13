$(function () {

    $('.header__lang-btn').on('click', function () {
        $('.header__lang-btn').removeClass('header__lang-btn--active');
        $(this).addClass('header__lang-btn--active');
    });


    $('.slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>'
    });

    $('.slider-mirrored').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev__mirrored"><img src="images/icons/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next__mirrored"><img src="images/icons/arrow-right.svg" alt=""></button>'
    });

    $('.form-filter__btn').on('click', function () {
        $('.form-filter__btn').removeClass('form-filter__btn--active');
        $(this).addClass('form-filter__btn--active');
    });

    $(".deadline").ionRangeSlider({
        grid: true,
        from: new Date().getMonth(),
        values: [
            "week", "1 month", "2 months", "3 months", "6 month", "year"
        ]
    });
});

var custom_values = ["<100$", "<250$", "<500$", "<650$", "<1000$", "∞"];

var my_from = custom_values.indexOf("<650$");
var my_to = custom_values.indexOf("∞");

$(".budget").ionRangeSlider({
    grid: true,
    from: my_from,
    to: my_to,
    values: custom_values
});
