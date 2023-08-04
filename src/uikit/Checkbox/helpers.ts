import { CheckboxCheckedValues, CheckboxOption } from './types';

export const getDisabledName = (value: CheckboxCheckedValues, options: CheckboxOption[], limit: number): string[] | undefined => {
  if (!value) {
    return undefined;
  }
  const keys = Object.keys(value).filter((item) => value[item]);
  const values = options.map((item) => item.value);

  return keys.length >= limit ? values.filter((el) => !keys.includes(el)) : undefined;
};

export const getDisabledValue = (
  value: CheckboxCheckedValues,
  options: CheckboxOption[],
  minChecked: number,
): string[] | undefined => {
  if (!value) {
    return undefined;
  }
  const keys = Object.keys(value).filter((item) => value[item]);

  return keys.length <= minChecked ? keys : undefined;
};

export const calcLabelLimit = (label?: string, labelLimit?: number): string | undefined => {
  if (!labelLimit || !label) {
    return label;
  }
  return label.length > labelLimit ? `${label.slice(0, labelLimit - 1)}...` : label;
};
