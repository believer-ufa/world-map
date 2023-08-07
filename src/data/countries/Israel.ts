import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Israel: CountryData = {
  type: 'Feature',
  id: 'ISR',
  key: CountriesKeys.israel,
  properties: { name: countriesNamesMessages.israel },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [35.719918, 32.709192],
        [35.545665, 32.393992],
        [35.18393, 32.532511],
        [34.974641, 31.866582],
        [35.225892, 31.754341],
        [34.970507, 31.616778],
        [34.927408, 31.353435],
        [35.397561, 31.489086],
        [35.420918, 31.100066],
        [34.922603, 29.501326],
        [34.265433, 31.219361],
        [34.556372, 31.548824],
        [34.488107, 31.605539],
        [34.752587, 32.072926],
        [34.955417, 32.827376],
        [35.098457, 33.080539],
        [35.126053, 33.0909],
        [35.460709, 33.08904],
        [35.552797, 33.264275],
        [35.821101, 33.277426],
        [35.836397, 32.868123],
        [35.700798, 32.716014],
        [35.719918, 32.709192],
      ],
    ] as LatLngExpression[][],
  },
};
