import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination } from 'swiper'
/* import Button from '../../components/buttons/Button' */

const data = [{
  id: 1,
  dia: 'MARTES 6',
  boxTitle1: 'Feria',
  boxText1: '8:00 - 21:00',
  boxTitle2: 'Conferencias',
  boxText2: '8:10 - 13:30',
  almuerzo: 'Almuerzo 12:00 - 15:00',
  boxTitle3: 'Conferencias de Patrocinadores y Auspiciadores',
  boxText3: '14:30 - 17:30',
  boxTitle4: ['Inauguración protocolar', 'Coctel inauguración'],
  boxText4: ['17: 45 - 18: 00', '18: 00 - 21: 00']
},
{
  id: 2,
  dia: 'MIERCOLES 7',
  boxTitle1: 'Feria',
  boxText1: '8:00 - 18:00',
  boxTitle2: 'Conferencias',
  boxText2: '8:10 - 13:30',
  almuerzo: 'Almuerzo 12:00 - 15:00',
  boxTitle3: 'Conferencias de Patrocinadores y Auspiciadores',
  boxText3: '14:30 - 17:30',
  boxTitle4: ['Inauguración protocolar', 'Coctel inauguración'],
  boxText4: ['17: 45 - 18: 00', '18: 00 - 21: 00']
},
{
  id: 3,
  dia: 'JUEVES 8',
  boxTitle1: 'Feria',
  boxText1: '8:00 - 18:00',
  boxTitle2: 'Conferencias',
  boxText2: '8:10 - 13:30',
  almuerzo: 'Almuerzo 12:00 - 15:00',
  boxTitle3: 'Conferencias de Patrocinadores y Auspiciadores',
  boxText3: '14:30 - 17:30',
  boxTitle4: ['Inauguración protocolar', 'Coctel inauguración'],
  boxText4: ['17: 45 - 18: 00', '18: 00 - 21: 00']
},
{
  id: 4,
  dia: 'VIERNES 9',
  boxTitle1: 'Feria',
  boxText1: '8:00 - 17:00',
  boxTitle2: 'Conferencias',
  boxText2: '8:10 - 13:30',
  almuerzo: 'Almuerzo 12:00 - 15:00',
  boxTitle3: 'Conferencias de Patrocinadores y Auspiciadores',
  boxText3: '14:30 - 17:30',
  boxTitle4: ['Inauguración protocolar', 'Coctel inauguración'],
  boxText4: ['17: 45 - 18: 00', '18: 00 - 21: 00']
}
]

