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
      <div className="hidden xl:flex xl:justify-center">
        <div
          className={`inline-flex mx-auto justify-center items-center pt-6 ${
            mostrarLogo ? " border-b" : "pb-6"
          }  gap-30 `}
        >
          <Menu mostrarLogo={mostrarLogo} />
          <div className="flex gap-3">
            <Idiomas />
            <RedesSociales />
          </div>
        </div>
      </div>

      {/* header mobile */}
      <div className="relative flex justify-between items-start py-3 px-4 xl:hidden">
        <Idiomas />
        <div>
          <HamburguesBtn show={showMenu} handleClick={handleBtnClick} />
        </div>
        {showMenu && (
          <ul className="flex flex-col gap-y-2 bg-white z-99 text-base absolute left-0 top-16 w-full">
            <li
              className="p-4 cursor-pointer border-b border-black hover:bg-gray-900"
              onClick={() => setShowMenu(false)}
            >
              <Link href="/">Ovum 2022</Link>{" "}
            </li>
            <li className="p-4 cursor-pointer border-b border-black">
              <a href="#programa" onClick={() => setShowMenu(false)}>
                Programa
              </a>{" "}
            </li>
            <li className="p-4  cursor-pointer border-b border-black">
              <a href="#patrocinadores" onClick={() => setShowMenu(false)}>
                Patrocinadores
              </a>{" "}
            </li>
            <li
              className="p-4  cursor-pointer border-b border-black"
              onClick={() => setShowMenu(false)}
            >
              <Link href="/">Registro</Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};
export default Header;
