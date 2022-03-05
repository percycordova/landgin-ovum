import Link from 'next/link'

const Menu = () => {
  return (
    <ul className='flex gap-x-2 text-white text-xl'>
      <li className='py-4 px-2 cursor-pointer '><Link href="/">Inicio</Link> </li>
      <li className='py-4 px-2 cursor-pointer '><a href="#acerca">Acerca de Ovum</a> </li>
      <li className='py-4 px-2 cursor-pointer '><a href="#estructura"> Estructura</a></li>
      <li className='py-4 px-2 cursor-pointer '><a href="#programa">Programa</a> </li>
      <li className='py-4 px-2 cursor-pointer '><a href="#patrocinadores">Patrocinadores</a> </li>
      <li className='py-4 px-2 cursor-pointer '><a href="#">Precios</a> </li>
      <li className='py-4 px-2 cursor-pointer '><a href="#registro">Registro</a> </li>
    </ul>
  )
}
export default Menu
