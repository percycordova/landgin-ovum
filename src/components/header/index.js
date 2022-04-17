import Link from "next/link";
import React, { useState, useEffect } from "react";
import HamburguesBtn from "../Btn-Hamburguers/hamburguesBtn";
import Idiomas from "../idiomas/Idiomas";
import Menu from "./menu";
import RedesSociales from "./RedesSociales";
import { useRouter } from "next/router";

const Header = ({ idiomas }) => {

  const [showMenu, setShowMenu] = useState(false);
  const handleBtnClick = () => setShowMenu((prev) => !prev);
  const { pathname } = useRouter();
  const [mostrarLogo, setMostrarLogo] = useState(false);
  useEffect(() => {
    if (pathname !== "/") {
      setMostrarLogo(true);
    }
  }, [pathname]);

  return (
    <>
      {/* header desktop */}
      <div className="hidden lg:flex ">
        <div
          className={`inline-flex lg:w-256 max-w-7xl mx-auto justify-between items-center pt-6 ${
            mostrarLogo ? " border-b" : "pb-6"
          }   `}
        >
          <Menu mostrarLogo={mostrarLogo} idiomas={idiomas} />
          <div className="flex gap-3">
            <Idiomas idiomas={idiomas}/>
            <RedesSociales />
          </div>
        </div>
      </div>

      {/* header mobile */}
      <div className="relative flex justify-between items-start py-3 px-4 lg:hidden">
        <Idiomas idiomas={idiomas}/>
        <div>
          <HamburguesBtn show={showMenu} handleClick={handleBtnClick} />
        </div>
        {showMenu && (
          <ul className="flex flex-col bg-white z-99 text-base absolute left-0 top-16 w-full">
            <li
              className="p-5 cursor-pointer border-b border-black hover:border-white hover:bg-secondary-600 ease-out transition-all duration-300 hover:text-white"
              onClick={() => setShowMenu(false)}
            >
              <Link href="/">Ovum 2022</Link>{" "}
            </li>
            <li
              className="p-5 cursor-pointer border-b border-black hover:border-white hover:bg-secondary-600 ease-out transition-all duration-300 hover:text-white"
              onClick={() => setShowMenu(false)}
            >
              <Link href="/#programa">{idiomas.HeaderMenu.programa}</Link>
            </li>
            {/* <li className="p-4  cursor-pointer border-b border-black"
            onClick={() => setShowMenu(false)}
            >
              <Link href="/#patrocinadores">Patrocinadores</Link>
            </li> */}
            <li
              className="p-5 cursor-pointer border-b border-black hover:border-white hover:bg-secondary-600 ease-out transition-all duration-300 hover:text-white"
              onClick={() => setShowMenu(false)}
            >
              <Link href="/registro">{idiomas.HeaderMenu.registrate}</Link>
            </li>
            <li
              className="p-5 cursor-pointer border-b border-black hover:border-white hover:bg-secondary-600 ease-out transition-all duration-300 hover:text-white"
              onClick={() => setShowMenu(false)}
            >
              <Link href="/preguntas-frecuentes">{idiomas.HeaderMenu.preguntasFrecuentes}</Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};
export default Header;
