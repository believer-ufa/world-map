import {
  FC, memo, useState, SyntheticEvent, useMemo,
} from 'react';

import cn from 'classnames';
import { v1 as uuidv1 } from 'uuid';

import { IconCheckmark2 } from '@/uikit/Icon/icons/IconCheckmark2';
import { IconCloseSmall } from '@/uikit/Icon/icons/IconCloseSmall';
import { calcLabelLimit } from '../helpers';
import { CheckboxUiProps, CheckboxThemes } from '../types';
import classes from './CheckboxUiSwitchStyle.module.scss';

export const CheckboxUiSwitchStyle: FC<CheckboxUiProps> = memo(({
  label,
  checked = false,
  disabled,
  semi,
  onChange = () => undefined,
  onClick = () => undefined,
  isInvalid,
  name,
  classNameWrap,
  classNameLabel,
  classNameCheckboxCheckmark,
  labelClickDisabled,
  dataTestId,
  theme = CheckboxThemes.light,
  labelLimit,
  localState,
  withLabelTooltip = false,
  useSwitchStyle,
  ...rest
}) => {
  const [nameFor] = useState(name ?? uuidv1());

  const handleOnClick = (e: SyntheticEvent) => {
    if (labelClickDisabled) {
      e.preventDefault();
      onClick();
    }
  };

  const renderLabel = useMemo(() => {
    if (labelLimit && typeof label === 'string' && label.length > labelLimit) {
      return calcLabelLimit(label, labelLimit);
    }
    return label;
  }, [labelLimit, label]);

  return (
    <label
      className={cn(classes.checkbox, classNameWrap, {
        [classes.disabled]: disabled,
        [classes.checked]: checked,
      })}
      htmlFor={nameFor}
      data-testid={dataTestId}
    >
      <input
        id={nameFor}
        name={nameFor}
        checked={checked}
        type="checkbox"
        disabled={disabled}
        className={classes.input}
        onChange={(evt) => {
          if (!disabled) {
            onChange(evt.target.checked, evt);
          }
        }}
        {...rest}
      />
      <span className={classes.container}>
        <IconCheckmark2 width={8} height={8} className={classes.checkIcon} />
        <IconCloseSmall width={8} className={classes.closeIcon} />
        <span className={classes.round} />
      </span>
      <span
        className={cn(classes.label,
          classNameLabel,
          { [classes.invalid]: isInvalid },
          { [classes.disabled]: disabled })}
        data-testid="checkbox-label"
        onClick={handleOnClick}
      >
        {renderLabel}
      </span>
    </label>
  );
});
