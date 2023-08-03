import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const UnitedArabEmirates = {
  type: 'Feature',
  id: 'ARE',
  key: CountriesKeys.unitedArabEmirates,
  properties: { name: countriesNamesMessages.unitedArabEmirates },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [51.579519, 24.245497],
        [51.757441, 24.294073],
        [51.794389, 24.019826],
        [52.577081, 24.177439],
        [53.404007, 24.151317],
        [54.008001, 24.121758],
        [54.693024, 24.797892],
        [55.439025, 25.439145],
        [56.070821, 26.055464],
        [56.261042, 25.714606],
        [56.396847, 24.924732],
        [55.886233, 24.920831],
        [55.804119, 24.269604],
        [55.981214, 24.130543],
        [55.528632, 23.933604],
        [55.525841, 23.524869],
        [55.234489, 23.110993],
        [55.208341, 22.70833],
        [55.006803, 22.496948],
        [52.000733, 23.001154],
        [51.617708, 24.014219],
        [51.579519, 24.245497],
      ],
    ] as LatLngExpression[][],
  },
};
