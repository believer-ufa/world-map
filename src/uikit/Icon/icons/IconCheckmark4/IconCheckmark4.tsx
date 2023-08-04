import {
  forwardRef, memo, Ref, ForwardRefExoticComponent,
} from 'react';

import cn from 'classnames';
import { CommonIconProps } from '@/uikit/Icon/types';

import classes from './IconCheckmark4.module.scss';

export const IconCheckmark4: ForwardRefExoticComponent<CommonIconProps> = memo(forwardRef(({
  width = 13,
  height = 10,
  className,
  ...props
}, ref: Ref<SVGSVGElement>) => {
  return (
    <svg
      ref={ref}
      viewBox="0 0 13 10"
      className={cn(classes.svg, className)}
      style={{ width: `${width}px`, height: `${height || width}px` }}
      data-name="icon-checkmark4"
      fill="none"
      {...props}
    >
      <path d="M1 4.5L5.23077 8L12 1" strokeWidth="2" />
    </svg>
  );
}));
