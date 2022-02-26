/* import { useState } from 'react' */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation, Autoplay } from 'swiper'

const Patrocinadores = () => {
  /* const [width, setWidth] = useState(true)

  const handleWidth =()=>{
    if(window.innerWidth < 768){
      setWidth(false)
    }else{
      setWidth(true)
    }
  } */
  return (
    <section className="relative bg-gray-50 flex flex-col justify-center items-center py-8">
      <div className="w-full md:w-9/12 mt-5 max-w-7xl mx-auto p-0 lg:p-0">
        <h6 className="text-3xl lg:text-4xl text-center font-normal mb-8 text-green-300">
          PATROCINADORES
        </h6>

        {/* slider en mobile */}
        <div className="">
          <Swiper
            style={{
              '--swiper-navigation-color': '#C4C4C4',
              height: '100%'
            }}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
                navigation: false

              }
            }}
            modules={[Autoplay, Navigation]}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className="mx-15 md:mx-0 lg:mx-0">
                <img src="/logo-ovum.png" className='mx-auto filter grayscale w-5/6  h-auto' alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-15 md:mx-0">
                <img src="/logo-ovum.png" className='mx-auto filter grayscale w-5/6 h-auto' alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-15 md:mx-0">
                <img src="/logo-ovum.png" className='mx-auto filter grayscale w-5/6 h-auto' alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-15 md:mx-0">
                <img src="/logo-ovum.png" className='mx-auto filter grayscale w-5/6 h-auto' alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-15 md:mx-0">
                <img src="/logo-ovum.png" className='mx-auto filter grayscale w-5/6 h-auto' alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Patrocinadores
