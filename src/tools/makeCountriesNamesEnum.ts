import fs from 'fs-extra';

import camelCase from 'lodash.camelcase';

import { allCountries } from '../data/allCountries';

async function makeCountriesNamesEnum() {
  let finalMessagesFileContent = 'export enum CountriesNames {';

  allCountries.features.forEach((feature) => {
    const countryNameData = feature.properties.name;
    const countryName = (typeof countryNameData === 'object' ? countryNameData.defaultMessage : countryNameData) ?? '';

    if (typeof countryName === 'string') {
      finalMessagesFileContent += `\n  ${camelCase(countryName)} = '${camelCase(countryName)}',`;
    }
  });

  finalMessagesFileContent += '\n}\n';

  await fs.writeFile('./src/data/countries/types.ts', finalMessagesFileContent);
}

export default makeCountriesNamesEnum;
