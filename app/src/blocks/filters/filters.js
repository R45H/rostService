/* Переключатели вида списка */
(function() {
	var
		$toggles = $('.filters__view'),
		$togGrid = $('.filters__view_grid'),
		$togTable = $('.filters__view_table'),
		$view = $('.content__view'),
		classGrid = 'content__view_grid',
		classTable = 'content__view_table',
		cookie = $.cookie('content__view');

	if (!cookie) {
		$.cookie('content__view', classGrid);
	} else {
		if (cookie == classTable) {
			setTable();
		}
	}

	$toggles.on('click', function() {
		if ($(this).hasClass('active')) return;

		$view.hasClass(classGrid) ?
			setTable() :
			setGrid();
	});

	function setGrid() {
		$togTable.removeClass('active');
		$togGrid.addClass('active');

		$view
			.removeClass(classTable)
			.addClass(classGrid);
		$.cookie('content__view', classGrid);
	}

	function setTable() {
		$togGrid.removeClass('active');
		$togTable.addClass('active');

		$view
			.removeClass(classGrid)
			.addClass(classTable);
		$.cookie('content__view', classTable);
	}
}());
/* ========== */
