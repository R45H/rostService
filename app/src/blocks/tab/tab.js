$('.tab__link').click(function () {
    var aim = $(this).attr('href');
    $('.tab__link').removeClass('tab__link_active');
    $(this).addClass('tab__link_active');
   $('.tab__content').removeClass('visible');
    $(aim).addClass('visible');
    return false;
});