import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const Myanmar = {
  type: 'Feature',
  id: 'MMR',
  key: CountriesKeys.myanmar,
  properties: { name: countriesNamesMessages.myanmar },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [99.543309, 20.186598],
        [98.959676, 19.752981],
        [98.253724, 19.708203],
        [97.797783, 18.62708],
        [97.375896, 18.445438],
        [97.859123, 17.567946],
        [98.493761, 16.837836],
        [98.903348, 16.177824],
        [98.537376, 15.308497],
        [98.192074, 15.123703],
        [98.430819, 14.622028],
        [99.097755, 13.827503],
        [99.212012, 13.269294],
        [99.196354, 12.804748],
        [99.587286, 11.892763],
        [99.038121, 10.960546],
        [98.553551, 9.93296],
        [98.457174, 10.675266],
        [98.764546, 11.441292],
        [98.428339, 12.032987],
        [98.509574, 13.122378],
        [98.103604, 13.64046],
        [97.777732, 14.837286],
        [97.597072, 16.100568],
        [97.16454, 16.928734],
        [96.505769, 16.427241],
        [95.369352, 15.71439],
        [94.808405, 15.803454],
        [94.188804, 16.037936],
        [94.533486, 17.27724],
        [94.324817, 18.213514],
        [93.540988, 19.366493],
        [93.663255, 19.726962],
        [93.078278, 19.855145],
        [92.368554, 20.670883],
        [92.303234, 21.475485],
        [92.652257, 21.324048],
        [92.672721, 22.041239],
        [93.166128, 22.27846],
        [93.060294, 22.703111],
        [93.286327, 23.043658],
        [93.325188, 24.078556],
        [94.106742, 23.850741],
        [94.552658, 24.675238],
        [94.603249, 25.162495],
        [95.155153, 26.001307],
        [95.124768, 26.573572],
        [96.419366, 27.264589],
        [97.133999, 27.083774],
        [97.051989, 27.699059],
        [97.402561, 27.882536],
        [97.327114, 28.261583],
        [97.911988, 28.335945],
        [98.246231, 27.747221],
        [98.68269, 27.508812],
        [98.712094, 26.743536],
        [98.671838, 25.918703],
        [97.724609, 25.083637],
        [97.60472, 23.897405],
        [98.660262, 24.063286],
        [98.898749, 23.142722],
        [99.531992, 22.949039],
        [99.240899, 22.118314],
        [99.983489, 21.742937],
        [100.416538, 21.558839],
        [101.150033, 21.849984],
        [101.180005, 21.436573],
        [100.329101, 20.786122],
        [100.115988, 20.41785],
        [99.543309, 20.186598],
      ],
    ] as LatLngExpression[][],
  },
};
