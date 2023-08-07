/* eslint-disable max-len */
import {
  forwardRef, memo, Ref, ForwardRefExoticComponent,
} from 'react';

import { CommonIconProps } from '@/uikit/Icon/types';

import cn from 'classnames';

import classes from './IconCloseSmall.module.scss';

export const IconCloseSmall: ForwardRefExoticComponent<CommonIconProps> = memo(forwardRef(({
  width = 11,
  height,
  className,
  ...props
}, ref: Ref<SVGSVGElement>) => {
  return (
    <svg
      ref={ref}
      viewBox="0 0 11 11"
      className={cn(classes.svg, className)}
      style={{ width: `${width}px`, height: `${height || width}px` }}
      data-name="icon-close-small"
      fill="currentColor"
      {...props}
    >
      <path clipRule="evenodd" d="M10.4727 2.62892C10.8633 2.2384 10.8633 1.60523 10.4727 1.21471C10.0822 0.824183 9.44904 0.824183 9.05852 1.21471L5.84369 4.42954L2.62898 1.21483C2.23846 0.824303 1.60529 0.824303 1.21477 1.21483C0.824244 1.60535 0.824244 2.23852 1.21477 2.62904L4.42948 5.84375L1.21477 9.05846C0.824247 9.44898 0.824247 10.0821 1.21477 10.4727C1.6053 10.8632 2.23846 10.8632 2.62898 10.4727L5.84369 7.25796L9.05852 10.4728C9.44904 10.8633 10.0822 10.8633 10.4727 10.4728C10.8633 10.0823 10.8633 9.4491 10.4727 9.05858L7.25791 5.84375L10.4727 2.62892Z" fill="currentColor" />
    </svg>
  );
}));
