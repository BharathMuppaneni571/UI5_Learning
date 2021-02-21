sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("day10.controller.View1", {

		onSearch: function(oEvent) {
			// prepare list of filters
			var sQuery = oEvent.getParameter("newValue");	// getting user entered value
			if (sQuery) {
				var oFilter = new sap.ui.model.Filter({
					filters: [
						new sap.ui.model.Filter("ProductName", FilterOperator.Contains, sQuery)	//adding filter
					],
					and: false	//triggers multiple filters
				});
			}
			// apply/bind filter to list
			var oList = this.byId("idList");			// getting reference to list
			var oBinding = oList.getBinding("items");	// getting items binding
			oBinding.filter(oFilter);					// applying filter
		}
	});
});