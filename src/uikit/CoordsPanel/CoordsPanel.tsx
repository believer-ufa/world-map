import { memo, useCallback, useEffect, useState } from 'react';
import cn from 'classnames';

import { Map } from 'leaflet';
import classes from './CoordsPanel.module.scss';

export interface CoordsPanelProps {
  position?: 'bottomleft' | 'bottomright' | 'topleft' | 'topright';
  className?: string;
  map: Map;
}

const POSITION_CLASSES = {
  bottomleft: 'leaflet-bottom leaflet-left',
  bottomright: 'leaflet-bottom leaflet-right',
  topleft: 'leaflet-top leaflet-left',
  topright: 'leaflet-top leaflet-right',
};

export const CoordsPanel = memo<CoordsPanelProps>(({ position, className, map }) => {
  const [coords, setCoords] = useState(() => map.getCenter());
  const positionClass = (position && POSITION_CLASSES?.[position]) ?? POSITION_CLASSES.topright;

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
    <div className={cn(classes.container, positionClass, className)}>
      <div className={cn(classes.control, 'leaflet-control leaflet-bar')}>
        latitude: {' '} {coords.lat.toFixed(4)}, longitude: {' '} {coords.lng.toFixed(4)}
      </div>
    </div>
  );
});
