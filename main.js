// MapBox public access token to use the APIs
mapboxgl.accessToken = 'pk.eyJ1IjoiYWVuZXZpbGxlMiIsImEiOiJjbGVjemNsMDIwMjE4M3JwOXRham13bzQ3In0.sdW72uvBX2AoOOnDIJxOPg'

// MapBox gl js map centered on Grand Teton National Park
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [-110.6818,43.7904],
    zoom: 8
});

// Event listener function for when the map loads
map.on('load', ()=>{

    map.resize(); // Fit the map to its container

    //addTopButton(map); // Add the custom control (the 'Toggle Directions' button) to the map

    // Add the Park Boundary layer from the tileset hosted in MapBox
    map.addLayer({
        'id':'Park Boundary',
        'type':'fill',
        'source':{
            'type': 'vector',
            'url': 'mapbox://aeneville2.9g1afw2z'
        },
        'source-layer': 'ParkBoundary_FeaturesToJSON_v-4oyzb4',
        'paint': {
            'fill-outline-color': '#000000',
            'fill-color': '#b6b8ba',
            'fill-opacity': 0.5
        },
        'layout': {
            'visibility': 'visible'
        }
    });

    // Add the Trails layer from the tileset hosted in MapBox
    map.addLayer({
        'id':'Trails',
        'type':'line',
        'source':{
            'type': 'vector',
            'url': 'mapbox://aeneville2.7f9qk5z5'
        },
        'source-layer': 'Trails_FeaturesToJSON_v3-1c2nmj',
        'paint': {
            'line-width': 2,
            'line-color': '#6e3802',
            'line-dasharray': [3,2]
        },
        'layout': {
            'visibility': 'visible'
        }
    });


    // NPS Images came from https://www.nps.gov/maps/tools/symbol-library/index.html 
    // Load the images to use for the symbol layers and add to the map
    map.loadImage('./red-icon.png',(error,image)=>{
        if (error) throw error;
        map.addImage('red-icon',image);
    });

    map.loadImage('./dot-black-22.png',(error,image)=>{
        if(error) throw error;
        map.addImage('default-dot',image);    
    });

    map.loadImage('./boat-tour-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('boat-tour',image);
    });

    map.loadImage('./trailhead-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('trailhead',image);
    });

    map.loadImage('./beach-access-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('beach-access',image)
    });

    map.loadImage('./campground-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('campground',image)
    });

    map.loadImage('./entrance-station-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('entrance-station',image)
    });

    map.loadImage('./lodging-black-22-v2.png',(error,image)=>{
        if (error) throw error;
        map.addImage('lodging-v2',image)
    });

    map.loadImage('./picnic-area-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('picnic-area',image)
    });

    map.loadImage('./scenic-viewpoint-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('scenic-viewpoint',image)
    });

    map.loadImage('./theater-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('theater',image)
    });

    map.loadImage('./visitor-center-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('visitor-center',image)
    });

    map.loadImage('./first-aid-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('first-aid',image)
    });

    map.loadImage('./food-service-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('food-service',image)
    });

    map.loadImage('./gas-station-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('gas-station',image)
    });

    map.loadImage('./parking-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('parking-2',image)
    });

    map.loadImage('./post-office-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('post-office',image)
    });

    map.loadImage('./ranger-station-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('ranger-station-2',image)
    });

    map.loadImage('./restrooms-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('restrooms',image)
    });

    map.loadImage('./showers-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('showers-2',image)
    });

    map.loadImage('./souvenir-shop-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('souvenir-shop',image)
    });

    map.loadImage('./telephone-black-22.png',(error,image)=>{
        if (error) throw error;
        map.addImage('pay-phone',image)
    });

    // Add the Services layer from the tileset hosted in MapBox and style by image icon based on point type
    map.addLayer({
        'id':'Services',
        'type':'symbol',
        'source':{
            'type': 'vector',
            'url': 'mapbox://aeneville2.cledcz6zz06n723tb7tsrk9n4-6mr32'
        },
        'source-layer': 'Services',
        'layout': {
            'icon-image': [
                'match',
                ['get','Point Type'],
                'First Aid Station',
                'first-aid',
                'Store',
                'souvenir-shop',
                'Headquarters',
                'ranger-station-2',
                'Showers',
                'showers-2',
                'Ranger Station',
                'ranger-station-2',
                'Gas Station',
                'gas-station',
                'Restroom',
                'restrooms',
                'Food Service',
                'food-service',
                'Pay Phone',
                'pay-phone',
                'Parking',
                'parking-2',
                'Post Office',
                'post-office',
                'default-dot'
            ],
            'icon-size': 0.25,
            'visibility': 'visible'
        }
    });

    // Add the Points of Interest layer from the tileset hosted in MapBox and style by image icon based on point type
    map.addLayer({
        'id':'POIs',
        'type':'symbol',
        'source':{
            'type': 'vector',
            'url': 'mapbox://aeneville2.cledcynu8086025quruopxym2-4x7hl'
        },
        'source-layer': 'POIs',
        'layout': {
            'icon-image': [
                'match',
                ['get','Point Type'],
                'Trailhead',
                'trailhead',
                'Ferry Terminal',
                'boat-tour',
                'Visitor Center',
                'visitor-center',
                'Campground',
                'campground',
                'Entrance Station',
                'entrance-station',
                'Amphitheater',
                'theater',
                'Water Access',
                'beach-access',
                'Picnic Area',
                'picnic-area',
                'Turnout',
                'scenic-viewpoint',
                'Lodging',
                'lodging-v2',
                'Overlook',
                'scenic-viewpoint',
                'default-dot'
            ],
            'icon-size': 0.25,
            'visibility': 'visible'
        }
    });

    // Load the image for use in the Rankings layer and add to the map
    map.loadImage('./Star.png',(error,image)=>{
        if (error) throw error;
        map.addImage('star',image)
    });

    // Add an empty geoJSON source for the Rankings layer with clustering turned on
    map.addSource('rankingSource',{
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        },
        // Used https://docs.mapbox.com/mapbox-gl-js/example/cluster/
        cluster: true,
        clusterMaxZoom: 12,
        clusterRadius: 50
    });

    // Add the Rankings layer to the map with the correct image icon
    map.addLayer({
        id: 'Rankings',
        type: 'symbol',
        source: 'rankingSource',
        layout: {
            'icon-image': 'star',
            'icon-size': 0.15,
            'visibility': 'none',
            'icon-allow-overlap': true
        }
    });

    // Used https://docs.mapbox.com/mapbox-gl-js/example/cluster/
    // Add a text layer on the Rankings clusters illustrating the point count in the cluster
    map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'rankingSource',
        filter: ['has','point_count'],
        layout: {
            'text-field': ['get','point_count_abbreviated'],
            'text-font': ['DIN Offc Pro Medium','Arial Unicode MS Bold'],
            'text-size': 10,
            'visibility': 'none'
        }
    });

    // Call the functions to retrieve the Rankings geoJSON source data from the hosted MapBox dataset for use in the Rankings layer
    //  and generating the POI list
    addRankings();
    getPOIs();

});

