import React, { useState } from "react";
import "../../styles/formularios.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faFileAlt,
  faPhoneVolume,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import apiService from "../../services/conexio";
import { Toaster, toast } from "sonner";
const FormProductoCategoria = ({ title }) => {
  const [formData, setFormData] = useState({
    nombre_categoria: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const getData = await apiService.fetchData(
        "POST",
        "categoria",
        formData,
        undefined
      );
      toast.success(getData.data.message);
      console.log("Respuesta de la API:", getData);
    } catch (error) {
      console.error("Error al enviar formulario:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formularios" style={{width:"100%" ,margin:0}}>
      <h2 style={{ color: "#fff" }}> {title || "Formulario"}</h2>
      <Toaster />
      <div>
        <p>
        <FontAwesomeIcon icon={faLayerGroup} />
        </p>
        <input
          type="text"
          id="name"
          name="nombre_categoria"
          placeholder="Nombre de la categoria"
          value={formData.nombre_categoria}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormProductoCategoria;
