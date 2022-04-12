import React, { useState } from "react";
import Link from "next/link";
import useBlogServices from "../../Gestionadores/useBlogServices";
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
import { useModal } from "../../hooks/useModal";
import ModalGrid from "../../components/ModalGenerico/ModalGrid";
// import Button from '../../../components/buttons/Button'

const LoUltimo = () => {
  const { loadingGetData, db } = useBlogServices();
  const [isOpen, openModal, closeModal] = useModal(false)
  const [initialSlide, setInitialSlide] = useState(0);

  return (
    <section className=" p-8 flex flex-col justify-center items-center  overflow-x-hidden ">
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
          {loadingGetData ? (
            <div>Cargando...</div>
          ) : (
            <div className="flex cursor-pointer justify-between">
              <div className="" onClick={() => {
                setInitialSlide(0);
                openModal();
              }}>
                <div className="relative  ">
                  <img
                    src="/ippe.png"
                    alt=""
                    className="absolute top-3 right-2"
                  />
                  <div className="bg-indigo-300 w-full h-full">
                    <img
                      src={db.slice(0)[0]?.imagenPrincipal?.url}
                      alt={
                        db.slice(0)[0]?.imagenPrincipal?.descripcion
                      }
                      className="object-cover "
                      style={{ width: "688px", height: "528px" }}
                    />
                  </div>
                  <div className="absolute bottom-0 w-full px-10 py-3 bg-green-500 bg-opacity-90 text-white ">
                    <h3 className="text-2xl font-bold w-100">
                      {db.slice(0)[0]?.tituloEspa}
                      {/* ¡Equipo <span className="font-bold">OVUM 2022</span> */}
                    </h3>
                    {/* <h3 className="text-3xl ">A poco de el gran evento!</h3> */}
                  </div>
                </div>
              </div>
              <div className="col-span-4 xl:col-span-4 ">
                <div
                  className="flex flex-col justify-between "
                  style={{ height: "528px" }}
                >
                  {db.slice(1, 4).map((item, i) => (
                    <div
                      key={item.blogId}
                      className="relative cursor-pointer"
                      style={{ maxWidth: "18.625rem", maxHeight: "164px" }}
                      onClick={() => {
                        setInitialSlide(i+1);
                        openModal();
                      }}
                    >
                      <div className="">
                        <img
                          src={item?.imagenPrincipal?.url}
                          className=" object-fill"
                          style={{ width: "18.625rem", height: "164px" }}
                        />
                      </div>
                      <div className="absolute bottom-0 w-full px-4 py-1 bg-green-500 bg-opacity-90 text-white ">
                        {/* <h3 className="">Primer Congreso </h3> */}
                        <h3 className=" font-bold">{item?.tituloEspa}</h3>
                      </div>
                    </div>
                  ))}
                  {/* <div
                    className="relative "
                    style={{ maxWidth: "18.625rem", maxHeight: "164px" }}
                  >
                    <div className="">
                      <img
                        src="/lo-ultimo-02.png"
                        className="w-full h-full object-fill"
                        style={{ minWidth: "18.8rem" }}
                      />
                    </div>
                    <div className="absolute bottom-0 w-full px-4 py-1 bg-green-500 bg-opacity-90 text-white ">
                      <h3 className="">Primer Congreso </h3>
                      <h3 className=" font-bold">
                        Latinoamericano de Avicultura
                      </h3>
                    </div>
                  </div>
                  <div
                    className="relative"
                    style={{ maxWidth: "18.625rem", maxHeight: "164px" }}
                  >
                    <img
                      src="/lo-ultimo-03.png"
                      className="w-full   object-cover"
                      style={{ height: "160px" }}
                    />

                    <div className="absolute bottom-0 w-full px-4 py-1 bg-green-500 bg-opacity-90 text-white ">
                      <h3 className="">San Pedro Sula, ciudad que </h3>
                      <h3 className="text-xl font-bold">
                        <span className="text-base font-normal">
                          acogerá el{" "}
                        </span>{" "}
                        OVUM 2022{" "}
                      </h3>
                    </div>
                  </div>
                  <div
                    className="relative"
                    style={{ maxWidth: "18.625rem", maxHeight: "164px" }}
                  >
                    <img
                      src="/lo-ultimo-04.png"
                      className="object-cover"
                      style={{ height: "164px", minWidth: "100%" }}
                    />
                    <div className="font-bold absolute bottom-0 w-full px-4 py-1 bg-green-500 bg-opacity-90 text-white ">
                      <h3 className="text-xl ">¡El OVUM 2022</h3>
                      <h3 className="font-normal">
                        Ofrece las mejores instala ciones!
                      </h3>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          )}
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
            {!loadingGetData && db.slice(5).map(item =>
              <SwiperSlide>
                <div className="relative">
                  <img src={item?.imagenPrincipal?.url} className="w-full h-48 object-cover" />
                  <div className="absolute bottom-0 w-full px-4 py-2 bg-gray-600 bg-opacity-80 text-white ">
                    {/* <h3 className="text-base font-semibold">¡Vuelve </h3> */}
                    <h3 className="text-lg font-semibold">{item?.tituloEspa}</h3>
                  </div>
                </div>
              </SwiperSlide>
            )}
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
      <ModalGrid
        isOpen={isOpen}
        closeModal={closeModal}
        data={db.slice(0,4)}
        initialSlide={initialSlide}
        setInitialSlide={setInitialSlide}
      />
    </section>
  );
};

export default LoUltimo;
