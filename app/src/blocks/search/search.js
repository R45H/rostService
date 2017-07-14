// var close_search_list = function () {
//     $('.search__list').removeClass('search__list_open');
// };
// var m_open_search_list = function () {
//     $('.search__list').slideDown().addClass('search__list_open');
// };

$('.search__selector').click(function () {
    $(".search__selector-vis").removeClass('search__selector-vis_active');
    var activeSelect = $(this).closest(".search__selector-vis").addClass('search__selector-vis_active');

    if ($(window).width() < 768) {
        var yCoord = activeSelect.offset().top - $('.search').offset().top + activeSelect.height();
        $('.search__list').css({top: yCoord}).slideDown().addClass('search__list_open');
    } else {
        $('.search__list').addClass('search__list_open');
    }

    $(document).click(function (e) {
        var target = e.target;
        if (($(target).closest('.search__list').length == 0) || ($(target).closest('.search').length == 0)){
            if ($(window).width() < 768) {
                $('.search__list').slideUp();
            }else {
                $('.search__list').removeClass('search__list_open');
            }
            return false;
        }
        return false;
    });
    return false;
});

$('.search__list .list__item').click(function () {
    var value = $(this).text();
    $('.search__selector-vis_active').find('.search__selector').attr("value", value);
    $('.search__list').removeClass('search__list_open');
    $(".search__selector-vis").removeClass('search__selector-vis_active');
});