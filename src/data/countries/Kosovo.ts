import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Kosovo: CountryData = {
  type: 'Feature',
  id: 'CS-KM',
  key: CountriesKeys.kosovo,
  properties: { name: countriesNamesMessages.kosovo },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [20.76216, 42.05186],
        [20.71731, 41.84711],
        [20.59023, 41.85541],
        [20.52295, 42.21787],
        [20.28374, 42.32025],
        [20.0707, 42.58863],
        [20.25758, 42.81275],
        [20.49679, 42.88469],
        [20.63508, 43.21671],
        [20.81448, 43.27205],
        [20.95651, 43.13094],
        [21.143395, 43.068685],
        [21.27421, 42.90959],
        [21.43866, 42.86255],
        [21.63302, 42.67717],
        [21.77505, 42.6827],
        [21.66292, 42.43922],
        [21.54332, 42.32025],
        [21.576636, 42.245224],
        [21.3527, 42.2068],
        [20.76216, 42.05186],
      ],
    ] as LatLngExpression[][],
  },
};
