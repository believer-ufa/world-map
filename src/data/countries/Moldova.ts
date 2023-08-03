import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Moldova = {
  type: 'Feature',
  id: 'MDA',
  key: CountriesKeys.moldova,
  properties: { name: countriesNamesMessages.moldova },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [26.619337, 48.220726],
        [26.857824, 48.368211],
        [27.522537, 48.467119],
        [28.259547, 48.155562],
        [28.670891, 48.118149],
        [29.122698, 47.849095],
        [29.050868, 47.510227],
        [29.415135, 47.346645],
        [29.559674, 46.928583],
        [29.908852, 46.674361],
        [29.83821, 46.525326],
        [30.024659, 46.423937],
        [29.759972, 46.349988],
        [29.170654, 46.379262],
        [29.072107, 46.517678],
        [28.862972, 46.437889],
        [28.933717, 46.25883],
        [28.659987, 45.939987],
        [28.485269, 45.596907],
        [28.233554, 45.488283],
        [28.054443, 45.944586],
        [28.160018, 46.371563],
        [28.12803, 46.810476],
        [27.551166, 47.405117],
        [27.233873, 47.826771],
        [26.924176, 48.123264],
        [26.619337, 48.220726],
      ],
    ] as LatLngExpression[][],
  },
};
