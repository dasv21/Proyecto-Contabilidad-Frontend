import Navbar from "./Navbar";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-500 flex place-content-between items-center">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Navbar />
    </header>
  );
}

export default Header;
