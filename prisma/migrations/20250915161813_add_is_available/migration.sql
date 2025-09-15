/*
  Warnings:

  - You are about to drop the column `is_vaileable` on the `car` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "plate" TEXT NOT NULL,
    "release_date" DATETIME NOT NULL,
    "is_available" BOOLEAN NOT NULL DEFAULT true,
    "price" DECIMAL NOT NULL,
    "brand_id" INTEGER NOT NULL,
    CONSTRAINT "car_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brand" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_car" ("brand_id", "id", "plate", "price", "release_date") SELECT "brand_id", "id", "plate", "price", "release_date" FROM "car";
DROP TABLE "car";
ALTER TABLE "new_car" RENAME TO "car";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
