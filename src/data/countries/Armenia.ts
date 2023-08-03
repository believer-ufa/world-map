import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Armenia = {
  type: 'Feature',
  id: 'ARM',
  key: CountriesKeys.armenia,
  properties: { name: countriesNamesMessages.armenia },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [43.582746, 41.092143],
        [44.97248, 41.248129],
        [45.179496, 40.985354],
        [45.560351, 40.81229],
        [45.359175, 40.561504],
        [45.891907, 40.218476],
        [45.610012, 39.899994],
        [46.034534, 39.628021],
        [46.483499, 39.464155],
        [46.50572, 38.770605],
        [46.143623, 38.741201],
        [45.735379, 39.319719],
        [45.739978, 39.473999],
        [45.298145, 39.471751],
        [45.001987, 39.740004],
        [44.79399, 39.713003],
        [44.400009, 40.005],
        [43.656436, 40.253564],
        [43.752658, 40.740201],
        [43.582746, 41.092143],
      ],
    ] as LatLngExpression[][],
  },
};
