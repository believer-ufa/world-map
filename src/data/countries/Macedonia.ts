import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Macedonia: CountryData = {
  type: 'Feature',
  id: 'MKD',
  key: CountriesKeys.macedonia,
  properties: { name: countriesNamesMessages.macedonia },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [20.59023, 41.85541],
        [20.71731, 41.84711],
        [20.76216, 42.05186],
        [21.3527, 42.2068],
        [21.576636, 42.245224],
        [21.91708, 42.30364],
        [22.380526, 42.32026],
        [22.881374, 41.999297],
        [22.952377, 41.337994],
        [22.76177, 41.3048],
        [22.597308, 41.130487],
        [22.055378, 41.149866],
        [21.674161, 40.931275],
        [21.02004, 40.842727],
        [20.60518, 41.08622],
        [20.46315, 41.51509],
        [20.59023, 41.85541],
      ],
    ] as LatLngExpression[][],
  },
};