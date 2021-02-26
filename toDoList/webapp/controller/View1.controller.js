sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment"
], function(Controller, JSONModel, Fragment) {
	"use strict";

	return Controller.extend("namespacetoDoList.controller.View1", {
		onInit: function() {
			//initializing emply task list
			var tasks = {
				"tasks": []
			};
			this.getView().setModel(new JSONModel(tasks));
		},

		onAddTask: function() {

			// to check if dialog instance is existing if dont exist create one
			if (!this.pDialog) {
				this.pDialog = sap.ui.xmlfragment("namespacetoDoList.view.AddNewTask", this);
				this.getView().addDependent(this.pDialog);
				this.pDialog.open();
			}else {
				this.pDialog.open();
			}
		},

		onDialogCloseButton: function() {
			this.pDialog.close();
		},

		onAddNewtask: function() {
			var data = {};
			var listData = this.getView().getModel().oData.tasks;
			data.Description = sap.ui.getCore().byId("idDescription").getValue();
			data.Priority = sap.ui.getCore().byId("idPriority").getSelectedItem().getText();
			var tempDate = sap.ui.getCore().byId("idDueDate").getDateValue();
			data.DueDate = tempDate.getDate() + "-" + (tempDate.getMonth() + 1) + "-" + tempDate.getFullYear();

			// adding data to existing json model
			listData.push(data);
			//calling custom sort function to sort items by priority
			listData.sort(this.dynamicSort("Priority"));
			// Refreshing binding of list 
			this.getView().byId("idList").getModel().refresh();
			//closing dialog
			this.pDialog.close();
		},

		//Custom sort function from stack over flow :-P
		dynamicSort: function(property) {
			var sortOrder = 1;
			if (property[0] === "-") {
				sortOrder = -1;
				property = property.substr(1);
			}
			return function(a, b) {
				/* next line works with strings and numbers, 
				 * and you may want to customize it to your needs
				 */
				var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
				return result * sortOrder;
			};
		}
		// ,

		// onHandleDelete: function(oEvent) {
		// 	var oItem = oEvent.getParameter("listItem"),
		// 		spath = oItem.getBindingContext().getPath(),
		// 		listData = this.getView().getModel().oData.tasks,
		// 		index = spath.slice(spath.length - 1);
		// 	listData.splice(index, index);
		// 	listData.filter(Boolean);
		// 	this.getView().byId("idList").getModel().refresh();
		// }
	});
});