import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Benin: CountryData = {
  type: 'Feature',
  id: 'BEN',
  key: CountriesKeys.benin,
  properties: { name: countriesNamesMessages.benin },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [2.691702, 6.258817],
        [1.865241, 6.142158],
        [1.618951, 6.832038],
        [1.664478, 9.12859],
        [1.463043, 9.334624],
        [1.425061, 9.825395],
        [1.077795, 10.175607],
        [0.772336, 10.470808],
        [0.899563, 10.997339],
        [1.24347, 11.110511],
        [1.447178, 11.547719],
        [1.935986, 11.64115],
        [2.154474, 11.94015],
        [2.490164, 12.233052],
        [2.848643, 12.235636],
        [3.61118, 11.660167],
        [3.572216, 11.327939],
        [3.797112, 10.734746],
        [3.60007, 10.332186],
        [3.705438, 10.06321],
        [3.220352, 9.444153],
        [2.912308, 9.137608],
        [2.723793, 8.506845],
        [2.749063, 7.870734],
        [2.691702, 6.258817],
      ],
    ] as LatLngExpression[][],
  },
};