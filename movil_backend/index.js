const express = require ('express');
const cors = require ('cors');
const dotenv = require ('dotenv');


const app = express();
const port = 3000;
dotenv.config();
app.use(cors()); /*para la coneccion con el front*/
// estos dos middleware son los que nos faltaba para poder leer datos desde la peticion body
// este es para el tipo de dato de respuesta como para el envio
app.use(express.json()); 
// para que pueda comprender el body de la peticion
app.use(express.urlencoded({ extended: true }));




app.listen(port, () => {
    console.log('Esta en el puerto '+ port )
})