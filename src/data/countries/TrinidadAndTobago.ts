import { LatLngExpression } from 'leaflet';
import { countriesNames } from '../messages';

export const TrinidadAndTobago = {
  type: 'Feature',
  id: 'TTO',
  properties: { name: countriesNames.trinidadAndTobago },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-61.68, 10.76],
        [-61.105, 10.89],
        [-60.895, 10.855],
        [-60.935, 10.11],
        [-61.77, 10],
        [-61.95, 10.09],
        [-61.66, 10.365],
        [-61.68, 10.76],
      ],
    ] as LatLngExpression[][],
  },
};