// Define a ranking id variable for determining the id for a new user ranking added to the Rankings layer
var rankingId;

// Used https://d3-graph-gallery.com/graph/barplot_basic.html 
// Set the dimensions and margins for the rankings bar chart
var margin = {top: 30, right: 30, bottom: 70, left: 60},
width = 300 - margin.left - margin.right,
height = 200 - margin.top - margin.bottom;

// Create an SVG in the chart-form div to hold the chart
var svg = d3.select('#chart-form')
.append('svg')
.attr('width', width + margin.left + margin.right)
.attr('height', height + margin.top + margin.bottom)

async function addRankings(){
    // https://stackoverflow.com/questions/57624873/mapbox-api-styles-v1-username-doesnt-reflect-latest-style-data for help with updating the data
    // Use a GET request to access the Rankings dataset from MapBox using the Datasets API with a parameter to use the updated data
    const rankings = await fetch(
        'https://api.mapbox.com/datasets/v1/aeneville2/clef1oq7p043t2qnyrnlnphqg/features?access_token=sk.eyJ1IjoiYWVuZXZpbGxlMiIsImEiOiJjbGVmcTFtdXowYXAyM3FtcWdrd2phdm1rIn0.xTaxF4yB4KeNuu1OABOLtw&fresh=true',
        { method: 'GET'}
    );
    
    // Get the returned data in JSON format from the GET request
    const data = await rankings.json();

    // Once the data is returned then update the Rankings layer source with the data
    Promise.all([rankings,data]).then(async () =>{
        const rankingSource2 = map.getSource('rankingSource')
        rankingSource2.setData(data);

        // Get the ids of all of the current rankings to determine the highest ranking id for use upon next user submission
        const features = data.features;
        var featureidArray = [];
        for (var i=0; i<features.length; i++){
            var id = features[i].id;
            featureidArray.push(id);
        }
        rankingId = Math.max(...featureidArray);

        // Call the function to get the counts of number of rankings for each point of interest in the Rankings layer
        var poiCounter = [];
        const waitArray = await counterLoop(features,poiCounter);
        
        Promise.all([waitArray]).then(async()=>{
            // Once the array has finished then turn the resulting object into an array & sort the array by descending values
            var dataSorted = [];
            for (var ranking in waitArray){
                dataSorted.push([ranking,waitArray[ranking]]);
            }
            dataSorted.sort(function(a,b){
                return b[1] - a[1]
            });

            // Take the first 10 values in the array (top 10 ranked POIs) and add to an Object as a name value pair
            // The new Object will be the data for the chart
            var topTenArray = dataSorted.slice(0,10);
            var topTen = new Object();
            for (var i=0; i<topTenArray.length; i++){
                var key = topTenArray[i][0];
                var value = topTenArray[i][1]
                topTen[key] = value;
            }

            var data = topTen;

            // Append a g to the SVG for the chart to be added to
            // Used https://d3-graph-gallery.com/graph/barplot_basic.html 
            var svgG = svg.append('g')
            .attr('transform','translate(' + margin.left + ',' + margin.top + ')');

            // Used https://d3-graph-gallery.com/graph/barplot_stacked_hover.html 
            // Append a div to the chart-form div for the tooltip and define the styles of the tooltip with an opacity of 0
            var tooltip = d3.select('#chart-form')
            .append('div')
            .style('opacity',0)
            .attr('class','tooltip')
            .style('background-color','green')
            .style('color','white')
            .style('border','solid')
            .style('border-color','white')
            .style('border-width','1px')
            .style('border-radius','5px')
            .style('padding','5px')
            .style('position','absolute');

            // Function called to show the tooltip with the name and value on mouseover
            var mouseover = function(d){
                var name = d;
                var value = data[d];
                tooltip.html(name + ': ' + value)
                .style('opacity',1)
            }

            // Function to adjust the placement of the tooltip on mousemove
            var mousemove = function(d){
                tooltip.style('left',(d3.mouse(this)[0]+10) + 'px')
                .style('top',(d3.mouse(this)[1]) + 'px')
            }

            // Function to change the opacity of the tooltip to 0 on mouseleave
            var mouseleave = function(d){
                tooltip.style('opacity',0)
            }

            // Defining the x-axis
            var x = d3.scaleBand()
            .range([ 0, width ])
            .domain(d3.keys(data)) // Domain determined by the name (keys) of the data
            .padding(0.2);
            // Append a g to the SVG g defined earlier for the x-axis ticks
            svgG.append('g')
            .attr('transform', 'translate(0,' + height + ')')
            .call(d3.axisBottom(x).tickFormat((d)=>''))

            // Determine the highest value in the data
            var valueArray = Object.values(data);
            var highestValue = Math.max(...valueArray);

            // Add y-axis with the highest value in the data and append a g to the SVG g for the labels
            var y = d3.scaleLinear()
            .domain([0, highestValue])
            .range([ height, 0]);
            svgG.append('g')
            .attr('id','y-axis-d')
            .call(d3.axisLeft(y).ticks(5));

            // Add a bar in the chart for each of the name value pairs in the data
            svgG.selectAll('mybar')
            .data(d3.keys(data))
            .enter()
            .append('rect')
            .attr('x', function(d) { return x(d); }) 
            .attr('y', function(d) { return y(data[d]); }) 
            .attr('width', x.bandwidth()) 
            .attr('height', function(d) { return height - y(data[d]); })
            .style('fill','#008000')
            .on('mouseover',mouseover) 
            .on('mousemove',mousemove)
            .on('mouseleave',mouseleave);
            
        })
        
    });
};


