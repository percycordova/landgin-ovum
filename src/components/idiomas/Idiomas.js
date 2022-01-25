import React from "react";
import i18next from "i18next";

const Idiomas = () => {
  const cambiarIdioma = (idioma) => {
    i18next.changeLanguage(idioma);
  };
  return (
    <div className="flex justify-center md:justify-end md:mr-36 ">
      <ul className="inline-flex  text-white relative z-70 font-sm gap-x-1 bg-black bg-opacity-5 p-2">
        <li
          className="cursor-pointer hover:-translate-y-1 transform transition-all duration-300"
          onClick={() => cambiarIdioma("es")}
        >
          Español
        </li>
        <li>-</li>
        <li
          className="cursor-pointer hover:-translate-y-1 transform transition-all duration-300"
          onClick={() => cambiarIdioma("en")}
        >
          Ingles
        </li>
        <li>-</li>
        <li
          className="cursor-pointer hover:-translate-y-1 transform transition-all duration-300"
          onClick={() => cambiarIdioma("por")}
        >
          Portugues
        </li>
      </ul>
    </div>
  );
};

export default Idiomas;
