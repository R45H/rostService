/* Переключатели вида списка */
(function() {
	var
		$toggles = $('.filters__view'),
		$view = $('.content__view'),
		classGrid = 'content__view_grid',
		classTable = 'content__view_table';

	$toggles.on('click', function() {
		if ($(this).hasClass('active')) return;

		$toggles.removeClass('active');
		$(this).addClass('active');

		$view.toggleClass(classGrid + ' ' + classTable);
	});
}());
/* ========== */
