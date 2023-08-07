/* eslint-disable max-len */
import {
  forwardRef, memo, Ref, ForwardRefExoticComponent,
} from 'react';

import { CommonIconProps } from '@/uikit/Icon/types';

import cn from 'classnames';

import classes from './IconCheckmark2.module.scss';

export const IconCheckmark2: ForwardRefExoticComponent<CommonIconProps> = memo(forwardRef(({
  width = 11,
  height = 8,
  className,
  ...props
}, ref: Ref<SVGSVGElement>) => {
  return (
    <svg
      ref={ref}
      viewBox="0 0 11 8"
      className={cn(classes.svg, className)}
      style={{ width: `${width}px`, height: `${height || width}px` }}
      data-name="icon-checkmark2"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M9.68524 0.25934C10.0948 0.630405 10.1256 1.26282 9.75411 1.67188L4.30498 7.67188C4.12099 7.87447 3.86194 7.99294 3.58818 7.9997C3.31441 8.00646 3.04982 7.90091 2.85603 7.70765L0.295724 5.15419C-0.0955547 4.76396 -0.096031 4.1308 0.29466 3.73998C0.685351 3.34916 1.31926 3.34869 1.71054 3.73892L3.52759 5.5511L8.27103 0.328135C8.64253 -0.0809241 9.2757 -0.111724 9.68524 0.25934Z" fill="currentColor" />
    </svg>
  );
}));
