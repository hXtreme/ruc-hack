function search(position) {
	var delta = 0.1;
	if (user_marker == null) {
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
	}
	else {
		// TODO:Optionally allow user to find places around a marker.
		var lat = user_marker.position.lat;
		var lng = user_marker.position.lng;
	}
	for(var i=0; i<fountain.length; i++) {
		var f = fountain[i];
		var dlat = Math.abs(f.lat - lat);
		var dlng = Math.abs(f.lng - lng);
		if (dlat < delta && dlng < delta) {
			placeMarker(map, f);
		}
	}
}
