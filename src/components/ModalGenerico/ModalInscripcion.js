import React from 'react'
import ModalCustomer from './Modal'
const ModalInscripcion = ({ isOpen, closeModal, idiomas }) => {
  return (
    <>
      <ModalCustomer isOpen={isOpen} closeModal={closeModal}>
        <div className="text-gray-600 text-sm w-70 md:w-140 md:-mt-3 pb-3 mt-3 mx-auto">
          <div className="mx-auto flex flex-col items-center">
            <img src="/logo-modal.svg" alt="" className="md:hidden" />
            <img
              src="/logo-modal-desktop.svg"
              alt=""
              className="hidden md:block"
            />
            <img
              src="/grupo-modal-desktop.svg"
              alt=""
              className="hidden  md:block"
            />
            <div className="flex gap-x-2 mt-6 md:hidden">
              <img src="/asociacion.svg" alt="" className=" w-28 border p-0" />
              <img
                src="/image55.svg"
                alt=""
                className="w-20 md:w-28 h-12 md:h-20 object-cove border"
              />
            </div>
          </div>

          <p className="text-gray-600 text-2xl md:text-4.5xl font-medium text-center md:mt-3 mt-6 mb-4 font-roboto">
            {idiomas.ModalInscripcion.value1}
          </p>
          <div className="text-center md:text-lg text-sm font-light">
            <p>
            {idiomas.ModalInscripcion.value2}
            </p>
            <p className="my-4">
            {idiomas.ModalInscripcion.value3}
            </p>

            <p>{idiomas.ModalInscripcion.value4}</p>
          </div>
        </div>
      </ModalCustomer>
    </>
  )
}
export default ModalInscripcion
