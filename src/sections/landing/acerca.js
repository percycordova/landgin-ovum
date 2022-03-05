import React from 'react'

const Acerca = () => {
  return (
    <section className=" p-8 flex flex-col justify-center items-center" id='acerca'>
      <div className=" md:w-9/12 mt-5 max-w-7xl mx-auto  bg-white">
        <h6 className="text-3xl lg:text-4xl text-center font-medium mb-8">
          ACERCA DE OVUM

        </h6>
        <div className="w-full flex flex-col lg:flex-row gap-8">
          <div className="w-full">
            <img src='/landing-video.png' className='w-full h-full' alt="video" />
          </div>

          <div className="w-full flex flex-col justify-center">
            <h2 className="text-gray-600 text-3xl mb-5 lg:mb-3 text-center lg:text-left">
              Informacion de OVUM
            </h2>
            <p className="text-gray-600 text-base text-justify">
              Lorem Ipsum es simplemente texto de relleno de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde la década de 1500, cuando un impresor desconocido tomó una galera de tipos y la mezcló para hacer un libro de muestras tipográficas.
            </p>
            <div className="text-lg font-normal text-black mt-5 lg:mt-1">
              <p>Luis Eduardo Valle</p>
              <p className='text-gray-700'>Presidente Anavih - Ovum 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-9/12  w-full border-b border-gray-500 mt-10"></div>
    </section>
  )
}

export default Acerca
