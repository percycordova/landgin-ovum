import React from 'react'
import ModalCustomer from './Modal'

const ModaErrorCorreoRegistrado = ({ isOpen, closeModal }) => {
  return (
    <>
      <ModalCustomer isOpen={isOpen} closeModal={closeModal}>
        <div className="text-gray-600  pb-3 mt-3 mx-auto">

          <p className="text-gray-600 text-2xl md:text-4.5xl font-medium text-center md:mt-3 mt-6 mb-4 font-roboto">
            ¡Correo ya Registrado!
          </p>
          <div className="text-center md:text-lg text-sm font-light">
            <p>
              Al parecer el Correo ya se encuntra registrado, prueba con otro.
            </p>

          </div>
        </div>
      </ModalCustomer>
    </>
  )
}

export default ModaErrorCorreoRegistrado
