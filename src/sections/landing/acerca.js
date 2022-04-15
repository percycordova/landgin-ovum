import React from "react";

const Acerca = () => {
  return (
    <section
      className=" p-8 flex flex-col justify-center items-center"
      id="acerca"
    >
      <div className=" lg:w-256 w-full mt-5 max-w-7xl mx-auto bg-white">
        <h6 className="text-3.5xl text-primary-850 text-center font-medium mb-8">
          ACERCA DE OVUM
        </h6>
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="max-w-115 lg:h-75 ">
            <img
              src="/acerca.png"
              className="w-full h-full object-cover"
              alt="video"
            />
          </div>

          <div className="max-w-120 flex flex-col justify-center ">
            {/* <h2 className="font-normal mt-10 lg:mt-0 text-green-800 text-2xl md:text-3xl md:mb-5 mb-3 ">
              Informacion de OVUM
            </h2> */}
            <p className=" text-base text-justify font-light my-2">
              El OVUM 2022 será una experiencia inolvidable para todos sus
              participantes, el Congreso Latinoamericano de Avicultura mejora e
              innova constantemente y en la presente edición convocará a la
              comunidad avícola latinoamericana y mundial para proyectar juntos
              el futuro de nuestra industria y de la nutrición a nivel global,
              para generar bienestar común a través de el abastecimiento de
              proteína avícola de la más alta calidad a todos los países. <br /> <br /> En
              esta página encontrarán información completa sobre San Pedro Sula,
              la sede del OVUM 2022, la ciudad conocida como la Capital
              Industrial de Honduras, gracias al importante giro empresarial que
              representa para el país y el continente. Así mismo, obtendrán
              información de interés sobre los líderes de opinión que
              participarán y los tópicos que serán evaluados mediante los
              programas y sesiones foco del Congreso. Será un honor contar con
              su participación y vernos nuevamente, los esperamos con los brazos
              abiertos en San Pedro Sula, Honduras del 6 al 9 de septiembre. Con
              gratitud,
            </p>
            <div className="text-lg font-normal text-black mt-5 lg:mt-1">
              <p>Luis Valle Coello</p>
              <p className="text-gray-700">
                Presidente ANAVIH y anfitrión del OVUM 2022
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-9/12  w-full border-b border-gray-500 mt-10"></div>
    </section>
  );
};

export default Acerca;
