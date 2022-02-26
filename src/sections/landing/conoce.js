import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination } from 'swiper'
const Conoce = () => {
  return (
    <section className=" bg-white flex flex-col justify-center items-center py-16">
      <div className=" w-full md:w-9/12 mt-5 max-w-7xl mx-auto p-3 lg:p-0">
        <div className="relative">
          <img src='/conoce-honduras.png' className='w-full h-auto' />
          <h2 className='absolute bottom-8 left-5 md:left-10 md:bottom-16 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl::text-7xl lg:top-15 lg:left-15  text-white'>CONOCÉ <br /><span className='font-bold'> HONDURAS</span></h2>
        </div>
      </div>
      <div className="w-full md:w-9/12 max-w-7xl flex flex-col md:flex-row gap-8 my-10 p-8 md:p-0 ">
        <div className="w-full">
          <img src='/conoce-1.png' className='w-full h-full object-cover ' alt="video" />
        </div>

        <div className="w-full flex flex-col justify-center">
          <h2 className="text-green-400 text-2xl mb-5 lg:mb-3 text-center lg:text-left">
            Viaja... vive la experiencia
          </h2>
          <p className=" text-gray-600 text-base lg:text-lg text-justify">
            Lorem Ipsum es simplemente texto de relleno de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde la década de 1500, cuando un impresor desconocido tomó una galera de tipos y la mezcló para hacer un libro de muestras tipográficas.
          </p>
          <div className="flex justify-center w-full  mt-8 ">
            <button className=" bg-pink-700 text-white text-xl font-normal py-2 max-w-52 w-full rounded-full z-10">
              Descargar PDF
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full mx-auto p-3 lg:p-0 bg-gray-100">
        <img src="/leopardo.png" className='absolute hidden lg:block lg:w-64 xl:w-70 2xl:w-80 h-auto top-0 right-0' alt="" />
        <div className="w-full mx-auto md:w-9/12 max-w-7xl flex flex-col md:flex-row-reverse gap-8 my-10 p-8 md:p-0  ">
          <div className="w-full z-10">
            <img src='/conoce-2.png' className='w-full h-full object-cover ' alt="video" />
          </div>

          <div className="w-full flex flex-col justify-center">
            <h2 className="text-blue-500 text-2xl mb-5 lg:mb-3 text-center lg:text-left">
              Reserva tu Hotel
            </h2>
            <p className=" text-gray-600 text-base lg:text-lg text-justify">
              Lorem Ipsum es simplemente texto de relleno de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde la década de 1500, cuando un impresor desconocido tomó una galera de tipos y la mezcló para hacer un libro de muestras tipográficas.
            </p>
            <div className="flex justify-center w-full  mt-8 ">
              <button className=" bg-pink-700 text-white text-xl font-normal py-2 max-w-52 w-full rounded-full z-10">
                Ver Hoteles
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full md:w-9/12 mt-5 max-w-7xl mx-auto p-0 lg:p-0">
        <div className="w-full mx-auto">
          <Swiper
            style={{
              '--swiper-navigation-color': '#6CBE4C',
              '--swiper-navigation-size': '20px',
              '--swiper-pagination-color': '#6CBE4C',
              '--swiper-pagination-active-color': '#6CBE4C',
              '--swiper-pagination-background': '#fff',
              '--swiper-pagination-active-background': '#fff',
              '--swiper-pagination-border-color': '#fff',
              '--swiper-pagination-size': '10px',
              '--swiper-pagination-spacing': '10px',
              '--swiper-pagination-bullet-size': '10px'
            }}
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            loop={true}
            pagination={{
              clickable: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10
              }
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" pb-10 pt-3">
                <img src="/avianca-1.png" className='w-full h-auto' alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" pb-10 pt-3">
                <img src="/avianca-2.png" className='w-full h-auto' alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" pb-10 pt-3">
                <img src="/avianca-3.png" className='w-full h-auto' alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-7 p-8">
          <h2 className="text-green-400 text-2xl mb-5 lg:mb-3 text-left">
            Avianca
          </h2>
          <p className=" text-gray-600 text-base lg:text-lg text-justify">
            Lorem Ipsum es simplemente texto de relleno de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde la década de 1500, cuando un impresor desconocido tomó una galera de tipos y la mezcló para hacer un libro de muestras tipográficas.
          </p>
          <div className="flex justify-center w-full  mt-8 ">
            <button className=" bg-pink-700 text-white text-xl font-normal py-2 max-w-52 w-full rounded-full z-10">
              Descargar PDF
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-9/12  w-full border-b border-gray-500 mt-10"></div>
    </section >
  )
}

export default Conoce
