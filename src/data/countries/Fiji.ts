import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Fiji: CountryData = {
  type: 'Feature',
  id: 'FJI',
  key: CountriesKeys.fiji,
  properties: { name: countriesNamesMessages.fiji },
  geometry: {
    type: 'MultiPolygon',
    coordinates: [
      [
        [
          [178.3736, -17.33992],
          [178.71806, -17.62846],
          [178.55271, -18.15059],
          [177.93266, -18.28799],
          [177.38146, -18.16432],
          [177.28504, -17.72465],
          [177.67087, -17.38114],
          [178.12557, -17.50481],
          [178.3736, -17.33992],
        ],
      ],
      [
        [
          [179.364143, -16.801354],
          [178.725059, -17.012042],
          [178.596839, -16.63915],
          [179.096609, -16.433984],
          [179.413509, -16.379054],
          [180, -16.067133],
          [180, -16.555217],
          [179.364143, -16.801354],
        ],
      ],
      [
        [
          [-179.917369, -16.501783],
          [-180, -16.555217],
          [-180, -16.067133],
          [-179.79332, -16.020882],
          [-179.917369, -16.501783],
        ],
      ],
    ] as LatLngExpression[][][],
  },
};
