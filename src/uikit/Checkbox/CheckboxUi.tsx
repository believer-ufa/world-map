import { FC, memo } from 'react';

import { CheckboxUiMain } from './CheckboxUiMain';
import { CheckboxUiSwitchStyle } from './CheckboxUiSwitchStyle';

import { CheckboxUiProps } from './types';

export const CheckboxUi: FC<CheckboxUiProps> = memo((props) => {
  if (props.useSwitchStyle) {
    return <CheckboxUiSwitchStyle {...props} />;
  }

  return <CheckboxUiMain {...props} />;
});
