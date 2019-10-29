var map;

var markers = [];

var user_marker = null;

function getInfoWindow(location) {
  var content = '<div class="infowindow">'+
              '<img class="info-img" src="'+
              location.img +
              '">' +
              '<p>' +
              location.review +
              '</p>' +
              '</div>';
  var infowindow = new google.maps.InfoWindow({content: content});
  return infowindow;
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
}

function placeMarker(map, location) {
  var latLng = {lat: parseFloat(location.lat), lng:parseFloat(location.lng)}
  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: location.brand
  });
  markers.push(marker);

  var infowindow = getInfoWindow(location);

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}


function initMap() {
  var styledMapType = new google.maps.StyledMapType(
		map_style,
		{name: 'styled_map'}
	)

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.950173, lng: -75.126592},
	zoom: 12,
	mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
	});

  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

  var loc = {lat: 39.950173, lng: -75.126592, brand:'Please Work', img:'https://www.naturalhealth365.com/wp-content/uploads/2017/11/drinking-water.jpg', review: getReview()}
  placeMarker(map, loc)
}
