import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Uganda: CountryData = {
  type: 'Feature',
  id: 'UGA',
  key: CountriesKeys.uganda,
  properties: { name: countriesNamesMessages.uganda },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [31.86617, -1.02736],
        [30.76986, -1.01455],
        [30.419105, -1.134659],
        [29.821519, -1.443322],
        [29.579466, -1.341313],
        [29.587838, -0.587406],
        [29.8195, -0.2053],
        [29.875779, 0.59738],
        [30.086154, 1.062313],
        [30.468508, 1.583805],
        [30.85267, 1.849396],
        [31.174149, 2.204465],
        [30.77332, 2.33989],
        [30.83385, 3.50917],
        [31.24556, 3.7819],
        [31.88145, 3.55827],
        [32.68642, 3.79232],
        [33.39, 3.79],
        [34.005, 4.249885],
        [34.47913, 3.5556],
        [34.59607, 3.05374],
        [35.03599, 1.90584],
        [34.6721, 1.17694],
        [34.18, 0.515],
        [33.893569, 0.109814],
        [33.903711, -0.95],
        [31.86617, -1.02736],
      ],
    ] as LatLngExpression[][],
  },
};
