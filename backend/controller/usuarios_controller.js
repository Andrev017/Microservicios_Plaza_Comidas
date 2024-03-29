/*DEPENDENCIAS*/
const express = require('express');
const { PrismaClient } = require("@prisma/client");

/*PARA INICIALIZAR*/
const app = express();
const prisma = new PrismaClient();

/*la funcion de retorno =>*/
app.post("/usuarios", async (req, res) => {
    const dataUser = await prisma.usuarios.create({
        data: {
            nombre_usuario: req.body.nombre_usuario,
            apellido_usuario: req.body.apellido_usuario,
            email_usuario: req.body.email_usuario,
            contra_usuario: req.body.contra_usuario,
            rol_usuarios: req.body.rol_usuarios,
            celular_usuarios: req.body.celular_usuarios,
            ci_usuarios: req.body.ci_usuarios,
            direccion_usuarios: req.body.direccion_usuarios
        }
    });
    res.json({
        message: "Se envio los datos",
        data: dataUser
    })
})


app.get("/usuarios", async (req, res) => {
    const dato_usario = await prisma.usuarios.findMany({
    });
    res.json({
        message: "Datos obtenidos",
        datos_get: dato_usario
    })

})


app.put("/usuarios/:id_user", async (req, res) => {

    const id_update = parseInt(req.params.id_user)
    const dato_usario = await prisma.usuarios.update({
        where: {id_usuario:id_update}, 
        data:{
            nombre_usuario: req.body.nombre_usuario,
            apellido_usuario: req.body.apellido_usuario,
            email_usuario: req.body.email_usuario,
            contra_usuario: req.body.contra_usuario,
            rol_usuarios: req.body.rol_usuarios,
            celular_usuarios: req.body.celular_usuarios,
            ci_usuarios: req.body.ci_usuarios,
            direccion_usuarios: req.body.direccion_usuarios
        }
    })
    res.json({
        message: "datos actualizados", 
        datos: dato_usario
    })
})


app.delete("/usuarios/:id_user", async(req, res) => {
    const id_delete = parseInt(req.params.id_user)
    const dato_usuario = await prisma.usuarios.delete({
        where: {id_usuario:id_delete}
    })
    res.json({
        message: "dato eliminado"
    })
})


module.exports = app;
