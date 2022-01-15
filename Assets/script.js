
$.datepicker.parseDate( "yy-mm-dd", "2007-01-26" );



  $(function() {
    $("#datepicker").datepicker();
    $("#datepicker1").datepicker();
});


  function convertTxtToDate() {
    $('.dateTxt').each(function () {
        if ($(this).hasClass('hasDatepicker')) {
            $(this).removeClass('hasDatepicker');
        } 
         $(this).datepicker();
    });
} 
// closes the panel on click outside
$(document).mouseup(function (e) {
    var container = $('#contact-panel');
    if (!container.is(e.target) // if the target of the click isn't the container...
    && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
        container.removeClass('is-active');
      }
  });
  
  var dt = new Date();
  document.getElementById("datetime")
  .innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));



var textToWrite = document.getElementById("primary button expanded search-button").value;
var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});

var downloadLink = document.createElement("a");
downloadLink.download = "log.txt";
downloadLink.innerHTML = "Download File";

downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
downloadLink.click();
  