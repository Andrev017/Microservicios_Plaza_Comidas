import React, { useState, useEffect } from "react";
import apiService from "../../services/conexio"; // Asegúrate de importar tu servicio de API
import "../../styles/table.css";
const TableCategoria = ({ headers }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await apiService.fetchData("GET", "categoria");
      setData(response.data.datos_get);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
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
              <td style={{ width: 150 }}>{item.id_categorias}</td>
              <td>{item.nombre_categoria}</td>
            </tr>
          ))}
      </tbody>
      <button onClick={() => fetchData()}>Actulizar Tabla</button>
    </table>
  );
};

export default TableCategoria;
