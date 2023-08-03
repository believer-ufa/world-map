import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const WestBank = {
  type: 'Feature',
  id: 'PSE',
  key: CountriesKeys.westBank,
  properties: { name: countriesNamesMessages.westBank },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [35.545665, 32.393992],
        [35.545252, 31.782505],
        [35.397561, 31.489086],
        [34.927408, 31.353435],
        [34.970507, 31.616778],
        [35.225892, 31.754341],
        [34.974641, 31.866582],
        [35.18393, 32.532511],
        [35.545665, 32.393992],
      ],
    ] as LatLngExpression[][],
  },
};
