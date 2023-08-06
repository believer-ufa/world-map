import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Gambia: CountryData = {
  type: 'Feature',
  id: 'GMB',
  key: CountriesKeys.gambia,
  properties: { name: countriesNamesMessages.gambia },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-16.841525, 13.151394],
        [-16.713729, 13.594959],
        [-15.624596, 13.623587],
        [-15.39877, 13.860369],
        [-15.081735, 13.876492],
        [-14.687031, 13.630357],
        [-14.376714, 13.62568],
        [-14.046992, 13.794068],
        [-13.844963, 13.505042],
        [-14.277702, 13.280585],
        [-14.712197, 13.298207],
        [-15.141163, 13.509512],
        [-15.511813, 13.27857],
        [-15.691001, 13.270353],
        [-15.931296, 13.130284],
        [-16.841525, 13.151394],
      ],
    ] as LatLngExpression[][],
  },
};
