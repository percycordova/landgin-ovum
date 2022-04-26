/* import { useState } from 'react' */
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import {Navigation, Autoplay} from 'swiper'

const Organizadores = ({idiomas}) => {
	const {titulo} = idiomas.Organizadores
	/* const [width, setWidth] = useState(true)

  const handleWidth =()=>{
    if(window.innerWidth < 768){
      setWidth(false)
    }else{
      setWidth(true)
    }
  } */
	return (
		<section className='relative bg-white flex flex-col justify-center items-center py-8'>
			<div className='w-full md:max-w-256 mt-5 max-w-7xl mx-auto p-0 lg:p-0'>
				<h6 className='text-3xl lg:text-3.5xl text-center font-bold mb-8 text-blue-500'>
					{titulo}
				</h6>
				<div className='flex justify-center flex-wrap items-center'>
					<img
						src='/organizadores__logo-asociacion.svg  '
						className=' lg:w-56 h-30 object-contain'
					/>
					<img
						src='/organizadores__logo-anavih.svg'
						className=' lg:w-47 h-30 object-contain'
					/>
				</div>
				{/* version desktop */}
				{/* <div className="hidden lg:grid grid-cols-4 gap-x-4 gap-y-10">
          <div className="">
            <img
              src="/logo-ovum.png"
              className="mx-auto filter grayscale w-5/6  h-auto"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="/logo-ovum.png"
              className="mx-auto filter grayscale w-5/6  h-auto"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="/logo-ovum.png"
              className="mx-auto filter grayscale w-5/6  h-auto"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="/logo-ovum.png"
              className="mx-auto filter grayscale w-5/6  h-auto"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="/logo-ovum.png"
              className="mx-auto filter grayscale w-5/6  h-auto"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="/logo-ovum.png"
              className="mx-auto filter grayscale w-5/6  h-auto"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="/logo-ovum.png"
              className="mx-auto filter grayscale w-5/6  h-auto"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="/logo-ovum.png"
              className="mx-auto filter grayscale w-5/6  h-auto"
              alt=""
            />
          </div>
        </div> */}
				{/* slider en mobile */}
				{/* <div className="lg:hidden">
          <Swiper
            style={{
              "--swiper-navigation-color": "#C4C4C4",
              height: "100%",
            }}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 7500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              380: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
                navigation: false,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="mx-4 lg:mx-0">
                <img
                  src="/logo-ovum.png"
                  className="mx-auto filter grayscale w-5/6  h-auto"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-4 lg:mx-0">
                <img
                  src="/logo-ovum.png"
                  className="mx-auto filter grayscale w-5/6 h-auto"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-4 lg:mx-0">
                <img
                  src="/logo-ovum.png"
                  className="mx-auto filter grayscale w-5/6 h-auto"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-4 lg:mx-0">
                <img
                  src="/logo-ovum.png"
                  className="mx-auto filter grayscale w-5/6 h-auto"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-4 lg:mx-0">
                <img
                  src="/logo-ovum.png"
                  className="mx-auto filter grayscale w-5/6 h-auto"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div> */}
			</div>
		</section>
	)
}

export default Organizadores
