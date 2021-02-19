sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"		// added json model dependency
], function(Controller, JSONModel) {	// used to refer within the controller
	"use strict";
	return Controller.extend("day6.controller.View1", {
		onInit: function() {
			var data = {						//	creted demo json object
				"name": ""
			}; 
			var oModel = new JSONModel(data);	//	created new model instance
			this.getView().setModel(oModel);	//	set model to view so that view is aware of the model
		}
	});
});