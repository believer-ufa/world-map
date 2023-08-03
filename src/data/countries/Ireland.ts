import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Ireland = {
  type: 'Feature',
  id: 'IRL',
  key: CountriesKeys.ireland,
  properties: { name: countriesNamesMessages.ireland },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-6.197885, 53.867565],
        [-6.032985, 53.153164],
        [-6.788857, 52.260118],
        [-8.561617, 51.669301],
        [-9.977086, 51.820455],
        [-9.166283, 52.864629],
        [-9.688525, 53.881363],
        [-8.327987, 54.664519],
        [-7.572168, 55.131622],
        [-7.366031, 54.595841],
        [-7.572168, 54.059956],
        [-6.95373, 54.073702],
        [-6.197885, 53.867565],
      ],
    ] as LatLngExpression[][],
  },
};
