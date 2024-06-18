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
import Restaurante_admin from "./admin/restaurante_admin";
import Producto_admin from "./admin/producto_admin";
import Registro_admin from "./admin/registro_admin";
import Reporte_ventas from "./admin/reporte_ventas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Index></Index>}></Route>
        </Route>


        <Route path="/" element={<Navbar />}>
          <Route path="/View/ubicaion" element={<Ubicaion></Ubicaion>}></Route>
        </Route>




        <Route path="/Registro" element={<Registro></Registro>} />
        <Route path="/Inicio sesion" element={<Inicio_sesion />} />

      </Routes>
      <Routes>
        <Route path="/" element={<Footer />}></Route>
      </Routes>


      <Routes>
        <Route path="/admin" element={<Sidebar/>}></Route>
        <Route path="/index" element={<Index_admin/>}></Route>
        <Route path="/restaurante admin" element={<Restaurante_admin/>}></Route>
        <Route path="/productos" element={<Producto_admin/>}></Route>
        <Route path="/registro_trab" element={<Registro_admin/>}></Route>
        <Route path="/reporte de ventas" element={<Reporte_ventas/>}></Route>
      </Routes>



    </BrowserRouter>
  );
}

export default App;
