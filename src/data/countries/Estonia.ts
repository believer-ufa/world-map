import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Estonia = {
  type: 'Feature',
  id: 'EST',
  key: CountriesKeys.estonia,
  properties: { name: countriesNamesMessages.estonia },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [24.312863, 57.793424],
        [24.428928, 58.383413],
        [24.061198, 58.257375],
        [23.42656, 58.612753],
        [23.339795, 59.18724],
        [24.604214, 59.465854],
        [25.864189, 59.61109],
        [26.949136, 59.445803],
        [27.981114, 59.475388],
        [28.131699, 59.300825],
        [27.420166, 58.724581],
        [27.716686, 57.791899],
        [27.288185, 57.474528],
        [26.463532, 57.476389],
        [25.60281, 57.847529],
        [25.164594, 57.970157],
        [24.312863, 57.793424],
      ],
    ] as LatLngExpression[][],
  },
};
