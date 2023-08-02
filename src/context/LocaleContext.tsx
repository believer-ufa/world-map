import React, { useCallback, useContext, useMemo } from 'react';
import Cookies from 'js-cookie';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useUserContext } from '@/context/UserContext';

import { LanguageCode } from '@/gql/types';
import { MeDocument, useUpdateUserMutation } from '@/gql/schemas-generated/account';
import { LocaleContextProps } from './types';

export const LocaleContext = React.createContext<LocaleContextProps>({
  locale: LanguageCode.Ru,
  setLocale: () => {},
});

export const LocaleContextProvider = ({ children }) => {
  const langCookie = (Cookies.get('lang') || '') as LanguageCode;
  const { user } = useUserContext();

  const defaultLang = [LanguageCode.Ru, LanguageCode.En].includes(langCookie) ? langCookie : LanguageCode.En;
  const [localeLS = LanguageCode.En, setLocaleLS] = useLocalStorage<LanguageCode>('locale', defaultLang);

  const [updateUser] = useUpdateUserMutation({
    refetchQueries: [{ query: MeDocument }],
  });

  const setLocale = useCallback(async (val) => {
    await updateUser({ variables: { value: { language: val } } });
    setLocaleLS(val);
  }, [setLocaleLS, updateUser]);

  const locale = user?.language || localeLS;//user.me.language ||
  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
};

export const LocaleContextConsumer = LocaleContext.Consumer;

export const useLocaleContext = () => useContext(LocaleContext);
