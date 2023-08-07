import { useCallback } from 'react';
import { useNavigate, generatePath, useNavigation, useParams } from 'react-router-dom';

import useSearchParams from '@/hooks/useSearchParams';

type SetOpened = (value?: string, options?: any) => void;

type UseDrawer = (props: {
  queryParamName: string,
  route?: string,
  defaultValue?: string
}) => [string, SetOpened];

export const useDrawer: UseDrawer = ({ queryParamName, route = '', defaultValue = '' }) => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const searchParams = useSearchParams();
  const params = useParams();
  const opened: string = (route ? params[queryParamName] : searchParams.get(queryParamName)) ?? defaultValue;

  const setOpenedForRoute = useCallback<SetOpened>((value, { clearSearch } = {}) => {
    navigate({
      ...navigation.location,
      ...(clearSearch ? { search: '' } : {}),
      pathname: generatePath(route, { ...params, [queryParamName]: value || undefined }),
    });
  }, [navigate, navigation.location, route, params, queryParamName]);

  const setOpenedForSearchParams = useCallback<SetOpened>((value) => {
    if (value) {
      searchParams.set(queryParamName, value);
    } else {
      searchParams.delete(queryParamName);
    }

    navigate({
      ...navigation.location,
      search: searchParams.toString(),
    });
  }, [navigate, navigation.location, queryParamName, searchParams]);

  return [opened, route ? setOpenedForRoute : setOpenedForSearchParams];
};
