import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Taiwan: CountryData = {
  type: 'Feature',
  id: 'TWN',
  key: CountriesKeys.taiwan,
  properties: { name: countriesNamesMessages.taiwan },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [121.777818, 24.394274],
        [121.175632, 22.790857],
        [120.74708, 21.970571],
        [120.220083, 22.814861],
        [120.106189, 23.556263],
        [120.69468, 24.538451],
        [121.495044, 25.295459],
        [121.951244, 24.997596],
        [121.777818, 24.394274],
      ],
    ] as LatLngExpression[][],
  },
};
