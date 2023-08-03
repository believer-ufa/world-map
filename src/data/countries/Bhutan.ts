import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Bhutan = {
  type: 'Feature',
  id: 'BTN',
  key: CountriesKeys.bhutan,
  properties: { name: countriesNamesMessages.bhutan },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [91.696657, 27.771742],
        [92.103712, 27.452614],
        [92.033484, 26.83831],
        [91.217513, 26.808648],
        [90.373275, 26.875724],
        [89.744528, 26.719403],
        [88.835643, 27.098966],
        [88.814248, 27.299316],
        [89.47581, 28.042759],
        [90.015829, 28.296439],
        [90.730514, 28.064954],
        [91.258854, 28.040614],
        [91.696657, 27.771742],
      ],
    ] as LatLngExpression[][],
  },
};
