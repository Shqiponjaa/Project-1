$(function() {
var value = document.getElementById('panel1-label').value;
	var searchButton = document.getElementById("#primary button");
	searchButton.onclick = getData;
	button.addEventListener('click', startSearch);
	
	preventDefault();
var search = searchButton.value.trim();
fetchCoords(search);
searchFlight.value = '';

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
