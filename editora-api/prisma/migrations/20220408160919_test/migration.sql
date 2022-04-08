-- CreateTable
CREATE TABLE `article` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(128) NOT NULL,
    `published` BOOLEAN NULL DEFAULT true,
    `summary` VARCHAR(255) NULL,
    `title` VARCHAR(255) NOT NULL,
    `author` VARCHAR(256) NOT NULL,
    `published_at` DATE NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,
    `is_active` BOOLEAN NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
