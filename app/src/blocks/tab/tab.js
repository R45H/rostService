(function () {


    var tabs = $('.tab__link');
    var tabs_content = $('.tab__content');
    var aim;

    // получение максимального элемента массива
    var getMaxValue = function (array) {
        var max = array[0];
        for (var i = 0; i < array.length; i++) {
            if (max < array[i]) max = array[i];
            return max;
        }
    }

    // задать табам ширину по самому широкому табу
    var setMaxTab = function () {
        var width = [];
        tabs.each(function () {
            width.push($(this).outerWidth());
        });
        var maxWidth = getMaxValue(width);
// console.log(maxWidth);
        tabs.css({"min-width": maxWidth});
    }


    if ($(window).width() > 992) {
        setMaxTab();
    } else {
        tabs.each(function () {
            aim = $(this).attr('href');
            $(aim).insertAfter($(this));
        });
    }


    $(window).resize(function () {
        // console.log($(window).width());

        if ($(window).width() < 992) {
            if (!tabs.next().hasClass('tab__content')) {
                tabs.each(function () {
                    $(this).css({'min-width': ''});
                    aim = $(this).attr('href');
                    $(aim).insertAfter($(this));
                });
            }
        } else {
            setMaxTab();
            if (tabs.next().hasClass('tab__content')) {
                tabs_content.each(function () {
                    aim = $(this).attr('href');
                    $(this).appendTo($('.tab__body')).css({'display': ''});
                });
            }
        }
    });


    $('.tab__link').click(function () {

        if ($(window).width() > 992) {

            aim = $(this).attr('href');
            tabs.removeClass('tab__link_active');
            $(this).addClass('tab__link_active');
            $('.tab__content').removeClass('visible');
            $(aim).addClass('visible');
            return false;
        }
        else {
            tabs.removeClass('tab__link_active');
            $(this).addClass('tab__link_active');
            aim = $(this).attr('href');

            if (!$(aim).hasClass('visible')) {
                tabs_content.slideUp().removeClass('visible');
            }
            $(aim).slideDown().addClass('visible');

            return false;
        }
//end click
    });


}());