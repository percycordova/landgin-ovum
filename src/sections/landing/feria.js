import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination } from 'swiper'
const Feria = () => {
  return (
    <section className="relative bg-white flex flex-col justify-center items-center pb-16">
      <div className="w-full md:max-w-256 mt-5 max-w-7xl mx-auto p-8 lg:p-0">
        <h6 className="text-3xl lg:text-4xl text-center font-medium mb-8 ">
        FERIA OVUM 2022
        </h6>

        {/* slider en mobile */}
        <div className="w-full flex flex-col lg:flex-row gap-x-5">
          <div className="w-full lg:w-3/4">
            <Swiper
              style={{
                '--swiper-navigation-color': '#6CBE4C',
                '--swiper-pagination-color': '#6CBE4C',
                height: '100%'
              }}
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              pagination={{
                clickable: true
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 10
                }
              }}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/croquis.png" className='w-full h-full' alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/croquis.png" className='w-full h-full' alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/croquis.png" className='w-full h-full' alt="" />
              </SwiperSlide>
              <div id="prev1" className="swiper-button-prev"></div>
              <div id="next1" className="swiper-button-next"></div>
            </Swiper>
          </div>
          <div className="w-full max-w-sm mx-auto lg:w-1/4">
            <div className="w-full h-120 bg-gray-100 p-5 mx-auto max-w-full lg:max-w-full">
              <img src="/logo-ovum.png" alt="" className=' w-full h-auto' />
              <p className='text-black text-xl font-medium'>
                Ovum 2022 XXVII Congreso Latinoamericano de Avicultura
              </p>
              <span className='text-base text-blue-500 mt-3'>
                Stand 10 - Salón  A
              </span>
              <p className='text-sm text-blue-500 '>
                Patrocinador
              </p>
              <p className='text-black font-light text-justify text-base'>
                www.elovum.com
              </p>
              <p className='text-black font-light text-justify text-sm'>
                Breve descripción de empresa Lorem Ipsum es simplemente texto de relleno de la industria de
                la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar
                de la industria desde la década de 1500,
              </p>
            </div>
          </div>
        </div >
        {/* fin slider en mobile */}
        <div div className="flex justify-center mt-8 " >
          <button className="bg-pink-700 text-white text-lg font-normal py-1 max-w-52 w-full rounded-full z-10">
            Ver todo
          </button>
        </div >
      </div >
    </section >
  )
}

export default Feria
