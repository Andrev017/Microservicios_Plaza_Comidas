/*DEPENDENCIAS*/
const express = require('express');
const { PrismaClient } = require("@prisma/client");

/*PARA INICIALIZAR*/
const app = express();
const prisma = new PrismaClient();


app.post("/venta", async (req,res) => {

    try {
        const dataUser = await prisma.venta.create({
            data:{
                useerId: req.body.useerId,
                detallId: req.body.detallId,
                monto_total: req.body.monto_total
            }
        })
        res.json({
            message: "datos crados",
            data: dataUser
        })
    } catch (error) {
        console.log(error);
    }

})


app.get("/venta", async (req,res) => {
    try {
        const datos_venta = await prisma.venta.findMany({
            include: {
                detall: true,
                users: true
            }
        })
        res.json({
            message: "datos recuperados",
            datos_get: datos_venta
        })
    } catch (error) {
        console.log(error);
    }
})



app.put("/venta/:id_vent", async (req,res) => {
    try {
        const id_update = parseInt(req.params.id_vent)
        const datos_ventas = await prisma.venta.update({
        where:{id_venta:id_update},
        data:{
            useerId: req.body.useerId,
            detallId: req.body.detallId,
            monto_total: req.body.monto_total
        }
    })
    res.json({
        message:"datos actualizados",
        data: datos_ventas
    })
    } catch (error) {
        console.log(error);
    }
})




app.delete("/venta/:id_vent", async (req,res) => {
    const id_delete = parseInt(req.params.id_vent)
    const datos_ventas = await prisma.venta.delete({
        where:{id_venta:id_delete}
    })
    res.json({
        message: "datos eliminados"
    })
})




module.exports = app;