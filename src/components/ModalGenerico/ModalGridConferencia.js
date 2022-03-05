import React, { useEffect, useRef } from 'react'
import ModalCustomer from './Modal'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

const ModalGridConferencia = ({ isOpen, closeModal, data, initialSlide, size }) => {
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
        <div className="max-w-120 px-0">
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
                <div className=" mx-auto w-full  h-auto overflow-hidden " >
                  <div className='relative  pt-4 px-8 sm:mx-12 pb-10 rounded-b-2xl'>
                    <div className="">
                      <h6 className="text-sm font-medium text-blue-500">{item.dia}</h6>
                    </div>
                    <div className="font-bold text-xl mb-2">{item.title}</div>
                    <p className="font-light text-sm lg:text-base mt-4 text-justify">
                      {item.text}
                    </p>
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

export default ModalGridConferencia
