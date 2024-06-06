import { Link } from "react-router-dom";
import { useState } from "react";
import iconMenu from "../assets/images/icon-menu.svg";
import closeBtn from "../assets/images/icon-menu-close.svg";

function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleClick = () => {
    setMenuClicked((prevState) => !prevState);
  };

  return (
    <>
      <ul className={`${menuClicked ? "block" : "hidden"} navbar-menu`}>
        <li className="navbar-close">
          <img
            className="w-8 h-8 cursor-pointer"
            src={closeBtn}
            onClick={handleClick}
            alt="close"
          />
        </li>
        {["/client", "#", "#"].map((path, index) => (
          <li key={index} className="navbar-item">
            <Link to={path} className="navbar-link">
              {["Clientes", "Contadores", "Reportes"][index]}
            </Link>
          </li>
        ))}
      </ul>
      <img
        className={`${
          menuClicked ? "hidden" : "block"
        } w-10 h-4 cursor-pointer sm:hidden`}
        onClick={handleClick}
        src={iconMenu}
        alt="Icono-Menu"
      />
    </>
  );
}

export default Navbar;
