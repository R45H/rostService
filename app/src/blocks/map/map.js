/* Карта */
function initMap() {
	var $map = $('.map');

	if (!$map.length || $map.is(':hidden')) return;

	var customMapType = new google.maps.StyledMapType([
		{"elementType": "geometry", "stylers": [{"color": "#f5f5f5"} ] },
		{"elementType": "labels.icon", "stylers": [{"visibility": "off"} ] },
		{"elementType": "labels.text.fill", "stylers": [{"color": "#616161"} ] },
		{"elementType": "labels.text.stroke", "stylers": [{"color": "#f5f5f5"} ] },
		{"featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{"color": "#bdbdbd"} ] },
		{"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#eeeeee"} ] },
		{"featureType": "poi", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] },
		{"featureType": "poi.park", "elementType": "geometry", "stylers": [{"color": "#e5e5e5"} ] },
		{"featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"} ] },
		{"featureType": "road", "elementType": "geometry", "stylers": [{"color": "#ffffff"} ] },
		{"featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] },
		{"featureType": "road.highway", "elementType": "geometry", "stylers": [{"color": "#dadada"} ] },
		{"featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"} ] },
		{"featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"} ] },
		{"featureType": "transit.line", "elementType": "geometry", "stylers": [{"color": "#e5e5e5"} ] },
		{"featureType": "transit.station", "elementType": "geometry", "stylers": [{"color": "#eeeeee"} ] },
		{"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#c9c9c9"} ] },
		{"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"} ] }
	], {
		name: 'Схема'
	});

	var customMapTypeId = 'custom_style';

	/* Точки */
	var dot1 = {lat: 60.034290, lng: 30.259768}; // г. Санкт-Петербург, Шуваловский пр-т, д. 32
	/* ===== */

	/* Карты */
	if (document.getElementById('map')) { // Стандартная карта (контакты)
		var map1 = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			center: dot1,
			scrollwheel: false,
			mapTypeControl: true,
			streetViewControl: false,
			mapTypeControlOptions: {
				mapTypeIds: [
					customMapTypeId,
					google.maps.MapTypeId.SATELLITE
				]
			}
		});
		map1.mapTypes.set(customMapTypeId, customMapType);
		map1.setMapTypeId(customMapTypeId);

		/* Образец карточки */
		var contentString = '<div class="map__info">г. Санкт-Петербург, Шуваловский пр-т, д. 32</div>';
		/* ================ */

		/* Рамка */
		var infoWindow = new google.maps.InfoWindow({
			content: contentString
		});
		/* ===== */

		var image = 'img/marker.png';

		/* Маркеры */
		var marker1 = new google.maps.Marker({
			position: dot1,
			map: map1,
			title: 'Webcenter',
			id: 'marker1',
			icon: image
		});

		infoWindow.open(map1, marker1);

		marker1.addListener('click', function() {
			infoWindow.open(map1, marker1);
		});
		/* ======= */

		/* Центрирование карты при ресайзе */
		google.maps.event.addDomListener(window, "resize", function() {
			google.maps.event.trigger(map1, "resize");
			map1.panTo(dot1);
		});
		/* ===== */
	}
	/* ===== */
}
/* ========== */
