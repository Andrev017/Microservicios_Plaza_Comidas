/*DEPENDENCIAS*/
const express = require('express');
const { PrismaClient } = require("@prisma/client");

/*PARA INICIALIZAR*/
const app = express();
const prisma = new PrismaClient();

app.post("/restaurantes", async (req, res) => {
    try {
        const dataUser = await prisma.restaurantes.create({
            data: {
                restaurantes_nombre: req.body.restaurantes_nombre,
                telefono_restaurantes: req.body.telefono_restaurantes,
                descripcion_restaurantes: req.body.descripcion_restaurantes,
                prouctId: req.body.prouctId
            }
        });
        res.json({
            message: "datos enviados",
            data: dataUser
        })
    } catch (error) {
        console.log(error);
    }
})


app.get("/restaurantes", async (req, res) => {
    try {
        const dato_restaurante = await prisma.restaurantes.findMany({

        })
        res.json({
            message: "dato recuperado",
            datos_get: dato_restaurante
        })
    } catch (error) {
        console.log(error);
    }
})



app.put("/restaurantes/:id_rest", async (req, res) => {
    try {
        const id_update = parseInt(req.params.id_rest)
        const dato_restaurante = await prisma.restaurantes.update({
            where: { id_restaurantes: id_update },
            data: {
                restaurantes_nombre: req.body.restaurantes_nombre,
                telefono_restaurantes: req.body.telefono_restaurantes,
                descripcion_restaurantes: req.body.descripcion_restaurantes,
                prouctId: req.body.prouctId
            }
        })
        res.json({
            message: "Datos actualizados",
            data: dato_restaurante
        })
    } catch (error) {
        console.log(error);
    }
})


app.delete("/restaurantes/:id_rest", async (req, res) => {
    try {
        const id_delete = parseInt(req.params.id_rest)
    const dato_restaurante = await prisma.restaurantes.delete({
        where: { id_restaurantes: id_delete }
    })
    res.json({
        message: "datos eliminados",

    })
    } catch (error) {
        console.log(error);
    }
})





module.exports = app;