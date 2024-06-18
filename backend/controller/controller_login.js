/*DEPENDENCIAS*/
const express = require('express');
const { PrismaClient } = require("@prisma/client");

/*PARA INICIALIZAR*/
const app = express();
const prisma = new PrismaClient();


app.post("/login", async (req, res) => {
    const dataUser = await prisma.usuarios.findMany({
        where: {
            contra_usuario: req.body.contra_usuario,
            email_usuario: req.body.email_usuario,
        }
    })
    if (dataUser.length > 0) {
        return res.json({
            message: "Usuario Valido",
            data: dataUser
        })
    }
    return res.json({
        message: "vayase de mi app ",

    })

})



module.exports = app;