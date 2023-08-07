import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Iraq: CountryData = {
  type: 'Feature',
  id: 'IRQ',
  key: CountriesKeys.iraq,
  properties: { name: countriesNamesMessages.iraq },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [45.420618, 35.977546],
        [46.07634, 35.677383],
        [46.151788, 35.093259],
        [45.64846, 34.748138],
        [45.416691, 33.967798],
        [46.109362, 33.017287],
        [47.334661, 32.469155],
        [47.849204, 31.709176],
        [47.685286, 30.984853],
        [48.004698, 30.985137],
        [48.014568, 30.452457],
        [48.567971, 29.926778],
        [47.974519, 29.975819],
        [47.302622, 30.05907],
        [46.568713, 29.099025],
        [44.709499, 29.178891],
        [41.889981, 31.190009],
        [40.399994, 31.889992],
        [39.195468, 32.161009],
        [38.792341, 33.378686],
        [41.006159, 34.419372],
        [41.383965, 35.628317],
        [41.289707, 36.358815],
        [41.837064, 36.605854],
        [42.349591, 37.229873],
        [42.779126, 37.385264],
        [43.942259, 37.256228],
        [44.293452, 37.001514],
        [44.772699, 37.170445],
        [45.420618, 35.977546],
      ],
    ] as LatLngExpression[][],
  },
};
