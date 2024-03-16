/*DEPENDENCIAS*/
const express = require('express');
const { PrismaClient } = require("@prisma/client");

/*PARA INICIALIZAR*/
const app = express();
const prisma = new PrismaClient();


app.post("/detalleventa", async (req, res) => {
    const dataUser = await prisma.detalle_venta.create({
        data: {
            productId: req.body.productId,
            fecha: req.body.fecha,
            detalle: req.body.detalle,
            cantidad: req.body.cantidad,
            precio_unitario: req.body.precio_unitario
        }
    })
    res.json({
        message: "datos enviados",
        data: dataUser
    })
})


app.get("/detalleventa", async (req, res) => {
    const datos_detall = await prisma.detalle_venta.findMany({

    })
    res.json({
        message: "datos recuperados",
        datos_get: datos_detall
    })
})



app.put("/detalleventa/:id_detall", async (req, res) => {
    const datos_detall = parseInt(req.params.id_detall)
    const datos_update = await prisma.detalle_venta.update({
        where: { id_detalle_venta: datos_detall },
        data: {
            productId: req.body.productId,
            fecha: req.body.fecha,
            detalle: req.body.detalle,
            cantidad: req.body.cantidad,
            precio_unitario: req.body.precio_unitario
        }
    })
    res.json({
        message: "datos actualizados",
        data: datos_update
    })
})



app.delete("/detalleventa/:id_detall", async (req, res) => {
    const datos_detall = parseInt(req.params.id_detall)
    const datos_delete = await prisma.detalle_venta.delete({
        where: { id_detalle_venta: datos_detall }
    })
    res.json({
        message: "datos eliminados"
    })
})





module.exports = app;