var baseCords = [38, -100];
var mapZoomLevel = 5;

// Create the createMap function.
function createMap(response)
{

  // Create the tile layer that will be the background of our map.
  var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  // Create the map object with options.
  var map = L.map("map-id", {
    center: baseCords,
    zoom: mapZoomLevel,
    layers: [streetmap]
  });
  
  
  // make a variable for the legend and position it in the bottom right of the screen
  var legend = L.control(
    {
        position: "bottomright"
    }
  );

  // add the properties for the legend
  legend.onAdd = function ()
  {
    // create a div for the legend
    var div = L.DomUtil.create("div", "info legend");
    console.log(div);

    var depth = [-10, 10, 30, 50, 70, 90]; 
    var colors = [
        "#69B34C", 
        "#ACB334",
        "#FAB733",
        "#FF8E15", 
        "#FF4E11", 
        "#FF0D0D"
    ];  
    
    // use a loop to generate labels within the div
    div.innerHTML += '<b>Depth of the event </br>(in kilometers)</b><br><br>'
    for(var i = 0; i < depth.length; i++)
    {
        // display the colors and the interval values
        //console.log(colors[i]);
        //console.log(depth[i]);
        // use .innerHTML to set the value of the color and the text for the interval
        div.innerHTML += "<i style='background: " + colors[i] + "'></i>"
        + depth[i]
        + (depth[i + 1] ? " &ndash; " + depth[i+1] + " km<br>" : 
        "+ km");
    }

    return div;
  };

  // add the legend to the map
  legend.addTo(map);

  // markerSize radius based on earthquake magnitude
  function markerSize(magnitude) 
  {
      return magnitude * 8;
  }

  //  markerColor based on earthquake magnitude
  function markerColor(depth) {
      if (depth < 10) 
      {
          return "#69B34C"
      } 
      else if (depth < 30) 
      {
          return "#ACB334"
      } 
      else if (depth < 50) 
      {
          return "#FAB733"
      } 
      else if (depth < 70) 
      {
          return "#FF8E15"
      } 
      else if (depth < 90) 
      {
          return "#FF4E11"
      } 
      else 
      {
          return "#FF0D0D"
      }
  };

  // Create a GeoJSON layer containing the features array on the response object
  L.geoJSON(response, {

    // use pointToLayer to create circle markers for each data's coordinates
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: markerSize(feature.properties.mag),
            fillColor: markerColor(feature.geometry.coordinates[2]),
            color: "#000",
            weight: 0.3,
            opacity: 0.5,
            fillOpacity: 1, 
            labels: '<strong> THE TITLE </strong>'
        }).bindPopup(`<br><strong>Magnitude: </strong>${feature.properties.mag}<br>
            <strong>Location: </strong> ${feature.properties.place}<br>
            <strong>Depth of the event in kilometers: </strong>${feature.geometry.coordinates[2]}`);   
    }

}).addTo(map)
}

// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(
  createMap
);
