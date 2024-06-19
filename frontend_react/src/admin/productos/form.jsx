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
const FormProducto = ({ title }) => {
  const [formData, setFormData] = useState({
    nombre_productos: "",
    precio_productos: "",
    foto_productos: "",
    descripcion_productos: "",
    categId: "",
    rest: "",
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
    const precio = Number(formData.precio_productos);
    const idCat = Number(formData.categId);
    const idRes = Number(formData.rest);

    try {
      const getData = await apiService.fetchData(
        "POST",
        "productos",
        { ...formData, precio_productos: precio, categId: idCat, rest: idRes },
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
      <h2 style={{ color: "#fff" }}> {title || "Formulario"}</h2>
      <Toaster />
      <div>
        <p>
          <FontAwesomeIcon icon={faLayerGroup} />
        </p>
        <input
          type="text"
          id="name"
          name="nombre_productos"
          placeholder="Nombre del producto"
          value={formData.nombre_productos}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faLayerGroup} />
        </p>
        <input
          type="number"
          id="name"
          name="precio_productos"
          placeholder="precio del producto"
          value={formData.precio_productos}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <p>
          <FontAwesomeIcon icon={faLayerGroup} />
        </p>
        <input
          type="text"
          id="name"
          name="foto_productos"
          placeholder="url foto"
          value={formData.foto_productos}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faLayerGroup} />
        </p>
        <input
          type="text"
          id="name"
          name="descripcion_productos"
          placeholder="descripcion del producto"
          value={formData.descripcion_productos}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faLayerGroup} />
        </p>
        <input
          type="number"
          id="name"
          name="categId"
          placeholder="Nombre del categiria"
          value={formData.categId}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faLayerGroup} />
        </p>
        <input
          type="number"
          id="name"
          name="rest"
          placeholder="Nombre del restaurant"
          value={formData.rest}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormProducto;
