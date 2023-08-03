import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Portugal = {
  type: 'Feature',
  id: 'PRT',
  key: CountriesKeys.portugal,
  properties: { name: countriesNamesMessages.portugal },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-9.034818, 41.880571],
        [-8.671946, 42.134689],
        [-8.263857, 42.280469],
        [-8.013175, 41.790886],
        [-7.422513, 41.792075],
        [-7.251309, 41.918346],
        [-6.668606, 41.883387],
        [-6.389088, 41.381815],
        [-6.851127, 41.111083],
        [-6.86402, 40.330872],
        [-7.026413, 40.184524],
        [-7.066592, 39.711892],
        [-7.498632, 39.629571],
        [-7.098037, 39.030073],
        [-7.374092, 38.373059],
        [-7.029281, 38.075764],
        [-7.166508, 37.803894],
        [-7.537105, 37.428904],
        [-7.453726, 37.097788],
        [-7.855613, 36.838269],
        [-8.382816, 36.97888],
        [-8.898857, 36.868809],
        [-8.746101, 37.651346],
        [-8.839998, 38.266243],
        [-9.287464, 38.358486],
        [-9.526571, 38.737429],
        [-9.446989, 39.392066],
        [-9.048305, 39.755093],
        [-8.977353, 40.159306],
        [-8.768684, 40.760639],
        [-8.790853, 41.184334],
        [-8.990789, 41.543459],
        [-9.034818, 41.880571],
      ],
    ] as LatLngExpression[][],
  },
};
