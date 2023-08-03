import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys } from './types';

export const SierraLeone = {
  type: 'Feature',
  id: 'SLE',
  key: CountriesKeys.sierraLeone,
  properties: { name: countriesNamesMessages.sierraLeone },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-11.438779, 6.785917],
        [-11.708195, 6.860098],
        [-12.428099, 7.262942],
        [-12.949049, 7.798646],
        [-13.124025, 8.163946],
        [-13.24655, 8.903049],
        [-12.711958, 9.342712],
        [-12.596719, 9.620188],
        [-12.425929, 9.835834],
        [-12.150338, 9.858572],
        [-11.917277, 10.046984],
        [-11.117481, 10.045873],
        [-10.839152, 9.688246],
        [-10.622395, 9.26791],
        [-10.65477, 8.977178],
        [-10.494315, 8.715541],
        [-10.505477, 8.348896],
        [-10.230094, 8.406206],
        [-10.695595, 7.939464],
        [-11.146704, 7.396706],
        [-11.199802, 7.105846],
        [-11.438779, 6.785917],
      ],
    ] as LatLngExpression[][],
  },
};
