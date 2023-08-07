import { ReactNode, memo } from 'react';
import cn from 'classnames';

import useFm from '@/hooks/useFm';
import { <FTName | camelcase>Messages as messages } from './messages';

import classes from './[FTName | pascalcase].module.scss';

export interface <FTName | pascalcase>Props {
  className?: string;
  children?: ReactNode;
}

export const <FTName | pascalcase> = memo<<FTName | pascalcase>Props>(({ className }) => {
  const { fm } = useFm();
  return (
    <div className={cn(classes.container, className)}>
      {fm(messages.title)}
    </div>
  );
});
