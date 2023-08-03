import { LatLngExpression } from 'leaflet';
import { countriesNames } from '../messages';

export const Cyprus = {
  type: 'Feature',
  id: 'CYP',
  properties: { name: countriesNames.cyprus },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [33.973617, 35.058506],
        [34.004881, 34.978098],
        [32.979827, 34.571869],
        [32.490296, 34.701655],
        [32.256667, 35.103232],
        [32.73178, 35.140026],
        [32.919572, 35.087833],
        [33.190977, 35.173125],
        [33.383833, 35.162712],
        [33.455922, 35.101424],
        [33.475817, 35.000345],
        [33.525685, 35.038688],
        [33.675392, 35.017863],
        [33.86644, 35.093595],
        [33.973617, 35.058506],
      ],
    ] as LatLngExpression[][],
  },
};
