import { useRouter } from 'next/router';
import React from 'react'

const CardGrid = ({ item, onClick, index }) => {
  const {locale}= useRouter()
  const tituloPorIdioma = (db) => {
    switch (locale) {
      case "es-pe":
        return db?.tituloEspa;
      case "en-US":
        return db?.tituloIngl;
      case "pt-br":
        return db?.tituloPort;
      default:
        return db?.tituloEspa;
    }
  };
  const descripcionPorIdioma = (db) => {
    switch (locale) {
      case "es-pe":
        return db?.descripcionEspa;
      case "en-US":
        return db?.descripcionIngl;
      case "pt-br":
        return db?.descripcionPort;
      default:
        return db?.descripcionEspa;
    }
  }
  // const positionSlider = (item) => {
  //   setInitialSlide(item - 1)
  //   openModal()
  // }
  // console.log('que paso', item);
  return (
    <div className=" mx-auto max-w-80 rounded-2xl overflow-hidden border cursor-pointer" onClick={onClick}>
      <img className="w-full h-64 object-cover" src={item?.imagenPrincipal.url} alt="Sunset in the mountains" />
      <div className='relative px-6 pt-4 pb-10 rounded-b-2xl'>
        {/* <div className="">
          <h6 className="text-sm font-medium text-blue-500">Día {index + 1}</h6>
        </div> */}
        <div className="font-bold text-xl mb-2">{tituloPorIdioma(item)}</div>
        <p className="font-light text-sm lg:text-base mt-4 text-justify">
          {descripcionPorIdioma(item)}
        </p>
        {/* <img src="/LineaCardIzq.svg" className='absolute -bottom-2 right-0' alt="" /> */}
      </div>
    </div>
  )
}

export default CardGrid
