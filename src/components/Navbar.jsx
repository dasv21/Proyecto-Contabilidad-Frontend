import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <ul className="bg-blue-500 flex items-center">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <li>
        <Link to="/client" className="">
          Clientes
        </Link>
      </li>
      <li>
        <Link to="#"> Reportes</Link>
      </li>
      <li>
        <Link to="#"> Nosotros</Link>
      </li>
      <li>
        <Link to="#"> Contacto</Link>
      </li>
    </ul>
  );
}

export default Navbar;
