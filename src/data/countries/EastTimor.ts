import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const EastTimor: CountryData = {
  type: 'Feature',
  id: 'TLS',
  key: CountriesKeys.eastTimor,
  properties: { name: countriesNamesMessages.eastTimor },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [124.968682, -8.89279],
        [125.086246, -8.656887],
        [125.947072, -8.432095],
        [126.644704, -8.398247],
        [126.957243, -8.273345],
        [127.335928, -8.397317],
        [126.967992, -8.668256],
        [125.925885, -9.106007],
        [125.08852, -9.393173],
        [125.07002, -9.089987],
        [124.968682, -8.89279],
      ],
    ] as LatLngExpression[][],
  },
};
