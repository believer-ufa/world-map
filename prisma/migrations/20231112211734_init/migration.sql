-- CreateTable
CREATE TABLE "unodc_intentional_homicide_2023_06" (
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
    "source" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "unodc_intentional_homicide_2023_06_iso3_code_key" ON "unodc_intentional_homicide_2023_06"("iso3_code");
