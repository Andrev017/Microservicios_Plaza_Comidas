import React, { useState, useEffect } from "react";
import "../../styles/formularios.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFileAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import apiService from "../../services/conexio";
import { Toaster, toast } from "sonner";
import FormPreventa from "./Preventa/formPreventa";

const FormVentas = ({ title }) => {
  const [formData, setFormData] = useState({
    usuario_id: "",
  });

  const [userData, setUserData] = useState([]);
  const [preVenta, setPreVenta] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await apiService.fetchData("GET", "usuarios");
      setUserData(response.data.datos_get);
    } catch (error) {
      console.error("Error al obtener datos de usuarios:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const telefonos = Number(formData.telefono_restaurantes);
    try {
      const getData = await apiService.fetchData(
        "POST",
        "restaurantes",
        { ...formData, telefono_restaurantes: telefonos },
        undefined
      );
      toast.success(getData.data.message);
      console.log("Respuesta de la API:", getData);
    } catch (error) {
      console.error("Error al enviar formulario:", error);
    }
  };

  return (
    <form  className="formularios">
      <Toaster />
      <h2 style={{ color: "#fff" }}>{title || "Formulario"}</h2>
      <div>
        <label htmlFor="usuario_id">Seleccionar usuario:</label>
        <select
          id="usuario_id"
          name="usuario_id"
          value={formData.usuario_id}
          onChange={handleInputChange}
          required
        >
          <option value="">Selecciona un usuario</option>
          {userData &&
            userData.map((user, i) => (
              <option key={i} value={user.id}>
                {user.nombre_usuario}
              </option>
            ))}
        </select>
      </div>
      <div>
        <strong
          style={{
            border: "solid 1px #fff",
            color: preVenta ? "green" : "red",
            fontSize: ".8em",
            fontWeight: 100,
            padding: "1em",
          }}
          onClick={() => {
            setPreVenta(!preVenta);
          }}
        >
          Agregar productos PREVENTA
        </strong>
      </div>

      {preVenta && <FormPreventa />}

      <button >Enviar</button>
    </form>
  );
};

export default FormVentas;
