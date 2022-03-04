import React from 'react'
import Link from 'next/link'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper'
/* import Button from '../../components/buttons/Button' */

const LoUltimo = () => {
  return (
    <section className=" p-8 flex flex-col justify-center items-center">
      <div className="w-full md:w-9/12 mt-5 max-w-7xl mx-auto bg-white">
        <h6 className="text-3xl lg:text-4xl text-center font-medium mb-8 text-blue-500">
          LO ÚLTIMO
        </h6>
        {/* grid en lg */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-x-8 ">
            <div className="col-span-8 xl:col-span-8">
              <div className="relative">
                <div className="bg-indigo-300 w-full h-full">
                  <img src="/img-grid-1.png" className='object-cover h-160 w-full' />
                </div>
                <div className="absolute bottom-0 w-full px-10 py-2 bg-gray-600 bg-opacity-80 text-white ">
                  <h3 className='text-3xl font-semibold'>¡Equipo OVUM 2022</h3>
                  <h3 className='text-lg font-semibold'>presente en IPPE - Atlanta!</h3>
                </div>
              </div>
            </div>
            <div className="col-span-4 xl:col-span-4 ">
              <div className="flex flex-col gap-y-5">
                <div className="relative ">
                  <div className="bg-cover bg-center">
                    <img src="/img-slider.png" className='w-full h-50' />
                  </div>
                  <div className="absolute bottom-0 w-full px-4 py-1 bg-gray-600 bg-opacity-80 text-white ">
                    <h3 className='text-xl '>Visítanos en</h3>
                    <h3 className='text-lg font-semibold'>IPPE 2022 - Booth B6981 </h3>
                  </div>
                </div>
                <div className="relative">
                  <img src="/img-slider.png" className='w-full h-50 bg-cover' />
                  <div className="absolute bottom-0 w-full px-4 py-1 bg-gray-600 bg-opacity-80 text-white ">
                    <h3 className='text-xl font-semibold'>¡Vuelve </h3>
                    <h3 className='text-lg font-semibold'> el OVUM 2022!</h3>
                  </div>
                </div>
                <div className="relative">
                  <img src="/img-slider.png" className='w-full h-50 bg-cover' />
                  <div className="absolute bottom-0 w-full px-4 py-1 bg-gray-600 bg-opacity-80 text-white ">
                    <h3 className='text-xl font-semibold'>¡Vuelve </h3>
                    <h3 className='text-lg font-semibold'> el OVUM 2022!</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* fin grid en lg */}

        {/* slider en mobile */}
        <div className="lg:hidden">
          <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
              clickable: true
            }}
            /*   breakpoints={{
                440: {
                  slidesPerView: 1,
                  spaceBetween: 20
                }
              }} */
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative">
                <img src="/img-slider.png" className='w-full h-auto' />
                <div className="absolute bottom-0 w-full px-4 py-1 bg-gray-600 bg-opacity-80 text-white ">
                  <h3 className='text-base font-semibold'>¡Vuelve </h3>
                  <h3 className='text-lg font-semibold'> el OVUM 2022!</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img src="/img-slider.png" className='w-full h-auto' />
                <div className="absolute bottom-0 w-full px-4 py-1 bg-gray-600 bg-opacity-80 text-white ">
                  <h3 className='text-base font-semibold'>Visítanos en</h3>
                  <h3 className='text-lg font-semibold'> IPPE 2022 - Booth B6981 </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img src="/img-slider.png" className='w-full h-auto' />
                <div className="absolute bottom-0 w-full px-4 py-1 bg-gray-600 bg-opacity-80 text-white ">
                  <h3 className='text-base font-semibold'>Lanzamiento de</h3>
                  <h3 className='text-lg font-semibold'>OVUM 2022 en IBBE</h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* fin slider en mobile */}
        <div className="flex justify-center mt-8 ">
          <Link href="/lo-ultimo">
            <button className="bg-pink-700 text-white text-lg font-normal py-1 max-w-52 w-full rounded-full">
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LoUltimo
