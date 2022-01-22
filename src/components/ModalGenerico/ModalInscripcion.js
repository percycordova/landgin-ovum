import React from "react";
import ModalCustomer from "./Modal";

const ModalInscripcion = ({ isOpen, closeModal }) => {
  return (
    <>
      <ModalCustomer isOpen={isOpen} closeModal={closeModal}>
        <div className="text-gray-600 text-sm w-70 md:w-140 md:-mt-3 pb-3 mt-3 mx-auto">
          <div className="mx-auto flex flex-col items-center">
            <img src="/logo-modal.svg" alt="" className="md:hidden" />
            <img src="/logo-modal-desktop.svg" alt="" className="hidden md:block" />
            <img src="/grupo-modal-desktop.svg" alt="" className="hidden  md:block" />
            <div className="flex gap-x-2 mt-6 md:hidden">
              <img src="/asociacion.svg" alt="" className=" w-28 border p-0" />
              <img src="/image55.svg" alt="" className="w-20 md:w-28 h-12 md:h-20 object-cove border" />
            </div>
          </div>

          <p className="text-gray-600 text-2xl md:text-4.5xl font-medium text-center md:mt-3 mt-6 mb-4 font-roboto">
            ¡Gracias!
          </p>
          <div className="text-center md:text-lg text-sm font-light">
            <p>
              {" "}
              ¡Gracias! Hemos recibido tu mensaje, nos vemos los días 6, 7, 8 y
              9 de septiembre.
            </p>
            <p className="my-4">
              Estamos felices de que vivas la experiencia OVUM 2022 y participes
              en este evento de alcance internacional, que congregará a la
              comunidad avícola en pleno.
            </p>

            <p>¡Pronto nos comunicaremos nuevamente contigo!</p>
          </div>
        </div>
      </ModalCustomer>
    </>
  );
};

export default ModalInscripcion;
