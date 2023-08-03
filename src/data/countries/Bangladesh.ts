import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Bangladesh = {
  type: 'Feature',
  id: 'BGD',
  key: CountriesKeys.bangladesh,
  properties: { name: countriesNamesMessages.bangladesh },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [92.672721, 22.041239],
        [92.652257, 21.324048],
        [92.303234, 21.475485],
        [92.368554, 20.670883],
        [92.082886, 21.192195],
        [92.025215, 21.70157],
        [91.834891, 22.182936],
        [91.417087, 22.765019],
        [90.496006, 22.805017],
        [90.586957, 22.392794],
        [90.272971, 21.836368],
        [89.847467, 22.039146],
        [89.70205, 21.857116],
        [89.418863, 21.966179],
        [89.031961, 22.055708],
        [88.876312, 22.879146],
        [88.52977, 23.631142],
        [88.69994, 24.233715],
        [88.084422, 24.501657],
        [88.306373, 24.866079],
        [88.931554, 25.238692],
        [88.209789, 25.768066],
        [88.563049, 26.446526],
        [89.355094, 26.014407],
        [89.832481, 25.965082],
        [89.920693, 25.26975],
        [90.872211, 25.132601],
        [91.799596, 25.147432],
        [92.376202, 24.976693],
        [91.915093, 24.130414],
        [91.46773, 24.072639],
        [91.158963, 23.503527],
        [91.706475, 22.985264],
        [91.869928, 23.624346],
        [92.146035, 23.627499],
        [92.672721, 22.041239],
      ],
    ] as LatLngExpression[][],
  },
};
