-- CreateTable
CREATE TABLE `catalogo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `price` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
