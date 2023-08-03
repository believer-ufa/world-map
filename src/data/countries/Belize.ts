import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Belize = {
  type: 'Feature',
  id: 'BLZ',
  key: CountriesKeys.belize,
  properties: { name: countriesNamesMessages.belize },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-89.14308, 17.808319],
        [-89.150909, 17.955468],
        [-89.029857, 18.001511],
        [-88.848344, 17.883198],
        [-88.490123, 18.486831],
        [-88.300031, 18.499982],
        [-88.296336, 18.353273],
        [-88.106813, 18.348674],
        [-88.123479, 18.076675],
        [-88.285355, 17.644143],
        [-88.197867, 17.489475],
        [-88.302641, 17.131694],
        [-88.239518, 17.036066],
        [-88.355428, 16.530774],
        [-88.551825, 16.265467],
        [-88.732434, 16.233635],
        [-88.930613, 15.887273],
        [-89.229122, 15.886938],
        [-89.150806, 17.015577],
        [-89.14308, 17.808319],
      ],
    ] as LatLngExpression[][],
  },
};
