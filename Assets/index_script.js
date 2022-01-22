$(document).ready(function(){
    let storage = window.localStorage;
    let userSelectionBox = $("#userSelections");
    let hotelCheck = storage.getItem("hotelName");
    let carCheck = storage.getItem("carName");

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

    if(carCheck){
        let content;

        let rentalInfoBox = document.createElement("div");
        rentalInfoBox.classList.add("card");

        let vehicleNameEl = document.createElement("h3");
        vehicleNameEl.classList.add("card-divider", "text-center", "carName")

        let vehiclePicEl = document.createElement("img");
        vehiclePicEl.classList.add("card-image", "carImage");

        let vehicleSeatingEl = document.createElement("p");
        vehicleSeatingEl.classList.add("text-center", "carSeats");

        let vehicleTransmissionEl = document.createElement("p");
        vehicleTransmissionEl.classList.add("text-center", "carTransmission")

        let vehicleCostEl = document.createElement("p");
        vehicleCostEl.classList.add("text-center","carPrice");

        let supplierNameEl = document.createElement("p");
        supplierNameEl.classList.add("text-center", "carSupName");

        content = document.createTextNode(storage.getItem("carName"));
        vehicleNameEl.appendChild(content);
        rentalInfoBox.appendChild(vehicleNameEl);
        
        vehiclePicEl.setAttribute("src", storage.getItem("carImage"));
        rentalInfoBox.appendChild(vehiclePicEl);

        content = document.createTextNode("Number of seats: " + storage.getItem("carSeats"));
        vehicleSeatingEl.appendChild(content);
        rentalInfoBox.appendChild(vehicleSeatingEl);

        content = document.createTextNode("Transmission Type: " + storage.getItem("carTransmission"));
        vehicleTransmissionEl.appendChild(content);
        rentalInfoBox.appendChild(vehicleTransmissionEl);



        content = document.createTextNode("Total drive off cost: $" + storage.getItem("carPrice"));
        vehicleCostEl.appendChild(content);
        rentalInfoBox.appendChild(vehicleCostEl);

        content = document.createTextNode("Supplier Name: " + storage.getItem("carSupName"));
        supplierNameEl.appendChild(content);
        rentalInfoBox.appendChild(supplierNameEl);


        userSelectionBox[0].appendChild(rentalInfoBox);}

    

})