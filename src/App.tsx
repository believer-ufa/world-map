/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo, useCallback, useEffect } from "react";
import { Map, PathOptions } from "leaflet";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import classes from "./App.module.scss";
import { allCountries } from "./data/allCountries";

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

const DisplayPosition = ({ map }: { map: Map }) => {
  const [position, setPosition] = useState(() => map.getCenter())

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])

  return (
    <p>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
    </p>
  )
}

const App = () => {
  const [map, setMap] = useState<Map | null>(null)

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

  const processCoords = (coordsArray: any) => {
    if (Array.isArray(coordsArray)) {
      return coordsArray.map((arr: any): any => {
        if (Array.isArray(arr) ) {
          if (Array.isArray(arr[0])) {
            return processCoords(arr);
          }

          return [arr[1], arr[0]];
        }

        return arr;
      });
    }

    return coordsArray;
  }

  return (
    <div className={classes.appContainer}>
      {map ? <DisplayPosition map={map} /> : null}
      <MapContainer ref={setMap} className={classes.mapContainer} center={[30, 0]} zoom={3}>
        <TileLayer attribution="© OpenStreetMap" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {allCountries.features.map(countryData => (
          <Polygon pathOptions={countryOptions} positions={processCoords(countryData.geometry.coordinates)} />
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
