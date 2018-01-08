define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_e01737549cdd454da3c8dba192716589: function AS_Button_e01737549cdd454da3c8dba192716589(eventobject) {
        var self = this;
        if (kony.application.getCurrentForm().Menu.isVisible === true) {
            kony.application.getCurrentForm().Menu.isVisible = false;
        } else {
            kony.application.getCurrentForm().Menu.isVisible = true;
        }
    },
    AS_Button_b0a41ade7fad43bfb1bcbd14d211c4d6: function AS_Button_b0a41ade7fad43bfb1bcbd14d211c4d6(eventobject) {
        var self = this;
        kony.application.getCurrentForm().Menu.isVisible = false;
        newFolder();
    },
    AS_Button_a4c9d4cfbc2943428376c0902a51635f: function AS_Button_a4c9d4cfbc2943428376c0902a51635f(eventobject) {
        var self = this;
        if (saved == false) {
            alert("Wait until all image locations are saved");
        } else {
            var ntf = new kony.mvc.Navigation("Map1");
            ntf.navigate();
        }
    },
    AS_Button_ec1d082f2f7e4936a14652ea25c22910: function AS_Button_ec1d082f2f7e4936a14652ea25c22910(eventobject) {
        var self = this;
        if (saved == false) {
            alert("Wait until all image locations are saved");
        } else {
            var ntf = new kony.mvc.Navigation("Folder1");
            ntf.navigate();
        }
    },
    AS_Button_h836ad1c95854c0b9e6fa8b7ec42fa53: function AS_Button_h836ad1c95854c0b9e6fa8b7ec42fa53(eventobject) {
        var self = this;
        if (saved == false) {
            alert("Wait until all image locations are saved");
        } else {
            var ntf = new kony.mvc.Navigation("Home");
            ntf.navigate();
        }
    },
    AS_Form_d1b3118ddc3c439b8aa7f1ca5cc459c3: function AS_Form_d1b3118ddc3c439b8aa7f1ca5cc459c3(eventobject) {
        var self = this;
        saved = true;
    },
    AS_Form_fde72e485bf3446ea0b04542d18af8dc: function AS_Form_fde72e485bf3446ea0b04542d18af8dc(eventobject) {
        var self = this;
        kony.application.getCurrentForm().Menu.isVisible = false;
    }
});