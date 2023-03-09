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

    map.resize();

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

    /*map.addLayer({
        'id':'Services',
        'type':'circle',
        'source':{
            'type': 'vector',
            'url': 'mapbox://aeneville2.cledcz6zz06n723tb7tsrk9n4-6mr32'
        },
        'source-layer': 'Services',
        'paint': {
            'circle-radius': 10,
            'circle-opacity': 0.8,
            'circle-color': 'rgb(171,72,33)'
        }
    });*/

    /*map.addLayer({
        'id':'POIs',
        'type':'circle',
        'source':{
            'type': 'vector',
            'url': 'mapbox://aeneville2.cledcynu8086025quruopxym2-4x7hl'
        },
        'source-layer': 'POIs',
        'paint': {
            'circle-radius': 10,
            'circle-opacity': 0.8,
            //'circle-color': 'rgb(60,120,30)'
            'circle-color': [
                'match',
                ['get','Point Type'],
                'Overlook',
                '#004b8d',
                '#008000'
            ]
        }
    });*/

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

    /*map.addLayer({
        id: 'Rankings',
        type: 'circle',
        source: {
            type: 'vector',
            url: 'mapbox://aeneville2.clef1oq7p043t2qnyrnlnphqg-6h5ea'
        },
        'source-layer': 'User_Rankings',
        paint: {
            'circle-radius': 20,
            'circle-color': '#eff542'
        }
    });*/

    // Load the image for use in the Rankings layer and add to the map
    map.loadImage('./Star.png',(error,image)=>{
        if (error) throw error;
        map.addImage('star',image)
    });

    // Add an empty geoJSON source for the Rankings layer
    map.addSource('rankingSource',{
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        },
        // https://docs.mapbox.com/mapbox-gl-js/example/cluster/
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

    // https://docs.mapbox.com/mapbox-gl-js/example/cluster/
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

    /*map.addSource('single-point',{
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        }
    });

    map.addLayer({
        id: 'point',
        source: 'single-point',
        type: 'symbol',
        layout: {
            'icon-image': 'red-icon',
            'icon-size': 0.15
        }
    });*/

    // Call the functions to retrieve the Rankings geoJSON source data from the hosted MapBox dataset for use in the Rankings layer
    //  and generating the POI list
    addRankings();
    getPOIs();

});

// Define a ranking id variable for definition later
var rankingId;

async function addRankings(){
    // https://stackoverflow.com/questions/57624873/mapbox-api-styles-v1-username-doesnt-reflect-latest-style-data for help with updating the data
    // Use a GET request to access the Rankings dataset from MapBox using the Datasets API with a parameter to use the updated data
    const rankings = await fetch(
        'https://api.mapbox.com/datasets/v1/aeneville2/clef1oq7p043t2qnyrnlnphqg/features?access_token=sk.eyJ1IjoiYWVuZXZpbGxlMiIsImEiOiJjbGVmcTFtdXowYXAyM3FtcWdrd2phdm1rIn0.xTaxF4yB4KeNuu1OABOLtw&fresh=true',
        { method: 'GET'}
    );
    
    // Get the returned data in json format from the get request
    const data = await rankings.json();

    // Once the data is returned then update the Rankings layer source with the data
    Promise.all([rankings,data]).then(async () =>{
        const rankingSource2 = map.getSource('rankingSource')
        rankingSource2.setData(data);

        // Get the ids of all of the current rankings to determine the highest ranking id for use upon user submission
        const features = data.features;
        console.log('Features',features);

        var featureidArray = [];
        for (var i=0; i<features.length; i++){
            var id = features[i].id;
            featureidArray.push(id);
        }
        console.log('FeatureIDArray: ',featureidArray);
        rankingId = Math.max(...featureidArray);
        console.log('Ranking ID Type: ',typeof rankingId);

        // Call the function to get the counts of number of rankings for each point of interest in the Rankings layer
        var poiCounter = [];
        const waitArray = await counterLoop(features,poiCounter);
        
        // Once the array has finished then turn the resulting object into an array, sort, and add to the table with point of interest name (column 1) and count (column 2)
        Promise.all([waitArray]).then(async()=>{
            //Used https://www.freecodecamp.org/news/how-to-iterate-over-objects-in-javascript/
            let waitArrayKeys = Object.keys(waitArray);
            let sortedArray = waitArrayKeys.sort()
            sortedArray.forEach((key)=>{
                var table = document.getElementById('ranking-table');
                var row = table.insertRow();
                var cell1 = row.insertCell(0)
                var cell2 = row.insertCell(1);
                cell1.innerHTML = key;
                cell2.innerHTML = waitArray[key];
            })
        })
        
    });
};

