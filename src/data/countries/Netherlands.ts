import { LatLngExpression } from 'leaflet';
import { countriesNames } from '../messages';

export const Netherlands = {
  type: 'Feature',
  id: 'NLD',
  properties: { name: countriesNames.netherlands },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [6.074183, 53.510403],
        [6.90514, 53.482162],
        [7.092053, 53.144043],
        [6.84287, 52.22844],
        [6.589397, 51.852029],
        [5.988658, 51.851616],
        [6.156658, 50.803721],
        [5.606976, 51.037298],
        [4.973991, 51.475024],
        [4.047071, 51.267259],
        [3.314971, 51.345755],
        [3.830289, 51.620545],
        [4.705997, 53.091798],
        [6.074183, 53.510403],
      ],
    ] as LatLngExpression[][],
  },
};
