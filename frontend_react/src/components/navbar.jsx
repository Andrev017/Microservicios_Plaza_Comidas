import { Link, Outlet } from "react-router-dom";
import "../styles/nav.css";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
            <h2 className="titulo">Lincoln</h2>

                <div className="nombres"> 
                    <li className="li">
                        <Link to="/"> Inicio</Link>
                    </li>
                    <li className="li">
                        <Link to="/Registro"> Restaurantes</Link>
                    </li>
                    <li className="li">
                        <Link to="/View/ubicaion"> ¿Como llegar?</Link>
                    </li>
                </div>
                <li className="sesion">
                    <Link to="/Inicio sesion"> Iniciar Sesion</Link>
                </li>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Navbar;
