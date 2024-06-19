import React, { useState, useEffect } from "react";
import apiService from "../../services/conexio"; // Asegúrate de importar tu servicio de API
import "../../styles/table.css";
const TableComponent = ({ headers }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await apiService.fetchData("GET", "productos");
      setData(response.data.datos_get);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  console.log(data)
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item, index) => (
            <tr key={index}>
              <td>{item.id_productos}</td>
              <td>{item.nombre_productos}</td>
              <td>{item.precio_productos}</td>
              <td>{item.descripcion_productos}</td>
            </tr>
          ))}
      </tbody>
      <button onClick={() => fetchData()}>Actulizar Tabla</button>
    </table>
  );
};

export default TableComponent;
