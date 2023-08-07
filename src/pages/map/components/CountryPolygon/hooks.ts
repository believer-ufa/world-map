import { useMemo } from 'react';
import { PathOptions } from 'leaflet';
import { CountryData } from '@/data/types';
import { useDriverLicensesOption } from '@/hooks/useDriverLicensesOption';
import { GenevaConventionCountries } from '@/data/driverLicensesRequirements/genevaConventionCountries';
import { ViennaConventionCountries } from '@/data/driverLicensesRequirements/viennaConventionCountries';
import { DriverLicensesColors } from '@/data/driverLicensesRequirements/colors';
import { DriverLicenseConventions } from '@/data/driverLicensesRequirements/types';

export const useCountryCharacteristics = ({ countryData }: { countryData: CountryData }): PathOptions => {
  const [driverLicensesState] = useDriverLicensesOption();

  const color = useMemo(() => {
    if (driverLicensesState === 'true') {
      if (ViennaConventionCountries.includes(countryData.key)) {
        return DriverLicensesColors[DriverLicenseConventions.Vienna];
      }

      if (GenevaConventionCountries.includes(countryData.key)) {
        return DriverLicensesColors[DriverLicenseConventions.Geneva];
      }
    }

    return '#98ebe5';
  }, [countryData.key, driverLicensesState]);

  const countryOptions: PathOptions = useMemo(() => ({
    color,
    weight: 1,
    opacity: 1,
  }), [color]);

  return countryOptions;
};
