import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const NewCaledonia = {
  type: 'Feature',
  id: 'NCL',
  key: CountriesKeys.newCaledonia,
  properties: { name: countriesNamesMessages.newCaledonia },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [165.77999, -21.080005],
        [166.599991, -21.700019],
        [167.120011, -22.159991],
        [166.740035, -22.399976],
        [166.189732, -22.129708],
        [165.474375, -21.679607],
        [164.829815, -21.14982],
        [164.167995, -20.444747],
        [164.029606, -20.105646],
        [164.459967, -20.120012],
        [165.020036, -20.459991],
        [165.460009, -20.800022],
        [165.77999, -21.080005],
      ],
    ] as LatLngExpression[][],
  },
};