// Function to go through the ranking layer and get a count of each time the name appears in the dataset
// Returns an object containing Point of Interest name and count
async function counterLoop(features,poiCounter){
    //const features = data.features;

    const poiArray = [];
    for (var i=0; i<features.length; i++){
        const poiName = features[i].properties['Name'];

        poiArray.push(poiName);
    };

    //let poiCounter = {};

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
//  Each name value pair in the array is added to the options in the user submission form to that the correct names and associated locations are used
async function getPOIs(){
    const pois = await fetch(
        'https://api.mapbox.com/datasets/v1/aeneville2/cledcynu8086025quruopxym2/features?access_token=sk.eyJ1IjoiYWVuZXZpbGxlMiIsImEiOiJjbGVmcTFtdXowYXAyM3FtcWdrd2phdm1rIn0.xTaxF4yB4KeNuu1OABOLtw',
        { method: 'GET'}
    )
    const data = await pois.json();
    const features = data.features;

    const sortedFeatures = features.sort();
    
    let poiArray = [];
    for (var i=0;i<features.length;i++){
        const name = features[i].properties['Point Name'];
        const geometry = features[i].geometry.coordinates;
        poiArray.push([name,geometry]);
        /*const selectPoi = document.getElementById('poi-select')
        let newOption = new Option(name,geometry);
        selectPoi.add(newOption,undefined);*/
    }
    //console.log(poiDict);
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
    placeholder: 'Search for places in Grand Teton National Park',
    mapboxgl: mapboxgl,
    marker: false,
    bbox: [-111.00480, 43.41594, -110.32914, 44.18901],
    proximity: {
        longitude: -110.6818,
        latitude: 43.7904
    }
});
map.addControl(geocoder);

/*geocoder.on('result',(event)=>{
    map.getSource('single-point').setData(event.result.geometry);
    //const end = event.result.geometry.coordinates;
    //getRoute(end);
});*/

// Used https://docs.mapbox.com/mapbox-gl-js/example/locate-user
// Add a geolocate control to the map to allow getting the user's current location
const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
            enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
})
map.addControl(
    geolocate
);

// Used https://docs.mapbox.com/help/tutorials/route-finder-with-turf-mapbox-directions/
// Add a directions control to the directions form to allow the user to get directions between 2 locations
const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'imperial',
    profile: 'mapbox/driving',
    alternatives: false,
    geometries: 'geojson',
    controls: {instructions: true},
    flyTo: true,
    interactive: true
});
//map.addControl(directions,'top-right');
//document.getElementById('directions-form').appendChild(directions.onAdd(map));
map.scrollZoom.enable();

// Function to add a button to the map that will scroll the page back to the top through creation of a custom class for a custom control
// Used Steve Bennett's response in https://stackoverflow.com/questions/40162662/mapbox-gl-how-to-create-custom-control 
function addTopButton(map){
    class TopButton {
        onAdd(map) {
            const div = document.createElement('div');
            div.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
            div.innerHTML = `<button style='width:100px;'>Back to Top</button>`;
            div.addEventListener("click", ()=>{
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            })
            return div;
        }
    }
    const topButton = new TopButton();
    map.addControl(topButton,"bottom-right");
}

