$(document).ready(function(){
    let storage = window.localStorage;
    let userSelectionBox = $("#userSelections");
    let hotelCheck = storage.getItem("hotelName");

    if(hotelCheck){
        let content;

            
            let hotelInfoBox = document.createElement("div");
            hotelInfoBox.classList.add("card");
            
            let hotelNameEl = document.createElement("h3");
            hotelNameEl.classList.add("card-divider", "text-center", "hotelName");

            let hotelPictureEl = document.createElement("img");
            hotelPictureEl.classList.add("card-image","hotelImage");

            let hotelAddressEl = document.createElement("p");
            hotelAddressEl.classList.add("text-center", "hotelAddress");

            let hotelTotalCostEl = document.createElement("p");
            hotelTotalCostEl.classList.add("text-center", "hotelTotalCost");

            let hotelReviewScoreEl = document.createElement("p");
            hotelReviewScoreEl.classList.add( "text-center", "hotelReviewScore");


            content = document.createTextNode(storage.getItem("hotelName"));
            hotelNameEl.appendChild(content);
            hotelInfoBox.appendChild(hotelNameEl);

            hotelPictureEl.setAttribute("src" , storage.getItem("hotelPicture"));
            hotelInfoBox.appendChild(hotelPictureEl);

            content = document.createTextNode(storage.getItem("hotelAddress"));
            hotelAddressEl.appendChild(content);
            hotelInfoBox.appendChild(hotelAddressEl);

            content = document.createTextNode("Hotel Total Cost: $" + storage.getItem("hotelTotalCost"));
            hotelTotalCostEl.appendChild(content);
            hotelInfoBox.appendChild( hotelTotalCostEl);

            content = document.createTextNode("Hotel Review Rating: " + storage.getItem("hotelReviewScore") + "/10");
            hotelReviewScoreEl.appendChild( content);
            hotelInfoBox.appendChild(hotelReviewScoreEl);
 

            userSelectionBox[0].appendChild(hotelInfoBox);
    }

})