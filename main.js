

mapboxgl.accessToken = 'pk.eyJ1IjoiYWVuZXZpbGxlMiIsImEiOiJjbGVjemNsMDIwMjE4M3JwOXRham13bzQ3In0.sdW72uvBX2AoOOnDIJxOPg'


const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [-110.6818,43.7904],
    zoom: 8
});


map.on('load', ()=>{

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

    //https://www.nps.gov/maps/tools/symbol-library/index.html 
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

    map.loadImage('./Star.png',(error,image)=>{
        if (error) throw error;
        map.addImage('star',image)
    });
    map.addSource('rankingSource',{
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        }
    });

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

    addRankings();
    getPOIs();

});

var rankingId;

async function addRankings(){
    // https://stackoverflow.com/questions/57624873/mapbox-api-styles-v1-username-doesnt-reflect-latest-style-data for help with updating the data
    const rankings = await fetch(
        'https://api.mapbox.com/datasets/v1/aeneville2/clef1oq7p043t2qnyrnlnphqg/features?access_token=sk.eyJ1IjoiYWVuZXZpbGxlMiIsImEiOiJjbGVmcTFtdXowYXAyM3FtcWdrd2phdm1rIn0.xTaxF4yB4KeNuu1OABOLtw&fresh=true',
        { method: 'GET'}
    );
    const data = await rankings.json();
    Promise.all([rankings,data]).then(async () =>{
        /*map.loadImage('./Star.png',(error,image)=>{
            if (error) throw error;
            map.addImage('star',image)
        });
        map.addSource('rankingSource',{
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: []
            }
        });*/
        /*const rankingSource = map.getSource('rankingSource');
        rankingSource.setData({
            type: 'FeatureCollection',
            features: []
        });*/
        const rankingSource2 = map.getSource('rankingSource')
        rankingSource2.setData(data);
        /*console.log('Ranking Source', rankingSource)
        map.addLayer({
            id: 'Rankings',
            type: 'symbol',
            source: 'rankingSource',
            layout: {
                'icon-image': 'star',
                'icon-size': 0.15,
                'visibility': 'visible'
            }
        });*/

        const features = data.features;
        console.log("Features",features);

        var featureidArray = [];
        for (var i=0; i<features.length; i++){
            var id = features[i].id;
            featureidArray.push(id);
        }
        console.log("FeatureIDArray: ",featureidArray);
        rankingId = Math.max(...featureidArray);
        console.log("Ranking ID Type: ",typeof rankingId);

        var poiCounter = [];

        const waitArray = await counterLoop(features,poiCounter);
        //document.getElementById("chart-form").innerHTML = "<h6>Top Rankings by POI</h6>";
        
        Promise.all([waitArray]).then(async()=>{
            //https://www.freecodecamp.org/news/how-to-iterate-over-objects-in-javascript/
            /*let waitArrayArray = Object.entries(waitArray);
            for (array of waitArrayArray){
                document.getElementById("chart-form").innerHTML += "<p>" + array + "</p>";
            }*/

            // LAYER NOT UPDATING IN TIME SO THIS IS NOT UPDATING: FIGURE OUT WHY DATASET NOT UPDATING!
            let waitArrayKeys = Object.keys(waitArray);
            let sortedArray = waitArrayKeys.sort()
            sortedArray.forEach((key)=>{
                //document.getElementById("chart-form").innerHTML += "<p>" + key + ": " + waitArray[key] + "</p>";
                var table = document.getElementById("ranking-table");
                var row = table.insertRow();
                var cell1 = row.insertCell(0)
                var cell2 = row.insertCell(1);
                cell1.innerHTML = key;
                cell2.innerHTML = waitArray[key];
            })
        })
        
    });
};

async function counterLoop(features,poiCounter){
    //const features = data.features;

    const poiArray = [];
    for (var i=0; i<features.length; i++){
        const poiName = features[i].properties["Name"];

        poiArray.push(poiName);
    };

    //let poiCounter = {};

    //https://stackabuse.com/count-number-of-element-occurrences-in-javascript-array
    for (poi of poiArray.flat()){
        if (poiCounter[poi]) {
            poiCounter[poi] += 1
        } else {
            poiCounter[poi] = 1
        }
    };

    return poiCounter;
}

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
        const name = features[i].properties["Point Name"];
        const geometry = features[i].geometry.coordinates;
        poiArray.push([name,geometry]);
        /*const selectPoi = document.getElementById('poi-select')
        let newOption = new Option(name,geometry);
        selectPoi.add(newOption,undefined);*/
    }
    //console.log(poiDict);
    let poiArraySort = poiArray.sort();
    const selectPoi = document.getElementById("poi-select");
    for (var i=0; i<poiArraySort.length; i++){
        let newOption = new Option(poiArraySort[i][0],poiArraySort[i][1]);
        selectPoi.add(newOption,undefined);
    }
};

