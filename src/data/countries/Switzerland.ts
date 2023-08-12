import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Switzerland: CountryData = {
  type: 'Feature',
  id: 'CHE',
  key: CountriesKeys.switzerland,
  properties: { name: countriesNamesMessages.switzerland },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [9.594226, 47.525058],
        [9.632932, 47.347601],
        [9.47997, 47.10281],
        [9.932448, 46.920728],
        [10.442701, 46.893546],
        [10.363378, 46.483571],
        [9.922837, 46.314899],
        [9.182882, 46.440215],
        [8.966306, 46.036932],
        [8.489952, 46.005151],
        [8.31663, 46.163642],
        [7.755992, 45.82449],
        [7.273851, 45.776948],
        [6.843593, 45.991147],
        [6.5001, 46.429673],
        [6.022609, 46.27299],
        [6.037389, 46.725779],
        [6.768714, 47.287708],
        [6.736571, 47.541801],
        [7.192202, 47.449766],
        [7.466759, 47.620582],
        [8.317301, 47.61358],
        [8.522612, 47.830828],
        [9.594226, 47.525058],
      ],
    ] as LatLngExpression[][],
  },
};