import React from 'react'
// import i18next from 'i18next'
import { useRouter } from 'next/router'
const Idiomas = () => {
  const router = useRouter()
  console.log(router)
  const cambiarIdioma = (idioma) => {
    // i18next.changeLanguage(idioma)
    router.push(router.pathname, router.pathname, {
      locale: idioma
    })
  }
  return (
    <div className="flex items-center ">
      <ul className="inline-flex text-xl  text-green-900 relative z-70 font-sm gap-x-1  p-2">
        <li
          className="cursor-pointer hover:-translate-y-1 transform transition-all duration-300"
          onClick={() => cambiarIdioma('es-pe')}
        >
          Español
        </li>
        <li>-</li>
        <li
          className="cursor-pointer hover:-translate-y-1 transform transition-all duration-300"
          onClick={() => cambiarIdioma('en-US')}
        >
          Ingles
        </li>
        <li>-</li>
        <li
          className="cursor-pointer hover:-translate-y-1 transform transition-all duration-300"
          onClick={() => cambiarIdioma('pt-br')}
        >
          Portugues
        </li>
      </ul>
    </div>
  )
}

export default Idiomas
