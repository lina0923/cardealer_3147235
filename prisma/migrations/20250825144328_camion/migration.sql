-- CreateTable
CREATE TABLE `camion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `license_plate` VARCHAR(10) NOT NULL,
    `model` VARCHAR(50) NOT NULL,
    `capacity` INTEGER NOT NULL,
    `available` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `camion_license_plate_key`(`license_plate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
