import Link from 'next/link'
import React, { useState } from 'react'
import HamburguesBtn from '../Btn-Hamburguers/hamburguesBtn'
import Idiomas from '../idiomas/Idiomas'
import Menu from './menu'

const Header = ({ idiomas }) => {
  const [showMenu, setShowMenu] = useState(false)
  const handleBtnClick = () => setShowMenu(prev => !prev)
  return (
    <>
      {/* header desktop */}
      <div className='hidden lg:block'>
        <div className='flex justify-center items-center py-6 gap-10 '>
          <Menu />
          <Idiomas />
        </div>
      </div>

      {/* header mobile */}
      <div className='relative flex justify-between items-start py-3 px-4 lg:hidden'>
        <Idiomas />
        <div><HamburguesBtn show={showMenu} handleClick={handleBtnClick} /></div>
        {showMenu && <ul className='flex flex-col gap-y-2 bg-white z-99 text-base absolute left-0 top-16 w-full'>
          <li className='p-4 cursor-pointer border-b border-black' onClick={() => setShowMenu(false)}><Link href="/">Ovum 2022</Link> </li>
          <li className='p-4 cursor-pointer border-b border-black'><a href="#programa" onClick={() => setShowMenu(false)}>Programa</a> </li>
          <li className='p-4  cursor-pointer border-b border-black'><a href="#patrocinadores" onClick={() => setShowMenu(false)}>Patrocinadores</a> </li>
          <li className='p-4  cursor-pointer border-b border-black'><a href="#registro" onClick={() => setShowMenu(false)}>Registro</a> </li>
        </ul>}
      </div>
    </>

  )
}
export default Header
