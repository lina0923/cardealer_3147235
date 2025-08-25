-- CreateTable
CREATE TABLE `envio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `origin` VARCHAR(100) NOT NULL,
    `destination` VARCHAR(100) NOT NULL,
    `status` VARCHAR(20) NOT NULL,
    `conductorId` INTEGER NOT NULL,
    `camionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