////https://docs.mapbox.com/help/tutorials/local-search-geocoding-api/#add-the-geocoder 
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

//https://docs.mapbox.com/mapbox-gl-js/example/locate-user
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

//https://docs.mapbox.com/help/tutorials/route-finder-with-turf-mapbox-directions/
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
//document.getElementById("directions-form").appendChild(directions.onAdd(map));
map.scrollZoom.enable();

//Add points to a map part 3: interactivity
map.on('click',(event)=>{
    const features = map.queryRenderedFeatures(event.point, {
        layers: ['Services','POIs','Trails']
    });

    if(!features.length){
        return;
    }
    
    const feature = features[0];
    console.log("Feature: ",feature)

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
    } /*else if (feature.sourceLayer == 'ParkBoundary_FeaturesToJSON_v-4oyzb4'){
        popup.setHTML(
            `<h3>Grand Teton National Park</h3>`
        )
        .addTo(map);
    } */else if (feature.source == 'rankingSource') {
        popup.setHTML(
            `<h6>User Ranking For: ${feature.properties["Name"]}</h6><p>Comment: ${feature.properties["Comment"]}</p>`
        )
        .addTo(map);
    }
});

//Add points to a map part 3: interactivity
map.on('click',(event)=>{
    const features = map.queryRenderedFeatures(event.point, {
        layers: ['Rankings']
    });

    if(!features.length){
        return;
    }

    for (var i=0; i<features.length; i++){
        const feature = features[i];
        //console.log("Feature: ",feature)
    
        const popup = new mapboxgl.Popup({offset: [0,0]})
        //.setLngLat(feature.geometry.coordinates)
        .setLngLat(event.lngLat);

        popup.setHTML(
            `<h6>User Ranking For: ${feature.properties["Name"]}</h6><p>Comment: ${feature.properties["Comment"]}</p>`
        )
        .addTo(map);
    }
    
});

//https://stackoverflow.com/questions/55560489/mapbox-gl-on-mouse-hover-on-layers-change-cursor-pointer-style
map.on("mouseenter", "POIs", () => {
    map.getCanvas().style.cursor = "pointer";
});

map.on("mouseleave", "POIs", () => {
    map.getCanvas().style.cursor = "grab";
});

map.on("mouseenter", "Services", () => {
    map.getCanvas().style.cursor = "pointer";
});

map.on("mouseleave", "Services", () => {
    map.getCanvas().style.cursor = "grab";
});

map.on("mouseenter", "Trails", () => {
    map.getCanvas().style.cursor = "pointer";
});

map.on("mouseleave", "Trails", () => {
    map.getCanvas().style.cursor = "grab";
});

map.on("mouseenter", "Rankings", () => {
    map.getCanvas().style.cursor = "pointer";
});

map.on("mouseleave", "Rankings", () => {
    map.getCanvas().style.cursor = "grab";
});

var infoContainer = document.getElementById("info-container");
var directionContainer = document.getElementById("directions-container");
var filterContainer = document.getElementById("filter-container");
var userContainer = document.getElementById("user-input-container");
var chartContainer = document.getElementById("chart-container");

var infoBtn = document.getElementById("info-btn");
var directionsBtn = document.getElementById("directions-btn");
var filterBtn = document.getElementById("filter-btn");
var userInputBtn = document.getElementById("user-input-btn");
var chartBtn = document.getElementById("chart-btn");

infoBtn.addEventListener("click",function(){
    if(directionContainer.style.display === "block"){
        directionContainer.style.display = "none";
        map.removeControl(directions);
        directionsBtn.style.backgroundColor = "white";
    }
    if (userContainer.style.display === "block"){
        userContainer.style.display = "none"
        userInputBtn.style.backgroundColor = "white";
    }
    if (chartContainer.style.display === "block"){
        chartContainer.style.display = "none";
        chartBtn.style.backgroundColor = "white";
    }

    if (filterContainer.style.display === "block"){
        filterContainer.style.display = "none";
        filterBtn.style.backgroundColor = "white";
    }

    if(infoContainer.style.display === "none"){
        infoContainer.style.display = "block";
        infoBtn.style.backgroundColor = "green";
    } else {
        infoContainer.style.display = "none"
        infoBtn.style.backgroundColor = "white";
    }
})

document.getElementById("close-info").addEventListener("click",function(){
    infoContainer.style.display = "none";
    infoBtn.style.backgroundColor = "white";
});

