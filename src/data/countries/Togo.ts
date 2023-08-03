import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Togo = {
  type: 'Feature',
  id: 'TGO',
  key: CountriesKeys.togo,
  properties: { name: countriesNamesMessages.togo },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [1.865241, 6.142158],
        [1.060122, 5.928837],
        [0.836931, 6.279979],
        [0.570384, 6.914359],
        [0.490957, 7.411744],
        [0.712029, 8.312465],
        [0.461192, 8.677223],
        [0.365901, 9.465004],
        [0.36758, 10.191213],
        [-0.049785, 10.706918],
        [0.023803, 11.018682],
        [0.899563, 10.997339],
        [0.772336, 10.470808],
        [1.077795, 10.175607],
        [1.425061, 9.825395],
        [1.463043, 9.334624],
        [1.664478, 9.12859],
        [1.618951, 6.832038],
        [1.865241, 6.142158],
      ],
    ] as LatLngExpression[][],
  },
};
