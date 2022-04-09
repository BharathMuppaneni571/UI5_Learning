sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                var data = [{
                    "severity":sap.ui.core.MessageType.Error,
                    "message" : "Yeap !",
                    "additionalText": "additional text",
                    "description": "sample description"
                },
                {
                    "severity":sap.ui.core.MessageType.Information,
                    "message" : "Yeap !",
                    "additionalText": "additional text",
                    "description": "sample description"
                },
                {
                    "severity":sap.ui.core.MessageType.Success,
                    "message" : "Yeap !",
                    "additionalText": "additional text",
                    "description": "sample description"
                },
                {
                    "severity":sap.ui.core.MessageType.Warning,
                    "message" : "Yeap !",
                    "additionalText": "additional text",
                    "description": "sample description"
                }];
                var messageModel = new sap.ui.model.json.JSONModel(data);
                this.getView().setModel(messageModel, "messageModel");  
            },
            onShowDisplayErrors: function(oEvent) {
                if(!this.messageFragment){
                    this.messageFragment = sap.ui.xmlfragment("project1.view.fragments.Messages", this);
                    this.getView().addDependent(this.messageFragment);
                }
                this.messageFragment.openBy(oEvent.getSource());
            }
        });
    });
