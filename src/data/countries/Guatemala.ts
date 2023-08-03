import { LatLngExpression } from 'leaflet';
import { countriesNames } from '../messages';

export const Guatemala = {
  type: 'Feature',
  id: 'GTM',
  properties: { name: countriesNames.guatemala },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-90.095555, 13.735338],
        [-90.608624, 13.909771],
        [-91.23241, 13.927832],
        [-91.689747, 14.126218],
        [-92.22775, 14.538829],
        [-92.20323, 14.830103],
        [-92.087216, 15.064585],
        [-92.229249, 15.251447],
        [-91.74796, 16.066565],
        [-90.464473, 16.069562],
        [-90.438867, 16.41011],
        [-90.600847, 16.470778],
        [-90.711822, 16.687483],
        [-91.08167, 16.918477],
        [-91.453921, 17.252177],
        [-91.002269, 17.254658],
        [-91.00152, 17.817595],
        [-90.067934, 17.819326],
        [-89.14308, 17.808319],
        [-89.150806, 17.015577],
        [-89.229122, 15.886938],
        [-88.930613, 15.887273],
        [-88.604586, 15.70638],
        [-88.518364, 15.855389],
        [-88.225023, 15.727722],
        [-88.68068, 15.346247],
        [-89.154811, 15.066419],
        [-89.22522, 14.874286],
        [-89.145535, 14.678019],
        [-89.353326, 14.424133],
        [-89.587343, 14.362586],
        [-89.534219, 14.244816],
        [-89.721934, 14.134228],
        [-90.064678, 13.88197],
        [-90.095555, 13.735338],
      ],
    ] as LatLngExpression[][],
  },
};
