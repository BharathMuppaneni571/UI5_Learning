sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent) {

	return UIComponent.extend("day5.Component", {
		metadata: {
			manifest: "json"
		},

		init: function() {
			debugger;
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
		}
	});
});