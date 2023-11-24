-- CreateTable
CREATE TABLE "iso3_codes" (
    "code" TEXT NOT NULL PRIMARY KEY
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_unodc_intentional_homicide_2023_06" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "iso3_code" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "subregion" TEXT NOT NULL,
    "indicator" TEXT NOT NULL,
    "dimension" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "unitOfMeasurement" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    CONSTRAINT "unodc_intentional_homicide_2023_06_iso3_code_fkey" FOREIGN KEY ("iso3_code") REFERENCES "iso3_codes" ("code") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_unodc_intentional_homicide_2023_06" ("age", "category", "country", "dimension", "id", "indicator", "iso3_code", "region", "sex", "source", "subregion", "unitOfMeasurement", "value", "year") SELECT "age", "category", "country", "dimension", "id", "indicator", "iso3_code", "region", "sex", "source", "subregion", "unitOfMeasurement", "value", "year" FROM "unodc_intentional_homicide_2023_06";
DROP TABLE "unodc_intentional_homicide_2023_06";
ALTER TABLE "new_unodc_intentional_homicide_2023_06" RENAME TO "unodc_intentional_homicide_2023_06";
CREATE INDEX "unodc_intentional_homicide_2023_06_iso3_code_idx" ON "unodc_intentional_homicide_2023_06"("iso3_code");
CREATE INDEX "unodc_intentional_homicide_2023_06_country_idx" ON "unodc_intentional_homicide_2023_06"("country");
CREATE INDEX "unodc_intentional_homicide_2023_06_region_idx" ON "unodc_intentional_homicide_2023_06"("region");
CREATE INDEX "unodc_intentional_homicide_2023_06_subregion_idx" ON "unodc_intentional_homicide_2023_06"("subregion");
CREATE INDEX "unodc_intentional_homicide_2023_06_indicator_idx" ON "unodc_intentional_homicide_2023_06"("indicator");
CREATE INDEX "unodc_intentional_homicide_2023_06_dimension_idx" ON "unodc_intentional_homicide_2023_06"("dimension");
CREATE INDEX "unodc_intentional_homicide_2023_06_category_idx" ON "unodc_intentional_homicide_2023_06"("category");
CREATE INDEX "unodc_intentional_homicide_2023_06_sex_idx" ON "unodc_intentional_homicide_2023_06"("sex");
CREATE INDEX "unodc_intentional_homicide_2023_06_age_idx" ON "unodc_intentional_homicide_2023_06"("age");
CREATE INDEX "unodc_intentional_homicide_2023_06_year_idx" ON "unodc_intentional_homicide_2023_06"("year");
CREATE INDEX "unodc_intentional_homicide_2023_06_unitOfMeasurement_idx" ON "unodc_intentional_homicide_2023_06"("unitOfMeasurement");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
