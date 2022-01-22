import React from "react";

const Idiomas = () => {
  return (
    <div className="flex justify-center md:justify-end md:mr-36">
      <ul className="inline-flex  text-white relative z-20 font-sm gap-x-1 ">
        <li className="cursor-pointer hover:-translate-y-1 transform transition-all duration-300">Español</li>
        <li>-</li>
        <li className="cursor-pointer hover:-translate-y-1 transform transition-all duration-300">Ingles</li>
        <li>-</li>
        <li className="cursor-pointer hover:-translate-y-1 transform transition-all duration-300">Portugues</li>
      </ul>
    </div>
  );
};

export default Idiomas;
