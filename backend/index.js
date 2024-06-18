/*---LOGICA DE RUTAS---*/
/*DEPENDENCIAS*/
const express = require ('express');
const cors = require ('cors');
const dotenv = require ('dotenv');

const controller_usuario = require('./controller/usuarios_controller')/*sin el js*/
const controller_productos = require('./controller/productos_controller')
const controller_categorias = require('./controller/categoria_controller')
const controller_restaurantes = require('./controller/restaurantes_controller')
const controler_venta = require('./controller/venta_controller')
const controler_detalleventa = require('./controller/detalleventa_controller')
const controlador_login = require('./controller/controller_login')

/*LAAMR A LA FUNCION DE EXPRES*/
/*PARA EL SERVIDOR*/

const app = express();
const port = 3000;
dotenv.config();
app.use(cors()); /*para la coneccion con el front*/
// estos dos middleware son los que nos faltaba para poder leer datos desde la peticion body
// este es para el tipo de dato de respuesta como para el envio
app.use(express.json()); 
// para que pueda comprender el body de la peticion
app.use(express.urlencoded({ extended: true }));


app.use(controller_usuario);
app.use(controlador_login);
app.use(controller_productos);
app.use(controller_categorias);
app.use(controller_restaurantes);
app.use(controler_venta);
app.use(controler_detalleventa);


app.listen(port, () => {
    console.log('Esta en el puerto '+ port )
})




