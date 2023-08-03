import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Haiti = {
  type: 'Feature',
  id: 'HTI',
  key: CountriesKeys.haiti,
  properties: { name: countriesNamesMessages.haiti },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.189791, 19.915684],
        [-72.579673, 19.871501],
        [-71.712361, 19.714456],
        [-71.624873, 19.169838],
        [-71.701303, 18.785417],
        [-71.945112, 18.6169],
        [-71.687738, 18.31666],
        [-71.708305, 18.044997],
        [-72.372476, 18.214961],
        [-72.844411, 18.145611],
        [-73.454555, 18.217906],
        [-73.922433, 18.030993],
        [-74.458034, 18.34255],
        [-74.369925, 18.664908],
        [-73.449542, 18.526053],
        [-72.694937, 18.445799],
        [-72.334882, 18.668422],
        [-72.79165, 19.101625],
        [-72.784105, 19.483591],
        [-73.415022, 19.639551],
        [-73.189791, 19.915684],
      ],
    ] as LatLngExpression[][],
  },
};
