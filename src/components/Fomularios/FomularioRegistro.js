import React, { useState } from 'react'
import InputCheckCuadrado from '../inputCheck/InputCheckCuadrado'
import { useFormik } from 'formik'
import InputText from '../inputs/InputText'
import useGestionarRegistroParticipantes from '../../Gestionadores/useGestionarRegistroParticipantes'

const FomularioRegistro = ({ openModal, idiomas }) => {
  const { RegistrarParticipantes } =
    useGestionarRegistroParticipantes()
  const validate = ({ nombres, apellidos, empresa, pais, celular, correo }) => {
    const errors = {}
    if (!nombres.trim()) {
      errors.nombres = 'Requerido'
    } else if (nombres.trim().length <= 2) {
      errors.nombres = 'Minimo 3 caracteres'
    }
    if (!apellidos.trim()) {
      errors.apellidos = 'Requerido'
    } else if (apellidos.trim().length <= 5) {
      errors.apellidos = 'Minimo 6 caracteres'
    }

    if (!empresa.trim()) {
      errors.empresa = 'Requerido'
    } else if (empresa.trim().length <= 2) {
      errors.empresa = 'Minimo 3 caracteres'
    }

    if (!pais.trim()) {
      errors.pais = 'Requerido'
    } else if (pais.trim().length <= 2) {
      errors.pais = 'Minimo 3 caracteres'
    }

    if (!celular.trim()) {
      errors.celular = 'Requerido'
    } else if (celular.trim().length <= 4) {
      errors.celular = 'Minimo 5 caracteres'
    }

    if (!correo.trim()) {
      errors.correo = 'Requerido'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(correo)) {
      errors.correo = 'Correo Inválido'
    }
    return errors
  }
  const [isAccepted, setIsAccepted] = useState(false)
  // console.log("valor de isAccepted", isAccepted);
  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    resetForm
  } = useFormik({
    initialValues: {
      nombres: '',
      apellidos: '',
      empresa: '',
      pais: '',
      celular: '',
      correo: ''
    },
    onSubmit: (values) => {
      console.log(values)
      RegistrarParticipantes({
        apellidos: values.apellidos,
        nombres: values.nombres,
        correo: values.correo,
        nroCelular: values.celular,
        pais: values.pais,
        empresa: values.empresa
      }).then((rpta) => {
        openModal()
        resetForm()
        // if (rpta === "ok") {
        //   if (loading === false) {
        //     setIsAccepted(false);
        //   }
        //   openModal();
        //   resetForm();
        // } else {
        //   openModalCorreo();
        // }
      })
    },
    validate
  })

  const handleConfirmation = () => {
    setIsAccepted(!isAccepted)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className=" md:w-8/12 mt-5 max-w-5xl mx-auto  bg-white"
    >
      <div className="flex  flex-col md:flex-row flex-wrap  justify-between">
        <div className="md:w-5/13 w-full">
          <label htmlFor="nombres" className="text-xs text-gray-600">
            {idiomas.Nombres.value}*
          </label>
          <InputText
            id="nombres"
            onChange={handleChange}
            value={values.nombres}
            onBlur={handleBlur}
          />
          {touched.nombres && errors.nombres && (
            <span className="text-xs mb-4 text-red-600">{errors.nombres}</span>
          )}
        </div>

        <div className="md:w-5/13 w-full">
          <label htmlFor="apellidos" className="text-xs text-gray-600">
          {idiomas.Apellidos.value}*
          </label>
          <InputText
            id="apellidos"
            onChange={handleChange}
            value={values.apellidos}
            onBlur={handleBlur}
          />
          {touched.apellidos && errors.apellidos && (
            <span className="text-xs mb-4 text-red-600">
              {errors.apellidos}
            </span>
          )}
        </div>
        <div className="md:w-5/13 w-full">
          <label htmlFor="empresa" className="text-xs text-gray-600">
          {idiomas.Empresa.value}*
          </label>
          <InputText
            id="empresa"
            onChange={handleChange}
            value={values.empresa}
            onBlur={handleBlur}
          />
          {touched.empresa && errors.empresa && (
            <span className="text-xs mb-4 text-red-600">{errors.empresa}</span>
          )}
        </div>
        <div className="md:w-5/13 w-full">
          <label htmlFor="pais" className="text-xs text-gray-600">
          {idiomas.Pais.value}*
          </label>
          <InputText
            id="pais"
            onChange={handleChange}
            value={values.pais}
            onBlur={handleBlur}
          />
          {touched.pais && errors.pais && (
            <span className="text-xs mb-4 text-red-600">{errors.pais}</span>
          )}
        </div>
        <div className="md:w-5/13 w-full">
          <label htmlFor="celular" className="text-xs text-gray-600">
          {idiomas.Celular.value}*
          </label>
          <InputText
            id="celular"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.celular}
          />
          {touched.celular && errors.celular && (
            <span className="text-xs mb-4 text-red-600">{errors.celular}</span>
          )}
        </div>
        <div className="md:w-5/13 w-full">
          <label htmlFor="correo" className="text-xs text-gray-600">
            {idiomas.Correo.value}*
          </label>
          <InputText
            id="correo"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.correo}
          />
          {touched.correo && errors.correo && (
            <span className="text-xs mb-4 text-red-600">{errors.correo}</span>
          )}
        </div>
        <div className="md:w-5/13 w-full">
          <InputCheckCuadrado
            name="confirmar"
            id="confirmar"
            handleConfirmation={handleConfirmation}
            isAccepted={isAccepted}
            idiomas={idiomas}
          />
        </div>
      </div>

      <button disabled></button>
      <div className="w-52  mt-10  mx-auto">
        <button
          className={`${isAccepted ? 'bg-secondary-600' : 'bg-gray-500 cursor-not-allowed'
            } text-white pt-2 pb-3 flex justify-center
     items-center w-full text-lg md:text-xl  rounded-3xl hover:opacity-80 transition-all duration-300 
     focus:outline-none focus:shadow-outline `}
          disabled={!isAccepted}
          type="submit"
        >
          {idiomas.Button.value2}
        </button>
      </div>
    </form>
  )
}

export default FomularioRegistro
