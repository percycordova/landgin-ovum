import React from "react";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { maxHeight } from "tailwindcss/defaultTheme";
// import Button from '../../../components/buttons/Button'

const LoUltimo = () => {
  return (
    <section className=" p-8 flex flex-col justify-center items-center  overflow-x-hidden">
      <div className="w-full md:max-w-256 mt-5 max-w-7xl mx-auto bg-white">
        <h6 className="text-3xl lg:text-4.5xl text-center font-semibold mb-8 text-blue-500">
          LO ÚLTIMO
        </h6>
        {/* grid en lg */}
        <div className="hidden lg:block relative">
          <img
            src="/lo-ultimo-rayas.png"
            alt=""
            className="absolute -right-56 -top-10"
          />
          <img
            src="/lo-ultimo-rayas2.png"
            alt=""
            className="absolute -right-48 bottom-15"
          />
          <div className="flex justify-between">
            <div className="">
              <div className="relative  ">
                <img
                  src="/ippe.png"
                  alt=""
                  className="absolute top-3 right-2"
                />
                <div className="bg-indigo-300 w-full h-full">
                  <img
                    src="/lo-ultimo-portada.png"
                    className="object-cover "
                    style={{ width: "688px", height: "528px" }}
                  />
                </div>
                <div className="absolute bottom-0 w-full px-10 py-3 bg-green-500 bg-opacity-90 text-white ">
                  <h3 className="text-2xl ">
                    ¡Equipo <span className="font-bold">OVUM 2022</span>
                  </h3>
                  <h3 className="text-3xl ">presente en IPPE - Atlanta!</h3>
                </div>
              </div>
            </div>
            <div className="col-span-4 xl:col-span-4 ">
              <div className="flex flex-col gap-y-5">
                <div
                  className="relative "
                  style={{ maxWidth: "18.625rem", maxHeight: "164px" }}
                >
                  <div className="">
                    <img
                      src="/lo-ultimo-visitanos.png"
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <div className="absolute bottom-0 w-full px-4 py-1 bg-green-500 bg-opacity-90 text-white ">
                    <h3 className="">Visítanos en</h3>
                    <h3 className="text-xl font-bold">
                      IPPE 2022 - Booth B6981
                    </h3>
                  </div>
                </div>
                <div
                  className="relative"
                  style={{ maxWidth: "18.625rem", maxHeight: "164px" }}
                >
                  <img
                    src="/lo-ultimo-lanzamiento.png"
                    className="w-full   object-cover"
                    style={{ height: "164px" }}
                  />

                  <div className="absolute bottom-0 w-full px-4 py-1 bg-green-500 bg-opacity-90 text-white ">
                    <h3 className="">Lanzamiento de</h3>
                    <h3 className="text-xl font-bold"> OVUM 2022 en IBBE</h3>
                  </div>
                </div>
                <div
                  className="relative"
                  style={{ maxWidth: "18.625rem", maxHeight: "164px" }}
                >
                  <img
                    src="/img-slider.png"
                    className="object-cover"
                    style={{ height: "164px", minWidth: "100%" }}
                  />
                  <div className="font-bold absolute bottom-0 w-full px-4 py-1 bg-green-500 bg-opacity-90 text-white ">
                    <h3 className="">¡Vuelve </h3>
                    <h3 className="text-xl "> el OVUM 2022!</h3>
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
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
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
                <img src="/img-slider.png" className="w-full h-auto" />
                <div className="absolute bottom-0 w-full px-4 py-2 bg-gray-600 bg-opacity-80 text-white ">
                  <h3 className="text-base font-semibold">¡Vuelve </h3>
                  <h3 className="text-lg font-semibold"> el OVUM 2022!</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img src="/img-slider.png" className="w-full h-auto" />
                <div className="absolute bottom-0 w-full px-4 py-2 bg-gray-600 bg-opacity-80 text-white ">
                  <h3 className="text-base font-semibold">Visítanos en</h3>
                  <h3 className="text-lg font-semibold">
                    {" "}
                    IPPE 2022 - Booth B6981
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img src="/img-slider.png" className="w-full h-auto" />
                <div className="absolute bottom-0 w-full px-4 py-2 bg-gray-600 bg-opacity-80 text-white ">
                  <h3 className="text-base font-semibold">Lanzamiento de</h3>
                  <h3 className="text-lg font-semibold">OVUM 2022 en IBBE</h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* fin slider en mobile */}
        <div className="flex justify-center my-12 ">
          <Link href="/lo-ultimo">
            <button className="bg-pink-700 text-white text-xl font-normal py-3 max-w-52 w-full rounded-full">
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoUltimo;
