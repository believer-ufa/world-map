import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const DominicanRepublic = {
  type: 'Feature',
  id: 'DOM',
  key: CountriesKeys.dominicanRepublic,
  properties: { name: countriesNamesMessages.dominicanRepublic },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-71.712361, 19.714456],
        [-71.587304, 19.884911],
        [-70.806706, 19.880286],
        [-70.214365, 19.622885],
        [-69.950815, 19.648],
        [-69.76925, 19.293267],
        [-69.222126, 19.313214],
        [-69.254346, 19.015196],
        [-68.809412, 18.979074],
        [-68.317943, 18.612198],
        [-68.689316, 18.205142],
        [-69.164946, 18.422648],
        [-69.623988, 18.380713],
        [-69.952934, 18.428307],
        [-70.133233, 18.245915],
        [-70.517137, 18.184291],
        [-70.669298, 18.426886],
        [-70.99995, 18.283329],
        [-71.40021, 17.598564],
        [-71.657662, 17.757573],
        [-71.708305, 18.044997],
        [-71.687738, 18.31666],
        [-71.945112, 18.6169],
        [-71.701303, 18.785417],
        [-71.624873, 19.169838],
        [-71.712361, 19.714456],
      ],
    ] as LatLngExpression[][],
  },
};
