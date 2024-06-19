import React, { useState, useEffect } from "react";
import "../../../styles/formularios.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faFileAlt,
  faPlusCircle,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import apiService from "../../../services/conexio";
import { Toaster, toast } from "sonner";

const FormPreventa = () => {
  const [formData, setFormData] = useState({
    productId: "",
    fecha: "",
    detalle: "",
    cantidad: "",
    precio_unitario: "",
  });

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await apiService.fetchData("GET", "productos");
        setProductos(response.data.datos_get);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProductos();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { productId, fecha, detalle, cantidad, precio_unitario } = formData;
    const preventaData = {
      productId,
      fecha,
      detalle,
      cantidad: Number(cantidad),
      precio_unitario: Number(precio_unitario),
    };

    try {
      const response = await apiService.fetchData(
        "POST",
        "preventas",
        preventaData,
        undefined
      );
      toast.success(response.data.message);
      console.log("Respuesta de la API:", response);
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      toast.error("Error al registrar preventa");
    }
  };

  return (
    <form className="formularios" style={{ width: "100%", padding: 15 }}>
      <Toaster />
      <div>
        <p>
          <FontAwesomeIcon icon={faShoppingCart} />
        </p>
        <label htmlFor="productId">Producto:</label>
        <select
          id="productId"
          name="productId"
          value={formData.productId}
          onChange={handleInputChange}
          required
        >
          <option value="">Seleccione un producto</option>
          {productos &&
            productos.map((producto) => (
              <option key={producto.productId} value={producto.productId}>
                {producto.nombre_productos}
              </option>
            ))}
        </select>
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faCalendar} />
        </p>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={formData.fecha}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faFileAlt} />
        </p>
        <textarea
          id="detalle"
          name="detalle"
          placeholder="Detalle"
          value={formData.detalle}
          onChange={handleInputChange}
          rows="4"
          required
        ></textarea>
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faPlusCircle} />
        </p>
        <input
          type="number"
          id="cantidad"
          name="cantidad"
          placeholder="Cantidad"
          value={formData.cantidad}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faPlusCircle} />
        </p>
        <input
          type="number"
          id="precio_unitario"
          name="precio_unitario"
          placeholder="Precio Unitario"
          value={formData.precio_unitario}
          onChange={handleInputChange}
          required
        />
      </div>
      <button onClick={() => handleSubmit}>Registrar preventa</button>
    </form>
  );
};

export default FormPreventa;
