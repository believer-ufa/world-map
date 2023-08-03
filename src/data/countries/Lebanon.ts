import { LatLngExpression } from 'leaflet';
import { countriesNames } from '../messages';

export const Lebanon = {
  type: 'Feature',
  id: 'LBN',
  properties: { name: countriesNames.lebanon },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [35.821101, 33.277426],
        [35.552797, 33.264275],
        [35.460709, 33.08904],
        [35.126053, 33.0909],
        [35.482207, 33.90545],
        [35.979592, 34.610058],
        [35.998403, 34.644914],
        [36.448194, 34.593935],
        [36.61175, 34.201789],
        [36.06646, 33.824912],
        [35.821101, 33.277426],
      ],
    ] as LatLngExpression[][],
  },
};
