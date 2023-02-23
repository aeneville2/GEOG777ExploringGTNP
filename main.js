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
            'line-color': '#004b8d'
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

    map.addLayer({
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
            'circle-color': 'rgb(60,120,30)'
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
// HOW TO DISACTIVATE THIS UNTIL IT IS SHOWN IN THE DISPLAY (currently activiates on user click even when not showing)
const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'imperial',
    profile: 'mapbox/driving',
    alternatives: false,
    geometries: 'geojson',
    controls: {instructions: true},
    flyTo: true
})
//map.addControl(directions,'top-right');
document.getElementById("directions-form").appendChild(directions.onAdd(map));
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

    const popup = new mapboxgl.Popup({offset: [0,-15]})
    //.setLngLat(feature.geometry.coordinates)
    .setLngLat(event.lngLat)

    if (feature.sourceLayer == 'Services'){
        popup.setHTML(
            `<h3>${feature.properties['Point Name']}</h3>`
        )
        .addTo(map);
    } else if (feature.sourceLayer == 'POIs' && feature.properties.URL != null){
        popup.setHTML(
            `<h3>${feature.properties['Point Name']}</h3><a href='${feature.properties.URL}'>More Info</a>`
        )
        .addTo(map);
    } else if (feature.sourceLayer == 'POIs' && feature.properties.URL == null){
        popup.setHTML(
            `<h3>${feature.properties['Point Name']}</h3>`
        )
        .addTo(map);
    }
    else if (feature.sourceLayer == 'Trails_FeaturesToJSON_v3-1c2nmj'){
        popup.setHTML(
            `<h3>${feature.properties['Name']}</h3>`
        )
        .addTo(map);
    } else if (feature.sourceLayer == 'ParkBoundary_FeaturesToJSON_v-4oyzb4'){
        popup.setHTML(
            `<h3>Grand Teton National Park</h3>`
        )
        .addTo(map);
    } else if (feature.source == 'rankingSource') {
        popup.setHTML(
            `<h3>${feature.properties["Name"]}</h3><p>${feature.properties['Ranking']}</p><p>${feature.properties["Comment"]}</p>`
        )
        .addTo(map);
    }
});

document.getElementById("directions-btn").addEventListener("click",function(){
    var x = document.getElementById("directions-container");
    if (x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
})

document.getElementById("filter-btn").addEventListener("click",function(){
    var x = document.getElementById("filter-container");
    if (x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
})

document.getElementById("user-input-btn").addEventListener("click",function(){
    var x = document.getElementById("user-input-container");
    if (x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
})

document.getElementById("chart-btn").addEventListener("click",function(){
    var x = document.getElementById("chart-container");
    if (x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
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
    )
    //Promise.all([response]).then(deleteTiles);

    const data = await response.json();
    console.log(data);

    //DOES THIS OCCUR LATE ENOUGH THAT IT ACTUALLY UPDATES IN THE MAP?
    map.removeLayer('Rankings');
    map.removeSource('rankingSource');
    const form = document.getElementById('user-ranking-form');
    form.reset();
    
    addRankings();
});