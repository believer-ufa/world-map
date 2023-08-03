import { LatLngExpression } from 'leaflet';
import { countriesNames } from '../messages';

export const Liberia = {
  type: 'Feature',
  id: 'LBR',
  properties: { name: countriesNames.liberia },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-7.712159, 4.364566],
        [-7.974107, 4.355755],
        [-9.004794, 4.832419],
        [-9.91342, 5.593561],
        [-10.765384, 6.140711],
        [-11.438779, 6.785917],
        [-11.199802, 7.105846],
        [-11.146704, 7.396706],
        [-10.695595, 7.939464],
        [-10.230094, 8.406206],
        [-10.016567, 8.428504],
        [-9.755342, 8.541055],
        [-9.33728, 7.928534],
        [-9.403348, 7.526905],
        [-9.208786, 7.313921],
        [-8.926065, 7.309037],
        [-8.722124, 7.711674],
        [-8.439298, 7.686043],
        [-8.485446, 7.395208],
        [-8.385452, 6.911801],
        [-8.60288, 6.467564],
        [-8.311348, 6.193033],
        [-7.993693, 6.12619],
        [-7.570153, 5.707352],
        [-7.539715, 5.313345],
        [-7.635368, 5.188159],
        [-7.712159, 4.364566],
      ],
    ] as LatLngExpression[][],
  },
};
