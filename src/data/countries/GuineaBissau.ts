import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const GuineaBissau = {
  type: 'Feature',
  id: 'GNB',
  key: CountriesKeys.guineaBissau,
  properties: { name: countriesNamesMessages.guineaBissau },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-15.130311, 11.040412],
        [-15.66418, 11.458474],
        [-16.085214, 11.524594],
        [-16.314787, 11.806515],
        [-16.308947, 11.958702],
        [-16.613838, 12.170911],
        [-16.677452, 12.384852],
        [-16.147717, 12.547762],
        [-15.816574, 12.515567],
        [-15.548477, 12.62817],
        [-13.700476, 12.586183],
        [-13.718744, 12.247186],
        [-13.828272, 12.142644],
        [-13.743161, 11.811269],
        [-13.9008, 11.678719],
        [-14.121406, 11.677117],
        [-14.382192, 11.509272],
        [-14.685687, 11.527824],
        [-15.130311, 11.040412],
      ],
    ] as LatLngExpression[][],
  },
};
