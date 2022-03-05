import React, { useState } from 'react'
import CardGrid from '../../components/cardGrid'
import ModalGrid from '../../components/ModalGenerico/ModalGrid'

const Grid = ({ openModal, closeModal, isOpen }) => {
  const [initialSlide, setInitialSlide] = useState(0)
  const data = [{
    id: 1,
    dia: 'Dia 1',
    title: 'ESTRUCTURA',
    text: '“Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”',
    img: '/img-slider.png'

  },
  {
    id: 2,
    dia: 'Dia 2',
    title: 'CONFERENCIAS',
    text: '“Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”',
    img: '/img-slider.png'
  },
  {
    id: 3,
    dia: 'Dia 3',
    title: 'FERIA',
    text: '“Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”',
    img: '/img-slider.png'
  },
  {
    id: 4,
    dia: 'Dia 4',
    title: 'INVESTIGACIÓN',
    text: '“Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”',
    img: '/img-slider.png'
  },
  {
    id: 5,
    dia: 'Dia 5',
    title: 'SALAS',
    text: '“Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”',
    img: '/img-slider.png'
  },
  {
    id: 6,
    dia: 'Dia 6',
    title: 'TURISMO',
    text: '“Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”',
    img: '/img-slider.png'
  }]

  return (
    <>
      <section className="relative bg-white flex flex-col justify-center items-center py-14">
        <div className="w-full md:w-9/12 mt-5 max-w-7xl mx-auto p-8 lg:p-0">
          <h6 className="text-3xl lg:text-4xl text-center font-medium mb-8">
            LO ÚLTIMO
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {data.map((item, i) => (
              <CardGrid key={item.id} item={item} onClick={() => {
                // console.log({ i })
                setInitialSlide(i)
                openModal()
              }} />
            ))
            }
          </div>
        </div>
      </section>
      <ModalGrid
        isOpen={isOpen}
        closeModal={closeModal}
        data={data}
        initialSlide={initialSlide}
        setInitialSlide={setInitialSlide} />
    </>
  )
}

export default Grid
