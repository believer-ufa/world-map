/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * swap LatLngExpression array of coords, move them to opposite positions
 * @param coordsArray LatLngExpression[]
 * @returns
 */
export const swapCoords = (coordsArray: any) => {
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
