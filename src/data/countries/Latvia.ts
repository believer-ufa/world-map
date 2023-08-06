import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Latvia: CountryData = {
  type: 'Feature',
  id: 'LVA',
  key: CountriesKeys.latvia,
  properties: { name: countriesNamesMessages.latvia },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [21.0558, 56.031076],
        [21.090424, 56.783873],
        [21.581866, 57.411871],
        [22.524341, 57.753374],
        [23.318453, 57.006236],
        [24.12073, 57.025693],
        [24.312863, 57.793424],
        [25.164594, 57.970157],
        [25.60281, 57.847529],
        [26.463532, 57.476389],
        [27.288185, 57.474528],
        [27.770016, 57.244258],
        [27.855282, 56.759326],
        [28.176709, 56.16913],
        [27.10246, 55.783314],
        [26.494331, 55.615107],
        [25.533047, 56.100297],
        [25.000934, 56.164531],
        [24.860684, 56.372528],
        [23.878264, 56.273671],
        [22.201157, 56.337802],
        [21.0558, 56.031076],
      ],
    ] as LatLngExpression[][],
  },
};
