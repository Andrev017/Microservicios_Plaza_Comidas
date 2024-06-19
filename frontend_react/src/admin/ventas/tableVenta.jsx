import React, { useState, useEffect } from "react";
import "../../styles/table.css";
import data from "./Preventa/data.json";

const TableVenta = ({ headers }) => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    // Cargar los datos iniciales desde el archivo JSON
    setVentas(data);
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ventas.map((venta, index) => (
            <tr key={index}>
              <td>{venta.id}</td>
              <td>{venta["Nombre Usuario"]}</td>
              <td>{venta.apellido}</td>
              <td>{venta.producto}</td>
              <td>{venta.fecha}</td>
              <td>{venta.detalle}</td>
              <td>{venta.cantidad}</td>
              <td>{venta.precio_unitario}</td>
              <td>{venta.monto_total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableVenta;
