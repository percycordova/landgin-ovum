import React, { useState } from "react";
import Button from "../buttons/Button";
import InputCheckCuadrado from "../inputCheck/InputCheckCuadrado";
import { useFormik } from "formik";
import InputText from "../inputs/InputText";

const FomularioRegistro = ({ openModal }) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const formik = useFormik({
    initialValues: {
      nombres: "",
      apellidos: "",
      empresa: "",
      pais: "",
      celuar: "",
      correo: "",
      confirmacion: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const sendInformation = (e) => {
    e.preventDefault();
  };
  const handleConfirmation = () => {
    setIsAccepted(!isAccepted);
  };
  return (
    <form
      onSubmit={sendInformation}
      className=" md:w-8/12 mt-5 max-w-5xl mx-auto"
    >
      <div className="flex  flex-col md:flex-row flex-wrap  justify-between">
        <div className="md:w-5/13 w-full">
          <label htmlFor="nombres" className="text-xs text-gray-600">
            Nombres*
          </label>
          <InputText
            id="nombres"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nombres}
          />
        </div>
        <div className="md:w-5/13 w-full">
          <label htmlFor="apellidos" className="text-xs text-gray-600">
            Apellidos*
          </label>
          <InputText
            id="apellidos"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.apellidos}
          />
        </div>
        <div className="md:w-5/13 w-full">
          <label htmlFor="empresa" className="text-xs text-gray-600">
            Empresa*
          </label>
          <InputText
            id="empresa"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.empresa}
          />
        </div>
        <div className="md:w-5/13 w-full">
          <label htmlFor="pais" className="text-xs text-gray-600">
            País*
          </label>
          <InputText
            id="pais"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pais}
          />
        </div>
        <div className="md:w-5/13 w-full">
          <label htmlFor="celular" className="text-xs text-gray-600">
            Celular*
          </label>
          <InputText
            id="celular"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.celuar}
          />
        </div>
        <div className="md:w-5/13 w-full">
          <label htmlFor="correo" className="text-xs text-gray-600">
            Correo*
          </label>
          <InputText
            id="correo"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.correo}
          />
        </div>
        <div className="md:w-5/13 w-full">
          <InputCheckCuadrado
            name="confirmar"
            id="confirmar"
            handleConfirmation={handleConfirmation}
            isAccepted={isAccepted}
          />
        </div>
      </div>

      <div className="w-52  mt-10  mx-auto">
        <Button type="button" onClick={openModal}>
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default FomularioRegistro;
