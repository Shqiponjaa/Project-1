$(document).ready(function(){
    let cityInputBox = $("#hotelInputBox");
    let checkInDate = $("#hotelCheckinDate");
    let checkOutDate = $("#hotelCheckoutDate");
    let hotelSearchBtn = $("#hotelSearchBtn");
    
    // add selection to local storage 
    let storage = window.localStorage;
    $(document).on('click', ".locStorBtn", function(){
        console.log("worked");
        hotelInfo = $(document).find("#hotel_"+ $(this).attr("data-code"));
        // console.log(hotelInfo.find(".hotelName").text());
        storage.setItem("hotelName", hotelInfo.find(".hotelName").text());
        storage.setItem("hotelPicture", hotelInfo.find(".hotelImage").attr("src"));
        storage.setItem("hotelAddress", hotelInfo.find(".hotelAddress").text().split(":").pop());
        storage.setItem("hotelTotalCost", hotelInfo.find(".hotelTotalCost").text().split(":").pop());
        storage.setItem("hotelReviewScore", hotelInfo.find(".hotelReviewScore").text().split(":").pop());
        

    })

    // complete fetch when button is clicked 
    hotelSearchBtn.click(function(){
        let cityInput = cityInputBox.val();
        let checkinInput = checkInDate.val();
        let checkOutInput =checkOutDate.val();

        // fetch destination IDs
        fetch("https://booking-com.p.rapidapi.com/v1/hotels/locations?name=" + cityInput + "&locale=en-us", {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "booking-com.p.rapidapi.com",
            "x-rapidapi-key": "c3e07b89cfmshe09e43ad009e017p10e676jsne90c7a2719f6"}
        })
    .then(response => response.json())
    .then(function(coordinateResult){
        // console.log(coordinateResult);
        // console.log("odne");

        let hotelLatitude = coordinateResult[0].latitude;
        let hotelLongitude = coordinateResult[0].longitude;
        let coordinates = [hotelLatitude , hotelLongitude];
        // console.log(coordinates);

        // fetch hotels using lat and long
        fetch("https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?order_by=class_descending&longitude=" + hotelLongitude + "&latitude=" + hotelLatitude + "&locale=en-us&room_number=1&units=imperial&adults_number=2&filter_by_currency=USD&checkin_date=" + checkinInput + "&checkout_date=" + checkOutInput + "&include_adjacency=true", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "booking-com.p.rapidapi.com",
            "x-rapidapi-key": "c3e07b89cfmshe09e43ad009e017p10e676jsne90c7a2719f6"
        }
    })
    .then(response => response.json())
    .then(function(hotelResults){
        console.log(hotelResults);
        // displey hotel results on page 
        for( i=0; i < hotelResults.result.length; i++){
            let hotelResultBox = $("#hotelResults");

            // add All necessary info on page
            let hotelName = hotelResults.result[i].hotel_name;
            let hotelAddress = hotelResults.result[i].address;
            let hotelClass = hotelResults.result[i].class;
            let hotelTotalCost = hotelResults.result[i].price_breakdown.all_inclusive_price;
            let hotelReviewScore = hotelResults.result[i].review_score;

            let hotelPicture = hotelResults.result[i].max_1440_photo_url;

            // create elements, add appropiate classes and display on page 
            let content;
            
            let hotelInfoBox = document.createElement("div");
            hotelInfoBox.classList.add("card");
            hotelInfoBox.setAttribute("id" , "hotel_" + i );
            
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

            

            let selectBtn = document.createElement("button");
            selectBtn.classList.add( "button","locStorBtn", "expanded");
            selectBtn.innerText = "Select Hotel";
            selectBtn.setAttribute("data-code", i);

            content = document.createTextNode(hotelName);
            hotelNameEl.appendChild(content);
            hotelInfoBox.appendChild(hotelNameEl);

            hotelPictureEl.setAttribute("src" , hotelPicture);
            hotelInfoBox.appendChild(hotelPictureEl);

            content = document.createTextNode(hotelAddress);
            hotelAddressEl.appendChild(content);
            hotelInfoBox.appendChild(hotelAddressEl);

            content = document.createTextNode("Hotel Total Cost: " +hotelTotalCost);
            hotelTotalCostEl.appendChild(content);
            hotelInfoBox.appendChild( hotelTotalCostEl);

            content = document.createTextNode("Hotel Review Rating: " +hotelReviewScore);
            hotelReviewScoreEl.appendChild( content);
            hotelInfoBox.appendChild(hotelReviewScoreEl);

            hotelInfoBox.appendChild(selectBtn);

            

            hotelResultBox[0].appendChild(hotelInfoBox);
        }
        

        
    })
    })
    .catch(err => {
        console.error(err);
    });
    // .catch(err => {
    //     console.error(err);
    //
})
})

    