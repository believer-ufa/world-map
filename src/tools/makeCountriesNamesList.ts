import fs from 'fs-extra';

import { allCountries } from '../data/allCountries';

import camelCase from 'lodash.camelcase';

async function makeCountriesNamesList() {
  let finalMessagesFileContent = `import { defineMessages } from 'react-intl';`
  finalMessagesFileContent += '\n\n';
  finalMessagesFileContent += 'export const countriesNames = defineMessages({';

  allCountries.features.forEach(feature => {
    const countryNameData = feature.properties.name;
    const countryName = typeof countryNameData === 'object' ? countryNameData.defaultMessage : countryNameData;

    finalMessagesFileContent += `\n  ${camelCase(countryName)}: {
    id: 'CountriesNames.${camelCase(countryName)}',
    defaultMessage: '${countryName}',
  },`;
  });

  finalMessagesFileContent += '\n});\n';

  await fs.writeFile('./src/data/messages.ts', finalMessagesFileContent);
}

export default makeCountriesNamesList;