directionsBtn.addEventListener("click",function(){
    if(infoContainer.style.display === "block"){
        infoBtn.style.backgroundColor = "white";
        infoContainer.style.display = "none"
    }
    if(filterContainer.style.display === "block"){
        filterBtn.style.backgroundColor = "white";
        filterContainer.style.display = "none"
    }
    if (userContainer.style.display === "block"){
        userContainer.style.display = "none";
        userInputBtn.style.backgroundColor = "white";
    }
    if (chartContainer.style.display === "block"){
        chartBtn.style.backgroundColor = "white";
        chartContainer.style.display = "none"
    }

    if (directionContainer.style.display === "none"){
        directionContainer.style.display = "block";
        document.getElementById("directions-form").appendChild(directions.onAdd(map));
        directionsBtn.style.backgroundColor = "green";
    } else {
        directionContainer.style.display = "none";
        map.removeControl(directions);
        directionsBtn.style.backgroundColor = "white";
    }
});

document.getElementById("close-directions").addEventListener("click",function(){
    directionContainer.style.display = "none";
    map.removeControl(directions);
    directionsBtn.style.backgroundColor = "white";
})

filterBtn.addEventListener("click",function(){
    if(infoContainer.style.display === "block"){
        infoBtn.style.backgroundColor = "white";
        infoContainer.style.display = "none"
    }
    if(directionContainer.style.display === "block"){
        directionContainer.style.display = "none";
        map.removeControl(directions);
        directionsBtn.style.backgroundColor = "white";
    }
    if (userContainer.style.display === "block"){
        userContainer.style.display = "none";
        userInputBtn.style.backgroundColor = "white";
    }
    if (chartContainer.style.display === "block"){
        chartContainer.style.display = "none";
        chartBtn.style.backgroundColor = "white";
    }

    if (filterContainer.style.display === "none"){
        filterContainer.style.display = "block";
        filterBtn.style.backgroundColor = "green";
    } else {
        filterContainer.style.display = "none";
        filterBtn.style.backgroundColor = "white";
    }
})

document.getElementById("close-filter").addEventListener("click",function(){
    filterContainer.style.display = "none";
    filterBtn.style.backgroundColor = "white";
});

userInputBtn.addEventListener("click",function(){
    if(infoContainer.style.display === "block"){
        infoContainer.style.display = "none";
        infoBtn.style.backgroundColor = "white";
    }
    if(filterContainer.style.display === "block"){
        filterContainer.style.display = "none";
        filterBtn.style.backgroundColor = "white";
    }
    if (directionContainer.style.display === "block"){
        directionContainer.style.display = "none";
        map.removeControl(directions);
        directionsBtn.style.backgroundColor = "white";
    }
    if (chartContainer.style.display === "block"){
        chartContainer.style.display = "none";
        chartBtn.style.backgroundColor = "white";
    }

    if (userContainer.style.display === "none"){
        userContainer.style.display = "block";
        userInputBtn.style.backgroundColor = "green";
    } else {
        userContainer.style.display = "none";
        userInputBtn.style.backgroundColor = "white";
    }
});

document.getElementById("close-user-input").addEventListener("click",function(){
    userContainer.style.display = "none";
    userInputBtn.style.backgroundColor = "white";
});

chartBtn.addEventListener("click",function(){
    if(infoContainer.style.display === "block"){
        infoContainer.style.display = "none";
        infoBtn.style.backgroundColor = "white";
    }
    if(filterContainer.style.display === "block"){
        filterContainer.style.display = "none";
        filterBtn.style.backgroundColor = "white";
    }
    if (userContainer.style.display === "block"){
        userContainer.style.display = "none";
        userInputBtn.style.backgroundColor = "white";
    }
    if (directionContainer.style.display === "block"){
        directionContainer.style.display = "none";
        map.removeControl(directions);
        directionsBtn.style.backgroundColor = "white";
    }
    if (chartContainer.style.display === "none"){
        chartContainer.style.display = "block";
        chartBtn.style.backgroundColor = "green";
    } else {
        chartContainer.style.display = "none";
        chartBtn.style.backgroundColor = "white";
    }
});

document.getElementById("close-ranking-list").addEventListener("click",function(){
    chartContainer.style.display = "none";
    chartBtn.style.backgroundColor = "white";
});

const filterPOIs = document.getElementById("filter-select-poi");
filterPOIs.addEventListener("change",function(){
    const val = filterPOIs.options[filterPOIs.selectedIndex].value;
    if (val != "Label"){
        map.setFilter('POIs',['==',['get','Point Type'],val]);
    } else if (val == "Label"){
        map.setFilter('POIs',null);
    }
});

const filterServices = document.getElementById("filter-select-services");
filterServices.addEventListener("change",function(){
    const val = filterServices.options[filterServices.selectedIndex].value;
    if (val != "Label" && val != "Ranger Station"){
        map.setFilter('Services',['==',['get','Point Type'],val]);
    } else if (val == "Ranger Station") {
        map.setFilter('Services',['any',['==',['get','Point Type'],val],['==',['get','Point Type'],'Headquarters']])
    } else if (val == "Label"){
        map.setFilter('Services',null);
    }
});

