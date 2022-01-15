let ul = $("#searchResults");
fetch("https://booking-com.p.rapidapi.com/v1/car-rental/search?pick_up_datetime=2022-07-01%2013%3A00%3A00&pick_up_longitude=37.620230899&drop_off_longitude=37.620230899&pick_up_latitude=55.7518540820001&drop_off_latitude=55.7518540820001&sort_by=recommended&locale=en-gb&currency=AED&drop_off_datetime=2022-07-02%2013%3A00%3A00&from_country=it", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "booking-com.p.rapidapi.com",
		"x-rapidapi-key": "c3e07b89cfmshe09e43ad009e017p10e676jsne90c7a2719f6",
        "Content-Type" : "application/json"
	}
})
.then(response => {
	console.log(response)
    return response.json();
})
.then(searchResult => {
    console.log(JSON.stringify(searchResult));
    // Display in HTML 
    let carArray = searchResult.response;
for(var i=0; i < carArray.length; i++){
    var listItem = document.createElement("li");
    listItem.innerHTML = carArray[i].vehicle_info;
    ul.appendChild(listItem);
}


})
.catch(err => {
	    console.error(err);
});
console.log(ul);