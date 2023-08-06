import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Ghana: CountryData = {
  type: 'Feature',
  id: 'GHA',
  key: CountriesKeys.ghana,
  properties: { name: countriesNamesMessages.ghana },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [1.060122, 5.928837],
        [-0.507638, 5.343473],
        [-1.063625, 5.000548],
        [-1.964707, 4.710462],
        [-2.856125, 4.994476],
        [-2.810701, 5.389051],
        [-3.24437, 6.250472],
        [-2.983585, 7.379705],
        [-2.56219, 8.219628],
        [-2.827496, 9.642461],
        [-2.963896, 10.395335],
        [-2.940409, 10.96269],
        [-1.203358, 11.009819],
        [-0.761576, 10.93693],
        [-0.438702, 11.098341],
        [0.023803, 11.018682],
        [-0.049785, 10.706918],
        [0.36758, 10.191213],
        [0.365901, 9.465004],
        [0.461192, 8.677223],
        [0.712029, 8.312465],
        [0.490957, 7.411744],
        [0.570384, 6.914359],
        [0.836931, 6.279979],
        [1.060122, 5.928837],
      ],
    ] as LatLngExpression[][],
  },
};
