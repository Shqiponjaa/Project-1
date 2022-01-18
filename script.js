$(document).ready(function(){
    let rentalInputBox = $("#rentalInputBox");
    let rentalSearchBtn = $("#rentalSearchBtn");
    let rentalPickupBox = $("#rentalPickupDate");
    let rentalDropoffBox = $("#rentalDropoffDate");


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
                console.log("fetch complete")
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