// Function to go through the Rankings layer and get a count of each time the name appears in the dataset
// Returns an object containing Point of Interest name and count
async function counterLoop(features,poiCounter){

    const poiArray = [];
    for (var i=0; i<features.length; i++){
        const poiName = features[i].properties['Name'];

        poiArray.push(poiName);
    };

    //Used https://stackabuse.com/count-number-of-element-occurrences-in-javascript-array for an example
    for (poi of poiArray.flat()){
        if (poiCounter[poi]) {
            poiCounter[poi] += 1
        } else {
            poiCounter[poi] = 1
        }
    };

    return poiCounter;
}


// Function to use a GET request to get the updated Rankings dataset
//  With the updated data, it loops through the data and adds the point name and coordinates to an array
//  Each name value pair in the array is added to the options in the user submission form so that the correct names and locations are used
async function getPOIs(){
    const pois = await fetch(
        'https://api.mapbox.com/datasets/v1/aeneville2/cledcynu8086025quruopxym2/features?access_token=sk.eyJ1IjoiYWVuZXZpbGxlMiIsImEiOiJjbGVmcTFtdXowYXAyM3FtcWdrd2phdm1rIn0.xTaxF4yB4KeNuu1OABOLtw',
        { method: 'GET'}
    )
    const data = await pois.json();
    const features = data.features;
    
    let poiArray = [];
    for (var i=0;i<features.length;i++){
        const name = features[i].properties['Point Name'];
        const geometry = features[i].geometry.coordinates;
        poiArray.push([name,geometry]);
    }

    let poiArraySort = poiArray.sort();
    const selectPoi = document.getElementById('poi-select');
    for (var i=0; i<poiArraySort.length; i++){
        let newOption = new Option(poiArraySort[i][0],poiArraySort[i][1]);
        selectPoi.add(newOption,undefined);
    }
};

