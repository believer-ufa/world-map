import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const TrinidadAndTobago: CountryData = {
  type: 'Feature',
  id: 'TTO',
  key: CountriesKeys.trinidadAndTobago,
  properties: { name: countriesNamesMessages.trinidadAndTobago },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-61.68, 10.76],
        [-61.105, 10.89],
        [-60.895, 10.855],
        [-60.935, 10.11],
        [-61.77, 10],
        [-61.95, 10.09],
        [-61.66, 10.365],
        [-61.68, 10.76],
      ],
    ] as LatLngExpression[][],
  },
};
