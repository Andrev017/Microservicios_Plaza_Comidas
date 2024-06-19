const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.post("/productos", async (req, res) => {
  const dataUser = await prisma.productos.create({
    data: {
      nombre_productos: req.body.nombre_productos,
      precio_productos: req.body.precio_productos,
      foto_productos: req.body.foto_productos,
      descripcion_productos: req.body.descripcion_productos,
      categId: req.body.categId,
      rest: req.body.rest,
    },
  });
  res.json({
    message: "Datos gurdados de productos",
    Datos: dataUser,
  });
});

app.get("/productos", async (req, res) => {
  const dato_productos = await prisma.productos.findMany({
    include: {
      categ: true,
      restaurant: true,
    },
  });
  res.json({
    message: "Datos obtnidos",
    datos_get: dato_productos,
  });
});

app.put("/productos/:id_productos", async (req, res) => {
  const id_update = parseInt(req.params.id_productos);
  const dato_productos = await prisma.productos.update({
    where: { id_productos: id_update },
    data: {
      nombre_productos: req.body.nombre_productos,
      precio_productos: req.body.precio_productos,
      foto_productos: req.body.foto_productos,
      descripcion_productos: req.body.descripcion_productos,
      categId: req.body.categId,
      rest: req.body.rest,
    },
  });
  res.json({
    message: "datos actualizados",
    data: dato_productos,
  });
});

app.delete("/productos/:id_productos", async (req, res) => {
  const id_delete = parseInt(req.params.id_productos);
  const dato_productos = await prisma.productos.delete({
    where: { id_productos: id_delete },
  });
  res.json({
    message: "dato eliminado",
  });
});

module.exports = app;
