import { ReactNode, memo, useMemo } from 'react';
import { Polygon, Tooltip } from 'react-leaflet';
import { PathOptions } from 'leaflet';

// import cn from 'classnames';

import useFm from '@/hooks/useFm';
import { CountryData } from '@/data/types';

import { swapCoords } from '@/helpers/geo/swapCoords';

import classes from './CountryPolygon.module.scss';
import { useCountryCharacteristics } from './hooks';

export interface CountryPolygonProps {
  className?: string;
  countryData: CountryData;
  children?: ReactNode;
}

export const CountryPolygon = memo<CountryPolygonProps>(({ countryData }) => {
  const { fm } = useFm();
  const countryCharacteristics = useCountryCharacteristics({ countryData });

  return (
    <Polygon
      key={countryData.id}
      pathOptions={countryCharacteristics}
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
