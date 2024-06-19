import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio_sesion from "./page/auth/inicio_sesion";
import Index from "./View";
import Registro from "./page/auth/registro";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Ubicaion from "./View/ubicaion";
import Index_admin from "./admin/index_admin";
import Sidebar from "./components/sidebar";
import Producto_admin from "./admin/productos/producto_admin";
import Registro_admin from "./admin/registro_admin";
import Reporte_ventas from "./admin/ventas/reporte_ventas";
import Restaurante_admin from "./admin/restaurante/restaurante_admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Index />} />
          <Route path="View/ubicaion" element={<Ubicaion />} />
        </Route>
        <Route path="Registro" element={<Registro />} />
        <Route path="Inicio sesion" element={<Inicio_sesion />} />
        <Route path="/" element={<Footer />} />
        <Route path="/admin" element={<Sidebar />}>
          <Route index element={<Index_admin />}></Route>
          <Route
            path="restaurante_admin"
            element={<Restaurante_admin />}
          ></Route>
          <Route path="productos" element={<Producto_admin />}></Route>
          <Route path="registro_trab" element={<Registro_admin />}></Route>
          <Route path="reporte_de_ventas" element={<Reporte_ventas />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
