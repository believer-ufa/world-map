import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Kuwait = {
  type: 'Feature',
  id: 'KWT',
  key: CountriesKeys.kuwait,
  properties: { name: countriesNamesMessages.kuwait },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [47.974519, 29.975819],
        [48.183189, 29.534477],
        [48.093943, 29.306299],
        [48.416094, 28.552004],
        [47.708851, 28.526063],
        [47.459822, 29.002519],
        [46.568713, 29.099025],
        [47.302622, 30.05907],
        [47.974519, 29.975819],
      ],
    ] as LatLngExpression[][],
  },
};
