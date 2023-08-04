import { useCallback } from 'react';

import useSearchParams from '@/hooks/useSearchParams';

type SetOpened = (value?: string) => void;

type UseDrawer = (props: {
  paramName: string,
  route?: string,
  defaultValue?: string
}) => [string, SetOpened];

export const useDrawer: UseDrawer = ({ paramName, defaultValue = '' }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const opened: string = searchParams.get(paramName) ?? defaultValue;

  const setOpenedForSearchParams = useCallback<SetOpened>((value) => {
    if (value) {
      searchParams.set(paramName, value);
      window.history.replaceState('', '', `?${searchParams.toString()}`);
      setSearchParams(new URLSearchParams(searchParams.toString()));
    } else {
      searchParams.delete(paramName);
      window.history.replaceState('', '', `?${searchParams.toString()}`);
      setSearchParams(new URLSearchParams(searchParams.toString()));
    }
  }, [paramName, searchParams, setSearchParams]);

  return [opened, setOpenedForSearchParams];
};
