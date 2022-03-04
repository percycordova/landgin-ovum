import React from 'react'
import Link from 'next/link'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination } from 'swiper'
const Conferencia = () => {
  return (
    <section className="relative bg-gray-100 flex flex-col justify-center items-center py-16 px-2">
      <div className="absolute bottom-0 left-0">
        <img src="/LineaConferenciaIzq.svg" className='w-30 md:w-40 ' alt="" />
      </div>
      <div className="absolute top-0 right-0">
        <img src="/LineaConferenciaDer.svg" className='hidden md:block md:w-30 lg:w-36' alt="" />
      </div>
      <div className="w-full md:w-9/12 mt-5 max-w-7xl mx-auto p-0 lg:p-0">
        <h6 className="text-3xl lg:text-4xl text-center font-medium mb-8 text-green-300">
          CONFERENCIAS
        </h6>

        {/* slider en mobile */}
        <div className="">
          <Swiper
            style={{
              '--swiper-navigation-color': '#6CBE4C',
              '--swiper-pagination-color': '#6CBE4C'
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
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: -32

              }
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >

            <SwiperSlide>
              <div className="w-full p-2 h-80 px-8 pb-1">
                <div className=" bg-white  h-full px-6 lg:px-8 py-5 rounded-b-3xl rounded-tl-3xl shadow-md ">
                  <div className="">
                    <h4 className='text-green-300 '>Dia 1</h4>
                    <h2 className="text-xl pt-3 pb-6">El consumidor del futuro</h2>
                    <p className='text-base text-justify pb-5'>
                      “Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full p-2 h-80 px-8">
                <div className=" bg-white  h-full px-6 lg:px-8 py-5 rounded-b-3xl rounded-tl-3xl shadow-md ">
                  <div className="">
                    <h4 className='text-green-300 '>Dia 1</h4>
                    <h2 className="text-xl pt-3 pb-6">El consumidor del futuro</h2>
                    <p className='text-base text-justify pb-5'>
                      “Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full p-2 h-80 px-8">
                <div className=" bg-white  h-full px-6 lg:px-8 py-5 rounded-b-3xl rounded-tl-3xl shadow-md ">
                  <div className="">
                    <h4 className='text-green-300 '>Dia 1</h4>
                    <h2 className="text-xl pt-3 pb-6">El consumidor del futuro</h2>
                    <p className='text-base text-justify pb-5'>
                      “Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full p-2 h-80 px-8">
                <div className=" bg-white  h-full px-6 lg:px-8 py-5 rounded-b-3xl rounded-tl-3xl shadow-md ">
                  <div className="">
                    <h4 className='text-green-300 '>Dia 2</h4>
                    <h2 className="text-xl pt-3 pb-6">Tecnología para la industria Avícola</h2>
                    <p className='text-base text-justify pb-5'>
                      “Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full p-2 h-80 px-8 ">
                <div className=" bg-white  h-full px-6 lg:px-8 py-5 rounded-b-3xl rounded-tl-3xl shadow-md ">
                  <div className="">
                    <h4 className='text-green-300 '>Dia 3</h4>
                    <h2 className="text-xl pt-3 pb-6">La industria como aliada de la seguridad alimentaria</h2>
                    <p className='text-base text-justify pb-5'>
                      “Lider global del comportamiento del consumidor y comprador  global del comportamiento del consumidor y comprador”
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* fin slider en mobile */}
        <div className="flex justify-center mt-8 ">
          <Link href="/conferencias">
            <button className="bg-pink-700 text-white text-lg font-normal py-1 max-w-52 w-full rounded-full z-10">
              Ver todo
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Conferencia
