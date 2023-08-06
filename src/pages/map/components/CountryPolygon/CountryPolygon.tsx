import { ReactNode, memo, useMemo } from 'react';
import { Polygon, Tooltip } from 'react-leaflet';
import { PathOptions } from 'leaflet';

// import cn from 'classnames';

import useFm from '@/hooks/useFm';
import { CountryData } from '@/data/types';

import { swapCoords } from '@/helpers/geo/swapCoords';

import classes from './CountryPolygon.module.scss';

export interface CountryPolygonProps {
  className?: string;
  countryData: CountryData;
  children?: ReactNode;
}

export const CountryPolygon = memo<CountryPolygonProps>(({ countryData }) => {
  const { fm } = useFm();

  const countryOptions = useMemo(() => ({
    color: 'green',
    weight: 1,
    opacity: 1,
  } as PathOptions), []);

  return (
    <Polygon
      key={countryData.id}
      pathOptions={countryOptions}
      positions={swapCoords(countryData.geometry.coordinates)}
    >
      <Tooltip
        direction="top"
        offset={[0, -3]}
        className={classes.tooltip}
        sticky
      >{fm(countryData.properties.name)}
      </Tooltip>
    </Polygon>
  );
});
