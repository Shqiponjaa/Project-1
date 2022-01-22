$(document).ready(function(){
    let flightInputBox = $("#flightInputBox");
	let flightInputbox2 = $("#flightInputbox2")
    let flightSearchBtn = $("#flightSearchBtn");
    let flightdepartureDate = $("#flightdepartureDate");
    let flightArrivalDate = $("#flightArrivalDate");

	let cityInput = flightInputBox.val();
	let departDate = flightdepartureDate.val();
	let flightArrDate = flightArrivalDate.val();

flightSearchBtn.click(function() {

	console.log(flightInputBox.val())
fetch("https://aerodatabox.p.rapidapi.com/airports/search/term?q=" + flightInputBox.val(),{
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "aerodatabox.p.rapidapi.com",
		"x-rapidapi-key": "fa6df6b0ebmshd1c74db73f265c4p1a4a1ejsne99186ebbbbe"
	}
})
.then(response => response.json())
.then(function(coordinateResult){
	console.log(coordinateResult)
	let airlineLatitude = coordinateResult.items[0].location.lat;
	let airlineLongitude = coordinateResult.items[0].location.lon;
	let coordinates = [airlineLatitude, airlineLongitude]
	console.log(coordinates)

	fetch("https://aerodatabox.p.rapidapi.com/airports/search/location/" + airlineLatitude + "/" + airlineLongitude + "/km/100/16?", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "aerodatabox.p.rapidapi.com",
			"x-rapidapi-key": "fa6df6b0ebmshd1c74db73f265c4p1a4a1ejsne99186ebbbbe"
		}
	})
	.then(response => response.json())
	.then(function(icaoResult){
		console.log(icaoResult)
		let icao = icaoResult.items[0].icao;
		console.log(icao)
	

	fetch("https://aerodatabox.p.rapidapi.com/flights/airports/icao/" + icao + "/2021-10-04T20:00/2021-10-05T08:00?withLeg=true&withCancelled=true&withCodeshared=true&withCargo=true&withPrivate=true&withLocation=true", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "aerodatabox.p.rapidapi.com",
			"x-rapidapi-key": "fa6df6b0ebmshd1c74db73f265c4p1a4a1ejsne99186ebbbbe"
		}
	})
	.then(response => response.json())
	.then(function(data){
	console.log(data)
	for(i=0; i < data.departures.length; i++) {
	let flightResultBox = $("#data")
	let airline_name = data.departures[i].airline.name;
	let depart_time = data.departures[i].departure.actualTimeLocal;
	let terminal = data.departures[i].departure.terminal;
	let status = data.departures[i].status;
	let ar_airline = data.departures[i].arrival.airport.name;
	//let gate_num = data.departures[i].departure.gate;
	
	console.log(airline_name)
	console.log(depart_time)
	console.log(terminal)
	console.log(status)
	//console.log(gate_num)
	console.log(ar_airline)
	
	
	
	

	let content;

	let flightInfoBox = document.createElement("div");
	flightInfoBox.classList.add("flightBox");

	let airline_nameEL = document.createElement("h3");
	let depart_timeEL = document.createElement("p");
	let terminalEL = document.createElement("p");
	//let gate_numEL = document.createElement("p");
	let ar_airlineEL = document.createElement("p");
	let statusEL = document.createElement("p");

	content = document.createTextNode(airline_name);
	airline_nameEL.appendChild(content);
	flightInfoBox.appendChild(airline_nameEL);

	content = document.createTextNode(ar_airline);
	ar_airlineEL.appendChild(content);
	flightInfoBox.appendChild(ar_airlineEL);
	
	//content = document.createTextNode(terminal);
	//terminalEL.appendChild(content);
	//flightInfoBox.appendChild(terminalEL);

	content = document.createTextNode(status);
	statusEL.appendChild(content);
	flightInfoBox.appendChild(statusEL);

	content = document.createTextNode(airline_name);
	airline_nameEL.appendChild(content);
	flightInfoBox.appendChild(airline_nameEL);

	content = document.createTextNode(depart_time);
	depart_timeEL.appendChild(content);
	flightInfoBox.appendChild(depart_timeEL);

	flightResultBox[0].appendChild(flightInfoBox);
	}
	
	})

	})

	})

	})

})