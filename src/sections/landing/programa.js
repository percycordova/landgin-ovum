import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
/* import Button from '../../components/buttons/Button' */

const data = [
  {
    id: 1,
    dia: "MARTES 6",
    boxTitle1: "Feria",
    boxText1: "8:00 - 21:00",
    boxTitle2: "Conferencias",
    boxText2: "8:10 - 13:30",
    almuerzo: "Almuerzo 12:00 - 15:00",
    boxTitle3: "Conferencias de Patrocinadores y Auspiciadores",
    boxText3: "14:30 - 17:30",
    box4: [
      ["Inauguración protocolar", "17: 45 - 18: 00"],
      ["Coctel inauguración", "18: 00 - 21: 00"],
    ],
  },
  {
    id: 2,
    dia: "MIERCOLES 7",
    boxTitle1: "Feria",
    boxText1: "8:00 - 18:00",
    boxTitle2: "Conferencias",
    boxText2: "8:10 - 13:30",
    almuerzo: "Almuerzo 12:00 - 15:00",
    boxTitle3: "Conferencias de Patrocinadores y Auspiciadores",
    boxText3: "14:30 - 17:30",
    box4: [
      ["Premiaciones", "17: 00 - 19: 00"],
      ["Empresario del año", "19: 00 - 21: 00"],
    ],
  },
  {
    id: 3,
    dia: "JUEVES 8",
    boxTitle1: "Feria",
    boxText1: "8:00 - 18:00",
    boxTitle2: "Conferencias",
    boxText2: "8:10 - 13:30",
    almuerzo: "Almuerzo 12:00 - 15:00",
    boxTitle3: "Conferencias de Patrocinadores y Auspiciadores",
    boxText3: "14:30 - 17:30",
    box4: [
      ["Inauguración protocolar", "17: 45 - 18: 00"],
      ["Coctel inauguración", "18: 00 - 21: 00"],
    ],
  },
  {
    id: 4,
    dia: "VIERNES 9",
    boxTitle1: "Feria",
    boxText1: "8:00 - 17:00",
    boxTitle2: "Conferencias",
    boxText2: "8:10 - 13:30",
    almuerzo: "Almuerzo 12:00 - 15:00",
    boxTitle3: "Conferencias de Patrocinadores y Auspiciadores",
    boxText3: "14:30 - 17:30",
    box4: [
      ["Coctel clausura", "18: 00 - 20: 30"],
      ["Clausura protocolar", "20: 30 - 21: 20"],
      ["Fin de fiesta", "21: 20 - 23: 00"],
    ],
  },
];

const bgColor = (id) => {
  if (id === 1) {
    return "bg-green-100";
  } else if (id === 2) {
    return "bg-brown-300";
  } else if (id === 3) {
    return "bg-purple-300";
  } else if (id === 4) {
    return "bg-blue-300";
  }
};
const Programa = () => {
  return (
    <section
      className="relative bg-gray-100 flex flex-col justify-center items-center py-14"
      id="programa"
    >
      <div className="w-full md:max-w-256 mt-5 max-w-7xl mx-auto p-8 lg:p-0 bg-gray-100 lg:bg-white lg:shadow-xl rounded-2xl z-99">
        <h6 className="text-2xl sm:text-4xl  lg:text-4xl text-center font-bold mb-4 text-gray-600 mt-10">
          PROGRAMA GENERAL
        </h6>
        {/* <div className="absolute top-0 -left-20">
          <img src="/LineaConferenciaIzq.svg" className='w-60 md:w-60 ' alt="" />
        </div> */}
        <div className="hidden lg:grid grid-cols-12  gap-x-2  px-5 pt-3 pb-10 z-10">
          <div className="col-span-3 mb-1">
            <article className="flex flex-col h-36 justify-center items-center bg-green-450 text-center text-white">
              <p className="text-xl font-bold">MARTES</p>
              <h5 className="text-6xl font-extrabold">6</h5>
              <p className="text-xl font-bold">De Septiembre</p>
            </article>
          </div>
          <div className="col-span-3">
            <article className="flex flex-col h-36 justify-center items-center bg-green-450 text-center text-white">
              <p className="text-xl font-bold">MIÉRCOLES</p>
              <h5 className="text-6xl font-extrabold">7</h5>
              <p className="text-xl font-bold">De Septiembre</p>
            </article>
          </div>
          <div className="col-span-3">
            <article className="flex flex-col h-36 justify-center items-center bg-green-450 text-center text-white">
              <p className="text-xl font-bold">JUEVES</p>
              <h5 className="text-6xl font-extrabold">8</h5>
              <p className="text-xl font-bold">De Septiembre</p>
            </article>
          </div>
          <div className="col-span-3">
            <article className="flex flex-col h-36 justify-center items-center bg-green-450 text-center text-white">
              <p className="text-xl font-bold">VIERNES</p>
              <h5 className="text-6xl font-extrabold">9</h5>
              <p className="text-xl font-bold">De Septiembre</p>
            </article>
          </div>

          <div className="col-span-3">
            <article className="flex flex-col h-36 justify-center items-center px-10 bg-gray-800 text-center text-white">
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
            <article className="flex flex-col h-36 justify-center items-center px-10 bg-gray-800 text-center text-white">
              <p className="text-lg ">Asistencia a la Exposición</p>
            </article>
          </div>
          <div className="col-span-3">
            <article className="flex flex-col h-36 justify-center items-center px-10 bg-gray-800 text-center text-white">
              <p className="text-lg ">Asistencia a la Exposición</p>
            </article>
          </div>
          <div className="col-span-3">
            <article className="flex flex-col h-36 justify-center items-center px-10 bg-gray-800 text-center text-white">
              <p className="text-lg ">Asistencia a la Exposición</p>
            </article>
          </div>
          <div className="col-span-3">
            <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-400 text-center">
              <p className="text-lg font-bold">Coctel de Bienvenida</p>
            </article>
          </div>
          <div className="col-span-3">
            <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-400 text-center">
              <p className="text-lg font-bold">Noche Cultural</p>
            </article>
          </div>
          <div className="col-span-3">
            <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-400 text-center">
              <p className="text-lg font-bold">
                Premiación y Reconocimientos (Invitados especiales)
              </p>
            </article>
          </div>
          <div className="col-span-3">
            <article className="flex flex-col h-40 justify-center items-center px-10 bg-yellow-400 text-center">
              <p className="text-lg font-bold">Ceremonia de Clausura</p>
            </article>
          </div>
        </div>
        {/* slider en mobile */}
        <div className="lg:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
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
                spaceBetween: 20,
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
                  <p className="text-lg font-bold">
                  Ceremonia de Clausura
                  </p>
                </article>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* fin slider en mobile */}
      </div>
    </section>
  );
};

export default Programa;
