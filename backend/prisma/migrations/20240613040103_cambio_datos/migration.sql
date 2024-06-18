-- CreateTable
CREATE TABLE `Usuarios` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_usuario` VARCHAR(191) NOT NULL,
    `apellido_usuario` VARCHAR(191) NOT NULL,
    `email_usuario` VARCHAR(191) NULL,
    `contra_usuario` VARCHAR(191) NOT NULL,
    `rol_usuarios` VARCHAR(191) NOT NULL,
    `celular_usuarios` INTEGER NOT NULL,
    `ci_usuarios` INTEGER NULL,
    `direccion_usuarios` VARCHAR(191) NULL,

    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categorias` (
    `id_categorias` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_categoria` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_categorias`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Productos` (
    `id_productos` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_productos` VARCHAR(191) NOT NULL,
    `precio_productos` DECIMAL(65, 30) NOT NULL,
    `foto_productos` VARCHAR(191) NOT NULL,
    `descripcion_productos` VARCHAR(191) NOT NULL,
    `categId` INTEGER NOT NULL,

    PRIMARY KEY (`id_productos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Restaurantes` (
    `id_restaurantes` INTEGER NOT NULL AUTO_INCREMENT,
    `restaurantes_nombre` VARCHAR(191) NOT NULL,
    `telefono_restaurantes` INTEGER NOT NULL,
    `descripcion_restaurantes` VARCHAR(191) NOT NULL,
    `prouctId` INTEGER NOT NULL,

    PRIMARY KEY (`id_restaurantes`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Venta` (
    `id_venta` INTEGER NOT NULL AUTO_INCREMENT,
    `useerId` INTEGER NOT NULL,
    `detallId` INTEGER NOT NULL,
    `monto_total` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id_venta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Detalle_venta` (
    `id_detalle_venta` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `detalle` VARCHAR(191) NULL,
    `cantidad` INTEGER NOT NULL,
    `precio_unitario` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id_detalle_venta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Productos` ADD CONSTRAINT `Productos_categId_fkey` FOREIGN KEY (`categId`) REFERENCES `Categorias`(`id_categorias`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Restaurantes` ADD CONSTRAINT `Restaurantes_prouctId_fkey` FOREIGN KEY (`prouctId`) REFERENCES `Productos`(`id_productos`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Venta` ADD CONSTRAINT `Venta_useerId_fkey` FOREIGN KEY (`useerId`) REFERENCES `Usuarios`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Venta` ADD CONSTRAINT `Venta_detallId_fkey` FOREIGN KEY (`detallId`) REFERENCES `Detalle_venta`(`id_detalle_venta`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalle_venta` ADD CONSTRAINT `Detalle_venta_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Productos`(`id_productos`) ON DELETE RESTRICT ON UPDATE CASCADE;
