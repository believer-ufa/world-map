import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Cambodia: CountryData = {
  type: 'Feature',
  id: 'KHM',
  key: CountriesKeys.cambodia,
  properties: { name: countriesNamesMessages.cambodia },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [103.49728, 10.632555],
        [103.09069, 11.153661],
        [102.584932, 12.186595],
        [102.348099, 13.394247],
        [102.988422, 14.225721],
        [104.281418, 14.416743],
        [105.218777, 14.273212],
        [106.043946, 13.881091],
        [106.496373, 14.570584],
        [107.382727, 14.202441],
        [107.614548, 13.535531],
        [107.491403, 12.337206],
        [105.810524, 11.567615],
        [106.24967, 10.961812],
        [105.199915, 10.88931],
        [104.334335, 10.486544],
        [103.49728, 10.632555],
      ],
    ] as LatLngExpression[][],
  },
};
