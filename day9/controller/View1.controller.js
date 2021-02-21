sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	return Controller.extend("day9.controller.View1", {
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel("./testData/employees.json");
			this.getView().setModel(oModel);
		},

		onEmployeeItemPressed: function(oEvent) {
			//getting employeeId of selected item
			var empID = oEvent.oSource.getCounter();
			
			//calling router to navigate to second view by passing selected element path/value
			sap.ui.core.UIComponent.getRouterFor(this).navTo("EmployeeDetails",{
				"EmployeeID": empID - 1    // here -1 because we want index not employee id
			});
		}
	});
});