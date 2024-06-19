import React, { useState } from "react";
import "../../styles/formularios.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faFileAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import apiService from "../../services/conexio";
import { Toaster, toast } from "sonner";
const FormRestaurante = () => {
  const [formData, setFormData] = useState({
    restaurantes_nombre: "",
    telefono_restaurantes: "",
    descripcion_restaurantes: "",
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
    <form onSubmit={handleSubmit} className="formularios">
      <Toaster />
      <div>
        <p>
          <FontAwesomeIcon icon={faUser} />
        </p>
        <input
          type="text"
          id="name"
          name="restaurantes_nombre"
          placeholder="Nombre"
          value={formData.restaurantes_nombre}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faPhoneVolume} />
        </p>
        <input
          type="number"
          id="telefono_restaurantes"
          name="telefono_restaurantes"
          placeholder="Teléfono"
          value={formData.telefono_restaurantes}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faFileAlt} />
        </p>
        <textarea
          id="descripcion_restaurantes"
          name="descripcion_restaurantes"
          placeholder="Descripción"
          value={formData.descripcion_restaurantes}
          onChange={handleInputChange}
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormRestaurante;
