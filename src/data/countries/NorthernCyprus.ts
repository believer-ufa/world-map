import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const NorthernCyprus = {
  type: 'Feature',
  id: '-99-northern-cyprus',
  key: CountriesKeys.northernCyprus,
  properties: { name: countriesNamesMessages.northernCyprus },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [32.73178, 35.140026],
        [32.802474, 35.145504],
        [32.946961, 35.386703],
        [33.667227, 35.373216],
        [34.576474, 35.671596],
        [33.900804, 35.245756],
        [33.973617, 35.058506],
        [33.86644, 35.093595],
        [33.675392, 35.017863],
        [33.525685, 35.038688],
        [33.475817, 35.000345],
        [33.455922, 35.101424],
        [33.383833, 35.162712],
        [33.190977, 35.173125],
        [32.919572, 35.087833],
        [32.73178, 35.140026],
      ],
    ] as LatLngExpression[][],
  },
};
