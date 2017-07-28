/* Модалка */
(function() {
	var
		$links = $('[data-popup]'),
		$body = $('body'),
		$header = $('.header'),
		$inputs = $('.popup .input-cust');

	if (!$links.length) return;

	$links.each(function() {
		var id = $(this).attr('data-popup');

		if (!$(id).length) return;

		// Клик по кнопке, открывающей модалку
		$(this).on('click', function() {
			popup('open', id);
			return false;
		});
		// =====

		// Клик по кнопке "закрыть"
		$(id).find('.popup__close').on('click', function() {
			popup('close', id);
		});
		// =====

		// Клик по серому фону
		$(id).on('click', function(event) {
			if (!$(event.target).hasClass('popup')) return;
			popup('close', id);
		});
		// =====
	});

	// Отработка получения и потери фокуса инпутами
	$inputs.on('focusin', function () {
		$(this).addClass('active');
	});

	$inputs.on('focusout', function () {
		if (!$(this).find('input').val()) {
			$(this).removeClass('active');
		}
	});
	// =====

	function popup(action, id) {
		var
			$popup = $(id),
			$wrap = $popup.find('.popup__wrap');

		if (action == 'open') {
			$header.addClass('header_hidden');
			$popup.addClass('popup_visible');

			$body
				.addClass('noscroll')
				.append('<div class="popup__fog"></div>');

			$('.popup__fog').fadeIn(600);

			setTimeout(function() {
				$wrap.addClass('popup__wrap_visible');
			}, 0);

			setTimeout(function() {
				$popup.find('.input-cust__value').first().focus();
			}, 600);
		}

		if (action == 'close') {
			$popup.find('.input-cust__value').val('');
			$inputs.removeClass('active');
			$wrap.removeClass('popup__wrap_visible');
			$('.popup__fog').fadeOut(300);

			setTimeout(function() {
				$popup.removeClass('popup_visible');
				$body.removeClass('noscroll');
				$header.removeClass('header_hidden');
				$('.popup__fog').remove();
			}, 300);
		}
	}
}());
/* ========== */
