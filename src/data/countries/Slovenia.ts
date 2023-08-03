import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Slovenia = {
  type: 'Feature',
  id: 'SVN',
  key: CountriesKeys.slovenia,
  properties: { name: countriesNamesMessages.slovenia },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [13.806475, 46.509306],
        [14.632472, 46.431817],
        [15.137092, 46.658703],
        [16.011664, 46.683611],
        [16.202298, 46.852386],
        [16.370505, 46.841327],
        [16.564808, 46.503751],
        [15.768733, 46.238108],
        [15.67153, 45.834154],
        [15.323954, 45.731783],
        [15.327675, 45.452316],
        [14.935244, 45.471695],
        [14.595109, 45.634941],
        [14.411968, 45.466166],
        [13.71506, 45.500324],
        [13.93763, 45.591016],
        [13.69811, 46.016778],
        [13.806475, 46.509306],
      ],
    ] as LatLngExpression[][],
  },
};
