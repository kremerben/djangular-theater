$(document).ready(function() {

function initGeolocation() {
    if (navigator.geolocation) {
        // Call getCurrentPosition with success and failure callbacks
        navigator.geolocation.getCurrentPosition(geosuccess, geofail);
    } else {
        console.log("Sorry, your browser does not support geolocation services.");
        geofail();
    }
}

function geosuccess(position) {
    long01 = position.coords.longitude;
    lat01 = position.coords.latitude;
    initialize();
}

function geofail() {
    $.ajax({
        url: 'https://www.dailycred.com/api/local.json',
        dataType: 'json',
        jsonp: false,
        jsonpCallback: 'callback',
        cache: false,
        success: function(info) {
            long01 = info.longitude;
            lat01 = info.latitude;
            //console.log(info);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("Sorry, geofail.");
            console.log("Status: " + textStatus);
            console.log("Error: " + errorThrown);
        }
    });
    initialize();
}



function initialize() {

var mapstyling = [{"featureType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"lightness":-100}]}];



    var map_canvas = document.getElementById('map_canvas');
    var map_options = {
        center: new google.maps.LatLng(lat01, long01),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: mapstyling
    }

    var map = new google.maps.Map(map_canvas, map_options);
    var infowindow = new google.maps.InfoWindow();

    var marker;


    //facebook photos
    for (var i = 0; i < photoData.length; i++) {
        var photo = photoData[i];
        if (photo.place != undefined) {
            setTimeout(addMarker, i * 500, photo, map);
        }
    }
}

function addMarker(photo, map) {
    var myLatLng = new google.maps.LatLng(photo.place.location.latitude,
                                          photo.place.location.longitude);


    var image = {
        url: photo.picture,
        scaledSize: new google.maps.Size(45,45)
    };

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
//        title: photo.
    });

}





google.maps.event.addDomListener(window, 'load', initGeolocation);





});