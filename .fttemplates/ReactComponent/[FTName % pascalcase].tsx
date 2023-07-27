import { ReactNode, memo } from 'react';
import cn from 'classnames';

import classes from './[FTName | pascalcase].module.scss';

export interface <FTName | pascalcase>Props {
  className?: string;
  children?: ReactNode;
}

export const <FTName | pascalcase> = memo<<FTName | pascalcase>Props>(({ className }) => {
  return (
    <div className={cn(classes.container, className)}>
      <FTName | pascalcase> component
    </div>
  );
});
