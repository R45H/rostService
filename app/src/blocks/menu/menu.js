// open and close side menu
$(".menu-toggle").click(function () {
    $('.side-menu').toggleClass('open');
    $(".menu-toggle").toggleClass('active');
    $('body').toggleClass('shadow');

    //close menu on body click
    $(document).on('click', function (e) {
        var target = e.target;

        if ($(target).closest(".side-menu").length > 0 ) {
            if(!$(target).hasClass('menu__link')){
                 return false;
            }
        } else {
            $('.menu-toggle').removeClass("active");
            $('.side-menu').removeClass('open');
            $('body').removeClass("shadow");
        }
    });

    return false;
});