// Used https://docs.mapbox.com/help/tutorials/local-search-geocoding-api/#add-the-geocoder 
// Add a new geocoder control (search bar) to the map that only returns results within the proximity of Grand Teton National Park
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    placeholder: 'Search',
    mapboxgl: mapboxgl,
    marker: false,
    bbox: [-111.00480, 43.41594, -110.32914, 44.18901],
    proximity: {
        longitude: -110.6818,
        latitude: 43.7904
    },
    collapsed: true,
    // https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder-custom-render 
    render: function(item){
        return `<div><span style='font-family:woodlist;font-size:14px;'>${item.place_name}</span></div>`;
    }
});
map.addControl(geocoder);

// Used https://docs.mapbox.com/mapbox-gl-js/example/locate-user
// Add a geolocate control to the map to allow getting the user's current location
const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
            enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
})
map.addControl(geolocate);

// Used https://docs.mapbox.com/help/tutorials/route-finder-with-turf-mapbox-directions/
// Define a directions control that will allow the user to get directions between 2 locations
const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'imperial',
    profile: 'mapbox/driving',
    alternatives: false,
    geometries: 'geojson',
    controls: {
        instructions: true
    },
    flyTo: true,
    interactive: false,
    placeholderOrigin: 'Type in Origin',
    placeholderDestination: 'Type in Destination'
});
map.scrollZoom.enable(); // Enable scrolling to zoom in the map

// Function to add a button to the map that will add or remove the directions control in the map
// Used Steve Bennett's response in https://stackoverflow.com/questions/40162662/mapbox-gl-how-to-create-custom-control 
/*function addTopButton(map){
    class TopButton {
        onAdd(map) {
            const div = document.createElement('div');
            div.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
            div.innerHTML = `<button style='width:100px;'>Toggle Directions</button>`;
            div.addEventListener('click', ()=>{
                if (map.hasControl(directions)){
                    map.removeControl(directions);
                    closePopup();
                } else if (!map.hasControl(directions)){
                    map.addControl(directions,'bottom-left');
                    closePopup();
                }
            })
            return div;
        }
    }
    const topButton = new TopButton();
    map.addControl(topButton,'bottom-right');
}*/

// Used the 'Add points to a map part 3: interactivity' tutorial on MapBox
// Add an event listener for when the user clicks on the map
// If the click was on a feature in the Services, Points of Interest, or Trails layer then add an popup based on layer type
map.on('click',(event)=>{
    const features = map.queryRenderedFeatures(event.point, {
        layers: ['Services','POIs','Trails']
    });

    if(!features.length){
        return;
    }
    
    const feature = features[0];

    const popup = new mapboxgl.Popup({offset: [0,0]})
    .setLngLat(feature.geometry.coordinates);

    if (feature.sourceLayer == 'Services'){
        popup.setHTML(
            `<h6 style='font-family:woodlist;'>${feature.properties['Point Name']}</h6>`
        )
        .addTo(map);
    } else if (feature.sourceLayer == 'POIs' && feature.properties.URL != null){
        popup.setHTML(
            `<h6 style='font-family:woodlist;'>${feature.properties['Point Name']}</h6><a href='${feature.properties.URL}' target='_blank' style='font-family:woodlist;'>More Info</a>`
        )
        .addTo(map);
    } else if (feature.sourceLayer == 'POIs' && feature.properties.URL == null){
        popup.setHTML(
            `<h6 style='font-family:woodlist;'>${feature.properties['Point Name']}</h6>`
        )
        .addTo(map);
    }
    else if (feature.sourceLayer == 'Trails_FeaturesToJSON_v3-1c2nmj'){
        popup.setHTML(
            `<h6 style='font-family:woodlist;'>Trail: ${feature.properties['Name']}</h6>`
        )
        .addTo(map);
    }
});

// Add another event listener to the map for when the user clicks on a feature in the Rankings layer, add that popup
// Define the popup based on whether the user clicked on the clustered point or the individual point
// If there are multiple points at one Point of Interest then add each comment to the one popup the opens there
map.on('click',(event)=>{
    const features = map.queryRenderedFeatures(event.point, {
        layers: ['Rankings']
    });

    if(!features.length){
        return;
    }

    if(features[0].properties['point_count']){
        const popup = new mapboxgl.Popup({offset: [0,0]})
        .setLngLat(event.lngLat);

        popup.setHTML(`<p style='font-family:woodlist;'>There are ${features[0].properties['point_count']} rankings in this cluster. Zoom in until the number disappears to see the individual rankings.</p>`)
        .addTo(map);
    } else {
        var popupText = `<h6 style='font-family:woodlist;'>User Rankings For: ${features[0].properties['Name']}</h6><strong style='font-family:woodlist;'>Comments:</strong>`; 
        for (var i=0; i<features.length; i++){
            const feature = features[i];
            popupText += `<li style='font-family:woodlist;'>${feature.properties['Comment']}</li>`
        }
        const feature1 = features[0];
        const popup = new mapboxgl.Popup({offset: [0,0]})
        .setLngLat(feature1.geometry.coordinates);

        popup.setHTML(popupText).addTo(map);
    }
    
});

