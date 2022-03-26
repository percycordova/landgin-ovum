import React from "react";

const Acerca = () => {
  return (
    <section
      className=" p-8 flex flex-col justify-center items-center"
      id="acerca"
    >
      <div className=" lg:w-256 w-full mt-5 max-w-7xl mx-auto bg-white">
        <h6 className="text-3xl text-primary-850 lg:text-4.5xl text-center font-medium mb-8">
          ACERCA DE OVUM
        </h6>
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="max-w-115 lg:h-75 " >
            <img
              src="/landing-video.png"
              className="w-full h-full object-cover"
              alt="video"
            />
          </div>

          <div className="max-w-120 flex flex-col justify-center ">
            <h2 className="font-normal mt-10 lg:mt-0 text-green-800 text-2xl md:text-3xl md:mb-5 mb-3 ">
              Informacion de OVUM
            </h2>
            <p className=" text-base text-justify font-light my-2">
              Lorem Ipsum es simplemente texto de relleno de la industria de la
              impresión y la composición tipográfica. Lorem Ipsum ha sido el
              texto de relleno estándar de la industria desde la década de 1500,
              cuando un impresor desconocido tomó una galera de tipos y la
              mezcló para hacer un libro de muestras tipográficas.
            </p>
            <div className="text-lg font-normal text-black mt-5 lg:mt-1">
              <p>Luis Eduardo Valle</p>
              <p className="text-gray-700">Presidente Anavih - Ovum 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-9/12  w-full border-b border-gray-500 mt-10"></div>
    </section>
  );
};

export default Acerca;
