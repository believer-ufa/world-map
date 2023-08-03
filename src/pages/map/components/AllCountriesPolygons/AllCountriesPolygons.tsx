import { ReactNode, memo, useMemo } from 'react';
import { PathOptions } from 'leaflet';
import { Polygon, Tooltip } from 'react-leaflet';

import { swapCoords } from '@/helpers/geo/swapCoords';
import { allCountries } from '@/data/allCountries';

import useFm from '@/hooks/useFm';

import classes from './AllCountriesPolygons.module.scss';

export interface AllCountriesPolygonsProps {
  className?: string;
  children?: ReactNode;
}

export const AllCountriesPolygons = memo<AllCountriesPolygonsProps>(({ className }) => {
  const { fm } = useFm();

  const countryOptions = useMemo(() => ({
    color: 'green',
    weight: 1,
    opacity: 1,
  } as PathOptions), []);

  const franceOptions = useMemo(() => ({
    color: 'red',
    weight: 1,
    opacity: 1,
  } as PathOptions), []);

  return (
    <>
      {allCountries.features.map((countryData) => (
        <Polygon key={countryData.id} pathOptions={countryOptions} positions={swapCoords(countryData.geometry.coordinates)}>
          <Tooltip
            direction="top"
            offset={[0, -3]}
            className={classes.tooltip}
            sticky
          >{fm(countryData.properties.name)}
          </Tooltip>
        </Polygon>
      ))}
    </>
  );
});
