import { memo } from 'react';
import cn from 'classnames';

import useFm from '@/hooks/useFm';

import classes from './[FTName | pascalcase].module.scss';

import messages from './messages';

import { <FTName | pascalcase>Props } from './types';

export const <FTName | pascalcase> = memo<<FTName | pascalcase>Props>(({ className }) => {
  const fm = useFm();
  return (
    <div className={cn(classes.container, className)}>
      {fm(messages.title)}
    </div>
  );
});
