function search(position) {
	var delta = 0.1;
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	for(var i=0; i<fountain.length; i++) {
		var f = fountain[i];
		var dlat = Math.abs(f.lat - lat);
		var dlng = Math.abs(f.lng - lng);
		if (dlat < delta && dlng < delta) {
			placeMarker(map, f);
		}
	}
}
