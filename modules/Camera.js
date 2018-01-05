var images = 1;
var pins = 1;
var longitude;
var latitude;
var top=10.1875;
var photoStorage=[];
var popUp;
var saved=true;

function imageLocation(){
  saveLocation();
  // Click on the pin gives the weather information, pinname and the picture you took at that location

}

function saveValues(){
  saved=false;
  var img1 = kony.application.getCurrentForm().Camera1.rawBytes;

  var image = new kony.ui.Image2({

    // imageScaleMode
    id:"image"+images, 
    isVisible:true, 
    // src:img1, 
    imageWhenFailed:"rn_icon1.png", 
    imageWhileDownloading:"konynew.png"
  },
                                 {
    containerWeight:100,
    imageScaleMode:constants.IMAGE_SCALE_MODE_CROP
  }, 
                                 {

  });
  image.rawBytes = img1;

  kony.application.getCurrentForm().add(image); 

  //Increases top value after every 3 images
  image.top=top+"%";
  if(images%3===0){	
    top=top+33*(9/16)+0.1875;
  }

  //Checks which column the image is and adjusts left value
  if(images%3==1){
    image.left="0.3333%";
  }else if(images%3==2){
    image.left="33.6667%";
  }else{
    image.left="67%";
  }

  image.width="33%";
  //Height is width times aspect ratio (square)
  image.height=(33*(9/16))+"%";



  var img = kony.image.createImage(img1);
  img.writeToMediaGallery(
    {imageName:"image"+images, 
     extensionType:kony.image.ENCODE_PNG, 
     onSuccess:okFunc, onFailure:notOkFunc
    });
  images++;
}


function okFunc(name){
  try{
    //alert("saving");
    // kony.application.getCurrentForm().image1.rawBytes = kony.image.findImageInGallery({imageName:name});
    photoStorage[pins] = {"time":today, 
                    "lon":longitude, 
                    "lat":latitude, 
                    "name":name,
                    "weatherTemp":weatherTemp,
                    "weatherIcon":weatherIcon
                   };
    
    saved = true;
    alert("Location data saved");
    var storage = kony.store.setItem("photos", photoStorage);
    var p = photoStorage[pins];
    var p2 = JSON.stringify(p);
    var p3 = JSON.parse(p2);
    pins++;
  }
  catch (err){
    alert ("okFunc error: "+err + "\n"+ "Data not saved");
    saved = true;
  }
}

function notOkFunc(sts,msg){
  alert("notOkFunc error: "+msg);
  saved = true;
}




