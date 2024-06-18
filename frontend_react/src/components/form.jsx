import React, { useEffect, useState } from "react";
import apiService from "../services/endpint";
import useContextImg from "./context/context-imgPost";
import useAuthStore from "./context/userConstext";
import { toast } from "sonner"; 

const Formulario = ({
  campos,
  title,
  parametro,
  formDataToEdit,
  onSuccess,
}) => {
  const [formData, setFormData] = useState(formDataToEdit.postRelacion || {});
  const { img, setImg } = useContextImg();
  const { token } = useAuthStore();

  useEffect(() => {
    setImg(formData.multimedia ? formData.multimedia : []);
  }, [formDataToEdit]);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (img.length === 0) {
      toast.error(`No se selecciono ninguna imagen`);
    }
    for (const campo of campos) {
      if (!formData[campo.nombre]) {
        toast.error(`El campo ${campo.label} está vacío`);
        return;
      }
    }
 

    const fecha = formData.fecha
      ? new Date(formData.fecha).toISOString()
      : null;
    let evaluar = formDataToEdit ? "PUT" : "POST";
    const postForm = await apiService.fetchData(
      evaluar,
      parametro,
      { ...formData, multimedia: img, fecha },
      token.token
    );
    if (postForm) {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formularioText">
      <h2>{title ? title : "Formulario"}</h2>
      {campos.map((campo, index) => (
        <div key={index}>
          <label htmlFor={campo.nombre}>{campo.label}</label>
          {campo.tipo === "textarea" ? (
            <textarea
              id={campo.nombre}
              name={campo.nombre}
              value={formData[campo.nombre] || ""}
              onChange={handleChange}
              rows="8"
            />
          ) : campo.tipo === "checkbox" ? (
            <input
              type="checkbox"
              id={campo.nombre}
              name={campo.nombre}
              checked={formData[campo.nombre] || false}
              onChange={handleChange}
            />
          ) : (
            <input
              type={campo.tipo}
              id={campo.nombre}
              name={campo.nombre}
              value={formData[campo.nombre] || ""}
              onChange={handleChange}
            />
          )}
        </div>
      ))}
      <button type="submit">{title}</button>
    </form>
  );
};

export default Formulario;