import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const NorthKorea: CountryData = {
  type: 'Feature',
  id: 'PRK',
  key: CountriesKeys.northKorea,
  properties: { name: countriesNamesMessages.northKorea },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [130.640016, 42.395009],
        [130.780007, 42.220007],
        [130.400031, 42.280004],
        [129.965949, 41.941368],
        [129.667362, 41.601104],
        [129.705189, 40.882828],
        [129.188115, 40.661808],
        [129.0104, 40.485436],
        [128.633368, 40.189847],
        [127.967414, 40.025413],
        [127.533436, 39.75685],
        [127.50212, 39.323931],
        [127.385434, 39.213472],
        [127.783343, 39.050898],
        [128.349716, 38.612243],
        [128.205746, 38.370397],
        [127.780035, 38.304536],
        [127.073309, 38.256115],
        [126.68372, 37.804773],
        [126.237339, 37.840378],
        [126.174759, 37.749686],
        [125.689104, 37.94001],
        [125.568439, 37.752089],
        [125.27533, 37.669071],
        [125.240087, 37.857224],
        [124.981033, 37.948821],
        [124.712161, 38.108346],
        [124.985994, 38.548474],
        [125.221949, 38.665857],
        [125.132859, 38.848559],
        [125.38659, 39.387958],
        [125.321116, 39.551385],
        [124.737482, 39.660344],
        [124.265625, 39.928493],
        [125.079942, 40.569824],
        [126.182045, 41.107336],
        [126.869083, 41.816569],
        [127.343783, 41.503152],
        [128.208433, 41.466772],
        [128.052215, 41.994285],
        [129.596669, 42.424982],
        [129.994267, 42.985387],
        [130.640016, 42.395009],
      ],
    ] as LatLngExpression[][],
  },
};
