import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Lithuania: CountryData = {
  type: 'Feature',
  id: 'LTU',
  key: CountriesKeys.lithuania,
  properties: { name: countriesNamesMessages.lithuania },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [22.731099, 54.327537],
        [22.651052, 54.582741],
        [22.757764, 54.856574],
        [22.315724, 55.015299],
        [21.268449, 55.190482],
        [21.0558, 56.031076],
        [22.201157, 56.337802],
        [23.878264, 56.273671],
        [24.860684, 56.372528],
        [25.000934, 56.164531],
        [25.533047, 56.100297],
        [26.494331, 55.615107],
        [26.588279, 55.167176],
        [25.768433, 54.846963],
        [25.536354, 54.282423],
        [24.450684, 53.905702],
        [23.484128, 53.912498],
        [23.243987, 54.220567],
        [22.731099, 54.327537],
      ],
    ] as LatLngExpression[][],
  },
};