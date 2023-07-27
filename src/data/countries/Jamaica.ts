import { LatLngExpression } from 'leaflet';

export const Jamaica = {
  type: 'Feature',
  id: 'JAM',
  properties: { name: 'Jamaica' },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-77.569601, 18.490525],
        [-76.896619, 18.400867],
        [-76.365359, 18.160701],
        [-76.199659, 17.886867],
        [-76.902561, 17.868238],
        [-77.206341, 17.701116],
        [-77.766023, 17.861597],
        [-78.337719, 18.225968],
        [-78.217727, 18.454533],
        [-77.797365, 18.524218],
        [-77.569601, 18.490525],
      ],
    ] as LatLngExpression[][],
  },
};
