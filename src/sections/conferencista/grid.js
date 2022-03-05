import React, { useState } from 'react'
import CardGridConferencista from '../../components/cardGrid/cardGridConferencista'
import ModalGridConferencista from '../../components/ModalGenerico/ModalGridConferencista'
const Grid = ({ openModal, closeModal, isOpen }) => {
  const [initialSlide, setInitialSlide] = useState(0)
  const data = [
    {
      id: 1,
      autor: 'Ken Hugues',
      pais: 'Irlanda',
      img: '/conferencista-1.png',
      resumen: '“Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”'
    },
    {
      id: 2,
      autor: 'Ken Hugues',
      pais: 'Irlanda',
      img: '/conferencista-2.png',
      resumen: '“Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”'
    },
    {
      id: 3,
      autor: 'Ken Hugues',
      pais: 'Irlanda',
      img: '/conferencista-3.png',
      resumen: '“Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”'
    },
    {
      id: 4,
      autor: 'Ken Hugues',
      pais: 'Irlanda',
      img: '/conferencista-1.png',
      resumen: '“Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”'
    },
    {
      id: 5,
      autor: 'Ken Hugues',
      pais: 'Irlanda',
      img: '/conferencista-2.png',
      resumen: '“Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”'
    },
    {
      id: 6,
      autor: 'Ken Hugues',
      pais: 'Irlanda',
      img: '/conferencista-3.png',
      resumen: '“Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”'
    }

  ]

  return (
    <>
      <section className="relative bg-white flex flex-col justify-center items-center py-14">
        <div className="w-full md:w-9/12 mt-5 max-w-7xl mx-auto p-8 lg:p-0">
          <h6 className="text-3xl lg:text-4xl text-center font-medium mb-8 ">
            CONFERENCISTAS
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {data.map((item, i) => (
              <CardGridConferencista key={item.id} item={item} onClick={() => {
                // console.log({ i })
                setInitialSlide(i)
                openModal()
              }} />
            ))
            }
          </div>
        </div>
      </section>
      <ModalGridConferencista isOpen={isOpen} closeModal={closeModal} data={data} initialSlide={initialSlide} setInitialSlide={setInitialSlide} />
    </>
  )
}

export default Grid
