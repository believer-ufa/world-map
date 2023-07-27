import { forwardRef, memo } from 'react';

import useFm from '@/hooks/useFm';

import classes from './[FTName | pascalcase].module.scss';

import messages from './messages';

import { <FTName | pascalcase>Props } from './types';

export const <FTName | pascalcase> = memo(forwardRef<HTMLDivElement, <FTName | pascalcase>Props>(({ className }, ref) => {
  const fm = useFm();
  return (
    <div ref={ref} className={classes.container}>
      {fm(messages.title)}
    </div>
  );
}));
