import React, { useState } from 'react'
import CardGridConferencia from '../../components/cardGrid/cardGridConferencia'
import ModalGridConferencia from '../../components/ModalGenerico/ModalGridConferencia'
const Grid = ({ openModal, closeModal, isOpen }) => {
  const [initialSlide, setInitialSlide] = useState(0)
  const data = [{
    id: 1,
    dia: 'Dia 1',
    img: '/estructura-6.png',
    title: 'El consumidor del futuro',
    text: '“Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”'
  },
  {
    id: 2,
    dia: 'Dia 2',
    img: '/estructura-1.png',
    title: 'Tecnología para la industria Avícola',
    text: '“Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”'
  },
  {
    id: 3,
    dia: 'Dia 3',
    img: '/estructura-2.png',
    title: 'La industria como aliada de la seguridad alimentaria',
    text: '“Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”'
  },
  {
    id: 4,
    dia: 'Dia 4',
    img: '/estructura-3.png',
    title: 'El consumidor del futuro',
    text: '“Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”'
  },
  {
    id: 5,
    dia: 'Dia 5',
    img: '/estructura-4.png',
    title: 'Tecnología para la industria Avícola',
    text: '“Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”'
  },
  {
    id: 6,
    dia: 'Dia 6',
    img: '/estructura-5.png',
    title: 'La industria como aliada de la seguridad alimentaria',
    text: '“Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”'
  }]

  return (
    <>
      <section className="relative bg-white flex flex-col justify-center items-center py-14">
        <div className="w-full md:w-9/12 mt-5 max-w-7xl mx-auto p-8 lg:p-0">
          <h6 className="text-3xl lg:text-4xl text-center font-medium mb-8 ">
            CONFERENCIAS
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
            {data.map((item, i) => (
              <CardGridConferencia key={item.id} item={item} onClick={() => {
                console.log({ i })
                setInitialSlide(i)
                openModal()
              }} />
            ))
            }
          </div>
        </div>
      </section>
      <ModalGridConferencia isOpen={isOpen} closeModal={closeModal} data={data} initialSlide={initialSlide} setInitialSlide={setInitialSlide} />
    </>
  )
}

export default Grid
