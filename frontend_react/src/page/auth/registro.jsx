import { useState } from "react";
import apiService from "../../services/conexio";
import { useNavigate } from "react-router-dom";
import "../../styles/registro.css"

const Registro = () => {
    const navigation = useNavigate();
    
    const [data, setData] = useState({
        nombre_usuario: "",
        apellido_usuario: "",
        email_usuario: "",
        contra_usuario: "",
        rol_usuarios: "",
        celular_usuarios: "",
        ci_usuarios: "",
        direccion_usuarios: "",
    });

    const ingresar = async () => {
        console.log(data);
        const resepcion = await apiService.fetchData(
            "POST",
            "login",
            data,
            undefined
        );
        if (resepcion.data.message === "Usuario Valido") {
            navigation("/Home");
        } else {
            alert(resepcion.data.message);
        }
    };

    return (
        <div className="padre">
            <section>
                <h1>Registrarse</h1>

                <form action="">
                    <input
                        type="text"
                        name="nombre"
                        placeholder='"Nombre" required maxlength="100" minlength="5"'
                        value={data.nombre_usuario}
                        onChange={(e) =>
                            setData((old) => ({ ...old, nombre_usuario: e.target.value }))
                        }
                    />
                    <input
                        type="text"
                        name="apellido"
                        required
                        placeholder='"Apellido" maxlength="250" minlength="4"'
                        value={data.nombre_usuario}
                        onChange={(e) =>
                            setData((old) => ({ ...old, nombre_usuario: e.target.value }))
                        }
                    />
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Gmail"
                        title="Debe contener una @"
                        value={data.email_usuario}
                        onChange={(e) =>
                            setData((old) => ({ ...old, email_usuario: e.target.value }))
                        }
                    />
                    <input
                        type="number"
                        placeholder="Número de celular"
                        value={data.numeroCelular}
                        onChange={(e) =>
                            setData((old) => ({ ...old, numeroCelular: e.target.value }))
                        }
                    />


                    <input
                        type="password"
                        name="contraseña"
                        required
                        placeholder='"Contraseña" maxlength="10" minlength="6"'
                        value={data.contra_usuario}
                        onChange={(e) =>
                            setData((old) => ({ ...old, contra_usuario: e.target.value }))
                        }
                    />
                </form>

                <p>
                    Ya tengo un cuenta{" "}
                    <p onClick={() => navigation("/Inicio sesion")}>Iniciar Sesion</p>
                </p>

                <button onClick={() => ingresar()}>Registrarme </button>
            </section>
        </div>
    );
};

export default Registro;
