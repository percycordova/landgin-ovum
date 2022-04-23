import React, { useEffect, useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import { gsap, Power2 } from "gsap";

const Acerca = ({ idiomas }) => {
  const RefObservador = useRef(null);
  const refTitulo = useRef(null);
  const refTexto = useRef(null);
  const refImg = useRef(null);
  const { isNearScreen } = useOnScreen({
    externalRef: RefObservador,
    distance: "0px",
    once: false,
  });
  const timeLineAcerca = gsap.timeline({
    defaults: {
      duration: 1,
      ease: Power2.easeOut,
      opacity: 1,
    },
  });
  useEffect(() => {
    if (isNearScreen) {
      timeLineAcerca
        .from(refTitulo.current, {
          y: -100,
          x: 0,
          stagger: 0.3,
        })
        .from(refTexto.current, {
          y: -200,
          x: 100,
          stagger: 0.3,
        },"-=1")
        .from(refImg.current, {
          y: -200,
          x: -100,
          stagger: 0.3,
        },"-=1");
    }
  }, [isNearScreen]);
  return (
    <section
      className=" p-8 flex flex-col justify-center items-center"
      id="acerca"
      ref={RefObservador}
    >
      <div className=" lg:w-256 w-full mt-5 max-w-7xl mx-auto bg-white  overflow-hidden">
        <h6
          ref={refTitulo}
          className="text-3.5xl text-primary-850 text-center font-bold mb-8"
        >
          {idiomas.AcercaOvum.titulo}
        </h6>
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-between ">
          <div ref={refImg} className="max-w-115 lg:h-75 ">
            <img
              src="/acerca.png"
              className="w-full h-full object-cover"
              alt="video"
            />
          </div>

          <div
            ref={refTexto}
            className="max-w-120 flex flex-col justify-center "
          >
            {/* <h2 className="font-normal mt-10 lg:mt-0 text-green-800 text-2xl md:text-3xl md:mb-5 mb-3 ">
              Informacion de OVUM
            </h2> */}
            <p className=" text-base text-justify font-light my-2">
              {idiomas.AcercaOvum.parrafo1}
              <br /> <br />
              {idiomas.AcercaOvum.parrafo2}
            </p>
            <div className="text-lg font-normal text-black mt-5 lg:mt-3">
              <p>Luis Valle Coello</p>
              <p className="text-gray-700">{idiomas.AcercaOvum.parrafo3}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-9/12  w-full border-b border-gray-500 mt-10"></div>
    </section>
  );
};

export default Acerca;
