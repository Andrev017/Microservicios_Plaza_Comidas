import { VentasGrafic } from "../graficas/ventas";
import FormVentas from "./formVenta";
import TableVenta from "./tableVenta";

const Reporte_ventas = () => {
  const headers = [
    "id",
    "Nombre Usuario",
    "apellido",
    "producto",
    "fecha",
    "detalle",
    "cantidad",
    "precio_unitario",
    "monto_total",
  ];

  return (
    <div style={{ width: "100%" }}>
      <section style={{ display: "flex", gap: "2em" }}>
        <FormVentas title="Formulario de venta" />
        <div style={{ width: "550px" }}>
          <h2>Reporte de ventas</h2>

          <VentasGrafic />
        </div>
      </section>
      <h3>Registro de todos los restaurantes</h3>
      <TableVenta headers={headers} />
    </div>
  );
};

export default Reporte_ventas;