// Used the "Add points to a map part 3: interactivity" tutorial on MapBox
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
    console.log('Feature: ',feature)

    const popup = new mapboxgl.Popup({offset: [0,0]})
    //.setLngLat(feature.geometry.coordinates)
    .setLngLat(event.lngLat)

    if (feature.sourceLayer == 'Services'){
        popup.setHTML(
            `<h6>${feature.properties['Point Name']}</h6>`
        )
        .addTo(map);
    } else if (feature.sourceLayer == 'POIs' && feature.properties.URL != null){
        popup.setHTML(
            `<h6>${feature.properties['Point Name']}</h6><a href='${feature.properties.URL}' target='_blank'>More Info</a>`
        )
        .addTo(map);
    } else if (feature.sourceLayer == 'POIs' && feature.properties.URL == null){
        popup.setHTML(
            `<h6>${feature.properties['Point Name']}</h6>`
        )
        .addTo(map);
    }
    else if (feature.sourceLayer == 'Trails_FeaturesToJSON_v3-1c2nmj'){
        popup.setHTML(
            `<h6>Trail: ${feature.properties['Name']}</h6>`
        )
        .addTo(map);
    }
});

// Add another event listener to the map for when the user clicks on a feature in the Rankings layer, add that popup
// This function allows adding multiple popups for the features since points of interest can have multiple rankings
map.on('click',(event)=>{
    const features = map.queryRenderedFeatures(event.point, {
        layers: ['Rankings']
    });

    if(!features.length){
        return;
    }

    if(features[0].properties['point_count']){
        const popup = new mapboxgl.Popup({offset: [0,0]})
        //.setLngLat(feature.geometry.coordinates)
        .setLngLat(event.lngLat);

        popup.setHTML(`<p>There are ${features[0].properties['point_count']} rankings in this cluster. Zoom in until the number disappears to see the individual rankings.</p>`)
        .addTo(map);
    } else {
        var popupText = `<h6>User Rankings For: ${features[0].properties['Name']}</h6><strong>Comments:</strong>`; 
        for (var i=0; i<features.length; i++){
            const feature = features[i];
            console.log("Feature: ",feature);
            popupText += `<li>${feature.properties['Comment']}</li>`
        }
        const popup = new mapboxgl.Popup({offset: [0,0]})
        //.setLngLat(feature.geometry.coordinates)
        .setLngLat(event.lngLat);

        popup.setHTML(popupText).addTo(map);
    }

    

    /*for (var i=0; i<features.length; i++){
        const feature = features[i];
        console.log('Feature: ',feature)
    
        const popup = new mapboxgl.Popup({offset: [0,0]})
        //.setLngLat(feature.geometry.coordinates)
        .setLngLat(event.lngLat);

        popup.setHTML(
            `<h6>User Ranking For: ${feature.properties['Name']}</h6><p>Comment: ${feature.properties['Comment']}</p>`
        )
        .addTo(map);
    }*/
    
});

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
// Additionally, for the directions control, enable the directions capability only when that form is open
var infoContainer = document.getElementById('info-container');
var legendContainer = document.getElementById('legend-container');
var directionContainer = document.getElementById('directions-container');
var filterContainer = document.getElementById('filter-container');
var userContainer = document.getElementById('user-input-container');
var chartContainer = document.getElementById('chart-container');

var infoBtn = document.getElementById('info-btn');
var legendBtn = document.getElementById('legend-btn');
var directionsBtn = document.getElementById('directions-btn');
var filterBtn = document.getElementById('filter-btn');
var userInputBtn = document.getElementById('user-input-btn');
var chartBtn = document.getElementById('chart-btn');

