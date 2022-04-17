import React from 'react'
// import i18next from 'i18next'
import { useRouter } from 'next/router'
const Idiomas = ({idiomas}) => {
  
  const router = useRouter()
  // console.log('router',router)
  const cambiarIdioma = (idioma) => {
    // i18next.changeLanguage(idioma)
    router.push(router.pathname, router.pathname, {
      locale: idioma
    })
  }
  return (
    <div className="flex items-center">
      <ul className="inline-flex text-sm relative z-70 font-normal gap-x-1  p-2">
        <li
          className="cursor-pointer hover:-translate-y-1 transform transition-all duration-300"
          onClick={() => cambiarIdioma('es-pe')}
        >
        {idiomas.HeaderIdiomas.value1}
        </li>
        <li>-</li>
        <li
          className="cursor-pointer hover:-translate-y-1 transform transition-all duration-300"
          onClick={() => cambiarIdioma('en-US')}
        >
        {idiomas.HeaderIdiomas.value2}
        </li>
        <li>-</li>
        <li
          className="cursor-pointer hover:-translate-y-1 transform transition-all duration-300"
          onClick={() => cambiarIdioma('pt-br')}
        >
          {idiomas.HeaderIdiomas.value3}
        </li>
      </ul>
    </div>
  )
}

export default Idiomas
