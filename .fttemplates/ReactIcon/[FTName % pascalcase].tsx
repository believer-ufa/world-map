/* eslint-disable max-len */
import {
  forwardRef, memo, Ref, ForwardRefExoticComponent,
} from 'react';

import { CommonIconProps } from '@/uikit/Icon/types';

import cn from 'classnames';

import classes from './[FTName | pascalcase].module.scss';

export const <FTName | pascalcase>: ForwardRefExoticComponent<CommonIconProps> = memo(forwardRef(({
  width = 16,
  height,
  className,
  ...props
}, ref: Ref<SVGSVGElement>) => {
  return (
    <svg
      ref={ref}
      viewBox="0 0 16 16"
      className={cn(classes.svg, className)}
      style={{ width: `${width}px`, height: `${height || width}px` }}
      data-name="<FTName | kebabcase>"
      fill="none"
      {...props}
    >
      <path d="M15.999 14.545c3.615 0 6.545-2.931 6.545-6.545s-2.93-6.545-6.545-6.545c-3.615 0-6.545 2.931-6.545 6.545s2.931 6.545 6.545 6.545zM4.51 27.641c0.587-5.331 3.147-10.187 11.489-10.187s10.902 4.856 11.489 10.187c0.176 1.597-1.155 2.904-2.761 2.904h-17.455c-1.607 0-2.937-1.307-2.761-2.904z" />
    </svg>
  );
}));
