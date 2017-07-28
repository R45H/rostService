/**
 * Created by Vasiliy Tsvetkov on 24.07.2017.
 */
$('.spares-slider__wrap').slick({
    // autoplay: true,
    // autoplaySpeed: 10000,
    dots: false,
    infinite: false,
    prevArrow: '<div class="spares-slider__prev"></div>',
    nextArrow: '<div class="spares-slider__next"></div>',
    appendArrows: '.spares-slider__nav',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                dots: true,
	             dotsClass: 'spares-slider__dots',
	             arrows: false
            }
        },
        {
            breakpoint:768,
            settings: {
                slidesToShow: 2,
                dots: false,
                arrows: true
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                dots: true,
	             dotsClass: 'spares-slider__dots',
                arrows: false
            }
        }
    ]
});