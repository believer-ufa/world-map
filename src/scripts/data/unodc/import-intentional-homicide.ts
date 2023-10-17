import fs from 'fs';

import { parse } from 'csv-parse';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

enum CSVColumnsIndexes {
  iso3_code = 0,
  country = 1,
  region = 2,
  subregion = 3,
  indicator = 4,
  dimension = 5,
  category = 6,
  sex = 7,
  age = 8,
  year = 9,
  unitOfMeasurement = 10,
  value = 11,
  source = 12,
}

export const ColumnCodes: Record<CSVColumnsIndexes, string> = {
  [CSVColumnsIndexes.iso3_code]: 'iso3_code',
  [CSVColumnsIndexes.country]: 'country',
  [CSVColumnsIndexes.region]: 'region',
  [CSVColumnsIndexes.subregion]: 'subregion',
  [CSVColumnsIndexes.indicator]: 'indicator',
  [CSVColumnsIndexes.dimension]: 'dimension',
  [CSVColumnsIndexes.category]: 'category',
  [CSVColumnsIndexes.sex]: 'sex',
  [CSVColumnsIndexes.age]: 'age',
  [CSVColumnsIndexes.year]: 'year',
  [CSVColumnsIndexes.unitOfMeasurement]: 'unitOfMeasurement',
  [CSVColumnsIndexes.value]: 'value',
  [CSVColumnsIndexes.source]: 'source',
};

async function importIntentionalHomicide() {
  const db = await open({
    filename: './src/data/database.db',
    driver: sqlite3.Database,
  });

  await db.exec('DROP TABLE migration');
  await db.exec(`
    CREATE TABLE unodc_intentional_homicide_2023_06
    (
      ${ColumnCodes[CSVColumnsIndexes.iso3_code]} VARCHAR(20),
      ${ColumnCodes[CSVColumnsIndexes.country]} VARCHAR(100),
      ${ColumnCodes[CSVColumnsIndexes.region]} VARCHAR(50),
      ${ColumnCodes[CSVColumnsIndexes.subregion]} VARCHAR(50),
      ${ColumnCodes[CSVColumnsIndexes.indicator]} VARCHAR(100),
      ${ColumnCodes[CSVColumnsIndexes.dimension]} VARCHAR(50),
      ${ColumnCodes[CSVColumnsIndexes.category]} VARCHAR(80),
      ${ColumnCodes[CSVColumnsIndexes.sex]} VARCHAR(10),
      ${ColumnCodes[CSVColumnsIndexes.age]} VARCHAR(20),
      ${ColumnCodes[CSVColumnsIndexes.year]} INT,
      ${ColumnCodes[CSVColumnsIndexes.unitOfMeasurement]} VARCHAR(50),
      ${ColumnCodes[CSVColumnsIndexes.value]} VARCHAR(50),
      ${ColumnCodes[CSVColumnsIndexes.source]} VARCHAR(100),
    )
  `);

  await db.close();

  fs.createReadStream('./src/data/unodc/intentional_homicide/2023.06/data_cts_intentional_homicide.csv')
    .pipe(parse({ delimiter: ';', from_line: 2 }))
    .on('data', (row: String[]) => {
      const dataObject = row.reduce((obj: any, value: any, idx: CSVColumnsIndexes) => {
        return {
          ...obj,
          [ColumnCodes[idx]]: value,
        };
      }, {});

      console.info(dataObject);
    })
    .on('end', () => {
      console.info('finished');
    })
    .on('error', (error) => {
      console.info(error.message);
    });
}

export default importIntentionalHomicide;
