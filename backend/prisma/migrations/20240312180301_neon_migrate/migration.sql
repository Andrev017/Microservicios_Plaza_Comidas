-- CreateTable
CREATE TABLE "Usuarios" (
    "id_usuario" SERIAL NOT NULL,
    "nombre_usuario" TEXT NOT NULL,
    "apellido_usuario" TEXT NOT NULL,
    "email_usuario" TEXT NOT NULL,
    "contra_usuario" TEXT NOT NULL,
    "rol_usuarios" TEXT,
    "celular_usuarios" INTEGER,
    "ci_usuarios" INTEGER,
    "direccion_usuarios" TEXT,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Categorias" (
    "id_categorias" SERIAL NOT NULL,
    "nombre_categoria" TEXT NOT NULL,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id_categorias")
);

-- CreateTable
CREATE TABLE "Productos" (
    "id_productos" SERIAL NOT NULL,
    "nombre_productos" TEXT NOT NULL,
    "precio_productos" DECIMAL(65,30) NOT NULL,
    "foto_productos" TEXT NOT NULL,
    "descripcion_productos" TEXT NOT NULL,
    "categId" INTEGER NOT NULL,

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("id_productos")
);

-- CreateTable
CREATE TABLE "Restaurantes" (
    "id_restaurantes" SERIAL NOT NULL,
    "restaurantes_nombre" TEXT NOT NULL,
    "telefono_restaurantes" TEXT NOT NULL,
    "descripcion_restaurantes" TEXT NOT NULL,
    "prouctId" INTEGER NOT NULL,

    CONSTRAINT "Restaurantes_pkey" PRIMARY KEY ("id_restaurantes")
);

-- CreateTable
CREATE TABLE "Venta" (
    "id_venta" SERIAL NOT NULL,
    "useerId" INTEGER NOT NULL,
    "detallId" INTEGER NOT NULL,
    "monto_total" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Venta_pkey" PRIMARY KEY ("id_venta")
);

-- CreateTable
CREATE TABLE "Detalle_venta" (
    "id_detalle_venta" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "detalle" TEXT,
    "cantidad" INTEGER NOT NULL,
    "precio_unitario" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Detalle_venta_pkey" PRIMARY KEY ("id_detalle_venta")
);

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_categId_fkey" FOREIGN KEY ("categId") REFERENCES "Categorias"("id_categorias") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restaurantes" ADD CONSTRAINT "Restaurantes_prouctId_fkey" FOREIGN KEY ("prouctId") REFERENCES "Productos"("id_productos") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_useerId_fkey" FOREIGN KEY ("useerId") REFERENCES "Usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_detallId_fkey" FOREIGN KEY ("detallId") REFERENCES "Detalle_venta"("id_detalle_venta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle_venta" ADD CONSTRAINT "Detalle_venta_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Productos"("id_productos") ON DELETE RESTRICT ON UPDATE CASCADE;
