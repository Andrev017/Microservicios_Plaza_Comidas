import "../styles/sidebar.css";
import icono_inicio from "../assets/admin/inicio.png";
import icono_rest from "../assets/admin/restaurantes.png";
import icono_product from "../assets/admin/productos.png";
import icono_regits from "../assets/admin/registro.png";
import icono_reporte from "../assets/admin/reporte_ventas.png";
import icono_cerrar from "../assets/admin/cerrar_sesion.png";

import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="container">
      <section>
        <h2>Lincoln</h2>
        <ul>
          <li>
            <Link to="/admin">
              <img src={icono_inicio} alt="" className="icono_admin" /> Inicio
            </Link>
          </li>
          <li>
            <Link to="/admin/restaurante_admin">
              <img src={icono_rest} alt="" /> Restaurantes
            </Link>
          </li>
          <li>
            <Link to="/admin/productos">
              <img src={icono_product} alt="" />
              Productos
            </Link>
          </li>
          <li>
            <Link to="/admin/registro_trab">
              <img src={icono_regits} alt="" />
              Registro
            </Link>
          </li>
          <li>
            <Link to="/admin/reporte_de_ventas">
              <img src={icono_reporte} alt="" />
              Reporte de ventas
            </Link>
          </li>
        </ul>
        <div>   
            <Link to="/Inicio sesion">
              <img src={icono_cerrar} alt="" />
              Cerrar Sesión
            </Link>
        </div>
      </section>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Sidebar;
