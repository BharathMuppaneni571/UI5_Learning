sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("UI5.BH571.googleDictionaryAPI.controller.MainView", {
			onInit: function () {

			},

			fireLiveSearch: function (oEvent) {
				let searchTerm = oEvent.getParameter("value");
				this.getData(searchTerm);
			},

			getData: function (searchTerm) {
				var url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchTerm}`;
				//${searchTerm} template literals
				
				var oModel = new sap.ui.model.json.JSONModel();
				var that = this;
				var aData = jQuery.ajax({
					url: `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchTerm}`,
					async: true,
					success: function (data, textStatus, jqXHR) {
						oModel.setData(data);
						that.dataRecieved(data);
					}
				});
			},

			dataRecieved: function (data) {
				let payload = {
					"Text": data[0].phonetics[0].text,
					"Word": data[0].word,
					"Audio": data[0].phonetics[0].audio,
					"Example": data[0].meanings[0].definitions[0].example,
					"PartOfSpeech": data[0].meanings[0].partOfSpeech,
					"Meaning": data[0].meanings[0].definitions[0].definition
				};
				this.getView().setModel(new sap.ui.model.json.JSONModel(payload));
				this.audioURL = data[0].phonetics[0].audio;
			},

			playAudio: function () {
				let audio = new Audio(this.audioURL);
				audio.play();
			}
		});
	});
