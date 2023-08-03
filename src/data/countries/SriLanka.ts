import { LatLngExpression } from 'leaflet';
import { countriesNames } from '../messages';

export const SriLanka = {
  type: 'Feature',
  id: 'LKA',
  properties: { name: countriesNames.sriLanka },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [81.787959, 7.523055],
        [81.637322, 6.481775],
        [81.21802, 6.197141],
        [80.348357, 5.96837],
        [79.872469, 6.763463],
        [79.695167, 8.200843],
        [80.147801, 9.824078],
        [80.838818, 9.268427],
        [81.304319, 8.564206],
        [81.787959, 7.523055],
      ],
    ] as LatLngExpression[][],
  },
};
