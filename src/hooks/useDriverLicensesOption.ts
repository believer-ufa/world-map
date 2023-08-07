import { useDrawer } from './useDrawer';

export const useDriverLicensesOption = () => {
  return useDrawer({ queryParamName: 'driverLicenses', defaultValue: 'false' });
};
