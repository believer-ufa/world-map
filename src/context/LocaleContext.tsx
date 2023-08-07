import React, { useCallback, useContext, useMemo } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { LanguageCode } from '@/types/language';

interface LocaleContextProps {
  locale: LanguageCode;
  setLocale: (newLocale: LanguageCode) => void;
}

export const LocaleContext = React.createContext<LocaleContextProps>({
  locale: LanguageCode.En,
  setLocale: () => undefined,
});

export const LocaleContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale = LanguageCode.En, setLocaleLS] = useLocalStorage<LanguageCode>('locale', LanguageCode.En);

  const setLocale = useCallback((newLang: LanguageCode) => {
    setLocaleLS(newLang);
  }, [setLocaleLS]);

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
};

export const LocaleContextConsumer = LocaleContext.Consumer;

export const useLocaleContext = () => useContext(LocaleContext);
