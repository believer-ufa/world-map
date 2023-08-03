import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const ElSalvador = {
  type: 'Feature',
  id: 'SLV',
  key: CountriesKeys.elSalvador,
  properties: { name: countriesNamesMessages.elSalvador },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-87.793111, 13.38448],
        [-87.904112, 13.149017],
        [-88.483302, 13.163951],
        [-88.843228, 13.259734],
        [-89.256743, 13.458533],
        [-89.812394, 13.520622],
        [-90.095555, 13.735338],
        [-90.064678, 13.88197],
        [-89.721934, 14.134228],
        [-89.534219, 14.244816],
        [-89.587343, 14.362586],
        [-89.353326, 14.424133],
        [-89.058512, 14.340029],
        [-88.843073, 14.140507],
        [-88.541231, 13.980155],
        [-88.503998, 13.845486],
        [-88.065343, 13.964626],
        [-87.859515, 13.893312],
        [-87.723503, 13.78505],
        [-87.793111, 13.38448],
      ],
    ] as LatLngExpression[][],
  },
};
