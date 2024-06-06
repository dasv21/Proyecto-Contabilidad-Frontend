import Navbar from "./Navbar";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Navbar />
    </header>
  );
}

export default Header;
