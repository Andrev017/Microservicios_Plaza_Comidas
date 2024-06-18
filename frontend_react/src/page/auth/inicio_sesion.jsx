import { Link, useNavigate } from "react-router-dom";
import apiService from "../../services/conexio";
import { useState } from "react";
import "../../styles/inicioSecion.css";
const Inicio_sesion = () => {
    const navigation = useNavigate();

    const [data, setData] = useState({ email_usuario: "", contra_usuario: "" });

    const ingresar = async () => {
        console.log(data);
        const resepcion = await apiService.fetchData(
            "POST",
            "login",
            data,
            undefined
        );
        if (resepcion.data.message === "Usuario Valido") {
            navigation("/");
        } else {
            alert(resepcion.data.message);
        }
    };

    return (
        <div className="padre">
            <section className="section_ssesion">
                <h1>Inicie su Sesión </h1>

                <form action="" className="formulario">
                    <input
                        type="text"
                        name="email"
                        required
                        placeholder="Gmail"
                        title="Debe contener @"
                        value={data.email_usuario}
                        onChange={(e) =>
                            setData((old) => ({ ...old, email_usuario: e.target.value }))
                        }
                    />

                    <input
                        type="password"
                        name="contraseña"
                        placeholder='Contraseña' required  
                        maxLength= '50' 
                        minLength="7"
                        value={data.contra_usuario}
                        onChange={(e) =>
                            setData((old) => ({ ...old, contra_usuario: e.target.value }))
                        }
                    />
                </form>

                <button className="boton_sesion" onClick={() => ingresar()}>
                    Iniciar Sesión
                </button>
                <br />
                <br /><br />
                <span>
                    No tengo un cuenta<Link to="/Registro" className="p"> Registrate</Link>
                </span>
            </section>
        </div>
    );
};

export default Inicio_sesion;
