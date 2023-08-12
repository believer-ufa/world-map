import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const FrenchGuiana: CountryData = {
  type: 'Feature',
  id: 'GUF',
  key: CountriesKeys.frenchGuiana,
  properties: { name: countriesNamesMessages.frenchGuiana },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-52.556425, 2.504705],
        [-52.939657, 2.124858],
        [-53.418465, 2.053389],
        [-53.554839, 2.334897],
        [-53.778521, 2.376703],
        [-54.088063, 2.105557],
        [-54.524754, 2.311849],
        [-54.27123, 2.738748],
        [-54.184284, 3.194172],
        [-54.011504, 3.62257],
        [-54.399542, 4.212611],
        [-54.478633, 4.896756],
        [-53.958045, 5.756548],
        [-53.618453, 5.646529],
        [-52.882141, 5.409851],
        [-51.823343, 4.565768],
        [-51.657797, 4.156232],
        [-52.249338, 3.241094],
        [-52.556425, 2.504705],
      ],
    ] as LatLngExpression[][],
  },
};