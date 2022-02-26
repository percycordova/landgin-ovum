import React, { useEffect, useState } from 'react'
import ModalCustomer from './Modal'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Virtual } from 'swiper'

const ModalGrid = ({ isOpen, closeModal, data, initialSlide }) => {
  console.log(initialSlide)
  return (
    <>
      <ModalCustomer isOpen={isOpen} closeModal={closeModal}>
        <div className="">
          <Swiper
            style={{
              '--swiper-navigation-color': '#C4C4C4',
              height: '100%'
            }}
            initialSlide={initialSlide}
            // loop={true}
            // grabCursor={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false
            // }}
            slidesPerView={1}
            spaceBetween={30}
            virtual
            modules={[Navigation, Virtual]}
            className='mySwiper'
          >
            {data.map(item => (
              <SwiperSlide key={item.id} virtualIndex={item.id}>
                <div className=" mx-auto max-w-sm rounded-2xl overflow-hidden border cursor-pointer" >
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ModalCustomer>
    </>
  )
}

export default ModalGrid
