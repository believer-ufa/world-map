import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Hungary: CountryData = {
  type: 'Feature',
  id: 'HUN',
  key: CountriesKeys.hungary,
  properties: { name: countriesNamesMessages.hungary },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [16.202298, 46.852386],
        [16.534268, 47.496171],
        [16.340584, 47.712902],
        [16.903754, 47.714866],
        [16.979667, 48.123497],
        [17.488473, 47.867466],
        [17.857133, 47.758429],
        [18.696513, 47.880954],
        [18.777025, 48.081768],
        [19.174365, 48.111379],
        [19.661364, 48.266615],
        [19.769471, 48.202691],
        [20.239054, 48.327567],
        [20.473562, 48.56285],
        [20.801294, 48.623854],
        [21.872236, 48.319971],
        [22.085608, 48.422264],
        [22.64082, 48.15024],
        [22.710531, 47.882194],
        [22.099768, 47.672439],
        [21.626515, 46.994238],
        [21.021952, 46.316088],
        [20.220192, 46.127469],
        [19.596045, 46.17173],
        [18.829838, 45.908878],
        [18.456062, 45.759481],
        [17.630066, 45.951769],
        [16.882515, 46.380632],
        [16.564808, 46.503751],
        [16.370505, 46.841327],
        [16.202298, 46.852386],
      ],
    ] as LatLngExpression[][],
  },
};