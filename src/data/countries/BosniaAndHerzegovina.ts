import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const BosniaAndHerzegovina: CountryData = {
  type: 'Feature',
  id: 'BIH',
  key: CountriesKeys.bosniaAndHerzegovina,
  properties: { name: countriesNamesMessages.bosniaAndHerzegovina },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [19.005486, 44.860234],
        [19.36803, 44.863],
        [19.11761, 44.42307],
        [19.59976, 44.03847],
        [19.454, 43.5681],
        [19.21852, 43.52384],
        [19.03165, 43.43253],
        [18.70648, 43.20011],
        [18.56, 42.65],
        [17.674922, 43.028563],
        [17.297373, 43.446341],
        [16.916156, 43.667722],
        [16.456443, 44.04124],
        [16.23966, 44.351143],
        [15.750026, 44.818712],
        [15.959367, 45.233777],
        [16.318157, 45.004127],
        [16.534939, 45.211608],
        [17.002146, 45.233777],
        [17.861783, 45.06774],
        [18.553214, 45.08159],
        [19.005486, 44.860234],
      ],
    ] as LatLngExpression[][],
  },
};