infoBtn.addEventListener('click',function(){
    if(directionContainer.style.display === 'block'){
        directionContainer.style.display = 'none';
        map.removeControl(directions);
        directionsBtn.style.backgroundColor = 'white';
        directionsBtn.style.color = 'black';
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

    if(infoContainer.style.display === 'none'){
        infoContainer.style.display = 'block';
        infoBtn.style.backgroundColor = 'green';
        infoBtn.style.color = 'white';
    } else {
        infoContainer.style.display = 'none'
        infoBtn.style.backgroundColor = 'white';
        infoBtn.style.color = 'black';
    }
});

document.getElementById('close-info').addEventListener('click',function(){
    infoContainer.style.display = 'none';
    infoBtn.style.backgroundColor = 'white';
    infoBtn.style.color = 'black';
});

legendBtn.addEventListener('click',function(){
    if(infoContainer.style.display === 'block'){
        infoContainer.style.display = 'none';
        infoBtn.style.backgroundColor = 'white';
        infoBtn.style.color = 'black';
    }
    if(directionContainer.style.display === 'block'){
        directionContainer.style.display = 'none';
        map.removeControl(directions);
        directionsBtn.style.backgroundColor = 'white';
        directionsBtn.style.color = 'black';
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

    if(legendContainer.style.display === 'none'){
        legendContainer.style.display = 'block';
        legendBtn.style.backgroundColor = 'green';
        legendBtn.style.color = 'white';
    } else {
        legendContainer.style.display = 'none'
        legendBtn.style.backgroundColor = 'white';
        legendBtn.style.color = 'black';
    }
});

/*document.getElementById('close-info').addEventListener('click',function(){
    infoContainer.style.display = 'none';
    infoBtn.style.backgroundColor = 'white';
    infoBtn.style.color = 'black';
});*/

directionsBtn.addEventListener('click',function(){
    if(infoContainer.style.display === 'block'){
        infoBtn.style.backgroundColor = 'white';
        infoBtn.style.color = 'black';
        infoContainer.style.display = 'none';
    }
    if(legendContainer.style.display === 'block'){
        legendBtn.style.backgroundColor = 'white';
        legendBtn.style.color = 'black';
        legendContainer.style.display = 'none';
    }
    if(filterContainer.style.display === 'block'){
        filterBtn.style.backgroundColor = 'white';
        filterContainer.style.display = 'none';
        filterBtn.style.color = 'black';
    }
    if (userContainer.style.display === 'block'){
        userContainer.style.display = 'none';
        userInputBtn.style.backgroundColor = 'white';
        userInputBtn.style.color = 'black';
    }
    if (chartContainer.style.display === 'block'){
        chartBtn.style.backgroundColor = 'white';
        chartContainer.style.display = 'none';
        chartBtn.style.color = 'black';
    }

    if (directionContainer.style.display === 'none'){
        directionContainer.style.display = 'block';
        document.getElementById('directions-form').appendChild(directions.onAdd(map));
        directionsBtn.style.backgroundColor = 'green';
        directionsBtn.style.color = 'white';
    } else {
        directionContainer.style.display = 'none';
        map.removeControl(directions);
        directionsBtn.style.backgroundColor = 'white';
        directionsBtn.style.color = 'black';
    }
});

document.getElementById('close-directions').addEventListener('click',function(){
    directionContainer.style.display = 'none';
    map.removeControl(directions);
    directionsBtn.style.backgroundColor = 'white';
    directionsBtn.style.color = 'black';
})

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
    if(directionContainer.style.display === 'block'){
        directionContainer.style.display = 'none';
        map.removeControl(directions);
        directionsBtn.style.backgroundColor = 'white';
        directionsBtn.style.color = 'black';
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

    if (filterContainer.style.display === 'none'){
        filterContainer.style.display = 'block';
        filterBtn.style.backgroundColor = 'green';
        filterBtn.style.color = 'white';
    } else {
        filterContainer.style.display = 'none';
        filterBtn.style.backgroundColor = 'white';
        filterBtn.style.color = 'black';
    }
})

document.getElementById('close-filter').addEventListener('click',function(){
    filterContainer.style.display = 'none';
    filterBtn.style.backgroundColor = 'white';
    filterBtn.style.color = 'black';
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
    if (directionContainer.style.display === 'block'){
        directionContainer.style.display = 'none';
        map.removeControl(directions);
        directionsBtn.style.backgroundColor = 'white';
        directionsBtn.style.color = 'black';
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
});

document.getElementById('close-user-input').addEventListener('click',function(){
    userContainer.style.display = 'none';
    userInputBtn.style.backgroundColor = 'white';
    userInputBtn.style.color = 'black';
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
    if (userContainer.style.display === 'block'){
        userContainer.style.display = 'none';
        userInputBtn.style.backgroundColor = 'white';
        userInputBtn.style.color = 'black';
    }
    if (directionContainer.style.display === 'block'){
        directionContainer.style.display = 'none';
        map.removeControl(directions);
        directionsBtn.style.backgroundColor = 'white';
        directionsBtn.style.color = 'black';
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
});

document.getElementById('close-ranking-list').addEventListener('click',function(){
    chartContainer.style.display = 'none';
    chartBtn.style.backgroundColor = 'white';
    chartBtn.style.color = 'black';
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
});

// Define event listeners for the layer checkboxes that will set the visibility on the layers in the map based on whether or not the checkbox is checked
const poisCheckbox = document.getElementById('pois-checkbox');
poisCheckbox.addEventListener('change',function(){
    if (poisCheckbox.checked) {
        map.setLayoutProperty('POIs','visibility','visible');
    } else if (!poisCheckbox.checked) {
        map.setLayoutProperty('POIs','visibility','none');
    }
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
});

const servicesCheckbox = document.getElementById('services-checkbox');
servicesCheckbox.addEventListener('change',function(){
    if (servicesCheckbox.checked) {
        map.setLayoutProperty('Services','visibility','visible');
    } else if (!servicesCheckbox.checked) {
        map.setLayoutProperty('Services','visibility','none');
    }
});

const trailsCheckbox = document.getElementById('trails-checkbox');
trailsCheckbox.addEventListener('change',function(){
    if (trailsCheckbox.checked) {
        map.setLayoutProperty('Trails','visibility','visible');
    } else if (!trailsCheckbox.checked) {
        map.setLayoutProperty('Trails','visibility','none');
    }
});

const boundaryCheckbox = document.getElementById('boundary-checkbox');
boundaryCheckbox.addEventListener('change',function(){
    if (boundaryCheckbox.checked) {
        map.setLayoutProperty('Park Boundary','visibility','visible');
    } else if (!boundaryCheckbox.checked) {
        map.setLayoutProperty('Park Boundary','visibility','none');
    }
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
})

// DO I USE THESE ANYMORE??
/*let featureId = 1;

async function featureIdIncrement(){
    featureId++;
    return featureId;
};*/

// Define an event listener for when the user submits the ranking form
const submitBtn = document.getElementById('submit-btn')
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
    // Increment the highest ranking id (determined in an earlier function) by 1
    // Generate a geoJSON object based on those listed above 
    // Use a PUT method to update the Rankings layer in the dataset 
    if (coord == 'default'){
        alert('Please select a point of interest')
    } else {
        const coordSplit = coord.split(',');
        const poiLon = parseFloat(coordSplit[0]);
        const poiLat = parseFloat(coordSplit[1]);
        const poiName = selectForm.options[selectForm.selectedIndex].textContent;
    
        //const featureid = await featureIdIncrement();
        const rankingIdUse = rankingId + 1
        const featureid = rankingIdUse.toString();
    
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
    
        // Once the new object has been added to the dataset, alert the user, reset the form, remove the table, 
        //  and call the addRankings function to update the map and rankings list with the updated data
        const data = await response.json();
    
        Promise.all([data]).then(async ()=>{
            //const removeLayer = map.removeLayer('Rankings');
            //const removeSource = await map.removeSource('rankingSource');
            //const removeImage = await map.removeImage('star');
            alert('Ranking submitted succesfully!');
            const form = document.getElementById('user-ranking-form');
            form.reset();
            const rankingTable = document.getElementById('ranking-table');
            // https://www.aspsnippets.com/Articles/Delete-all-rows-from-Table-except-First-Header-row-using-JavaScript-and-jQuery.aspx
            var rowCount = rankingTable.rows.length;
            for (var i=rowCount-1; i>0; i--){
                rankingTable.deleteRow(i);
            }
            //window.location.reload();
            addRankings();
            /*Promise.all([form]).then(()=>{    
                window.location.reload();
                addRankings();
            });*/
        })
    }
    
});

// Add an event listener so that when the window loads, reset the filter features and submit rankings forms
window.addEventListener('load',(function(){
    this.document.getElementById('filter-form-input').reset();
    this.document.getElementById('user-ranking-form').reset();
    addTopButton(map); // Call function to add the 'Back to Top' button
}));