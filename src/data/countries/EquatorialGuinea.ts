import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const EquatorialGuinea = {
  type: 'Feature',
  id: 'GNQ',
  key: CountriesKeys.equatorialGuinea,
  properties: { name: countriesNamesMessages.equatorialGuinea },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [9.492889, 1.01012],
        [9.305613, 1.160911],
        [9.649158, 2.283866],
        [11.276449, 2.261051],
        [11.285079, 1.057662],
        [9.830284, 1.067894],
        [9.492889, 1.01012],
      ],
    ] as LatLngExpression[][],
  },
};
