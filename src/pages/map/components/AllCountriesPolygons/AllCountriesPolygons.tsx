import { ReactNode, memo } from 'react';
import { allCountries } from '@/data/allCountries';

import { CountryPolygon } from '../CountryPolygon';

export interface AllCountriesPolygonsProps {
  className?: string;
  children?: ReactNode;
}

export const AllCountriesPolygons = memo<AllCountriesPolygonsProps>(() => {
  return (
    <>
      {allCountries.features.map((countryData) => (
        <CountryPolygon
          key={countryData.id}
          countryData={countryData}
        />
      ))}
    </>
  );
});
