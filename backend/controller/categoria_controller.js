const express = require('express');
const { PrismaClient } = require("@prisma/client");


const app = express();
const prisma = new PrismaClient();


app.post("/categoria", async (req, res) => {
    const dataUser = await prisma.categorias.create({
        data: {
            nombre_categoria: req.body.nombre_categoria
        }
    })
    res.json({ message: "dato creado" })
})

app.get("/categoria", async (req, res) => {
    const datos_categ = await prisma.categorias.findMany({

    })
    res.json({
        message: "datos optenidos",
        datos_get: datos_categ
    })
})



app.put("/categoria/:id_categ", async (req, res) => {
    const datos_update = parseInt(req.params.id_categ)
    const datos_categ = await prisma.categorias.update({
        where:{id_categorias: datos_update},
        data:{
            nombre_categoria: req.body.nombre_categoria
        }
    })
    res.json({
        message: "datos actualizados",
        datos: datos_categ
        
    })
})


app.delete("/categoria/:id_categ", async (req,res) =>{
    const datos_delete = parseInt(req.params.id_categ)
    const datos_categ = await prisma.categorias.delete({
        where: {id_categorias: datos_delete}
    })
    res.json({
        message: "datos eliminados"
    })
})



module.exports = app;