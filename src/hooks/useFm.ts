import { useCallback } from 'react';
import { useIntl, MessageDescriptor } from 'react-intl';
import { Options as IntlMessageFormatOptions } from 'intl-messageformat/src/core.d';
import { PrimitiveType } from 'intl-messageformat';

export type FM = (
  descriptor?: MessageDescriptor,
  values?: Record<string, PrimitiveType>,
  opts?: IntlMessageFormatOptions,
) => string

const useFm = (): { fm: FM } => {
  const { formatMessage: originalFm } = useIntl();

  const fm = useCallback((descriptor?: MessageDescriptor, values?: Record<string, PrimitiveType>): string => {
    if (typeof descriptor === 'object') {
      return originalFm(descriptor, values);
    }

    console.warn('You are using fm function without meaningful descriptor. Please fix it.');

    return '';
  }, [originalFm]);

  return { fm };
};

export default useFm;
