import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Uruguay: CountryData = {
  type: 'Feature',
  id: 'URY',
  key: CountriesKeys.uruguay,
  properties: { name: countriesNamesMessages.uruguay },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-57.625133, -30.216295],
        [-56.976026, -30.109686],
        [-55.973245, -30.883076],
        [-55.60151, -30.853879],
        [-54.572452, -31.494511],
        [-53.787952, -32.047243],
        [-53.209589, -32.727666],
        [-53.650544, -33.202004],
        [-53.373662, -33.768378],
        [-53.806426, -34.396815],
        [-54.935866, -34.952647],
        [-55.67409, -34.752659],
        [-56.215297, -34.859836],
        [-57.139685, -34.430456],
        [-57.817861, -34.462547],
        [-58.427074, -33.909454],
        [-58.349611, -33.263189],
        [-58.132648, -33.040567],
        [-58.14244, -32.044504],
        [-57.874937, -31.016556],
        [-57.625133, -30.216295],
      ],
    ] as LatLngExpression[][],
  },
};
