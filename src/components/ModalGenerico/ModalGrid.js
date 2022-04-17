import React, { useEffect, useRef } from 'react'
import ModalCustomer from './Modal'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'
import { useRouter } from 'next/router'

const ModalGrid = ({ isOpen, closeModal, data, initialSlide, size }) => {
  const { locale } = useRouter();
  const swiper = useRef(null)
  const setSwiper = (newSwiper) => {
    swiper.current = newSwiper
  }

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
  useEffect(() => {
    if (swiper.current) {
      swiper.current.slideTo(initialSlide)
    }
  }, [initialSlide])
  return (
    <>
      <ModalCustomer isOpen={isOpen} closeModal={closeModal} size={size}>
        <div className="sm:px-2 pt-6 max-w-140">
          <Swiper
              style={{
               '--swiper-navigation-color': '#C7C7C7'
             }} 
            onSwiper={setSwiper}
            // loop={true}
            grabCursor={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false
            // }}
            /*    slidesPerView={1}
               spaceBetween={30} */
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className='mySwiper'
          >
            {data.map((item, index) => (
              <SwiperSlide key={item?.blogId} >
                <div className="w-full mx-auto max-w-lg overflow-hidden sm:px-8" >
                  <div className="relative">
                    <img className="w-full h-90 object-cover" src={item?.imagenPrincipal.url} alt={item?.imagenPrincipal.descripcion} />
                    {/* <div className="absolute bottom-0 w-full px-4 py-1 bg-gray-600 bg-opacity-80 text-white ">
                      <h3 className='text-xl '>Visítanos en</h3>
                      <h3 className='text-lg font-extralight'>IPPE 2022 - Booth B6981 </h3>
                    </div> */}
                  </div>
                  <div className='relative px-6 pt-4 pb-10 rounded-b-2xl'>
                    {/* <div className="">
                      <h6 className="text-sm font-medium text-blue-500">Día {index + 1}</h6>
                    </div> */}
                    <div className="font-bold text-xl mb-2">{tituloPorIdioma(item)}</div>
                    <p className="font-light text-sm lg:text-base mt-4  text-justify">
                      {descripcionPorIdioma(item)}
                    </p>
                    <img src="/LineaCardIzq.svg" className='absolute -bottom-2 right-0' alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ModalCustomer>
    </>
  )
}

export default ModalGrid
