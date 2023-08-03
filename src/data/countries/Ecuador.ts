import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Ecuador = {
  type: 'Feature',
  id: 'ECU',
  key: CountriesKeys.ecuador,
  properties: { name: countriesNamesMessages.ecuador },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-80.302561, -3.404856],
        [-79.770293, -2.657512],
        [-79.986559, -2.220794],
        [-80.368784, -2.685159],
        [-80.967765, -2.246943],
        [-80.764806, -1.965048],
        [-80.933659, -1.057455],
        [-80.58337, -0.906663],
        [-80.399325, -0.283703],
        [-80.020898, 0.36034],
        [-80.09061, 0.768429],
        [-79.542762, 0.982938],
        [-78.855259, 1.380924],
        [-77.855061, 0.809925],
        [-77.668613, 0.825893],
        [-77.424984, 0.395687],
        [-76.57638, 0.256936],
        [-76.292314, 0.416047],
        [-75.801466, 0.084801],
        [-75.373223, -0.152032],
        [-75.233723, -0.911417],
        [-75.544996, -1.56161],
        [-76.635394, -2.608678],
        [-77.837905, -3.003021],
        [-78.450684, -3.873097],
        [-78.639897, -4.547784],
        [-79.205289, -4.959129],
        [-79.624979, -4.454198],
        [-80.028908, -4.346091],
        [-80.442242, -4.425724],
        [-80.469295, -4.059287],
        [-80.184015, -3.821162],
        [-80.302561, -3.404856],
      ],
    ] as LatLngExpression[][],
  },
};
