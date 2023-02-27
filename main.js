

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
        }
    });

    map.addLayer({
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
    });

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
        if(error) throw error;
        map.addImage('red-icon',image);    
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
                'red-icon'
            ],
            'icon-size': 0.25
        }
    });

    map.addSource('single-point',{
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        }
    });

    map.addLayer({
        id: 'point',
        source: 'single-point',
        type: 'circle',
        paint: {
            'circle-radius': 10,
            'circle-color': '#448eef'
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

    addRankings();
    getPOIs();

});

async function addRankings(){
    const rankings = await fetch(
        'https://api.mapbox.com/datasets/v1/aeneville2/clef1oq7p043t2qnyrnlnphqg/features?access_token=sk.eyJ1IjoiYWVuZXZpbGxlMiIsImEiOiJjbGVmcTFtdXowYXAyM3FtcWdrd2phdm1rIn0.xTaxF4yB4KeNuu1OABOLtw',
        { method: 'GET'}
    );
    const data = await rankings.json();
    Promise.all([rankings,data]).then(()=>{
        map.addSource('rankingSource',{
            type: 'geojson',
            data: data
        });
        map.addLayer({
            id: 'Rankings',
            type: 'circle',
            source: 'rankingSource',
            paint: {
                'circle-color':'#fff',
                'circle-radius':20
            }
        });
    });
};

async function getPOIs(){
    const pois = await fetch(
        'https://api.mapbox.com/datasets/v1/aeneville2/cledcynu8086025quruopxym2/features?access_token=sk.eyJ1IjoiYWVuZXZpbGxlMiIsImEiOiJjbGVmcTFtdXowYXAyM3FtcWdrd2phdm1rIn0.xTaxF4yB4KeNuu1OABOLtw',
        { method: 'GET'}
    )
    const data = await pois.json();
    const features = data.features;
    
    for (var i=0;i<features.length;i++){
        const name = features[i].properties["Point Name"];
        const geometry = features[i].geometry.coordinates;
        //poiDict[name] = geometry;
        const selectPoi = document.getElementById('poi-select')
        let newOption = new Option(name,geometry);
        selectPoi.add(newOption,undefined);
    }
    //console.log(poiDict);
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

geocoder.on('result',(event)=>{
    map.getSource('single-point').setData(event.result.geometry);
    //const end = event.result.geometry.coordinates;
    //getRoute(end);
});

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
        layers: ['Services','POIs','Trails','Park Boundary','Rankings']
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
            `<h6>${feature.properties['Name']}</h6>`
        )
        .addTo(map);
    } /*else if (feature.sourceLayer == 'ParkBoundary_FeaturesToJSON_v-4oyzb4'){
        popup.setHTML(
            `<h3>Grand Teton National Park</h3>`
        )
        .addTo(map);
    }*/ else if (feature.source == 'rankingSource') {
        popup.setHTML(
            `<h6>User Ranking For: ${feature.properties["Name"]}</h6><p>Ranking: ${feature.properties['Ranking']}</p><p>Comment: ${feature.properties["Comment"]}</p>`
        )
        .addTo(map);
    }
});

var directionContainer = document.getElementById("directions-container");
var filterContainer = document.getElementById("filter-container");
var userContainer = document.getElementById("user-input-container");
var chartContainer = document.getElementById("chart-container");

document.getElementById("directions-btn").addEventListener("click",function(){
    if(filterContainer.style.display === "block"){
        filterContainer.style.display = "none"
    }
    if (userContainer.style.display === "block"){
        userContainer.style.display = "none"
    }
    if (chartContainer.style.display === "block"){
        chartContainer.style.display = "none"
    }

    if (directionContainer.style.display === "none"){
        directionContainer.style.display = "block";
        document.getElementById("directions-form").appendChild(directions.onAdd(map));
    } else {
        directionContainer.style.display = "none";
        map.removeControl(directions);
    }
})

document.getElementById("filter-btn").addEventListener("click",function(){
    if(directionContainer.style.display === "block"){
        directionContainer.style.display = "none";
        map.removeControl(directions);
    }
    if (userContainer.style.display === "block"){
        userContainer.style.display = "none"
    }
    if (chartContainer.style.display === "block"){
        chartContainer.style.display = "none"
    }

    if (filterContainer.style.display === "none"){
        filterContainer.style.display = "block";
    } else {
        filterContainer.style.display = "none";
    }
})

document.getElementById("user-input-btn").addEventListener("click",function(){
    if(filterContainer.style.display === "block"){
        filterContainer.style.display = "none"
    }
    if (directionContainer.style.display === "block"){
        directionContainer.style.display = "none";
        map.removeControl(directions);
    }
    if (chartContainer.style.display === "block"){
        chartContainer.style.display = "none"
    }

    if (userContainer.style.display === "none"){
        userContainer.style.display = "block";
    } else {
        userContainer.style.display = "none";
    }
})

document.getElementById("chart-btn").addEventListener("click",function(){
    if(filterContainer.style.display === "block"){
        filterContainer.style.display = "none"
    }
    if (userContainer.style.display === "block"){
        userContainer.style.display = "none"
    }
    if (directionContainer.style.display === "block"){
        directionContainer.style.display = "none";
        map.removeControl(directions);
    }
    if (chartContainer.style.display === "none"){
        chartContainer.style.display = "block";
    } else {
        chartContainer.style.display = "none";
    }
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
    if (val != "Label"){
        map.setFilter('Services',['==',['get','Point Type'],val]);
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

let featureId = 1;

async function featureIdIncrement(){
    featureId++;
    return featureId;
};

const submitBtn = document.getElementById("submit-btn")
submitBtn.addEventListener("click",async function(event){
    event.preventDefault();

    const rankingVal = document.getElementById("ranking").value;
    const commentVal = document.getElementById("comment").value;
    const selectForm = document.getElementById("poi-select")
    const coord = selectForm.options[selectForm.selectedIndex].value;
    const coordSplit = coord.split(",");
    const poiLon = parseFloat(coordSplit[0]);
    const poiLat = parseFloat(coordSplit[1]);
    const poiName = selectForm.options[selectForm.selectedIndex].textContent;

    const featureid = await featureIdIncrement();

    const feature = {
        "id": `${featureid}`,
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [poiLon,poiLat]
        },
        "properties": {
            "Ranking": rankingVal,
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
    console.log(data);

    //FIGURE OUT THE LAG IN THE DATASET UPDATING (even when refresh map, it still shows previous point locations)
    Promise.all([data]).then(async ()=>{
        const removeLayer = map.removeLayer('Rankings');
        const removeSource = await map.removeSource('rankingSource');
        const form = document.getElementById('user-ranking-form');
        form.reset();
        Promise.all([removeLayer,removeSource,form]).then(()=>{
            addRankings();
        });
    })

    //DOES THIS OCCUR LATE ENOUGH THAT IT ACTUALLY UPDATES IN THE MAP?
    /*map.removeLayer('Rankings');
    map.removeSource('rankingSource');
    const form = document.getElementById('user-ranking-form');
    form.reset();*/
    
    //addRankings();
});

window.addEventListener("load",(function(){
    this.document.getElementById("filter-form-input").reset();
    this.document.getElementById("user-ranking-form").reset();
}));