import React from 'react'
const Footer = ({ idiomas }) => {
  return (
    <footer className="bg-primary-950 text-center text-white py-4 text-sm px-10 mt-0">
      <span className="font-bold">OVUM 2022</span>  {idiomas.DerechosReservados.value} <span className="hidden sm:inline-block">|</span>
      {' '}{idiomas.DesarrolladoPor.value}
    </footer>
  )
}

export default Footer
