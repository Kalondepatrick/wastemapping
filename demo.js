require(["esri/config", 
         "esri/Map", 
         "esri/views/MapView", 
         "esri/layers/FeatureLayer", 
         "esri/widgets/Legend", 
         "esri/Color",
	 "esri/widgets/Expand",
         "esri/renderers/UniqueValueRenderer", 
         "esri/widgets/Search",
	 "esri/layers/TileLayer"
        ], function(esriConfig, Map, MapView, FeatureLayer, Legend, Color, Expand, UniqueValueRenderer, Search, TileLayer) {
      
    
      esriConfig.apiKey = MY_API_KEY; 
    
      let map = new Map({
        basemap: "satellite" // Basemap layer
      });
    
    
    const view = new MapView({
        map: map,
        center: [35.04284, -15.7730355],
        zoom: 19, 
        container: "viewDiv",
        constraints: {
          snapToZoom: false
        }
      });
    
    
        /********************
         * Add feature layer
         ********************/

	// Waste Dumpsites 
   
      
    var Dumpsites = new FeatureLayer({
        url: "https://services8.arcgis.com/kCCq6u9VUnRxswS4/arcgis/rest/services/waste_piles_transect_walk/FeatureServer/0"
        });
	
	Dumpsites.title = "Waste Piles (Transect Walk)";	
	
	     
	       
	// Malawi sub-admistrative boundaries (TA's)
   
    var popupTA ={
        "title":"Locations(TA's)",
        "content": "<b>ADM3_EN:</b> {ADM3_EN}"
      }  
      
    var Locations = new FeatureLayer({
        url: "https://services3.arcgis.com/75NnIQLDaYFUpt2v/arcgis/rest/services/Malawi_TAs/FeatureServer",
        outFields: ["ADM3_EN"],
        popupTemplate: popupTA,
        });
	
	//Changing the layer name

	  Locations.title = "Locations(Areas or TA's)";
	
     // Malawi Districts
   
    var popupDistricts ={
        "title":"Districts",
        "content": "<b>NAME_1:</b> {Name}"
      }  
      
    var District = new FeatureLayer({
        url: "https://services3.arcgis.com/75NnIQLDaYFUpt2v/arcgis/rest/services/Malawi_District_Boundaries/FeatureServer",
        outFields: ["NAME_1"],
        popupTemplate: popupDistricts,
        }); 
          
let layer = new TileLayer({
    url: "https://tiles.arcgis.com/tiles/kCCq6u9VUnRxswS4/arcgis/rest/services/Ndirande-ortho/MapServer"
  });
 	
         /********************
         * Add Map Legend 
         ********************/
        
    var legend = new Legend({
        view: view,
        style: "classic",
        layout: "auto"
        });	

       view.ui.add(legend, "bottom-right");
	
	 /********************
         * Add Search Widget 
         ********************/
	
	const searchWidget = new Search({
		view: view
	});
	view.ui.add(searchWidget, {
		position: "top-right",
		index: 2
	});
	
	const statsDiv = document.getElementById("statsDiv");
        const infoDiv = document.getElementById("infoDiv");
        const infoDivExpand = new Expand({
          collapsedIconClass: "esri-icon-collapse",
          expandIconClass: "esri-icon-expand",
          expandTooltip: "Expand trees info",
          view: view,
          content: infoDiv,
          expanded: true
        });
        view.ui.add(infoDivExpand, "bottom-right");
         
         /********************
         * Add all Maps 
         ********************/
        map.add(Dumpsites, 1); 
	map.add(layer, 0);
	map.add(Locations, 1);
    	map.add(District, 0);

    });
