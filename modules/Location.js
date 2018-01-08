function loadMap(){
  //Get current location
  kony.location.getCurrentPosition(successcallback, errorcallback, positionoptions);

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
    errorMesg = errorMesg + "\n" + "Please turn on your GPS";
    alert(errorMesg);
    saved = true;
  }

  //Retrieve the location every 3 seconds
  var positionoptions = {maximumage: 3000};


  // Does not work in any way
  //Create all pins from map:
  for(i=1;i<photoStorage.length;i++){
    var p = photoStorage[i];
    alert (p);
    var rawBytes = kony.image.findImageInGallery({imageName:p.name});

    var pin = {
      id: "image"+i, 
      lat: p.lat,
      lon: p.lon,
      name: p.name,
      showcallout: false
    };

    kony.application.getCurrentForm().Map0.addPin(pin);
  }
}

function pinClicked(locationdata){
  //alert(locationdata.id);
  kony.application.getCurrentForm().pinName.text = locationdata.id;
  pinInfoText.text = locationdata;
}

function saveLocation(){
  var positionoptions = {maximumage: 3000};
  kony.location.getCurrentPosition(successcallback, errorcallback, positionoptions);
}

function successcallback(position) {
  // Save GPS location to global variables
  longitude = position.coords.longitude;
  latitude = position.coords.latitude;
  request();

}

function errorcallback(positionerror) {
  var errorMesg = "Error code: " + positionerror.code;
  errorMesg = errorMesg  + " message: " + positionerror.message;
  alert(errorMesg);
  saved = true;
}

