import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Belarus = {
  type: 'Feature',
  id: 'BLR',
  key: CountriesKeys.belarus,
  properties: { name: countriesNamesMessages.belarus },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [23.484128, 53.912498],
        [24.450684, 53.905702],
        [25.536354, 54.282423],
        [25.768433, 54.846963],
        [26.588279, 55.167176],
        [26.494331, 55.615107],
        [27.10246, 55.783314],
        [28.176709, 56.16913],
        [29.229513, 55.918344],
        [29.371572, 55.670091],
        [29.896294, 55.789463],
        [30.873909, 55.550976],
        [30.971836, 55.081548],
        [30.757534, 54.811771],
        [31.384472, 54.157056],
        [31.791424, 53.974639],
        [31.731273, 53.794029],
        [32.405599, 53.618045],
        [32.693643, 53.351421],
        [32.304519, 53.132726],
        [31.497644, 53.167427],
        [31.305201, 53.073996],
        [31.540018, 52.742052],
        [31.785998, 52.101678],
        [30.927549, 52.042353],
        [30.619454, 51.822806],
        [30.555117, 51.319503],
        [30.157364, 51.416138],
        [29.254938, 51.368234],
        [28.992835, 51.602044],
        [28.617613, 51.427714],
        [28.241615, 51.572227],
        [27.454066, 51.592303],
        [26.337959, 51.832289],
        [25.327788, 51.910656],
        [24.553106, 51.888461],
        [24.005078, 51.617444],
        [23.527071, 51.578454],
        [23.508002, 52.023647],
        [23.199494, 52.486977],
        [23.799199, 52.691099],
        [23.804935, 53.089731],
        [23.527536, 53.470122],
        [23.484128, 53.912498],
      ],
    ] as LatLngExpression[][],
  },
};
