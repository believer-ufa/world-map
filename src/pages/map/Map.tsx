import { ReactNode, memo, useState } from 'react';

import { Map } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

import classes from './Map.module.scss';

import { CoordinatesWidget } from './widgets/CoordinatesWidget';
import { DriverLicensesWidget } from './widgets/DriverLicensesWidget';

import { TopRightPanel } from './panels/TopRightPanel';

import { AllCountriesPolygons } from './components/AllCountriesPolygons';

export interface MapProps {
  className?: string;
  children?: ReactNode;
}

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

export const MapComponent = memo<MapProps>(({ className }) => {
  const [map, setMap] = useState<Map | null>(null);
  // custom tile layers for leaflet:
  // https://leaflet-extras.github.io/leaflet-providers/preview/

  return (
    <MapContainer ref={setMap} className={classes.container} center={[30, 0]} zoom={3}>
      <TileLayer
        attribution="© OpenStreetMap | <a target='_blank' href='https://github.com/believer-ufa/world-map'>Source Code</a>"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <AllCountriesPolygons />
      <TopRightPanel>
        {map ? <CoordinatesWidget map={map} /> : null}
        <DriverLicensesWidget />
      </TopRightPanel>
    </MapContainer>
  );
});
