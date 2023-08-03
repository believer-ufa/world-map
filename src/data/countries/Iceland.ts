import { LatLngExpression } from 'leaflet';
import { countriesNames } from '../messages';

export const Iceland = {
  type: 'Feature',
  id: 'ISL',
  properties: { name: countriesNames.iceland },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-14.508695, 66.455892],
        [-14.739637, 65.808748],
        [-13.609732, 65.126671],
        [-14.909834, 64.364082],
        [-17.794438, 63.678749],
        [-18.656246, 63.496383],
        [-19.972755, 63.643635],
        [-22.762972, 63.960179],
        [-21.778484, 64.402116],
        [-23.955044, 64.89113],
        [-22.184403, 65.084968],
        [-22.227423, 65.378594],
        [-24.326184, 65.611189],
        [-23.650515, 66.262519],
        [-22.134922, 66.410469],
        [-20.576284, 65.732112],
        [-19.056842, 66.276601],
        [-17.798624, 65.993853],
        [-16.167819, 66.526792],
        [-14.508695, 66.455892],
      ],
    ] as LatLngExpression[][],
  },
};
