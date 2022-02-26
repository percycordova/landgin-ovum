import React from 'react'

const CardGrid = ({ item, onClick }) => {
  // const positionSlider = (item) => {
  //   setInitialSlide(item - 1)
  //   openModal()
  // }
  return (
    <div className=" mx-auto max-w-80 rounded-2xl overflow-hidden border cursor-pointer" onClick={onClick}>
      <img className="w-full h-64 object-cover" src={item.img} alt="Sunset in the mountains" />
      <div className='relative px-6 pt-4 pb-10 rounded-b-2xl'>
        <div className="">
          <h6 className="text-sm font-medium text-blue-500">{item.dia}</h6>
        </div>
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="font-light text-sm lg:text-base mt-4 w-4/5 text-justify">
          {item.text}
        </p>
        <img src="/LineaCardIzq.svg" className='absolute -bottom-2 right-0' alt="" />
      </div>
    </div>
  )
}

export default CardGrid