import Link from "next/link";


const Menu = ({ mostrarLogo }) => {


  return (
    <ul className="flex  text-base font-normal items-center text-gray-600">

      {mostrarLogo && <li className="py-4 px-2 cursor-pointer ">
        <Link href="/"><img src="/logo-navbar.png" alt="" className="h-18 w-32 object-cover" /></Link>
      </li>}

      <li className="py-4 px-2 cursor-pointer hover:-translate-y-1 transform transition-all duration-300">
        <Link href="/registro">Registrate</Link>
      </li>
      <li className="py-4 px-2 cursor-pointer hover:-translate-y-1 transform transition-all duration-300">
        {/* <a href="#programa">Programa</a>{" "} */}
        <Link href="/#programa">Programa</Link>
      </li>
      <li className="py-4 px-2 cursor-pointer hover:-translate-y-1 transform transition-all duration-300">
        <Link href="/#patrocinadores">Patrocinadores</Link>
      </li>
      <li className="py-4 px-2 cursor-pointer hover:-translate-y-1 transform transition-all duration-300">
        <a href="#">Preguntas Frecuentes</a>{" "}
      </li>
    </ul>
  );
};
export default Menu;
