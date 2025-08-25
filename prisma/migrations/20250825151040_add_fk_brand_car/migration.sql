/*
  Warnings:

  - Added the required column `brand_id` to the `car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `car` ADD COLUMN `brand_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `car` ADD CONSTRAINT `car_brand_id_fkey` FOREIGN KEY (`brand_id`) REFERENCES `brand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
