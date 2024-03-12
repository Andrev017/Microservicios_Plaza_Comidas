/*---LOGICA DE RUTAS---*/
/*DEPENDENCIAS*/
const express = require ('express');
const cors = require ('cors');
const dotenv = require ('dotenv');
const controller_usuario = require('./controller/usuarios_controller')/*sin el js*/

/*LAAMR A LA FUNCION DE EXPRES*/
/*PARA EL SERVIDOR*/

const app = express();
const port = 3000;
dotenv.config();


app.use(cors()); /*para la coneccion con el front*/
app.use(controller_usuario);


app.listen(port, () => {
    console.log('Esta en el puerto '+ port )
})




