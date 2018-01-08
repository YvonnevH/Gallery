var today;
var weatherTemp;
var weatherIcon;

function request(){
  //Request the weather API
  alert ("Start request");
  var positionoptions = {maximumage: 3000};

  var url = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&APPID=ffa47c75292d6e70764d72f5c4e5773f";
  var responseFunc = responseFunction;
  dorequest(url,responseFunc);
}

function dorequest(url, responseFunc) {
  //Do the request and give an alert if request failed

  try {
    var httpRequest = new kony.net.HttpRequest();
    httpRequest.onReadyStateChange = responseFunc;
    httpRequest.ResponseType = constants.HTTP_RESPONSE_TYPE_TEXT;
    httpRequest.open(constants.HTTP_METHOD_GET, url, false);
    httpRequest.send();
  } catch(err) {

    alert("dorequest failed");
  }
}

function responseFunction(){
  // check if successful completion
  if (this.status == 200) {
    alert ("Response");
    try {
      // Create a variable with the current day/month/year
      today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();

      if(dd<10) {
        dd = '0'+dd;
      } 

      if(mm<10) {
        mm = '0'+mm;
      } 

      today = dd + '/' + mm + '/' + yyyy;
	  
      // convert result of request to json object
      var jsonString = JSON.stringify(this.response);
      var jsonObj = JSON.parse(jsonString);
	
      
      //Store values in global variables to be able to push them to the storage file
      weatherTemp = Math.round((jsonObj.main.temp- 273.15)*10)/10;
      weatherIcon = "http://openweathermap.org/img/w/"+jsonObj.weather[0].icon+".png";

	  alert(weatherTemp);
      // Label0 is an area to show the values for debugging
//       kony.application.getCurrentForm().Label0.text = 
//         today + "\n" +
//         "Longitude is: " + longitude  +"\n"+ 
//         "Latitude is: "+latitude  +"\n"+ 
//         jsonObj.weather[0].description +"\n"+ 
//         "Temperature is " + weatherTemp;
//       kony.application.getCurrentForm().weatherIcon.src = weatherIcon;
      saveValues();
    } catch (err) {
      alert("response failed" +"\n"+ err);
    }
  }
}