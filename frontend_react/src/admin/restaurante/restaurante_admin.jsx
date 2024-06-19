import FormRestaurante from "./form";
import TableComponent from "./table";

const Restaurante_admin = () => {
  const headers = ["id","Nombre del restaurante", "Telefono", "Descripcion"];

  return (
    <div style={{ width: "100%"  }}>
      <h2>Crear nuevo restaurante</h2>
      <FormRestaurante />
      <h3>Registro de todos los restaurantes</h3> 
      <TableComponent headers={headers} />
    </div>
  );
};

export default Restaurante_admin;
