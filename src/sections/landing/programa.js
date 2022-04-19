import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
/* import Button from '../../components/buttons/Button' */

const Programa = ({ idiomas }) => {
  const { Programa } = idiomas
  const { titulo, martes, miercoles, jueves, viernes } = Programa
  const [isMounted, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <section
      className="relative bg-gray-100 flex flex-col justify-center items-center py-14"
      id="programa"
    >
      <div className="w-full md:max-w-256 mt-5 max-w-7xl mx-auto p-8 lg:p-0 bg-gray-100 lg:bg-white lg:shadow-xl rounded-2xl z-99">
        <h6 className="text-2xl sm:text-3.5xl   text-center font-bold mb-4 text-gray-600 mt-10">
          {titulo}
        </h6>
        {/* <div className="absolute top-0 -left-20">
          <img src="/LineaConferenciaIzq.svg" className='w-60 md:w-60 ' alt="" />
        </div> */}

        {isMounted && (
          <div className="hidden lg:grid grid-cols-12  gap-x-2  px-5 pt-3 pb-10 z-10">
            <div className="col-span-3 mb-1">
              <article className="flex flex-col h-36 justify-center items-center bg-green-400 text-center text-white">
                <p className="text-xl font-bold">{martes.dia}</p>
                <h5 className="text-6xl font-extrabold">6</h5>
                <p className="text-xl font-bold">{martes.mes}</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center bg-green-400 text-center text-white">
                <p className="text-xl font-bold">{miercoles.dia}</p>
                <h5 className="text-6xl font-extrabold">7</h5>
                <p className="text-xl font-bold">{miercoles.mes}</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center bg-green-400 text-center text-white">
                <p className="text-xl font-bold">{jueves.dia}</p>
                <h5 className="text-6xl font-extrabold">8</h5>
                <p className="text-xl font-bold">{jueves.mes}</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center bg-green-400 text-center text-white">
                <p className="text-xl font-bold">{viernes.dia}</p>
                <h5 className="text-6xl font-extrabold">9</h5>
                <p className="text-xl font-bold">{viernes.mes}</p>
              </article>
            </div>

            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center px-10 bg-green-500 text-center text-white">
                <p className="text-lg ">{martes.evento1}</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center px-10 bg-secondary-650 text-center text-white">
                <p className="text-lg ">{miercoles.evento1}</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center px-10 bg-secondary-650 text-center text-white">
                <p className="text-lg ">{jueves.evento1}</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center px-10 bg-secondary-650 text-center text-white">
                <p className="text-lg ">{viernes.evento1}</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center px-10 bg-secondary-650 text-center text-white">
                <p className="text-lg ">{martes.evento2}</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center px-10 bg-green-500  text-center text-white">
                <p className="text-lg ">{miercoles.evento2}</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center px-10 bg-green-500  text-center text-white">
                <p className="text-lg ">{jueves.evento2}</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center px-10 bg-green-500  text-center text-white">
                <p className="text-lg ">{viernes.evento2}</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-350 text-center">
                <p className="text-lg font-bold">{martes.evento3}</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-350 text-center">
                <p className="text-lg font-bold">{miercoles.evento3}</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-350 text-center">
                <p className="text-lg font-bold">
                {jueves.evento3}
                </p>
                
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-350 text-center">
                <p className="text-lg font-bold">{viernes.evento3}</p>
              </article>
            </div>
          </div>
        )}
        {/* slider en mobile */}
        {isMounted && <div className="lg:hidden">
          <Swiper
            style={{
              "--swiper-navigation-color": "#6CBE4C",
              "--swiper-pagination-color": "#6CBE4C",
              "--swiper-pagination-active-color": "#6CBE4C",
              "--swiper-pagination-background": "#fff",
              "--swiper-pagination-active-background": "#fff",
              "--swiper-pagination-border-color": "#fff",
              "--swiper-pagination-size": "10px",
              "--swiper-pagination-spacing": "10px",
              "--swiper-pagination-bullet-size": "10px",
            }}
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" mx-auto bg-white max-w-sm rounded-2xl overflow-hidden shadow-md mb-4 mt-2 ">
                <article className="flex flex-col mb-1 h-36 justify-center items-center bg-green-450 text-center text-white">
                  <p className="text-xl font-bold">{martes.dia}</p>
                  <h5 className="text-6xl font-extrabold">6</h5>
                  <p className="text-xl font-bold">{martes.mes}</p>
                </article>

                <article className="flex flex-col h-36 justify-center items-center px-10 bg-gray-800 text-center text-white">
                  <p className="text-lg ">{martes.evento1}</p>
                </article>

                <article className="flex flex-col h-36 justify-center items-center px-10 bg-secondary-650 text-center text-white">
                  <p className="text-lg ">{martes.evento2}</p>
                </article>
                <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-400 text-center">
                  <p className="text-lg font-bold">{martes.evento3}</p>
                </article>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" mx-auto bg-white max-w-sm rounded-2xl overflow-hidden shadow-md mb-4 mt-2">
                <article className="flex flex-col mb-1 h-36 justify-center items-center bg-green-450 text-center text-white">
                  <p className="text-xl font-bold">{miercoles.dia}</p>
                  <h5 className="text-6xl font-extrabold">7</h5>
                  <p className="text-xl font-bold">{miercoles.mes}</p>
                </article>

                <article className="flex flex-col h-36 justify-center items-center px-10 bg-secondary-650 text-center text-white">
                  <p className="text-lg ">{miercoles.evento1}</p>
                </article>

                <article className="flex flex-col h-36 justify-center items-center px-10 bg-gray-800 text-center text-white">
                  <p className="text-lg ">{miercoles.evento2}</p>
                </article>
                <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-400 text-center">
                  <p className="text-lg font-bold">{miercoles.evento3}</p>
                </article>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" mx-auto bg-white max-w-sm rounded-2xl overflow-hidden shadow-md mb-4 mt-2">
                <article className="flex flex-col mb-1 h-36 justify-center items-center bg-green-450 text-center text-white">
                  <p className="text-xl font-bold">{jueves.dia}</p>
                  <h5 className="text-6xl font-extrabold">8</h5>
                  <p className="text-xl font-bold">{jueves.mes}</p>
                </article>

                <article className="flex flex-col h-36 justify-center items-center px-10 bg-secondary-650 text-center text-white">
                  <p className="text-lg ">{jueves.evento1}</p>
                </article>

                <article className="flex flex-col h-36 justify-center items-center px-10 bg-gray-800 text-center text-white">
                  <p className="text-lg ">{jueves.evento2}</p>
                </article>
                <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-400 text-center">
                  <p className="text-lg font-bold">
                  {jueves.evento3}
                  </p>
                </article>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" mx-auto bg-white max-w-sm rounded-2xl overflow-hidden shadow-md mb-4 mt-2">
                <article className="flex flex-col mb-1 h-36 justify-center items-center bg-green-450 text-center text-white">
                  <p className="text-xl font-bold">{viernes.dia}</p>
                  <h5 className="text-6xl font-extrabold">9</h5>
                  <p className="text-xl font-bold">{viernes.mes}</p>
                </article>

                <article className="flex flex-col h-36 justify-center items-center px-10 bg-secondary-650 text-center text-white">
                  <p className="text-lg ">{viernes.evento1}</p>
                </article>

                <article className="flex flex-col h-36 justify-center items-center px-10 bg-gray-800 text-center text-white">
                  <p className="text-lg ">{viernes.evento2}</p>
                </article>
                <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-400 text-center">
                  <p className="text-lg font-bold">{viernes.evento3}</p>
                </article>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>}
        {/* fin slider en mobile */}
      </div>
    </section>
  );
};

export default Programa;
