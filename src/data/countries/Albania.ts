import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Albania = {
  type: 'Feature',
  id: 'ALB',
  key: CountriesKeys.albania,
  properties: { name: countriesNamesMessages.albania },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [20.590247, 41.855404],
        [20.463175, 41.515089],
        [20.605182, 41.086226],
        [21.02004, 40.842727],
        [20.99999, 40.580004],
        [20.674997, 40.435],
        [20.615, 40.110007],
        [20.150016, 39.624998],
        [19.98, 39.694993],
        [19.960002, 39.915006],
        [19.406082, 40.250773],
        [19.319059, 40.72723],
        [19.40355, 41.409566],
        [19.540027, 41.719986],
        [19.371769, 41.877548],
        [19.304486, 42.195745],
        [19.738051, 42.688247],
        [19.801613, 42.500093],
        [20.0707, 42.58863],
        [20.283755, 42.32026],
        [20.52295, 42.21787],
        [20.590247, 41.855404],
      ],
    ] as LatLngExpression[][],
  },
};
