sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";
	return Controller.extend("day7.controller.View1", {
		onInit: function() {
			var data = {
				"coleagues": [{
					"name": "Rohit",
					"city":	"Mumbai",
					"mobile": 9090909090,
					"mail": "abcd@xyz.com",
					"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5tWaV3XNgIrLSyus-xEg87uOvrHK1aM3prg&usqp=CAU"
				}, {
					"name": "M*****l",
					"city":	"Pune",
					"mobile": 7777777777,
					"mail": "pune@live.com",
					"image": "img/mrunal.jpg"
				}, {
					"name": "Sa****i",
					"city":	"Goa",
					"mobile": 8888888888,
					"mail": "sa****i@gmail.com",
					"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEPxfYwKkPBEGiv2BEN3D2ergrQHxyyNMTDg&usqp=CAU"
				}, {
					"name": "Bharath",
					"city":	"Bhimavaram",
					"mail": "muppanenibharath571@gmail.com",
					"image": "https://www.pngkin.com/mnp/53-534099.png"
				}]
			};
			var oModel = new JSONModel(data);
			this.getView().setModel(oModel);
		},
		
		onItemSelect: function(oEvent){
			this.getView().byId("idSimpleForm").setVisible(true);		// Getting element reference, Setting property visible to true
			var sPath = oEvent.oSource.getBindingContext().getPath();	// Getting binding path of selected element
			this.getView().byId("idSimpleForm").bindElement(sPath);     // Getting element id and setting binding to that specific element
		
			var newText = this.getView().getModel("i18n").getResourceBundle().getText("Coleagues_new");  // Getting text value from i18n
			this.getView().byId("idList").setHeaderText(newText);
			this.getView().byId("idSaveBtn").setVisible(true);
		},
		
		onSavePress: function(){
			this.getView().byId("idSimpleForm").setVisible(false);
			var newText = this.getView().getModel("i18n").getResourceBundle().getText("Coleague's");
			this.getView().byId("idList").setHeaderText(newText);
			this.getView().byId("idSaveBtn").setVisible(false);
		}
	});
});