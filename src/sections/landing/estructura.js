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
  img: '/estructura-6.png',
  title: 'ESTRUCTURA',
  text: 'Lorem Ipsum es simplemente texto de relleno de la industria de la impresión y'
},
{
  id: 2,
  img: '/estructura-1.png',
  title: 'CONFERENCIAS',
  text: 'Lorem Ipsum es simplemente texto de relleno de la industria de la impresión y'
},
{
  id: 3,
  img: '/estructura-2.png',
  title: 'FERIA',
  text: 'Lorem Ipsum es simplemente texto de relleno de la industria de la impresión y'
},
{
  id: 4,
  img: '/estructura-3.png',
  title: 'INVESTIGACIÓN',
  text: 'Lorem Ipsum es simplemente texto de relleno de la industria de la impresión y'
},
{
  id: 5,
  img: '/estructura-4.png',
  title: 'SALAS',
  text: 'Lorem Ipsum es simplemente texto de relleno de la industria de la impresión y'
},
{
  id: 6,
  img: '/estructura-5.png',
  title: 'TURISMO',
  text: 'Lorem Ipsum es simplemente texto de relleno de la industria de la impresión y'
}
]
const textColor = (id) => {
  if (id === 1) {
    return 'text-white'
  } else if (id === 2) {
    return 'text-black'
  } else if (id === 3) {
    return 'text-black'
  } else if (id === 4) {
    return 'text-white'
  } else if (id === 5) {
    return 'text-white'
  } else if (id === 6) {
    return 'text-black'
  }
}

const bgColor = (id) => {
  if (id === 1) {
    return 'bg-green-800'
  } else if (id === 2) {
    return 'bg-green-200'
  } else if (id === 3) {
    return 'bg-yellow-700'
  } else if (id === 4) {
    return 'bg-blue-500'
  } else if (id === 5) {
    return 'bg-pink-700'
  } else if (id === 6) {
    return 'bg-yellow-300'
  }
}

const Estructura = () => {
  return (
    <section className="relative bg-white flex flex-col justify-center items-center py-14" id='estructura'>
      <div className="w-full md:w-9/12 mt-5 max-w-7xl mx-auto p-8 lg:p-0">
        <h6 className="text-3xl lg:text-4xl text-center font-medium mb-8 text-blue-500">
          ESTRUCTURA
        </h6>
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-4">
          {data.map(item => (
            <div key={item.id} className=" mx-auto max-w-sm rounded-2xl overflow-hidden ">
              <img className="w-full" src={item.img} alt="Sunset in the mountains" />
              <div className={`relative px-6 pt-4 pb-10 ${bgColor(item.id)} ${textColor(item.id)} rounded-b-2xl`}>
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="font-light text-sm lg:text-lg w-4/5 text-justify">
                  {item.text}
                </p>
                <img src="/LineaCardIzq.svg" className='absolute -bottom-2 right-0' alt="" />
              </div>
            </div>
          ))}
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
                <div className="mx-auto max-w-sm rounded-2xl overflow-hidden ">
                  <img className="w-full" src={item.img} alt="Sunset in the mountains" />
                  <div className={`px-6 pt-4 pb-10 ${bgColor(item.id)} ${textColor(item.id)} rounded-b-2xl`}>
                    <div className="font-bold text-xl mb-2">{item.title}</div>
                    <p className="font-light text-sm lg:text-base w-4/5 text-justify">
                      {item.text}
                    </p>
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

export default Estructura
