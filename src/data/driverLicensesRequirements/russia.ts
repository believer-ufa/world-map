import { ViennaConventionCountries } from './viennaConventionCountries';
import { GenevaConventionCountries } from './genevaConventionCountries';
import { DriverLicensesTypes } from './types';

export const russiaDriverLicensesRequirements = [
  ...GenevaConventionCountries.map((countryKey) => ({
    country: countryKey,
    requirement: DriverLicensesTypes.national,
  })),
  ...ViennaConventionCountries.map((countryKey) => ({
    country: countryKey,
    requirement: DriverLicensesTypes.international,
  })),
];
