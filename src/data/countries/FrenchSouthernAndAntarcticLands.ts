import { LatLngExpression } from 'leaflet';
import { countriesNames } from '../messages';

export const FrenchSouthernAndAntarcticLands = {
  type: 'Feature',
  id: 'ATF',
  properties: { name: countriesNames.frenchSouthernAndAntarcticLands },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [68.935, -48.625],
        [69.58, -48.94],
        [70.525, -49.065],
        [70.56, -49.255],
        [70.28, -49.71],
        [68.745, -49.775],
        [68.72, -49.2425],
        [68.8675, -48.83],
        [68.935, -48.625],
      ],
    ] as LatLngExpression[][],
  },
};
