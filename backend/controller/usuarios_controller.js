/*DEPENDENCIAS*/
const express = require ('express');
const {PrismaClient } = require ("@prisma/client");

/*PARA INICIALIZAR*/
const app = express();
const prisma = new PrismaClient();

/*la funcion de retorno =>*/
app.post("/usuarios", async (req, res) => {


    const {
        nombre_usuarios,
        apellido_usuario,
        email_usuario,
        contra_usuario,
        rol_usuarios,
        celular_usuarios,
        ci_usuarios,
        direccion_usuarios
    }= req.body
    const dato_usario = await prisma.usuarios.create({
        data:{
            nombre_usuarios,
            apellido_usuario,
        email_usuario,
        contra_usuario,
        rol_usuarios,
        celular_usuarios,
        ci_usuarios,
        direccion_usuarios 
        }
    });
    res.json ({
        message: "Se envio los datos"
    })
})


app.get("/usarios", async (req,res) =>{
    const dato_usario = await prisma.usuarios.findMany({
        where:{
            not: contra_usuario
        }
    });
    res.json ({
        message: "Datos obtenidos",
        datos_get: dato_usario
    })
    
})






/*        */ 
module.exports = app;
