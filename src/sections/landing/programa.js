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

const Programa = () => {
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
          PROGRAMA GENERAL
        </h6>
        {/* <div className="absolute top-0 -left-20">
          <img src="/LineaConferenciaIzq.svg" className='w-60 md:w-60 ' alt="" />
        </div> */}

        {isMounted && (
          <div className="hidden lg:grid grid-cols-12  gap-x-2  px-5 pt-3 pb-10 z-10">
            <div className="col-span-3 mb-1">
              <article className="flex flex-col h-36 justify-center items-center bg-green-400 text-center text-white">
                <p className="text-xl font-bold">MARTES</p>
                <h5 className="text-6xl font-extrabold">6</h5>
                <p className="text-xl font-bold">De Septiembre</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center bg-green-400 text-center text-white">
                <p className="text-xl font-bold">MIÉRCOLES</p>
                <h5 className="text-6xl font-extrabold">7</h5>
                <p className="text-xl font-bold">De Septiembre</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center bg-green-400 text-center text-white">
                <p className="text-xl font-bold">JUEVES</p>
                <h5 className="text-6xl font-extrabold">8</h5>
                <p className="text-xl font-bold">De Septiembre</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center bg-green-400 text-center text-white">
                <p className="text-xl font-bold">VIERNES</p>
                <h5 className="text-6xl font-extrabold">9</h5>
                <p className="text-xl font-bold">De Septiembre</p>
              </article>
            </div>

            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center px-10 bg-green-500 text-center text-white">
                <p className="text-lg ">Registro de Participantes</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center px-10 bg-secondary-650 text-center text-white">
                <p className="text-lg ">Programa Técnico Científico</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center px-10 bg-secondary-650 text-center text-white">
                <p className="text-lg ">Programa Técnico Científico</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center px-10 bg-secondary-650 text-center text-white">
                <p className="text-lg ">Programa Técnico Científico</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center px-10 bg-secondary-650 text-center text-white">
                <p className="text-lg ">Ceremonia de Inauguración</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center px-10 bg-green-500  text-center text-white">
                <p className="text-lg ">Asistencia a la Exposición</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center px-10 bg-green-500  text-center text-white">
                <p className="text-lg ">Asistencia a la Exposición</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-36 justify-center items-center px-10 bg-green-500  text-center text-white">
                <p className="text-lg ">Asistencia a la Exposición</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-350 text-center">
                <p className="text-lg font-bold">Coctel de Bienvenida</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-350 text-center">
                <p className="text-lg font-bold">Noche Cultural</p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-350 text-center">
                <p className="text-lg font-bold">
                  Premiación y Reconocimientos (Invitados especiales)
                </p>
              </article>
            </div>
            <div className="col-span-3">
              <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-350 text-center">
                <p className="text-lg font-bold">Ceremonia de Clausura</p>
              </article>
            </div>
          </div>
        )}
        {/* slider en mobile */}
       {isMounted&& <div className="lg:hidden">
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
                  <p className="text-xl font-bold">MARTES</p>
                  <h5 className="text-6xl font-extrabold">6</h5>
                  <p className="text-xl font-bold">De Septiembre</p>
                </article>

                <article className="flex flex-col h-36 justify-center items-center px-10 bg-gray-800 text-center text-white">
                  <p className="text-lg ">Registro de Participantes</p>
                </article>

                <article className="flex flex-col h-36 justify-center items-center px-10 bg-secondary-650 text-center text-white">
                  <p className="text-lg ">Ceremonia de Inauguración</p>
                </article>
                <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-400 text-center">
                  <p className="text-lg font-bold">Coctel de Bienvenida</p>
                </article>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" mx-auto bg-white max-w-sm rounded-2xl overflow-hidden shadow-md mb-4 mt-2">
                <article className="flex flex-col mb-1 h-36 justify-center items-center bg-green-450 text-center text-white">
                  <p className="text-xl font-bold">MIÉRCOLES</p>
                  <h5 className="text-6xl font-extrabold">7</h5>
                  <p className="text-xl font-bold">De Septiembre</p>
                </article>

                <article className="flex flex-col h-36 justify-center items-center px-10 bg-secondary-650 text-center text-white">
                  <p className="text-lg ">Programa Técnico Científico</p>
                </article>

                <article className="flex flex-col h-36 justify-center items-center px-10 bg-gray-800 text-center text-white">
                  <p className="text-lg ">Asistencia a la Exposición</p>
                </article>
                <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-400 text-center">
                  <p className="text-lg font-bold">Noche Cultural</p>
                </article>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" mx-auto bg-white max-w-sm rounded-2xl overflow-hidden shadow-md mb-4 mt-2">
                <article className="flex flex-col mb-1 h-36 justify-center items-center bg-green-450 text-center text-white">
                  <p className="text-xl font-bold">JUEVES</p>
                  <h5 className="text-6xl font-extrabold">8</h5>
                  <p className="text-xl font-bold">De Septiembre</p>
                </article>

                <article className="flex flex-col h-36 justify-center items-center px-10 bg-secondary-650 text-center text-white">
                  <p className="text-lg ">Programa Técnico Científico</p>
                </article>

                <article className="flex flex-col h-36 justify-center items-center px-10 bg-gray-800 text-center text-white">
                  <p className="text-lg ">Asistencia a la Exposición</p>
                </article>
                <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-400 text-center">
                  <p className="text-lg font-bold">
                    Premiación y Reconocimientos (Invitados especiales)
                  </p>
                </article>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" mx-auto bg-white max-w-sm rounded-2xl overflow-hidden shadow-md mb-4 mt-2">
                <article className="flex flex-col mb-1 h-36 justify-center items-center bg-green-450 text-center text-white">
                  <p className="text-xl font-bold">VIERNES</p>
                  <h5 className="text-6xl font-extrabold">9</h5>
                  <p className="text-xl font-bold">De Septiembre</p>
                </article>

                <article className="flex flex-col h-36 justify-center items-center px-10 bg-secondary-650 text-center text-white">
                  <p className="text-lg ">Programa Técnico Científico</p>
                </article>

                <article className="flex flex-col h-36 justify-center items-center px-10 bg-gray-800 text-center text-white">
                  <p className="text-lg ">Asistencia a la Exposición</p>
                </article>
                <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-400 text-center">
                  <p className="text-lg font-bold">Ceremonia de Clausura</p>
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
