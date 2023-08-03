import { LatLngExpression } from 'leaflet';
import { countriesNames } from '../messages';

export const Rwanda = {
  type: 'Feature',
  id: 'RWA',
  properties: { name: countriesNames.rwanda },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [30.419105, -1.134659],
        [30.816135, -1.698914],
        [30.758309, -2.28725],
        [30.469696, -2.413858],
        [29.938359, -2.348487],
        [29.632176, -2.917858],
        [29.024926, -2.839258],
        [29.117479, -2.292211],
        [29.254835, -2.21511],
        [29.291887, -1.620056],
        [29.579466, -1.341313],
        [29.821519, -1.443322],
        [30.419105, -1.134659],
      ],
    ] as LatLngExpression[][],
  },
};
