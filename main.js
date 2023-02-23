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

    map.addLayer({
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
    });

    addRankings();
    //getPOIs();

});

async function addRankings(){
    const rankings = await fetch(
        'https://api.mapbox.com/datasets/v1/aeneville2/clef1oq7p043t2qnyrnlnphqg/features?access_token=sk.eyJ1IjoiYWVuZXZpbGxlMiIsImEiOiJjbGVmcTFtdXowYXAyM3FtcWdrd2phdm1rIn0.xTaxF4yB4KeNuu1OABOLtw',
        { method: 'GET'}
    );
    const data = await rankings.json();
    Promise.all([rankings,data]).then(()=>{
        map.addLayer({
            id: 'Rankings2',
            type: 'circle',
            source: {
                type: 'geojson',
                data: data
            },
            paint: {
                'circle-color':'#fff',
                'circle-radius':20
            }
        });
    });
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