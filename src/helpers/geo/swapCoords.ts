/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { LatLngExpression } from 'leaflet';

/**
 * swap LatLngExpression array of coords, move them to opposite positions
 * @param coordsArray LatLngExpression[]
 * @returns
 */
export const swapCoords = (coordsArray: any): LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][] => {
  if (Array.isArray(coordsArray)) {
    return coordsArray.map((arr: any): any => {
      if (Array.isArray(arr)) {
        if (Array.isArray(arr[0])) {
          return swapCoords(arr);
        }

        return [arr[1], arr[0]];
      }

      return arr;
    });
  }

  return coordsArray;
};
