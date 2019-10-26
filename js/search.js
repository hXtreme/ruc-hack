
function search() {
	var results = [];
	// var toSearch = JSON.parse(document.getElementById("search-inp").value);
var toSearch = document.getElementById('search-inp').value;
	console.log(toSearch);
	console.log(typeof toSearch);
	console.log(JSON.parse(toSearch));

	var delta = 10;
	for(var i=0; i<fountain.length; i++) {
		placeMarker(map, fountain[i]);
		if ((Math.abs(fountain[i].lat - toSearch.lat)< delta) && (Math.abs(fountain[i].lng - toSearch.lng)< delta))
	  {
	  	placeMarker(map, fountain[i]);
	  }
	}
}


function place_results(map, results)
{
	for (var key in results) {
		console.log(key);
	    placeMarker(map, key);
	}

}
