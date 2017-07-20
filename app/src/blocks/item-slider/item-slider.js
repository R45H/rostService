/* Слайдер детальной карточки объекта */
$('.item-slider').slick({
	arrows: false,
	dots: true,
	dotsClass: 'item-slider__dots',
	draggable: false,
	infinite: false,
	customPaging: function (slider, i) {
		  var thumb = $(slider.$slides[i])
			  .css('background-image')
			  .replace('url(','')
			  .replace(')','')
			  .replace(/\"/gi, "");

		  return '<div class="item-slider__nav-item" style="background-image: url(' + thumb + ');">';
	}
});
/* ========== */
