import { memo, useCallback, useEffect, useState } from 'react';
import cn from 'classnames';

import { Map } from 'leaflet';
import useFm from '@/hooks/useFm';
import classes from './CoordinatesWidget.module.scss';

import { coordinatesWidgetMessages } from './messages';

export interface CoordinatesWidgetProps {
  position?: 'bottomleft' | 'bottomright' | 'topleft' | 'topright';
  className?: string;
  map: Map;
}

export const CoordinatesWidget = memo<CoordinatesWidgetProps>(({ map }) => {
  const { fm } = useFm();
  const [coords, setCoords] = useState(() => map.getCenter());

  const onMove = useCallback(() => {
    setCoords(map.getCenter());
  }, [map]);

  useEffect(() => {
    map.on('move', onMove);
    return () => {
      map.off('move', onMove);
    };
  }, [map, onMove]);

  return (
    <div className={cn(classes.control, 'leaflet-control leaflet-bar')}>
      {fm(coordinatesWidgetMessages.latitude)}: {' '} {coords.lat.toFixed(4)},&nbsp;
      {fm(coordinatesWidgetMessages.longitude)}: {' '} {coords.lng.toFixed(4)}
    </div>
  );
});
