import apiService from "../services/conexio";
import "../styles/index_admin.css";
import { VentasProductos } from "./graficas/productos";
import { VentasGrafic } from "./graficas/ventas";

const Index_admin = () => {

    
  const fetch = () => {


  };

  return (
    <div>
      <h1>Ventas por mes</h1>
      <div style={{ width: 600 }}>
        <VentasGrafic />
      </div>
      <VentasProductos />
    </div>
  );
};

export default Index_admin;
