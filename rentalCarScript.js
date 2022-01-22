$(document).ready(function(){
    let rentalInputBox = $("#rentalInputBox");
    let rentalSearchBtn = $("#rentalSearchBtn");
    let rentalPickupBox = $("#rentalPickupDate");
    let rentalDropoffBox = $("#rentalDropoffDate");

    // add selection to local storage 
    let storage = window.localStorage;
    $(document).on('click', ".locStorBtn", function(){
        console.log("worked");
        carInfo = $(document).find("#car_"+ $(this).attr("data-code"));
        // console.log(hotelInfo.find(".hotelName").text());
        storage.setItem("carName", carInfo.find(".carName").text());
        storage.setItem("carImage", carInfo.find(".carImage").attr("src"));
        storage.setItem("carSeats", carInfo.find(".carSeats").text().split(":").pop());
        storage.setItem("carTransmission", carInfo.find(".carTransmission").text().split(":").pop());
        storage.setItem("carPrice", carInfo.find(".carPrice").text().split(":").pop());
        storage.setItem("carSupName", carInfo.find(".carSupName").text().split(":").pop());

         })


    rentalSearchBtn.click(function(){
        let cityInput = rentalInputBox.val();
        let pickupInput = rentalPickupBox.val();
        let dropoffInput = rentalDropoffBox.val();

        // fetch latitude and longitiude for searched city
        fetch("https://booking-com.p.rapidapi.com/v1/car-rental/locations?name=" + cityInput + "&locale=en-us", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "booking-com.p.rapidapi.com",
            "x-rapidapi-key": "c3e07b89cfmshe09e43ad009e017p10e676jsne90c7a2719f6"
        }
        })
        .then(response => response.json())
        .then(function(coordinateResult){
            let RentalLatitude = coordinateResult[0].latitude;
            let rentalLongitude = coordinateResult[0].longitude;
            let coordinates = [RentalLatitude, rentalLongitude]
            
            // fetch rental car data using the lat and lon with other input parameters
            fetch("https://booking-com.p.rapidapi.com/v1/car-rental/search?pick_up_datetime=" + pickupInput + "%2013%3A00%3A00&pick_up_longitude=" + coordinates[1] + "&drop_off_longitude=" + coordinates[1] + "&pick_up_latitude=" + coordinates[0] + "&drop_off_latitude=" + coordinates[0] + "&sort_by=recommended&locale=en-us&currency=USD&drop_off_datetime=" + dropoffInput + "%2013%3A00%3A00&from_country=it", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "booking-com.p.rapidapi.com",
                    "x-rapidapi-key": "c3e07b89cfmshe09e43ad009e017p10e676jsne90c7a2719f6"
                }
            })
            .then(response => response.json())
            .then(function(rentalResults){
                console.log(rentalResults);
                console.log("fetch complete");
                // display results on page 
                for(i=0; i < rentalResults.search_results.length; i++) {
                let rentalResultBox = $("#rentalResults");
                // all necessary vehicle info for page
                let vehicleName = rentalResults.search_results[i].vehicle_info.v_name;
                let vehicleSeating = rentalResults.search_results[i].vehicle_info.seats;
                let vehicleTransmission = rentalResults.search_results[i].vehicle_info.transmission;

                let vehiclePic = rentalResults.search_results[i].vehicle_info.image_url;
                
                // all necessary pricing info 
                let vehicleCost = rentalResults.search_results[i].pricing_info.price;
               
                //  all necessary supplier info 
                let supplierName = rentalResults.search_results[i].supplier_info.name;
                let supplierAddress = rentalResults.search_results[i].supplier_info.address;

                let supplierLogo = rentalResults.search_results[i].supplier_info.logo_url;
                
                // assign values and display on page 
                let content;

                let rentalInfoBox = document.createElement("div");
                rentalInfoBox.classList.add("card");
                rentalInfoBox.setAttribute("id", "car_" + i);

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

                let supplierLogoEl = document.createElement("img"); 
                let supplierAddressEl = document.createElement("p");
                

                let selectBtn = document.createElement("button");
                selectBtn.classList.add( "button","locStorBtn", "expanded");
                selectBtn.innerText = "Select Hotel";
                selectBtn.setAttribute("data-code", i);
    

                content = document.createTextNode(vehicleName);
                vehicleNameEl.appendChild(content);
                rentalInfoBox.appendChild(vehicleNameEl);               

                content = document.createTextNode("Number of seats: " + vehicleSeating);
                vehicleSeatingEl.appendChild(content);
                rentalInfoBox.appendChild(vehicleSeatingEl);

                content = document.createTextNode("Transmission Type: " + vehicleTransmission);
                vehicleTransmissionEl.appendChild(content);
                rentalInfoBox.appendChild(vehicleTransmissionEl);

                vehiclePicEl.setAttribute("src", vehiclePic);
                rentalInfoBox.appendChild(vehiclePicEl);

                content = document.createTextNode("Total drive off cost: " + vehicleCost);
                vehicleCostEl.appendChild(content);
                rentalInfoBox.appendChild(vehicleCostEl);

                content = document.createTextNode("Supplier Name: " + supplierName);
                supplierNameEl.appendChild(content);
                rentalInfoBox.appendChild(supplierNameEl);

                content = document.createTextNode("Address: " + supplierAddress);
                supplierAddressEl.appendChild(content);
                rentalInfoBox.appendChild(supplierAddressEl);
                console.log(rentalInfoBox);

                supplierLogoEl.setAttribute("src" , supplierLogo);
                rentalInfoBox.appendChild(supplierLogoEl);

                rentalInfoBox.append(selectBtn);

                rentalResultBox[0].appendChild(rentalInfoBox);}











            })
            .catch(err => {
                console.error(err);
            });
        })
        .catch(err => {
            console.error(err);
        });
        
    })
})
// test