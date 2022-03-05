import Link from 'next/link'
import React, { useState } from 'react'
import HamburguesBtn from '../Btn-Hamburguers/hamburguesBtn'
import Idiomas from '../idiomas/Idiomas'
import Menu from './menu'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleBtnClick = () => setShowMenu(prev => !prev)
  return (
    <>
      {/* header desktop */}
      <div className='hidden lg:block'>
        <div className='flex justify-center items-center bg-green-400 gap-10 '>
          <Menu />
          <Idiomas />
        </div>
      </div>

      {/* header mobile */}
      <div className='relative flex justify-between items-start bg-green-400 py-3 px-4 lg:hidden'>
        <Idiomas />
        <div><HamburguesBtn show={showMenu} handleClick={handleBtnClick} /></div>
        {showMenu && <ul className='flex flex-col gap-y-2 text-white bg-green-400 z-99 text-xl absolute left-0 top-16 min-w-80'>
          <li className='p-4 cursor-pointer ' onClick={() => setShowMenu(false)}><Link href="/">Inicio</Link> </li>
          <li className='p-4  cursor-pointer '><a href="#acerca" onClick={() => setShowMenu(false)}>Acerca de Ovum</a> </li>
          <li className='p-4 cursor-pointer '><a href="#estructura" onClick={() => setShowMenu(false)}> Estructura</a></li>
          <li className='p-4 cursor-pointer '><a href="#programa" onClick={() => setShowMenu(false)}>Programa</a> </li>
          <li className='p-4  cursor-pointer '><a href="#patrocinadores" onClick={() => setShowMenu(false)}>Patrocinadores</a> </li>
          <li className='p-4 cursor-pointer '><a href="#" onClick={() => setShowMenu(false)}>Precios</a> </li>
          <li className='p-4  cursor-pointer '><a href="#registro" onClick={() => setShowMenu(false)}>Registro</a> </li>
        </ul>}
      </div>
    </>

  )
}
export default Header
