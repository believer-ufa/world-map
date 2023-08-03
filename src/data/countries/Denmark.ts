import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Denmark = {
  type: 'Feature',
  id: 'DNK',
  key: CountriesKeys.denmark,
  properties: { name: countriesNamesMessages.denmark },
  geometry: {
    type: 'MultiPolygon',
    coordinates: [
      [
        [
          [12.690006, 55.609991],
          [12.089991, 54.800015],
          [11.043543, 55.364864],
          [10.903914, 55.779955],
          [12.370904, 56.111407],
          [12.690006, 55.609991],
        ],
      ],
      [
        [
          [10.912182, 56.458621],
          [10.667804, 56.081383],
          [10.369993, 56.190007],
          [9.649985, 55.469999],
          [9.921906, 54.983104],
          [9.282049, 54.830865],
          [8.526229, 54.962744],
          [8.120311, 55.517723],
          [8.089977, 56.540012],
          [8.256582, 56.809969],
          [8.543438, 57.110003],
          [9.424469, 57.172066],
          [9.775559, 57.447941],
          [10.580006, 57.730017],
          [10.546106, 57.215733],
          [10.25, 56.890016],
          [10.369993, 56.609982],
          [10.912182, 56.458621],
        ],
      ],
    ] as LatLngExpression[][][],
  },
};
