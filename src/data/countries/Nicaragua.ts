import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Nicaragua = {
  type: 'Feature',
  id: 'NIC',
  key: CountriesKeys.nicaragua,
  properties: { name: countriesNamesMessages.nicaragua },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-85.71254, 11.088445],
        [-86.058488, 11.403439],
        [-86.52585, 11.806877],
        [-86.745992, 12.143962],
        [-87.167516, 12.458258],
        [-87.668493, 12.90991],
        [-87.557467, 13.064552],
        [-87.392386, 12.914018],
        [-87.316654, 12.984686],
        [-87.005769, 13.025794],
        [-86.880557, 13.254204],
        [-86.733822, 13.263093],
        [-86.755087, 13.754845],
        [-86.520708, 13.778487],
        [-86.312142, 13.771356],
        [-86.096264, 14.038187],
        [-85.801295, 13.836055],
        [-85.698665, 13.960078],
        [-85.514413, 14.079012],
        [-85.165365, 14.35437],
        [-85.148751, 14.560197],
        [-85.052787, 14.551541],
        [-84.924501, 14.790493],
        [-84.820037, 14.819587],
        [-84.649582, 14.666805],
        [-84.449336, 14.621614],
        [-84.228342, 14.748764],
        [-83.975721, 14.749436],
        [-83.628585, 14.880074],
        [-83.489989, 15.016267],
        [-83.147219, 14.995829],
        [-83.233234, 14.899866],
        [-83.284162, 14.676624],
        [-83.182126, 14.310703],
        [-83.4125, 13.970078],
        [-83.519832, 13.567699],
        [-83.552207, 13.127054],
        [-83.498515, 12.869292],
        [-83.473323, 12.419087],
        [-83.626104, 12.32085],
        [-83.719613, 11.893124],
        [-83.650858, 11.629032],
        [-83.85547, 11.373311],
        [-83.808936, 11.103044],
        [-83.655612, 10.938764],
        [-83.895054, 10.726839],
        [-84.190179, 10.79345],
        [-84.355931, 10.999226],
        [-84.673069, 11.082657],
        [-84.903003, 10.952303],
        [-85.561852, 11.217119],
        [-85.71254, 11.088445],
      ],
    ] as LatLngExpression[][],
  },
};
