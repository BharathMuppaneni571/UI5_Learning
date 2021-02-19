sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent) {

	return UIComponent.extend("day8.Component", {
		metadata: {
			manifest: "json"
		},

		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
		}
	});
});