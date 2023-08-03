import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Montenegro = {
  type: 'Feature',
  id: 'MNE',
  key: CountriesKeys.montenegro,
  properties: { name: countriesNamesMessages.montenegro },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [19.801613, 42.500093],
        [19.738051, 42.688247],
        [19.30449, 42.19574],
        [19.37177, 41.87755],
        [19.16246, 41.95502],
        [18.88214, 42.28151],
        [18.45, 42.48],
        [18.56, 42.65],
        [18.70648, 43.20011],
        [19.03165, 43.43253],
        [19.21852, 43.52384],
        [19.48389, 43.35229],
        [19.63, 43.21378],
        [19.95857, 43.10604],
        [20.3398, 42.89852],
        [20.25758, 42.81275],
        [20.0707, 42.58863],
        [19.801613, 42.500093],
      ],
    ] as LatLngExpression[][],
  },
};
