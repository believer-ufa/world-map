import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Burundi = {
  type: 'Feature',
  id: 'BDI',
  key: CountriesKeys.burundi,
  properties: { name: countriesNamesMessages.burundi },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [29.339998, -4.499983],
        [29.276384, -3.293907],
        [29.024926, -2.839258],
        [29.632176, -2.917858],
        [29.938359, -2.348487],
        [30.469696, -2.413858],
        [30.527677, -2.807632],
        [30.743013, -3.034285],
        [30.752263, -3.35933],
        [30.50556, -3.568567],
        [30.116333, -4.090138],
        [29.753512, -4.452389],
        [29.339998, -4.499983],
      ],
    ] as LatLngExpression[][],
  },
};
