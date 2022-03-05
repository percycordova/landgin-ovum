import React from 'react'

const CardGridConferencista = ({ item, onClick }) => {
  // const positionSlider = (item) => {
  //   setInitialSlide(item - 1)
  //   openModal()
  // }
  return (
    // <div className=" mx-auto max-w-80 h-72 rounded-2xl overflow-hidden border cursor-pointer" onClick={onClick}>
    <div className="flex items-center justify-center  mb-3 cursor-pointer" onClick={onClick}>
      <div className="relative bg-white font-semibold text-center rounded-3xl border  px-5 pt-5 pb-10 max-w-xs">
        <img className="mb-3 w-60 h-60   mx-auto" src={item.img} alt="product designer" />
        <h1 className="text-2xl text-black"> {item.autor} ({item.pais})</h1>
        <p className="text-lg font-extralight text-black mt-4">{item.resumen}</p>
        <div className="absolute bottom-0 left-0 h-5 w-full bg-green-400 rounded-b-full"></div>
      </div>
    </div>
    // </div>
  )
}

export default CardGridConferencista