const filterTrails = document.getElementById("filter-select-trails-use");
filterTrails.addEventListener("change",function(){
    const val = filterTrails.options[filterTrails.selectedIndex].value;
    if (val != "Label" && val != "Hiker/Pedestrian|Bicycle"){
        map.setFilter('Trails',['==',['get','Trail Use'],val]);
    } else if (val == "Hiker/Pedestrian|Bicycle") {
        map.setFilter('Trails',['any',['==',['get','Trail Use'],val],['==',['get','Trail Use'],'Hiker/Pedestrian | Bicycle']])
    } else if (val == "Label"){
        map.setFilter('Trails',null)
    }
});

const poisCheckbox = document.getElementById("pois-checkbox");
poisCheckbox.addEventListener("change",function(){
    if (poisCheckbox.checked) {
        map.setLayoutProperty('POIs','visibility','visible');
    } else if (!poisCheckbox.checked) {
        map.setLayoutProperty('POIs','visibility','none');
    }
});

const rankingCheckbox = document.getElementById("ranking-checkbox");
rankingCheckbox.addEventListener("change",function(){
    if (rankingCheckbox.checked) {
        map.setLayoutProperty('Rankings','visibility','visible');
    } else if (!rankingCheckbox.checked) {
        map.setLayoutProperty('Rankings','visibility','none');
    }
});

const servicesCheckbox = document.getElementById("services-checkbox");
servicesCheckbox.addEventListener("change",function(){
    if (servicesCheckbox.checked) {
        map.setLayoutProperty('Services','visibility','visible');
    } else if (!servicesCheckbox.checked) {
        map.setLayoutProperty('Services','visibility','none');
    }
});

const trailsCheckbox = document.getElementById("trails-checkbox");
trailsCheckbox.addEventListener("change",function(){
    if (trailsCheckbox.checked) {
        map.setLayoutProperty('Trails','visibility','visible');
    } else if (!trailsCheckbox.checked) {
        map.setLayoutProperty('Trails','visibility','none');
    }
});

const boundaryCheckbox = document.getElementById("boundary-checkbox");
boundaryCheckbox.addEventListener("change",function(){
    if (boundaryCheckbox.checked) {
        map.setLayoutProperty('Park Boundary','visibility','visible');
    } else if (!boundaryCheckbox.checked) {
        map.setLayoutProperty('Park Boundary','visibility','none');
    }
});

const resetFilterBtn = document.getElementById("reset-filter");
resetFilterBtn.addEventListener("click",function(){
    map.setLayoutProperty('Rankings','visibility','none');
    map.setLayoutProperty('POIs','visibility','visible');
    map.setLayoutProperty('Services','visibility','visible');
    map.setLayoutProperty('Trails','visibility','visible');
    map.setLayoutProperty('Park Boundary','visibility','visible');
    map.setFilter('POIs',null);
    map.setFilter('Services',null);
    map.setFilter('Trails',null);
    document.getElementById("filter-form-input").reset();

})

let featureId = 1;

async function featureIdIncrement(){
    featureId++;
    return featureId;
};

const submitBtn = document.getElementById("submit-btn")
submitBtn.addEventListener("click",async function(event){
    event.preventDefault();

    const commentVal = document.getElementById("comment").value;
    const selectForm = document.getElementById("poi-select")
    const coord = selectForm.options[selectForm.selectedIndex].value;
    // Verify that the user selected a point of interest in the form before submission
    if (coord == 'default'){
        alert("Please select a point of interest")
    } else {
        const coordSplit = coord.split(",");
        const poiLon = parseFloat(coordSplit[0]);
        const poiLat = parseFloat(coordSplit[1]);
        const poiName = selectForm.options[selectForm.selectedIndex].textContent;
    
        //const featureid = await featureIdIncrement();
        const rankingIdUse = rankingId + 1
        const featureid = rankingIdUse.toString();
    
        const feature = {
            "id": `${featureid}`,
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [poiLon,poiLat]
            },
            "properties": {
                "Ranking": 1,
                "Comment": commentVal,
                "Name": poiName
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
    
        const data = await response.json();
    
        Promise.all([data]).then(async ()=>{
            //const removeLayer = map.removeLayer('Rankings');
            //const removeSource = await map.removeSource('rankingSource');
            //const removeImage = await map.removeImage('star');
            alert("Ranking submitted succesfully!");
            const form = document.getElementById('user-ranking-form');
            form.reset();
            const rankingTable = document.getElementById("ranking-table");
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

window.addEventListener("load",(function(){
    this.document.getElementById("filter-form-input").reset();
    this.document.getElementById("user-ranking-form").reset();
}));