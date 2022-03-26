import Link from "next/link";


const Menu = ({mostrarLogo}) => {


  return (
    <ul className="flex gap-x-2 text-base font-normal items-center text-gray-600">
    
      { mostrarLogo &&<li className="py-4 px-2 cursor-pointer ">
          <Link href="/"><img src="/logo-navbar.png" alt="" /></Link>
        </li>}
      
      <li className="py-4 px-2 cursor-pointer ">
        <a href="#registro">Regístrate</a>{" "}
      </li>
      <li className="py-4 px-2 cursor-pointer ">
        <a href="#programa">Programa</a>{" "}
      </li>
      <li className="py-4 px-2 cursor-pointer ">
        <a href="#patrocinadores">Patrocinadores</a>{" "}
      </li>
      <li className="py-4 px-2 cursor-pointer ">
        <a href="#">Preguntas Frecuentes</a>{" "}
      </li>
    </ul>
  );
};
export default Menu;
