var folders = 1;
function newFolder(){
  var folder = new kony.ui.Button({

    // imageScaleMode
    id:"folder"+folders, 
    isVisible:true, 
    // src:img1, 
    onClick: goToFolder,
    text:"Folder "+folders,
    skin: headerButtonClearSkin
  },
                                 {
    
  }, 
                                 {

  });
  kony.application.getCurrentForm().add(folder);
  folder.width = "100%";
  folder.height = "20%";
  folder.top = 20*folders +1+ "%";
  folders++;
}