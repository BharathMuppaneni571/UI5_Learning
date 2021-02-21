sap.ui.define([
	"sap/ui/model/odata/ODataUtils"
], function(odataUtils) {
	"use strict";
	return {
		customFormatDate: function(date) {
			if (date != null) {
				var tempDate = odataUtils.formatValue(eval(("new " + date).replace(/\//g, "")), "Edm.DateTime").split("'")[1];
				var year = new Date(tempDate).getFullYear();
				var month = new Date(tempDate).getMonth() + 1;
				var cDate = new Date(tempDate).getDate();

				return (year + "." + month.toString().padStart(2,0) +"."+ cDate.toString().padStart(2,0));
			}
			// return	eval(("new " + date).replace(/\//g,""));
		}
	};
});