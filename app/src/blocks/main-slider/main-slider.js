/* Слайдер на главной */
$('.main-slider__wrap').slick({
    // autoplay: true,
    // autoplaySpeed: 10000,
    appendArrows: '.main-slider__nav',
    mobileFirst: true,
    dots: true,
    infinite: false,
    dotsClass: 'main-slider__dots',
    prevArrow: '<div class="main-slider__prev"></div>',
    nextArrow: '<div class="main-slider__next"></div>',
    slidesToShow: 1,
    slidesToScroll: 1
});

