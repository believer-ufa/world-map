import { LatLngExpression } from 'leaflet';
import { countriesNames } from '../messages';

export const Swaziland = {
  type: 'Feature',
  id: 'SWZ',
  properties: { name: countriesNames.swaziland },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [32.071665, -26.73382],
        [31.86806, -27.177927],
        [31.282773, -27.285879],
        [30.685962, -26.743845],
        [30.676609, -26.398078],
        [30.949667, -26.022649],
        [31.04408, -25.731452],
        [31.333158, -25.660191],
        [31.837778, -25.843332],
        [31.985779, -26.29178],
        [32.071665, -26.73382],
      ],
    ] as LatLngExpression[][],
  },
};
