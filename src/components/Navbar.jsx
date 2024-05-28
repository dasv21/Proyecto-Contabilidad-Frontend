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
      <ul
        className={`${menuClicked ? "block" : "hidden"} 
        absolute 
        bg-blue-500 
        top-0 
        right-0 
        w-[256px] 
        p-[24px] 
        h-full 
        text-[18px] 
        sm:flex 
        sm:items-center 
        sm:w-auto 
        sm:place-content-around 
        sm:p-0 
        sm:h-auto 
        sm:relative 
        sm:text-[16px]`}
      >
        <li className="sm:hidden flex justify-end mb-8">
          <img
            className="w-8 h-8"
            src={closeBtn}
            onClick={handleClick}
            alt="close"
          />
        </li>
        {["/clients", "#", "#", "#", "#"].map((path, index) => (
          <li key={index} className="mb-4 sm:mb-0 sm:mx-2">
            <Link to={path} className="hover:text-gray-700">
              {
                ["Clientes", "Facturas", "Reportes", "Nosotros", "Contacto"][
                  index
                ]
              }
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
