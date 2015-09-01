sap.ui.jsview("main.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mobiletest.inicio
	*/ 
	getControllerName : function() {
		return "main.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mobiletest.inicio
	*/ 
	createContent : function(oController) {
		var mainPage = new sap.m.Page("mainPage", {
			title: "SAPUI5 Model CRUD",
			enableScrolling: true,
			showNavButton:true,
			showHeader: true,
			customHeader : new sap.m.Bar({
				contentLeft: [ ],	
				contentMiddle: [ new sap.m.Label("myBarLabelNave", {text: "SAPUI5 Model CRUD"}) ]
			}),
			content: [
			          
			]
		});

		return mainPage;
	}

});