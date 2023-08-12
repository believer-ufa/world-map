import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Lesotho: CountryData = {
  type: 'Feature',
  id: 'LSO',
  key: CountriesKeys.lesotho,
  properties: { name: countriesNamesMessages.lesotho },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [28.978263, -28.955597],
        [29.325166, -29.257387],
        [29.018415, -29.743766],
        [28.8484, -30.070051],
        [28.291069, -30.226217],
        [28.107205, -30.545732],
        [27.749397, -30.645106],
        [26.999262, -29.875954],
        [27.532511, -29.242711],
        [28.074338, -28.851469],
        [28.5417, -28.647502],
        [28.978263, -28.955597],
      ],
    ] as LatLngExpression[][],
  },
};