var folders = 0;
var folderTop = 10;

function newFolder(){
  var folderButton = new kony.ui.Button({

    // imageScaleMode
    id:"folder"+folders, 
    isVisible:true, 
    // src:img1, 
    onClick: goToFolder,
    text:"Folder "+(folders+1),
    skin: newFolderButton
  },
                                 {
    
  }, 
                                 {

  });
  kony.application.getCurrentForm().add(folderButton);
  folderButton.width = "100%";
  folderButton.height = "10%";
  folderButton.top = folderTop+"%";
  folders++;
  folderTop = folderTop+11;
}

function goToFolder(){  
  
}