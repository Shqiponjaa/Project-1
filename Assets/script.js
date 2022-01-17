
$.datepicker.parseDate("yy-mm-dd", "2007-01-26");



$(function () {
    $("#datepicker").datepicker();
    $("#datepicker1").datepicker();
});


// closes the panel on click outside
$(document).mouseup(function (e) {
    var container = $('#contact-panel');
    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.removeClass('is-active');
    }
});
var textToWrite = document.getElementById("primary button expanded search-button").value;
var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });

var downloadLink = document.createElement("a");
downloadLink.download = "log.txt";
downloadLink.innerHTML = "Download File";

downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
downloadLink.click();


