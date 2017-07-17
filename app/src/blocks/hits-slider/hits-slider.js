$('.hits-slider').slick({
    // autoplay: true,
    // autoplaySpeed: 10000,
    dots: false,
    infinite: false,
    prevArrow: '<div class="hits-slider__prev"></div>',
    nextArrow: '<div class="hits-slider__next"></div>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 2,
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false
            }
        }
    ]
});