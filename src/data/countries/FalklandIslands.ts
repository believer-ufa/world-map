import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const FalklandIslands: CountryData = {
  type: 'Feature',
  id: 'FLK',
  key: CountriesKeys.falklandIslands,
  properties: { name: countriesNamesMessages.falklandIslands },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-61.2, -51.85],
        [-60, -51.25],
        [-59.15, -51.5],
        [-58.55, -51.1],
        [-57.75, -51.55],
        [-58.05, -51.9],
        [-59.4, -52.2],
        [-59.85, -51.85],
        [-60.7, -52.3],
        [-61.2, -51.85],
      ],
    ] as LatLngExpression[][],
  },
};
