
import FormProducto from "./form";
import FormProductoCategoria from "./formcategoria";
import TableProductos from "./table";
import TableCategoria from "./tableCategoria";

const Producto_admin = () => {
  const headers = [
    "id",
    "nombre_productos",
    "precio_productos",
    "foto_productos",
    "descripcion_productos",
    "categId",
    "rest",
  ];
  const headersCategoria = ["id", "Nombre de la categoria"];

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", gap: "2em" }}>
        <div
          style={{
            display: "flex",
            gap: "2em",
            width: "40%",
            flexDirection: "column",
          }}
        >
          <FormProductoCategoria title="Crear nueva categoria" />
          <TableCategoria headers={headersCategoria} />
        </div>
        <FormProducto title="Crear nuevo producto" />
      </div>
      <h3>Registro de todos los restaurantes</h3>
      <TableProductos headers={headers} />
    </div>
  );
};

export default Producto_admin;