// Used https://stackoverflow.com/questions/40859195/how-to-close-all-popups-programmatically-in-mapbox-gl/63006609#63006609
// Function to close any open popups in the map
function closePopup(){
    const popupOpen = document.getElementsByClassName('mapboxgl-popup'); 
    if ( popupOpen.length ) {
        popupOpen[0].remove();
    }
}

// https://stackoverflow.com/questions/55560489/mapbox-gl-on-mouse-hover-on-layers-change-cursor-pointer-style
// Add event listeners for the map when the user goes over the features to turn the cursor to a pointer to indicate to the user to click on the feature
// When the cursor leaves the map feature, return the cursor to the grab to indicate the panning/zooming in the map
map.on('mouseenter', 'POIs', () => {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'POIs', () => {
    map.getCanvas().style.cursor = 'grab';
});

map.on('mouseenter', 'Services', () => {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'Services', () => {
    map.getCanvas().style.cursor = 'grab';
});

map.on('mouseenter', 'Trails', () => {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'Trails', () => {
    map.getCanvas().style.cursor = 'grab';
});

map.on('mouseenter', 'Rankings', () => {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'Rankings', () => {
    map.getCanvas().style.cursor = 'grab';
});

// Define event listeners for clicking on the menu buttons that will display the appropriate form, hide other forms, and 
//  change the button colors to the one currently active (open)
var infoContainer = document.getElementById('info-container');
var legendContainer = document.getElementById('legend-container');
var filterContainer = document.getElementById('filter-container');
var directionsContainer = document.getElementById('directions-container');
var userContainer = document.getElementById('user-input-container');
var chartContainer = document.getElementById('chart-container');

var infoBtn = document.getElementById('info-btn');
var legendBtn = document.getElementById('legend-btn');
var filterBtn = document.getElementById('filter-btn');
var directionsBtn = document.getElementById('directions-btn');
var userInputBtn = document.getElementById('user-input-btn');
var chartBtn = document.getElementById('chart-btn');

infoBtn.addEventListener('click',function(){
    if (userContainer.style.display === 'block'){
        userContainer.style.display = 'none'
        userInputBtn.style.backgroundColor = 'white';
        userInputBtn.style.color = 'black';
    }
    if (legendContainer.style.display === 'block'){
        legendContainer.style.display = 'none';
        legendBtn.style.backgroundColor = 'white';
        legendBtn.style.color = 'black';
    }
    if (chartContainer.style.display === 'block'){
        chartContainer.style.display = 'none';
        chartBtn.style.backgroundColor = 'white';
        chartBtn.style.color = 'black';
    }

    if (filterContainer.style.display === 'block'){
        filterContainer.style.display = 'none';
        filterBtn.style.backgroundColor = 'white';
        filterBtn.style.color = 'black';
    }
    if (directionsContainer.style.display === 'block'){
        directionsContainer.style.display = 'none';
        directionsBtn.style.backgroundColor = 'white';
        directionsBtn.style.color = 'black';
        //directions.onRemove(map);
    }

    if(infoContainer.style.display === 'none'){
        infoContainer.style.display = 'block';
        infoBtn.style.backgroundColor = 'green';
        infoBtn.style.color = 'white';
    } else {
        infoContainer.style.display = 'none'
        infoBtn.style.backgroundColor = 'white';
        infoBtn.style.color = 'black';
    }
    //closePopup();
});

document.getElementById('close-info').addEventListener('click',function(){
    infoContainer.style.display = 'none';
    infoBtn.style.backgroundColor = 'white';
    infoBtn.style.color = 'black';
    //closePopup();
});

legendBtn.addEventListener('click',function(){
    if(infoContainer.style.display === 'block'){
        infoContainer.style.display = 'none';
        infoBtn.style.backgroundColor = 'white';
        infoBtn.style.color = 'black';
    }
    if (userContainer.style.display === 'block'){
        userContainer.style.display = 'none'
        userInputBtn.style.backgroundColor = 'white';
        userInputBtn.style.color = 'black';
    }
    if (chartContainer.style.display === 'block'){
        chartContainer.style.display = 'none';
        chartBtn.style.backgroundColor = 'white';
        chartBtn.style.color = 'black';
    }

    if (filterContainer.style.display === 'block'){
        filterContainer.style.display = 'none';
        filterBtn.style.backgroundColor = 'white';
        filterBtn.style.color = 'black';
    }
    if (directionsContainer.style.display === 'block'){
        directionsContainer.style.display = 'none';
        directionsBtn.style.backgroundColor = 'white';
        directionsBtn.style.color = 'black';
        //directions.onRemove(map);
    }

    if(legendContainer.style.display === 'none'){
        legendContainer.style.display = 'block';
        legendBtn.style.backgroundColor = 'green';
        legendBtn.style.color = 'white';
    } else {
        legendContainer.style.display = 'none'
        legendBtn.style.backgroundColor = 'white';
        legendBtn.style.color = 'black';
    }
    //closePopup();
});

document.getElementById('close-legend').addEventListener('click',function(){
    legendContainer.style.display = 'none';
    legendBtn.style.backgroundColor = 'white';
    legendBtn.style.color = 'black';
    //closePopup();
});

filterBtn.addEventListener('click',function(){
    if(infoContainer.style.display === 'block'){
        infoBtn.style.backgroundColor = 'white';
        infoContainer.style.display = 'none';
        infoBtn.style.color = 'black';
    }
    if(legendContainer.style.display === 'block'){
        legendBtn.style.backgroundColor = 'white';
        legendBtn.style.color = 'black';
        legendContainer.style.display = 'none';
    }
    if (userContainer.style.display === 'block'){
        userContainer.style.display = 'none';
        userInputBtn.style.backgroundColor = 'white';
        userInputBtn.style.color = 'black';
    }
    if (chartContainer.style.display === 'block'){
        chartContainer.style.display = 'none';
        chartBtn.style.backgroundColor = 'white';
        chartBtn.style.color = 'black';
    }
    if (directionsContainer.style.display === 'block'){
        directionsContainer.style.display = 'none';
        directionsBtn.style.backgroundColor = 'white';
        directionsBtn.style.color = 'black';
        //directions.onRemove(map);
    }

    if (filterContainer.style.display === 'none'){
        filterContainer.style.display = 'block';
        filterBtn.style.backgroundColor = 'green';
        filterBtn.style.color = 'white';
    } else {
        filterContainer.style.display = 'none';
        filterBtn.style.backgroundColor = 'white';
        filterBtn.style.color = 'black';
    }
    //closePopup();
})

document.getElementById('close-filter').addEventListener('click',function(){
    filterContainer.style.display = 'none';
    filterBtn.style.backgroundColor = 'white';
    filterBtn.style.color = 'black';
    //closePopup();
});

directionsBtn.addEventListener('click',function(){
    if(infoContainer.style.display === 'block'){
        infoContainer.style.display = 'none';
        infoBtn.style.backgroundColor = 'white';
        infoBtn.style.color = 'black';
    }
    if(legendContainer.style.display === 'block'){
        legendBtn.style.backgroundColor = 'white';
        legendBtn.style.color = 'black';
        legendContainer.style.display = 'none';
    }
    if(filterContainer.style.display === 'block'){
        filterContainer.style.display = 'none';
        filterBtn.style.backgroundColor = 'white';
        filterBtn.style.color = 'black';
    }
    if (userContainer.style.display === 'block'){
        userContainer.style.display = 'none';
        userBtn.style.backgroundColor = 'white';
        userBtn.style.color = 'black';
    }
    if (chartContainer.style.display === 'block'){
        chartContainer.style.display = 'none';
        chartBtn.style.backgroundColor = 'white';
        chartBtn.style.color = 'black';
    }

    if (directionsContainer.style.display === 'none'){
        directionsContainer.style.display = 'block';
        directionsBtn.style.backgroundColor = 'green';
        directionsBtn.style.color = 'white';
        //directionsContainer.appendChild(directions.onAdd(map));
    } else {
        directionsContainer.style.display = 'none';
        directionsBtn.style.backgroundColor = 'white';
        directionsBtn.style.color = 'black';
        //directions.onRemove(map);
    }
    //closePopup();
});

var toggleDirections = document.getElementById('directions-toggle');
toggleDirections.addEventListener('click',function(){
    if (toggleDirections.innerText === 'Turn on Directions'){
        directionsContainer.appendChild(directions.onAdd(map));
        toggleDirections.innerText = 'Turn off Directions';
    } else if (toggleDirections.innerText === 'Turn off Directions'){
        directions.onRemove(map);
        toggleDirections.innerText = 'Turn on Directions';
    }
});

document.getElementById('close-directions').addEventListener('click',function(){
    directionsContainer.style.display = 'none';
    directionsBtn.style.backgroundColor = 'white';
    directionsBtn.style.color = 'black';
    //directions.onRemove(map);
    //closePopup();
});

userInputBtn.addEventListener('click',function(){
    if(infoContainer.style.display === 'block'){
        infoContainer.style.display = 'none';
        infoBtn.style.backgroundColor = 'white';
        infoBtn.style.color = 'black';
    }
    if(legendContainer.style.display === 'block'){
        legendBtn.style.backgroundColor = 'white';
        legendBtn.style.color = 'black';
        legendContainer.style.display = 'none';
    }
    if(filterContainer.style.display === 'block'){
        filterContainer.style.display = 'none';
        filterBtn.style.backgroundColor = 'white';
        filterBtn.style.color = 'black';
    }
    if (directionsContainer.style.display === 'block'){
        directionsContainer.style.display = 'none';
        directionsBtn.style.backgroundColor = 'white';
        directionsBtn.style.color = 'black';
        //directions.onRemove(map);
    }
    if (chartContainer.style.display === 'block'){
        chartContainer.style.display = 'none';
        chartBtn.style.backgroundColor = 'white';
        chartBtn.style.color = 'black';
    }

    if (userContainer.style.display === 'none'){
        userContainer.style.display = 'block';
        userInputBtn.style.backgroundColor = 'green';
        userInputBtn.style.color = 'white';
    } else {
        userContainer.style.display = 'none';
        userInputBtn.style.backgroundColor = 'white';
        userInputBtn.style.color = 'black';
    }
    //closePopup();
});

document.getElementById('close-user-input').addEventListener('click',function(){
    userContainer.style.display = 'none';
    userInputBtn.style.backgroundColor = 'white';
    userInputBtn.style.color = 'black';
    //closePopup();
});

chartBtn.addEventListener('click',function(){
    if(infoContainer.style.display === 'block'){
        infoContainer.style.display = 'none';
        infoBtn.style.backgroundColor = 'white';
        infoBtn.style.color = 'black';
    }
    if(legendContainer.style.display === 'block'){
        legendBtn.style.backgroundColor = 'white';
        legendBtn.style.color = 'black';
        legendContainer.style.display = 'none';
    }
    if(filterContainer.style.display === 'block'){
        filterContainer.style.display = 'none';
        filterBtn.style.backgroundColor = 'white';
        filterBtn.style.color = 'black';
    }
    if (directionsContainer.style.display === 'block'){
        directionsContainer.style.display = 'none';
        directionsBtn.style.backgroundColor = 'white';
        directionsBtn.style.color = 'black';
        //directions.onRemove(map);
    }
    if (userContainer.style.display === 'block'){
        userContainer.style.display = 'none';
        userInputBtn.style.backgroundColor = 'white';
        userInputBtn.style.color = 'black';
    }

    if (chartContainer.style.display === 'none'){
        chartContainer.style.display = 'block';
        chartBtn.style.backgroundColor = 'green';
        chartBtn.style.color = 'white';
    } else {
        chartContainer.style.display = 'none';
        chartBtn.style.backgroundColor = 'white';
        chartBtn.style.color = 'black';
    }
    //closePopup();
});

document.getElementById('close-ranking-list').addEventListener('click',function(){
    chartContainer.style.display = 'none';
    chartBtn.style.backgroundColor = 'white';
    chartBtn.style.color = 'black';
    //closePopup();
});

// Define filters for the Points of Interest, Services, and Trails layers based on which option is selected using a change event listener on the select
// Remove the filter when the default select option is currently selected
const filterPOIs = document.getElementById('filter-select-poi');
filterPOIs.addEventListener('change',function(){
    const val = filterPOIs.options[filterPOIs.selectedIndex].value;
    if (val != 'Label'){
        map.setFilter('POIs',['==',['get','Point Type'],val]);
    } else if (val == 'Label'){
        map.setFilter('POIs',null);
    }
    closePopup();
});

const filterServices = document.getElementById('filter-select-services');
filterServices.addEventListener('change',function(){
    const val = filterServices.options[filterServices.selectedIndex].value;
    if (val != 'Label' && val != 'Ranger Station'){
        map.setFilter('Services',['==',['get','Point Type'],val]);
    } else if (val == 'Ranger Station') {
        map.setFilter('Services',['any',['==',['get','Point Type'],val],['==',['get','Point Type'],'Headquarters']])
    } else if (val == 'Label'){
        map.setFilter('Services',null);
    }
    closePopup();
});

const filterTrails = document.getElementById('filter-select-trails-use');
filterTrails.addEventListener('change',function(){
    const val = filterTrails.options[filterTrails.selectedIndex].value;
    if (val != 'Label' && val != 'Hiker/Pedestrian|Bicycle'){
        map.setFilter('Trails',['==',['get','Trail Use'],val]);
    } else if (val == 'Hiker/Pedestrian|Bicycle') {
        map.setFilter('Trails',['any',['==',['get','Trail Use'],val],['==',['get','Trail Use'],'Hiker/Pedestrian | Bicycle']])
    } else if (val == 'Label'){
        map.setFilter('Trails',null)
    }
    closePopup();
});

// Define event listeners for the layer checkboxes that will set the visibility on the layers in the map based on whether or not the checkbox is checked
const poisCheckbox = document.getElementById('pois-checkbox');
poisCheckbox.addEventListener('change',function(){
    if (poisCheckbox.checked) {
        map.setLayoutProperty('POIs','visibility','visible');
    } else if (!poisCheckbox.checked) {
        map.setLayoutProperty('POIs','visibility','none');
    }
    closePopup();
});

const rankingCheckbox = document.getElementById('ranking-checkbox');
rankingCheckbox.addEventListener('change',function(){
    if (rankingCheckbox.checked) {
        map.setLayoutProperty('Rankings','visibility','visible');
        map.setLayoutProperty('cluster-count','visibility','visible');
    } else if (!rankingCheckbox.checked) {
        map.setLayoutProperty('Rankings','visibility','none');
        map.setLayoutProperty('cluster-count','visibility','none');
    }
    closePopup();
});

const servicesCheckbox = document.getElementById('services-checkbox');
servicesCheckbox.addEventListener('change',function(){
    if (servicesCheckbox.checked) {
        map.setLayoutProperty('Services','visibility','visible');
    } else if (!servicesCheckbox.checked) {
        map.setLayoutProperty('Services','visibility','none');
    }
    closePopup();
});

const trailsCheckbox = document.getElementById('trails-checkbox');
trailsCheckbox.addEventListener('change',function(){
    if (trailsCheckbox.checked) {
        map.setLayoutProperty('Trails','visibility','visible');
    } else if (!trailsCheckbox.checked) {
        map.setLayoutProperty('Trails','visibility','none');
    }
    closePopup();
});

const boundaryCheckbox = document.getElementById('boundary-checkbox');
boundaryCheckbox.addEventListener('change',function(){
    if (boundaryCheckbox.checked) {
        map.setLayoutProperty('Park Boundary','visibility','visible');
    } else if (!boundaryCheckbox.checked) {
        map.setLayoutProperty('Park Boundary','visibility','none');
    }
    closePopup();
});

// Define an event listener for the reset button in the filter form that will remove filters, reset the form, and reset layer visibility
const resetFilterBtn = document.getElementById('reset-filter');
resetFilterBtn.addEventListener('click',function(event){
    event.preventDefault();
    map.setLayoutProperty('Rankings','visibility','none');
    map.setLayoutProperty('cluster-count','visibility','none');
    map.setLayoutProperty('POIs','visibility','visible');
    map.setLayoutProperty('Services','visibility','visible');
    map.setLayoutProperty('Trails','visibility','visible');
    map.setLayoutProperty('Park Boundary','visibility','visible');
    map.setFilter('POIs',null);
    map.setFilter('Services',null);
    map.setFilter('Trails',null);
    document.getElementById('filter-form-input').reset();
    closePopup();
});

// Define an event listener for when the user submits the ranking form
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click',async function(event){
    event.preventDefault();

    // Get the values from the comment box and point of interest select 
    const commentVal = document.getElementById('comment').value;
    const selectForm = document.getElementById('poi-select')
    const coord = selectForm.options[selectForm.selectedIndex].value;

    // Verify that the user selected a point of interest in the form before submission
    // If the user did not select a point of interest, then alert the user
    // If the user did select the point of interest, take the coordinates from the point of interest selected (the value for the select option)
    //  and the name of the point of interest selected 
    if (coord == 'default'){
        alert('Please select a point of interest')
    } else {
        const coordSplit = coord.split(',');
        const poiLon = parseFloat(coordSplit[0]);
        const poiLat = parseFloat(coordSplit[1]);
        const poiName = selectForm.options[selectForm.selectedIndex].textContent;
    
        // Increment the highest ranking id (determined in an earlier function and set to the rankingId variable) by 1
        const rankingIdUse = rankingId + 1
        const featureid = rankingIdUse.toString();
    
         // Generate a geoJSON object based on those listed above 
        // Use a PUT method to update the Rankings layer in the dataset 
        const feature = {
            'id': `${featureid}`,
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [poiLon,poiLat]
            },
            'properties': {
                'Ranking': 1,
                'Comment': commentVal,
                'Name': poiName
            }
        }
    
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(feature)
        }
    
        const response = await fetch(
            `https://api.mapbox.com/datasets/v1/aeneville2/clef1oq7p043t2qnyrnlnphqg/features/${featureid}?access_token=sk.eyJ1IjoiYWVuZXZpbGxlMiIsImEiOiJjbGVmcTFtdXowYXAyM3FtcWdrd2phdm1rIn0.xTaxF4yB4KeNuu1OABOLtw`,
            requestOptions
        );
    
        // Once the new object has been added to the dataset, alert the user, reset the form, remove the chart, 
        //  and call the addRankings function to update the map and rankings chart with the updated data
        const data = await response.json();
    
        Promise.all([data]).then(async ()=>{
            alert('Ranking submitted succesfully!');
            const form = document.getElementById('user-ranking-form');
            form.reset();
            svg.selectAll('*').remove();
            addRankings();
            closePopup();
        })
    }
    
});

// Add an event listener so that when the window loads, reset the filter features and submit rankings forms
window.addEventListener('load',(function(){
    this.document.getElementById('filter-form-input').reset();
    this.document.getElementById('user-ranking-form').reset();
}));