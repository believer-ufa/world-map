import fs from 'fs';

import { PrismaClient } from '@prisma/client';

import { parse } from 'csv-parse';

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
  const prisma = new PrismaClient();

  process.on('SIGINT', async () => {
    await prisma.$disconnect();
  });

  const iso3CodesProcessed: string[] = [];

  // const db = await open({
  //   filename: './src/data/database.db',
  //   driver: sqlite3.Database,
  // });

  // await db.exec('DROP TABLE IF EXISTS unodc_intentional_homicide_2023_06;');
  // await db.exec(`
  //   CREATE TABLE unodc_intentional_homicide_2023_06
  //   (
  //     ${ColumnCodes[CSVColumnsIndexes.iso3_code]} VARCHAR(20) PRIMARY KEY,
  //     ${ColumnCodes[CSVColumnsIndexes.country]} VARCHAR(100),
  //     ${ColumnCodes[CSVColumnsIndexes.region]} VARCHAR(50),
  //     ${ColumnCodes[CSVColumnsIndexes.subregion]} VARCHAR(50),
  //     ${ColumnCodes[CSVColumnsIndexes.indicator]} VARCHAR(100),
  //     ${ColumnCodes[CSVColumnsIndexes.dimension]} VARCHAR(50),
  //     ${ColumnCodes[CSVColumnsIndexes.category]} VARCHAR(80),
  //     ${ColumnCodes[CSVColumnsIndexes.sex]} VARCHAR(10),
  //     ${ColumnCodes[CSVColumnsIndexes.age]} VARCHAR(20),
  //     ${ColumnCodes[CSVColumnsIndexes.year]} INT,
  //     ${ColumnCodes[CSVColumnsIndexes.unitOfMeasurement]} VARCHAR(50),
  //     ${ColumnCodes[CSVColumnsIndexes.value]} VARCHAR(50),
  //     ${ColumnCodes[CSVColumnsIndexes.source]} VARCHAR(100)
  //   );
  // `);

  try {
    await prisma.unodc_intentional_homicide_2023_06.deleteMany();
    await prisma.$executeRaw`DELETE FROM iso3_codes`;

    fs.createReadStream('./src/data/unodc/intentional_homicide/2023.06/data_cts_intentional_homicide.short.csv')
      .pipe(parse({ delimiter: ';', from_line: 2 }))
      .on('data', async (row: String[]) => {
        const dataObject = row.reduce((obj: any, value: any, idx: CSVColumnsIndexes) => {
          return {
            ...obj,
            [ColumnCodes[idx]]: value,
          };
        }, {});

        if (dataObject.iso3_code && !iso3CodesProcessed.includes(dataObject.iso3_code)) {
          await prisma.iso3_codes.create({ data: { code: dataObject.iso3_code } });
          iso3CodesProcessed.push(dataObject.iso3_code);
        }

        const newRecord = await prisma.unodc_intentional_homicide_2023_06.create({
          data: {
            iso3_code: dataObject.iso3_code,
            country: dataObject.country,
            region: dataObject.region,
            subregion: dataObject.subregion,
            indicator: dataObject.indicator,
            dimension: dataObject.dimension,
            category: dataObject.category,
            sex: dataObject.sex,
            age: dataObject.age,
            year: parseInt(dataObject.year, 10),
            unitOfMeasurement: dataObject.unitOfMeasurement,
            value: dataObject.value,
            source: dataObject.source,
          },
        });

        console.log({ newRecord });
      })
      .on('end', async () => {
        console.info('finished');
        await prisma.$disconnect();
      })
      .on('error', async (error) => {
        await prisma.$disconnect();
        console.error(error.message);
      });
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
  } finally {
    await prisma.$disconnect();
  }
}

export default importIntentionalHomicide;
