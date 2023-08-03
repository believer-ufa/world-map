import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Somaliland = {
  type: 'Feature',
  id: '-99-somaliland',
  key: CountriesKeys.somaliland,
  properties: { name: countriesNamesMessages.somaliland },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [48.93813, 9.451749],
        [48.486736, 8.837626],
        [47.78942, 8.003],
        [46.948328, 7.996877],
        [43.67875, 9.18358],
        [43.296975, 9.540477],
        [42.92812, 10.02194],
        [42.55876, 10.57258],
        [42.776852, 10.926879],
        [43.145305, 11.46204],
        [43.47066, 11.27771],
        [43.666668, 10.864169],
        [44.117804, 10.445538],
        [44.614259, 10.442205],
        [45.556941, 10.698029],
        [46.645401, 10.816549],
        [47.525658, 11.127228],
        [48.021596, 11.193064],
        [48.378784, 11.375482],
        [48.948206, 11.410622],
        [48.942005, 11.394266],
        [48.938491, 10.982327],
        [48.938233, 9.9735],
        [48.93813, 9.451749],
      ],
    ] as LatLngExpression[][],
  },
};
