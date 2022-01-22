$(function() {
var value = document.getElementById('panel1-label').value;
	var searchButton = document.getElementById("#primary button");
	searchButton.onclick = getData;
	button.addEventListener('click', startSearch);
	
	preventDefault();
var search = searchButton.value.trim();
fetchCoords(search);
searchFlight.value = '';


fetch("https://aerodatabox.p.rapidapi.com/health/services/feeds/FlightSchedules/airports", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "aerodatabox.p.rapidapi.com",
		"x-rapidapi-key": "ca68ba596fmshdaee9639acc60eap148251jsn32f8dfbe69d0"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});