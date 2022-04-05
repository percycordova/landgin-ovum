import React, { useEffect, useRef } from 'react'
import ModalCustomer from './Modal'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

const ModalGridConferencista = ({ isOpen, closeModal, data, initialSlide, size }) => {
  const swiper = useRef(null)
  const setSwiper = (newSwiper) => {
    swiper.current = newSwiper
  }
  useEffect(() => {
    if (swiper.current) {
      swiper.current.slideTo(initialSlide)
    }
  }, [initialSlide])
  return (
    <>
      <ModalCustomer isOpen={isOpen} closeModal={closeModal} size={size}>
        <div className="mt-7 max-w-100">
          <Swiper
            /*  style={{
               '--swiper-navigation-color': '#C4C4C4'
             }} */
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
            modules={[Navigation]}
            className='mySwiper'
          >
            {data.map(item => (
              <SwiperSlide key={item.conferencistaId} >
                <div className="flex items-center justify-center ">
                  <div className="relative bg-white font-semibold text-center rounded-3xl border  px-5 pt-5 pb-10 max-w-xs">
                    <img className="mb-3 w-60 h-60 rounded-full  mx-auto" src={item?.imagenPrincipal.url} alt={item?.imagenPrincipal.descripcion} />
                    <h1 className="text-2xl text-black"> {item?.nombreEspa}</h1>
                    <p className="text-lg font-extralight text-black mt-4">{item?.descripcionEspa}</p>
                    <div className="absolute bottom-0 left-0 h-5 w-full bg-green-400 rounded-b-full"></div>
                  </div>
                </div>

                {/* <div className=" mx-auto max-w-80 h-72 rounded-2xl overflow-hidden border cursor-pointer" onClick={onClick}>
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
                </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ModalCustomer>
    </>
  )
}

export default ModalGridConferencista
