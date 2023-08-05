import { ReactNode, SyntheticEvent } from 'react';

export type flexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type flexJusifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between';
export type flexAlignItems = 'stretch' | 'baseline' | 'center' | 'flex-start' | 'flex-end';
export type flexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export interface BoxProps {
    container?: boolean;
    children?: ReactNode;
    direction?: flexDirection;
    justifyContent?: flexJusifyContent;
    wrap?: flexWrap;
    alignItems?: flexAlignItems;
    className?: string;
    title?: string;
    style?: any;
    onClick?: (event: SyntheticEvent) => void;
    'data-testid'?: string;
}
