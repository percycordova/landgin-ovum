import React from 'react'

const CardGridConferencista = ({ item, onClick }) => {
  // const positionSlider = (item) => {
  //   setInitialSlide(item - 1)
  //   openModal()
  // }
  return (
    <div className=" mx-auto max-w-80 h-72 rounded-2xl overflow-hidden border cursor-pointer" onClick={onClick}>
      <div className='relative px-6 pt-4 pb-10 rounded-b-2xl'>
        <div className="">
          <h6 className="text-sm font-medium text-blue-500">{item.dia}</h6>
        </div>
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="font-light text-base lg:text-lg mt-7  text-justify">
          {item.text}
        </p>
        <img src="/LineaCardIzq.svg" className='absolute -bottom-2 right-0' alt="" />
      </div>
    </div>
  )
}

export default CardGridConferencista
