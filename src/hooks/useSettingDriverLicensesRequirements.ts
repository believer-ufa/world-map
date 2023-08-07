import { DriverLicensesTypes } from '@/data/driverLicensesRequirements/types';
import { useLocalStorage } from './useLocalStorage';

export const useSettingDriverLicensesRequirements = () => {
  return useLocalStorage<DriverLicensesTypes | undefined>('DRIVER_LICENSES_REQUIREMENTS');
};
