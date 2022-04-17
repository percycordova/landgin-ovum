import React from "react";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import useConferenciasServices from "../../Gestionadores/useConferenciasServices";
const Conferencista = () => {
  const { loadingGetData, db } = useConferenciasServices();
  // console.log(db);
  return (
    <section className="relative bg-white flex flex-col justify-center items-center py-16">
      <div className="w-full md:max-w-256 mt-5 max-w-7xl mx-auto p-8 px-2 lg:p-0">
        <h6 className="text-3xl lg:text-4xl text-center font-medium mb-8 text-green-300">
          CONFERENCISTAS
        </h6>

        {/* slider en mobile */}
        <div className="">
          {loadingGetData ? (
            <div>Cargando...</div>
          ) : (
            <Swiper
              style={{
                "--swiper-navigation-color": "#6CBE4C",
                "--swiper-pagination-color": "#6CBE4C",
              }}
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
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: -32,
                },
              }}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              {db.map((conferencista) => (
                <div key={conferencista.conferencistaId}>
                  <SwiperSlide>
                    <div className="flex items-center justify-center  pb-10 px-8">
                      <div className="relative bg-white font-semibold text-center rounded-3xl border  px-5 pt-5 pb-10 max-w-xs">
                        <img
                          className="mb-3 w-60 h-60 rounded-full  mx-auto"
                          src={conferencista.imagenPrincipal.url}
                          alt="product designer"
                        />
                        <h1 className="text-2xl text-black">
                          {conferencista.nombreEspa}
                        </h1>
                        <p className="text-lg font-extralight text-black mt-4">
                          “{" "}
                          {conferencista.descripcionEspa.length >= 100
                            ? conferencista.descripcionEspa.substring(0, 100) +
                              "..."
                            : conferencista.descripcionEspa}
                          ”
                        </p>
                        <div className="absolute bottom-0 left-0 h-5 w-full bg-green-400 rounded-b-full"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          )}
        </div>
        {/* fin slider en mobile */}
        <div className="flex justify-center mt-8 ">
          <Link href="/conferencistas">
            <button className="bg-pink-700 text-white text-xl font-normal py-3 max-w-52 w-full rounded-full z-10">
              Ver todo
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Conferencista;
