(function () {
    var tabs = $('.catalog-tab__link');
    var tab_content = $('.catalog-tab__content');
    var aim;

    var makeTwoTab = function () {
        //make two tab link in row instead of four
        var catalog_tab = '<div class="catalog-tab">';
        var catalog_tab_head = '<div class="catalog-tab__head">';
        var catalog_tab_body = '<div class="catalog-tab__body">';
        $('.catalog-tab').each(function () {
            $(this).after(catalog_tab).next().append(catalog_tab_head).append(catalog_tab_body);
        });

        var i = 1;
        tabs.each(function () {
            if ((i != 1) && (i % 2 == 0)) {
                aim = $($(this).attr('href'));
                $(this).closest('.catalog-tab')
                    .next().find('.catalog-tab__head').append($(this))
                    .parent().find('.catalog-tab__body').append(aim);
            }
            i++;
        });
    }
    var makeFourTab = function () {
        //make four tab link in row instead of four


        var i = 1;
        tabs.each(function () {
            if ((i != 1) && (i % 2 == 0)) {
                aim = $($(this).attr('href'));
                $(this).closest('.catalog-tab')
                    .prev().find('.catalog-tab__head').append($(this))
                    .parent().find('.catalog-tab__body').append(aim);
            }
            i++;
        });
        $('.catalog-tab').each(function () {
            $(this).next().remove();
        });
    }
    if ($(window).width() < 992 - 17) {
        makeTwoTab();
    }
    $(window).resize(function () {

        if ($(window).width() < 992 - 17) {
            if ($('.catalog-tab.active .catalog-tab__head .catalog-tab__link').length != 2) {
                makeTwoTab();
            }
        }
        else {
            if ($('.catalog-tab.active .catalog-tab__head .catalog-tab__link').length != 4) {
                makeFourTab();
            }
        }
    });
//TODO разобраться с резким первым открытием таба
    $('.catalog-tab__link').click(function () {
        aim_tab = $(this);
        var parent = aim_tab.closest('.catalog-tab');
        aim = $(aim_tab.attr('href'));

        if (!parent.hasClass('active')) {

           var promise = new Promise(function(resolve, reject) {

               $('.catalog-tab.active .catalog-tab__body').slideUp();

                setTimeout(function () {
                   resolve();
                },400);
           });

            promise.then(function(){
                aim_tabY = aim_tab.offset().top - $('.header').outerHeight();
                $('html, body').animate({ scrollTop: aim_tabY}, 500);
            }).then(function(){
                setTimeout(function () {
                    tabs.removeClass('active');
                    aim_tab.addClass('active');
                    $('.catalog-tab').removeClass('active');
                    tab_content.removeClass('visible');
                    aim.addClass('visible');
                    parent.addClass('active').find('.catalog-tab__body').slideDown();
                }, 400);
            });
        } else {
            tabs.removeClass('active');
            aim_tab.addClass('active');
            tab_content.removeClass('visible');
            aim.addClass('visible');
        }
        return false;

//end click
    });


}());