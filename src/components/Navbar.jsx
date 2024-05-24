import { Link } from "react-router-dom";
import { useState } from "react";
import iconMenu from "../assets/images/icon-menu.svg";
import closeBtn from "../assets/images/icon-menu-close.svg";

function Navbar() {
  const [menuClicked, setMenuClicked] = useState(true);

  const handleClick = () => {
    setMenuClicked((prevState) => !prevState);
  };

  return (
    <>
      <ul
        className={`${menuClicked ? "hidden" : ""} absolute 
        bg-blue-500 
        top-0 
        right-0 
        w-[256px] 
        p-[24px] 
        h-full 
        text-[18px] 
        sm:flex 
        sm:items-center 
        sm:w-[438px] 
        sm:place-content-around 
        sm:p-0 sm:h-auto 
        sm:relative 
        sm:text-[16px]`}
      >
        <li
          className={`${
            menuClicked ? "hidden" : ""
          } cursor-pointer sm:hidden  flex place-content-end`}
        >
          <img
            className="w-8 h-8 mb-[87px]"
            src={closeBtn}
            onClick={handleClick}
            alt=""
          />
        </li>
        <li className="mb-8 sm:mb-0">
          <Link to="/clients" className="hover:text-blue-800">
            Clientes
          </Link>
        </li>
        <li className="mb-8 sm:mb-0">
          <Link to="#" className="hover:text-blue-800">
            Facturas
          </Link>
        </li>
        <li className="mb-8 sm:mb-0">
          <Link to="#" className="hover:text-blue-800">
            {" "}
            Reportes
          </Link>
        </li>
        <li className="mb-8 sm:mb-0">
          <Link to="#" className="hover:text-blue-800">
            Nosotros
          </Link>
        </li>
        <li className="mb-8 sm:mb-0">
          <Link to="#" className="hover:text-blue-800">
            Contacto
          </Link>
        </li>
      </ul>
      <img
        className={`${
          menuClicked ? "" : "hidden"
        } w-10 h-4 cursor-pointer sm:hidden`}
        onClick={handleClick}
        src={iconMenu}
        alt="Icono-Menu"
      />
    </>
  );
}

export default Navbar;
