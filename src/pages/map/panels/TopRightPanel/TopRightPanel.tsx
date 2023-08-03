import { ReactNode, memo } from 'react';
import cn from 'classnames';

import classes from './TopRightPanel.module.scss';
import { PanelPositionsClasses } from '../types';

export interface TopRightPanelProps {
  className?: string;
  children?: ReactNode;
}

export const TopRightPanel = memo<TopRightPanelProps>(({ className, children }) => {
  return (
    <div className={cn(classes.container, PanelPositionsClasses.TopRight, className)}>
      {children}
    </div>
  );
});
