import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Jordan: CountryData = {
  type: 'Feature',
  id: 'JOR',
  key: CountriesKeys.jordan,
  properties: { name: countriesNamesMessages.jordan },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [35.545665, 32.393992],
        [35.719918, 32.709192],
        [36.834062, 32.312938],
        [38.792341, 33.378686],
        [39.195468, 32.161009],
        [39.004886, 32.010217],
        [37.002166, 31.508413],
        [37.998849, 30.5085],
        [37.66812, 30.338665],
        [37.503582, 30.003776],
        [36.740528, 29.865283],
        [36.501214, 29.505254],
        [36.068941, 29.197495],
        [34.956037, 29.356555],
        [34.922603, 29.501326],
        [35.420918, 31.100066],
        [35.397561, 31.489086],
        [35.545252, 31.782505],
        [35.545665, 32.393992],
      ],
    ] as LatLngExpression[][],
  },
};
