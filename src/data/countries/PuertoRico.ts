import { LatLngExpression } from 'leaflet';
import { countriesNames } from '../messages';

export const PuertoRico = {
  type: 'Feature',
  id: 'PRI',
  properties: { name: countriesNames.puertoRico },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-66.282434, 18.514762],
        [-65.771303, 18.426679],
        [-65.591004, 18.228035],
        [-65.847164, 17.975906],
        [-66.599934, 17.981823],
        [-67.184162, 17.946553],
        [-67.242428, 18.37446],
        [-67.100679, 18.520601],
        [-66.282434, 18.514762],
      ],
    ] as LatLngExpression[][],
  },
};
