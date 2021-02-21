sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"day9/utils/formatter"	//added this to load our formatter file
], function(Controller , formatter) {
	"use strict";

	return Controller.extend("day9.controller.View2", {
		formatter: formatter,	// reference created
		onInit: function() {
			//calls when ever the pattern matches
			sap.ui.core.UIComponent.getRouterFor(this).getRoute("EmployeeDetails").attachMatched(this.routerMatched, this);
		},

		routerMatched: function(oEvent) {
			// getting the arguments list
			var argument = oEvent.getParameter("arguments");

			//setting the absolute path to view
			this.getView().bindElement("/Employees/" + argument.EmployeeID);
		}
	});

});