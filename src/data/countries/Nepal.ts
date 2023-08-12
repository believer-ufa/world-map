import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Nepal: CountryData = {
  type: 'Feature',
  id: 'NPL',
  key: CountriesKeys.nepal,
  properties: { name: countriesNamesMessages.nepal },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [88.120441, 27.876542],
        [88.043133, 27.445819],
        [88.174804, 26.810405],
        [88.060238, 26.414615],
        [87.227472, 26.397898],
        [86.024393, 26.630985],
        [85.251779, 26.726198],
        [84.675018, 27.234901],
        [83.304249, 27.364506],
        [81.999987, 27.925479],
        [81.057203, 28.416095],
        [80.088425, 28.79447],
        [80.476721, 29.729865],
        [81.111256, 30.183481],
        [81.525804, 30.422717],
        [82.327513, 30.115268],
        [83.337115, 29.463732],
        [83.898993, 29.320226],
        [84.23458, 28.839894],
        [85.011638, 28.642774],
        [85.82332, 28.203576],
        [86.954517, 27.974262],
        [88.120441, 27.876542],
      ],
    ] as LatLngExpression[][],
  },
};