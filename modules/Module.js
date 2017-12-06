//Type your code here
var pins = 0;
var imageArray = new Array();

function imageLocation(){
  	dataObj1 = {globaDdataId1:"Img1", src:kony.application.getCurrentForm().Camera1.rawBytes};
	//addAt method call ,adding the above row at 15th index position.
	kony.application.getCurrentForm().carousel1.addDataAt(dataObj1,0);	
  	imageArray.push(kony.application.getCurrentForm().Camera1.rawBytes);
  	saveLocation();
}

function pinClicked(id){
  	alert(id);
}


function successcallback(position) {
// popup with the GPS positions
  	var geoPosition = "Latitude: " + position.coords.latitude;
    geoPosition = geoPosition + " Longitude: " + position.coords.longitude;
    geoPosition = geoPosition + " Altitude: " + position.coords.altitude;
    geoPosition = geoPosition + " Accuracy: " + position.coords.accuracy;
    geoPosition = geoPosition + " Altitude Accuracy: "+ position.coords.altitudeAccuracy;
    geoPosition = geoPosition + " Heading: " + position.coords.heading;
    geoPosition = geoPosition + " Speeding: " + position.coords.speeding;
    geoPosition = geoPosition + " Timestamp: " + position.timestamp;
 	alert(geoPosition);
//Variable for storing the pin location
  	var pin = {
      id: "pin"+pins, //ID of the pin counts up, new id for every new pin
      lat: position.coords.latitude,
      lon: position.coords.longitude,
      name: "Pin"+pins
    };
  	kony.application.getCurrentForm().Map0.addPin(pin); //Add pin to map
}

function errorcallback(positionerror) {
    var errorMesg = "Error code: " + positionerror.code;
    errorMesg = errorMesg  + " message: " + positionerror.message;
    alert(errorMesg);
}

function saveLocation(){
    var positionoptions = {maximumage: 3000};
    pins++;
    kony.location.getCurrentPosition(successcallback, errorcallback, positionoptions);
}

function loadMap(){
// When the map is loaded, zoom in to the current location
    function successcallback(position) {	//If location is succesfully found
        locationData = {
            lat: position.coords.latitude, 
            lon: position.coords.longitude};
        kony.application.getCurrentForm().Map0.navigateToLocation(locationData, false, false);
    }

    function errorcallback(positionerror) { //If location could not be found
    	var errorMesg = "Error code: " + positionerror.code;
    	errorMesg = errorMesg  + " message: " + positionerror.message;
      	errorMesg = errorMesg + "Please turn on your GPS";
    	alert(errorMesg);
    }
    var positionoptions = {maximumage: 3000};
    // Options: retrieve the location every 3 seconds

  	//Get current location
    kony.location.getCurrentPosition(successcallback, errorcallback, positionoptions);
}


