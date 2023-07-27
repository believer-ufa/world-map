import { LatLngExpression } from 'leaflet';

export const Qatar = {
  type: 'Feature',
  id: 'QAT',
  properties: { name: 'Qatar' },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [50.810108, 24.754743],
        [50.743911, 25.482424],
        [51.013352, 26.006992],
        [51.286462, 26.114582],
        [51.589079, 25.801113],
        [51.6067, 25.21567],
        [51.389608, 24.627386],
        [51.112415, 24.556331],
        [50.810108, 24.754743],
      ],
    ] as LatLngExpression[][],
  },
};
