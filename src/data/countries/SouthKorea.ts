import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const SouthKorea: CountryData = {
  type: 'Feature',
  id: 'KOR',
  key: CountriesKeys.southKorea,
  properties: { name: countriesNamesMessages.southKorea },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [128.349716, 38.612243],
        [129.21292, 37.432392],
        [129.46045, 36.784189],
        [129.468304, 35.632141],
        [129.091377, 35.082484],
        [128.18585, 34.890377],
        [127.386519, 34.475674],
        [126.485748, 34.390046],
        [126.37392, 34.93456],
        [126.559231, 35.684541],
        [126.117398, 36.725485],
        [126.860143, 36.893924],
        [126.174759, 37.749686],
        [126.237339, 37.840378],
        [126.68372, 37.804773],
        [127.073309, 38.256115],
        [127.780035, 38.304536],
        [128.205746, 38.370397],
        [128.349716, 38.612243],
      ],
    ] as LatLngExpression[][],
  },
};
