(function () {
    var tabs = $('.tab__link');
    var tabs_content = $('.tab__content');
    var aim;

    if (window.innerWidth >= 992) {
        setMaxTab();
    } else {
        tabs.each(function () {
            aim = $(this).attr('href');
            $(aim).insertAfter($(this));
        });

	     tabs_content.filter('.visible').css('display', 'block');
    }


    $(window).on('resize', function () {
        if (window.innerWidth < 992) {
            if (!tabs.next().hasClass('tab__content')) {
                tabs.each(function () {
                    $(this).css({'min-width': ''});
                    aim = $(this).attr('href');
                    $(aim).insertAfter($(this));
                });
            }
	         tabs_content.filter('.visible').css('display', 'block');
        } else {
            setMaxTab();
            if (tabs.next().hasClass('tab__content')) {
                tabs_content.each(function () {
                    aim = $(this).attr('href');
                    $(this).appendTo($('.tab__body')).css({'display': ''});
                });
            }
	         tabs_content.filter('.visible').css('display', '');
        }
    });


    $('.tab__link').on('click', function () {

        if (window.innerWidth >= 992) {
            aim = $(this).attr('href');
            tabs.removeClass('tab__link_active');
            $(this).addClass('tab__link_active');
            $('.tab__content').removeClass('visible');
            $(aim).addClass('visible');
        }
        else {
            tabs.removeClass('tab__link_active');
            $(this).addClass('tab__link_active');
            aim = $(this).attr('href');

            if (!$(aim).hasClass('visible')) {
                tabs_content.slideUp().removeClass('visible');
            }
            $(aim).slideDown().addClass('visible');
        }

        return false;
    });

	// получение максимального элемента массива
	function getMaxValue(array) {
		var max = array[0];
		for (var i = 0; i < array.length; i++) {
			if (max < array[i]) max = array[i];
		}
		return max;
	}

	// задать табам ширину по самому широкому табу
	function setMaxTab() {
		var width = [];
		tabs.each(function () {
			width.push($(this).outerWidth());
		});
		var maxWidth = getMaxValue(width);
		tabs.css({"min-width": maxWidth});
	}
}());