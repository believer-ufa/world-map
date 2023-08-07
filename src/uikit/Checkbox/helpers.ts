export const calcLabelLimit = (label?: string, labelLimit?: number): string | undefined => {
  if (!labelLimit || !label) {
    return label;
  }
  return label.length > labelLimit ? `${label.slice(0, labelLimit - 1)}...` : label;
};
