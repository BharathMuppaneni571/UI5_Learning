sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {

	return Controller.extend("day5.controller.View1", {
		onInit: function(){
			debugger;
		},
		onBeforeRendering: function(){
			debugger;
		},
		onAfterRendering: function(){
			debugger;
		},
		onExit: function(){
			debugger;
		},
		
		
		loginPressed: function(){
			var userName	=	this.getView().byId("idUsername").getValue();
			var password	=	this.getView().byId("idPassword").getValue();
			
			if(userName	===	"admin" && password	===	"admin"){
				alert("Login is successfull");
			}else{
				alert("Enter correct logins !!");
			}
		}
	});
});