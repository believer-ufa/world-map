import { LatLngExpression } from 'leaflet';
import { countriesNames } from '../messages';

export const Djibouti = {
  type: 'Feature',
  id: 'DJI',
  properties: { name: countriesNames.djibouti },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [43.081226, 12.699639],
        [43.317852, 12.390148],
        [43.286381, 11.974928],
        [42.715874, 11.735641],
        [43.145305, 11.46204],
        [42.776852, 10.926879],
        [42.55493, 11.10511],
        [42.31414, 11.0342],
        [41.75557, 11.05091],
        [41.73959, 11.35511],
        [41.66176, 11.6312],
        [42, 12.1],
        [42.35156, 12.54223],
        [42.779642, 12.455416],
        [43.081226, 12.699639],
      ],
    ] as LatLngExpression[][],
  },
};
