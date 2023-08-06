import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Belgium: CountryData = {
  type: 'Feature',
  id: 'BEL',
  key: CountriesKeys.belgium,
  properties: { name: countriesNamesMessages.belgium },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [3.314971, 51.345781],
        [4.047071, 51.267259],
        [4.973991, 51.475024],
        [5.606976, 51.037298],
        [6.156658, 50.803721],
        [6.043073, 50.128052],
        [5.782417, 50.090328],
        [5.674052, 49.529484],
        [4.799222, 49.985373],
        [4.286023, 49.907497],
        [3.588184, 50.378992],
        [3.123252, 50.780363],
        [2.658422, 50.796848],
        [2.513573, 51.148506],
        [3.314971, 51.345781],
      ],
    ] as LatLngExpression[][],
  },
};
