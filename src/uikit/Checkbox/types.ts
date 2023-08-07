import { ReactNode, SyntheticEvent } from 'react';

export type CheckboxCheckedValues = Record<string, boolean>;

export interface CheckboxOption {
  value: string;
  label: string;
}

export enum CheckboxThemes {
  light = 'light',
  dark = 'dark'
}

export interface CheckboxUiProps {
  label?: ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean, event: SyntheticEvent) => void;
  onClick?: () => void;
  isInvalid?: boolean;
  name?: string;
  classNameWrap?: string;
  classNameLabel?: string;
  classNameCheckboxCheckmark?: string;
  dataTestId?: string;
  labelClickDisabled?: boolean;
  semi?: boolean;
  theme?: CheckboxThemes;
  labelLimit?: number;
  localState?: string;
  withLabelTooltip?: boolean;
  useSwitchStyle?: boolean;
  styleSmall?: boolean;
}

export interface CheckboxFormikProps extends CheckboxUiProps {
  name: string;
}

export interface CheckboxGroupProps {
  name: string;
  options: CheckboxOption[];
  label?: string;
  horizontal?: boolean;
  labelClassName?: string;
  groupClassName?: string;
  formGroupClassName?: string;
  dataTestId?: string;
  limit?: number;
  minChecked?: number;
  localState?: string;
  isMulti?: boolean;
  theme?: CheckboxThemes;
  classNameWrapCheckbox?: string;
  classNameLabelCheckbox?: string;
  classNameCheckboxGroupItem?: string;
  onChange?: (checked: boolean, event: SyntheticEvent) => void;
  withLabelTooltip?: boolean;
}
