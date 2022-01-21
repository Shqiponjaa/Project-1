fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=HKT&page=None&currency=RUB&destination=-", {
	"method": "GET",
	"headers": {
		"x-access-token": "undefined",
		"x-rapidapi-host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
		"x-rapidapi-key": "ca68ba596fmshdaee9639acc60eap148251jsn32f8dfbe69d0"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
e.preventDefault();
var search = searchInput.value.trim();
fetchCoords(search);
searchInput.value = '';
}

function handleSearchHistoryClick(e) {
if (!e.target.matches('.btn-history')) {
  return;
}

var btn = e.target;
var search = btn.getAttribute('data-search');
fetchCoords(search);
}

initSearchHistory();
searchForm.addEventListener('submit', handleSearchFormSubmit);
searchHistoryContainer.addEventListener('click', handleSearchHistoryClick);