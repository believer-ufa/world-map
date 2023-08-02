import { useState, useMemo } from 'react';
import { Map, PathOptions } from 'leaflet';
import { MapContainer, Polygon, TileLayer, Tooltip } from 'react-leaflet';

import { swapCoords } from '@/helpers/geo/swapCoords';
import { allCountries } from '@/data/allCountries';
import { CoordsPanel } from '@/uikit/CoordsPanel';

import classes from './App.module.scss';

// var myStyle = {
//   fillColor: "grey",
//     weight: 1,
//     opacity: 1,
//     color: 'white',
//     dashArray: '3',
//     fillOpacity: 0.7
// };

// $('#sidecol').empty();
// var myGeojSonLayerGroup = L.geoJson(world, {
//   onEachFeature: myOnEachFeature,
//   style: myStyle
// }).addTo(map);

// $(".cntrys").click(function() {
//   var item = $(this);
//   console.log("clicked on item " + item.data("countryName"));
//   myGeojSonLayerGroup.resetStyle(myGeojSonLayerGroup);
//   item.data("countryLayer").setStyle({
//     fillColor: "red",
//     weight: 2,
//     opacity: 1,
//     color: 'white',
//     dashArray: '3',
//     fillOpacity: 0.7
//   });
// });

// function myOnEachFeature(feature, layer) {
//   var props = feature.properties;
//   var item = $('<div class="cntrys"><p class="title">' + props.name + '</a></p></div>');
//   item.data("countryLayer", layer);
//   item.data("countryName", props.name);
//   $('#sidecol').append(item);
// }

// const polygon = [
//   [51.515, -0.09],
//   [51.52, -0.1],
//   [51.52, -0.12],
// ] as LatLngExpression[];

function App() {
  const [map, setMap] = useState<Map | null>(null);

  const countryOptions = useMemo(() => ({
    color: 'green',
    weight: 1,
    opacity: 1,
  } as PathOptions), []);

  const franceOptions = useMemo(() => ({
    color: 'red',
    weight: 1,
    opacity: 1,
  } as PathOptions), []);

  // custom tile layers for leaflet:
  // https://leaflet-extras.github.io/leaflet-providers/preview/

  return (
    <div className={classes.appContainer}>
      <MapContainer ref={setMap} className={classes.mapContainer} center={[30, 0]} zoom={3}>
        <TileLayer
          attribution="© OpenStreetMap | <a target='_blank' href='https://github.com/believer-ufa/world-map'>Source Code</a>"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {map ? <CoordsPanel map={map} /> : null}
        {allCountries.features.map((countryData) => (
          <Polygon key={countryData.id} pathOptions={countryOptions} positions={swapCoords(countryData.geometry.coordinates)}>
            <Tooltip direction="top" offset={[0, -3]} className={classes.tooltip} sticky>{countryData.properties.name}</Tooltip>
          </Polygon>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
