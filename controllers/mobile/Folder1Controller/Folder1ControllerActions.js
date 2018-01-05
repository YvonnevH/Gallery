define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_ff252d8ca4e544acaffb18e6c7acd9ec: function AS_Button_ff252d8ca4e544acaffb18e6c7acd9ec(eventobject) {
        var self = this;
        if (kony.application.getCurrentForm().Menu.isVisible == true) {
            kony.application.getCurrentForm().Menu.isVisible = false;
        } else {
            kony.application.getCurrentForm().Menu.isVisible = true;
        };
    },
    AS_Camera_e21328adab3a49d8b143a9e208411e6f: function AS_Camera_e21328adab3a49d8b143a9e208411e6f(eventobject) {
        var self = this;
        return imageLocation.call(this);
    },
    AS_Button_b0cb46f7473d4f029285b4f48548ef04: function AS_Button_b0cb46f7473d4f029285b4f48548ef04(eventobject) {
        var self = this;
        if (saved == false) {
            alert("Wait until all image locations are saved");
        } else {
            var ntf = new kony.mvc.Navigation("Map1");
            ntf.navigate();
        };
    },
    AS_Button_e1f1bff4783a40b1860cb27528a66bda: function AS_Button_e1f1bff4783a40b1860cb27528a66bda(eventobject) {
        var self = this;
        if (saved == false) {
            alert("Wait until all image locations are saved");
        } else {
            var ntf = new kony.mvc.Navigation("Folder1");
            ntf.navigate();
        };
    },
    AS_Button_a915328d9e634cceb97e3df2c22297a0: function AS_Button_a915328d9e634cceb97e3df2c22297a0(eventobject) {
        var self = this;
        if (saved == false) {
            alert("Wait until all image locations are saved");
        } else {
            var ntf = new kony.mvc.Navigation("Home");
            ntf.navigate();
        };
    },
    AS_TextField_h684afe7a1874699bb3ed0794f572fe1: function AS_TextField_h684afe7a1874699bb3ed0794f572fe1(eventobject, changedtext) {
        var self = this;
    },
    AS_TextField_cb11740a155946ee9a85e1fc50813ccc: function AS_TextField_cb11740a155946ee9a85e1fc50813ccc(eventobject, changedtext) {
        var self = this;
        kony.application.getCurrentForm().nameFolder1.text = kony.application.getCurrentForm().FolderName.text;
    }
});