const bgColor = (id) => {
  if (id === 1) {
    return 'bg-green-100'
  } else if (id === 2) {
    return 'bg-brown-300'
  } else if (id === 3) {
    return 'bg-purple-300'
  } else if (id === 4) {
    return 'bg-blue-300'
  }
}
const Programa = () => {
  return (
    <section className="relative bg-gray-100 flex flex-col justify-center items-center py-14">
      <div className="w-full md:w-9/12 mt-5 max-w-7xl mx-auto p-8 lg:p-0 bg-gray-100 lg:bg-white lg:shadow-xl rounded-2xl z-99">
        <h6 className="hidden lg:block text-3xl lg:text-4xl text-center font-medium mb-4 text-gray-600 mt-10">
          PROGRAMA
        </h6>
        <div className="absolute top-0 -left-20">
          <img src="/LineaConferenciaIzq.svg" className='w-60 md:w-60 ' alt="" />
        </div>
        <div className="hidden lg:grid grid-cols-12  gap-2  px-5 pt-3 pb-10 z-10">
          <div className="col-span-3">
            <h2 className='flex justify-center items-center font-medium text-xl bg-green-100 text-center mb-2  py-1 h-11'>MARTES 6</h2>
            <div className="mt-4">
              <div className='flex flex-col justify-center items-center mb-2 bg-green-100 bg-opacity-70 py-1 h-20'>
                <p className=' font-light text-black text-lg text-center'>Feria</p>
                <p className='font-normal text-lg text-center'> 8:00 - 21:00</p>
              </div>
              <div className='flex flex-col justify-center items-center mb-2 bg-green-100 bg-opacity-70 py-1 h-20'>
                <p className=' font-light text-black text-lg text-center'>Conferencias</p>
                <p className='font-normal text-lg text-center'>8:10 - 13:30</p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <h2 className='flex justify-center items-center font-medium text-xl bg-brown-300 text-center mb-2  py-1 h-11'>MIÉRCOLES 7</h2>
            <div className="mt-4">
              <div className='flex flex-col justify-center items-center mb-2 bg-brown-300 bg-opacity-70 py-1 h-20'>
                <p className=' font-light text-black text-lg text-center'>Feria</p>
                <p className='font-normal text-lg text-center'> 8:00 - 21:00</p>
              </div>
              <div className='flex flex-col justify-center items-center mb-2 bg-brown-300 bg-opacity-70 py-1 h-20'>
                <p className=' font-light text-black text-lg text-center'>Conferencias</p>
                <p className='font-normal text-lg text-center'>8:10 - 13:30</p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <h2 className='flex justify-center items-center font-medium text-xl bg-purple-300 text-center mb-2  py-1 h-11'>JUEVES 8</h2>
            <div className="mt-4">
              <div className='flex flex-col justify-center items-center mb-2 bg-purple-300 bg-opacity-70 py-1 h-20'>
                <p className=' font-light text-black text-lg text-center'>Feria</p>
                <p className='font-normal text-lg text-center'> 8:00 - 21:00</p>
              </div>
              <div className='flex flex-col justify-center items-center mb-2 bg-purple-300 bg-opacity-70 py-1 h-20'>
                <p className=' font-light text-black text-lg text-center'>Conferencias</p>
                <p className='font-normal text-lg text-center'>8:10 - 13:30</p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <h2 className='flex justify-center items-center font-medium text-xl bg-blue-300 text-center mb-2  py-1 h-11'>VIERNES 9</h2>
            <div className="mt-4">
              <div className='flex flex-col justify-center items-center mb-2 bg-blue-300 bg-opacity-70 py-1 h-20'>
                <p className=' font-light text-black text-lg text-center'>Feria</p>
                <p className='font-normal text-lg text-center'> 8:00 - 21:00</p>
              </div>
              <div className='flex flex-col justify-center items-center mb-2 bg-blue-300 bg-opacity-70 py-1 h-20'>
                <p className=' font-light text-black text-lg text-center'>Conferencias</p>
                <p className='font-normal text-lg text-center'>8:10 - 13:30</p>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="flex justify-center text-blue-500 items-center font-medium text-lg uppercase text-center mb-2 py-1 h-11">
              Almuerzo 12:00 - 15:00
            </div>
          </div>
          <div className="col-span-3">
            <div className='flex flex-col justify-center items-center mb-2 bg-opacity-70 px-3 py-1 h-32 bg-green-100'>
              <p className=' font-light text-black text-lg text-center'>Conferencias de Patrocinadores y Auspiciadores</p>
              <p className='font-normal text-lg text-center'> 14:30 - 17:30</p>
            </div>
            <div className='flex flex-col justify-center items-center mb-2 bg-opacity-70 px-3 py-1 h-40 bg-green-100'>
              <p className=' font-light text-black text-lg text-center'>Inauguración protocolar</p>
              <p className='font-normal text-lg text-center'>(17:45 - 18:00)</p>
              <p className=' font-light text-black text-lg text-center'>Coctel inauguración</p>
              <p className='font-normal text-lg text-center'>(18:00 - 21:00)</p>
            </div>
          </div>
          <div className="col-span-3">
            <div className='flex flex-col justify-center items-center mb-2 bg-opacity-70 px-3 py-1 h-32 bg-brown-300'>
              <p className=' font-light text-black text-lg text-center'>Conferencias de Patrocinadores y Auspiciadores</p>
              <p className='font-normal text-lg text-center'> 14:30 - 17:30</p>
            </div>
            <div className='flex flex-col justify-center items-center mb-2 bg-opacity-70 px-3 py-1 h-40 bg-brown-300'>
              <p className=' font-light text-black text-lg text-center'>Inauguración protocolar</p>
              <p className='font-normal text-lg text-center'>(17:45 - 18:00)</p>
              <p className=' font-light text-black text-lg text-center'>Coctel inauguración</p>
              <p className='font-normal text-lg text-center'>(18:00 - 21:00)</p>
            </div>
          </div>
          <div className="col-span-3">
            <div className='flex flex-col justify-center items-center mb-2 bg-opacity-70 px-3 py-1 h-32 bg-purple-300'>
              <p className=' font-light text-black text-lg text-center'>Conferencias de Patrocinadores y Auspiciadores</p>
              <p className='font-normal text-lg text-center'> 14:30 - 17:30</p>
            </div>
            <div className='flex flex-col justify-center items-center mb-2 bg-opacity-70 px-3 py-1 h-40 bg-purple-300'>
              <p className=' font-light text-black text-lg text-center'>Premiaciones</p>
              <p className='font-normal text-lg text-center'>17:00 - 19:00</p>

            </div>
          </div>
          <div className="col-span-3">
            <div className='flex flex-col justify-center items-center mb-2 bg-opacity-70 px-3 py-1 h-32 bg-blue-300'>
              <p className=' font-light text-black text-lg text-center'>Conferencias de Patrocinadores y Auspiciadores</p>
              <p className='font-normal text-lg text-center'> 14:30 - 17:30</p>
            </div>
            <div className='flex flex-col justify-center items-center mb-2 bg-opacity-70 px-3 py-1 h-40 bg-blue-300'>
              <p className=' font-light text-black text-lg text-center'>Inauguración protocolar</p>
              <p className='font-normal text-lg text-center'>(17:45 - 18:00)</p>
              <p className=' font-light text-black text-lg text-center'>Coctel inauguración</p>
              <p className='font-normal text-lg text-center'>(18:00 - 21:00)</p>
            </div>
          </div>
        </div>
        {/* slider en mobile */}
        <div className="lg:hidden">
          <Swiper
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
                spaceBetween: 30
              }
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {data.map(item => (
              <SwiperSlide key={item.id}>
                <div className=" mx-auto bg-white max-w-sm rounded-2xl overflow-hidden shadow-md mb-4 mt-2">
                  <div className=' px-3 pt-6 pb-10'>
                    <div className="h-13">
                      {item.id === 1 && (
                        <h6 className="text-3xl lg:text-4xl text-center font-medium mb-8 text-gray-600">
                          PROGRAMA
                        </h6>
                      )}
                    </div>
                    <h2 className={`flex justify-center items-center font-medium text-2xl text-center mb-2 ${bgColor(item.id)} py-1 h-11`}>{item.dia}</h2>
                    <div className="mt-5">
                      <div className={`flex flex-col justify-center items-center mb-2 ${bgColor(item.id)} bg-opacity-70 py-1 h-20`}>
                        <p className=' font-light text-black text-lg text-center'>{item.boxTitle1}</p>
                        <p className='font-normal text-lg text-center'> {item.boxText1}</p>
                      </div>
                      <div className={`flex flex-col justify-center items-center mb-2 ${bgColor(item.id)} bg-opacity-70 py-1 h-20`}>
                        <p className=' font-light text-black text-lg text-center'>{item.boxTitle2}</p>
                        <p className='font-normal text-lg text-center'>{item.boxText2}</p>
                      </div>
                    </div>
                    <div className="flex justify-center text-blue-500 items-center font-medium text-lg uppercase text-center mb-2 py-1 h-11">
                      {item.almuerzo}
                    </div>
                    <div className={`flex flex-col justify-center items-center mb-2 ${bgColor(item.id)} bg-opacity-70 px-3 py-1 h-32`}>
                      <p className=' font-light text-black text-lg text-center'>{item.boxTitle3}</p>
                      <p className='font-normal text-lg text-center'>{item.boxText3}</p>
                    </div>
                    <div className={`flex flex-col justify-center items-center mb-2 ${bgColor(item.id)} bg-opacity-70 px-3 py-1 h-40`}>
                      <p className=' font-light text-black text-lg text-center'>Inauguración protocolar</p>
                      <p className='font-normal text-lg text-center'>(17:45 - 18:00)</p>
                      <p className=' font-light text-black text-lg text-center'>Coctel inauguración</p>
                      <p className='font-normal text-lg text-center'>(18:00 - 21:00)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* fin slider en mobile */}
      </div>
    </section>
  )
}

export default Programa
