
$.datepicker.parseDate("yy-mm-dd", "2007-01-26");

$(function () {
    $("#datepicker").datepicker();
    $("#datepicker1").datepicker();
});




$("#clearButton").click(function() {
  $("#textbox1").val("");
});

window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("'From','Return Date','To','Start Date'").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("retrieveButton").onclick = retrieveRecords
}
function populateStorage() {
localStorage.setItem('From','Return Date','To','Start Date');
  localStorage.clear();
}