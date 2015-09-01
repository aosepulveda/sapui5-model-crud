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
	    var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			id : 'matrix1',
			layoutFixed : true,
			width : '1000px',
			columns : 6,
			widths : ['150px', '230px', '150px', '230px', '60px', '200px'] });
		
		var oVerticalLayout = new sap.ui.layout.VerticalLayout("v1", {
			width: '1000px'
		});
		
		var oLabel1 = new sap.m.Label({
			text: "First Name:"
		});
		var oTextFieldFirstName = new sap.m.Input(this.createId("textFieldFirstName"), {
		    type: "Text"
		});
		
		oMatrix.createRow(oLabel1, oTextFieldFirstName);
		
		var oLabel2 = new sap.m.Label({
			text: "First Name:"
		});
		var oTextFieldLastName = new sap.m.Input(this.createId("textFieldLastName"), {
		    type: "Text"
		});
		
		oMatrix.createRow(oLabel2, oTextFieldLastName);
		
		var oButtonSave = new sap.m.Button({
		    text: "Save",
		    press: function(oEvent) {
		        oController.save(oTextFieldFirstName.getValue(), oTextFieldLastName.getValue());
		    }
		});
		oMatrix.createRow(oButtonSave);
		
		var oTableData = new sap.m.Table(this.createId("table"));
		
		var oFirstName = new sap.m.Text({text: "{firstName}"});  
		var oLastName = new sap.m.Text({text: "{lastName}"});
		
		var oColFirstName = new sap.m.Column({header: new sap.m.Text({text:"First Name"}), width: "150px", text: "{firstName}" });  
		var oColLastName = new sap.m.Column({header: new sap.m.Text({text:"Last Name"}), width: "150px"});  
		
		oTableData.addColumn(oColFirstName).addColumn(oColLastName);
		
		var oRow = new sap.m.ColumnListItem();  
		oRow.addCell(oFirstName).addCell(oLastName);
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData({modelData: aData});
		oTableData.setModel(oModel);
		oTableData.bindItems("/modelData", oRow);
		
		oTableData.setMode(sap.m.ListMode.Delete);
		oTableData.attachDelete(function(oEvent) {
			var oSelectedItem = oEvent.getParameter("listItem");
			var sItemName = oSelectedItem.getBindingContext().getProperty("firstName");
			var path = oSelectedItem.getBindingContext().getPath();
      		path = path.substring(path.lastIndexOf('/') +1);
      		var model = oSelectedItem.getModel();
      		var data = model.getProperty('/modelData');
    		data.splice(parseInt(path), 1);
      		model.setProperty('/modelData', data);
			
			sap.m.MessageToast.show("Deleted");
		});
		
		oVerticalLayout.addContent(oTableData);
		
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
			    oMatrix, oVerticalLayout
			    ]
		});

		return mainPage;
	}

});