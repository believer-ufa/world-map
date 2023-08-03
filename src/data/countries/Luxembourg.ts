import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Luxembourg = {
  type: 'Feature',
  id: 'LUX',
  key: CountriesKeys.luxembourg,
  properties: { name: countriesNamesMessages.luxembourg },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [6.043073, 50.128052],
        [6.242751, 49.902226],
        [6.18632, 49.463803],
        [5.897759, 49.442667],
        [5.674052, 49.529484],
        [5.782417, 50.090328],
        [6.043073, 50.128052],
      ],
    ] as LatLngExpression[][],
  },
};
