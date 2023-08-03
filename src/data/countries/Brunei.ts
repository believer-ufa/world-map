import { LatLngExpression } from 'leaflet';
import { countriesNames } from '../messages';

export const Brunei = {
  type: 'Feature',
  id: 'BRN',
  properties: { name: countriesNames.brunei },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [114.204017, 4.525874],
        [114.599961, 4.900011],
        [115.45071, 5.44773],
        [115.4057, 4.955228],
        [115.347461, 4.316636],
        [114.869557, 4.348314],
        [114.659596, 4.007637],
        [114.204017, 4.525874],
      ],
    ] as LatLngExpression[][],
  },
};
