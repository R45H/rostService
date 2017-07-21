/* Блок количества товаров */
$('.number').each(function() {
	var
		$btn = $(this).find('.number__btn'), // Кнопки + и -
		$input = $(this).find('.number__input'); // Поле ввода

	// Клик на кнопкам '+' или '-'
	$btn.on('click', function() {
		var val = +parseInt($input.val()); // Текущее значение

		if ($(this).hasClass('number__btn_plus')) {
			$input.val(val + 1);
		} else {
			if (val != 1) {
				$input.val(val - 1);
			}
		}
	});

	// Фильтр ввода с клавиатуры (только цифры)
	$input.on('input', function() {
		var val = +parseInt($(this).val()); // Текущее значение

		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}

		if (+parseInt(this.value.charAt(0)) == 0) {
			this.value = this.value.slice(1);
		}

		if (!val) {
			$(this).val('1');
		}
	});

	// Работа стрелок вверх и вниз на клавиатуре
	$input.on('keydown', function(event) {
		var val = +parseInt($(this).val()); // Текущее значение

		if (event.keyCode == 38) {
			$input.val(val + 1);
		}

		if (event.keyCode == 40) {
			if (val != 1) {
				$input.val(val - 1);
			}
		}
	});
});
/* ===== */
