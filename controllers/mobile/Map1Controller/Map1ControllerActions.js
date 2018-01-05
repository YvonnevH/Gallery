define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Map_f7ae48b55f754e37bc22b62b6c1617cc: function AS_Map_f7ae48b55f754e37bc22b62b6c1617cc(eventobject) {
        var self = this;
        return loadMap.call(this);
    },
    AS_Map_cf6f12bc537d4693a6ce5ad6258052ff: function AS_Map_cf6f12bc537d4693a6ce5ad6258052ff(eventobject, location) {
        var self = this;
        pinClicked();
    },
    AS_Button_j26f330ebd5d43d49eb994b7be24012f: function AS_Button_j26f330ebd5d43d49eb994b7be24012f(eventobject) {
        var self = this;
        if (saved == false) {
            alert("Wait until all image locations are saved");
        } else {
            var ntf = new kony.mvc.Navigation("Map1");
            ntf.navigate();
        };
    },
    AS_Button_j4691b84b13c4f34a8f57e93daaaca94: function AS_Button_j4691b84b13c4f34a8f57e93daaaca94(eventobject) {
        var self = this;
        if (saved == false) {
            alert("Wait until all image locations are saved");
        } else {
            var ntf = new kony.mvc.Navigation("Folder1");
            ntf.navigate();
        };
    },
    AS_Button_de99979a4e9d4003ac648c242e520ded: function AS_Button_de99979a4e9d4003ac648c242e520ded(eventobject) {
        var self = this;
        if (saved == false) {
            alert("Wait until all image locations are saved");
        } else {
            var ntf = new kony.mvc.Navigation("Home");
            ntf.navigate();
        };
    },
    AS_Button_hd5394fda78b4146b37262bc2003da42: function AS_Button_hd5394fda78b4146b37262bc2003da42(eventobject) {
        var self = this;
        if (kony.application.getCurrentForm().Menu.isVisible == true) {
            kony.application.getCurrentForm().Menu.isVisible = false;
        } else {
            kony.application.getCurrentForm().Menu.isVisible = true;
        };
    },
    AS_Camera_e26ec0ce958b49fa80d62efead0a477c: function AS_Camera_e26ec0ce958b49fa80d62efead0a477c(eventobject) {
        var self = this;
        return imageLocation.call(this);
    },
    AS_TextField_d08ecb43c43447268347e1c25a89600b: function AS_TextField_d08ecb43c43447268347e1c25a89600b(eventobject, changedtext) {
        var self = this;
    },
    AS_TextField_hd667d2bf88245f88cb5c57da6607076: function AS_TextField_hd667d2bf88245f88cb5c57da6607076(eventobject, changedtext) {
        var self = this;
        kony.application.getCurrentForm().nameFolder1.text = kony.application.getCurrentForm().FolderName.text;
    }
});