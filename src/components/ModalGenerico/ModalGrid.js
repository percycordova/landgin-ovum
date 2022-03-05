import React, { useEffect, useRef } from 'react'
import ModalCustomer from './Modal'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

const ModalGrid = ({ isOpen, closeModal, data, initialSlide, size }) => {
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
        <div className="sm:px-2 pt-6 max-w-140">
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
              <SwiperSlide key={item.id} >
                <div className="w-full mx-auto max-w-lg overflow-hidden sm:px-8" >
                  <div className="relative">
                    <img className="w-full h-90 object-cover" src={item.img} alt="Sunset in the mountains" />
                    <div className="absolute bottom-0 w-full px-4 py-1 bg-gray-600 bg-opacity-80 text-white ">
                      <h3 className='text-xl '>Visítanos en</h3>
                      <h3 className='text-lg font-extralight'>IPPE 2022 - Booth B6981 </h3>
                    </div>
                  </div>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ModalCustomer>
    </>
  )
}

export default ModalGrid
