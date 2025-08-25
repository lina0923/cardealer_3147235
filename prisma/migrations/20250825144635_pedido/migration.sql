-- CreateTable
CREATE TABLE `pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `client_name` VARCHAR(100) NOT NULL,
    `address` VARCHAR(150) NOT NULL,
    `total` DECIMAL(10, 2) NOT NULL,
    `status` VARCHAR(20) NOT NULL,
    `envioId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
