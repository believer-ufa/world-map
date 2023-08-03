/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { allCountries } from '../data/allCountries';

function makeCountriesNamesList() {
  console.info({ allCountries: allCountries.features });
}

export default makeCountriesNamesList;
