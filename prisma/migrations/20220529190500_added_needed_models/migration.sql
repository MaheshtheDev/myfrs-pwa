-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tenantId` VARCHAR(191) NOT NULL DEFAULT '',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FuelLoadDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderedPetrol` INTEGER NOT NULL,
    `orderedDiesel` INTEGER NOT NULL,
    `costOfPetrolL` DOUBLE NOT NULL,
    `costOfDieselL` DOUBLE NOT NULL,
    `sellingPriceOfPetrol` DOUBLE NOT NULL,
    `sellingPriceOfDiesel` DOUBLE NOT NULL,
    `marginOfPetrol` DOUBLE NOT NULL,
    `marginOfDiesel` DOUBLE NOT NULL,
    `tenantId` VARCHAR(191) NOT NULL,
    `orderedOn` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
