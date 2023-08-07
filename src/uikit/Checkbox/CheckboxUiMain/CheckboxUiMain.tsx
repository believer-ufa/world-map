/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { FC, memo, useState, SyntheticEvent, useMemo } from 'react';
import { v1 as uuidv1 } from 'uuid';
import cn from 'classnames';

import { IconCheckmark4 } from '@/uikit/Icon/icons/IconCheckmark4';
import { calcLabelLimit } from '../helpers';
import { CheckboxUiProps, CheckboxThemes } from '../types';
import classes from './CheckboxUiMain.module.scss';

export const CheckboxUiMain: FC<CheckboxUiProps> = memo(({
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
  theme = CheckboxThemes.dark,
  labelLimit,
  localState,
  withLabelTooltip = false,
  useSwitchStyle,
  styleSmall,
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
        [classes.styleSmall]: styleSmall,
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
        className={classes.checkbox__control}
        onChange={(event: SyntheticEvent) => {
          if (!disabled) {
            onChange((event.target as any).checked, event);
          }
        }}
        {...rest}
      />
      <i className={cn(classes.checkbox__checkmark, classes[theme], classNameCheckboxCheckmark,
        { [classes.checkbox__checkmark_invalid]: isInvalid },
        { [classes.checkbox__checkmark_disabled]: disabled },
        { [classes.checkbox__checkmark_semi]: semi })}
      >
        <IconCheckmark4 width={styleSmall ? 9 : undefined} />
      </i>
      <span
        className={cn(classes.checkbox__label,
          classNameLabel,
          classes[theme],
          { [classes.checkbox__label_invalid]: isInvalid },
          { [classes.checkbox__label_disabled]: disabled },
          { [classes.checkbox__label_small]: styleSmall })}
        data-testid="checkbox-label"
        onClick={handleOnClick}
      >
        {renderLabel}
      </span>
    </label>
  );
});
