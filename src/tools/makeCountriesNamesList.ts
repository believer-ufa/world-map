import fs from 'fs-extra';

import camelCase from 'lodash.camelcase';

import { allCountries } from '../data/allCountries';

async function makeCountriesNamesList() {
  let finalMessagesFileContent = 'import { defineMessages } from \'react-intl\';';
  finalMessagesFileContent += '\n\n';
  finalMessagesFileContent += 'export const countriesNamesMessages = defineMessages({';

  allCountries.features.forEach((feature) => {
    const countryNameData = feature.properties.name;
    const countryName = typeof countryNameData === 'object' ? countryNameData.defaultMessage : countryNameData;

    if (typeof countryName === 'string') {
      finalMessagesFileContent += `\n  ${camelCase(countryName)}: {
    id: 'CountriesNames.${camelCase(countryName)}',
    defaultMessage: '${countryName}',
  },`;
    }
  });

  finalMessagesFileContent += '\n});\n';

  await fs.writeFile('./src/data/messages.ts', finalMessagesFileContent);
}

export default makeCountriesNamesList;
