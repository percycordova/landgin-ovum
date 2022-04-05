import Head from "next/head";
import { useState } from "react";
import ButtonWhassapt from "../../../components/buttons/ButtonWhassapt";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header";
import InputText from "../../../components/inputs/InputText";

const Registro = (props) => {
  const [cantidad, setCantidad] = useState(1);
  return (
    <div className="">
      <Head>
        <title>OVUM 2022</title>
        <meta
          name="description"
          content="OVUM 2022 XXVIII Congreso Latinoamericano de Avicultura"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header />
        <div className="max-w-256 border mx-auto pt-8 pb-15 mt-10 mb-20 ">
          <h2 className="text-gray-600 text-2xl pl-8 md:text-2.5xl  md:pl-24 mb-3">
            Registro
          </h2>
          <div className="px-4 sm:px-2">
            <hr />
          </div>

          <h3 className="text-xl md:text-3xl pl-8 font-bold mt-10 md:pl-24 text-gray-600">
            Pago anticipado $560 USD
          </h3>
          <div className="px-4 sm:px-12 mt-12">
            <hr />
          </div>
          <form action="" className="mt-8">
            {/* Datos de la facturacion */}
            <div className="px-5 lg:px-20 text-gray-600">
              <p className="text-xl font-medium mb-5">
                Datos de la facturación
              </p>
              <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-15 mb-4">
                <div className="w-full">
                  <label
                    htmlFor="nombres"
                    className="text-xs sm:text-base text-gray-600"
                  >
                    Empresa*{" "}
                  </label>
                  <InputText id="nombres" />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="nombres"
                    className="text-xs text-gray-600 sm:text-base"
                  >
                    RTN o equivalente*{" "}
                  </label>
                  <InputText id="nombres" />
                </div>
              </div>

              <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-15 mb-4">
                <div className="w-full">
                  <label
                    htmlFor="nombres"
                    className="text-xs text-gray-600 sm:text-base"
                  >
                    Dirección de empresa*{" "}
                  </label>
                  <InputText id="nombres" />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="nombres"
                    className="text-xs text-gray-600 sm:text-base"
                  >
                    Rubro o actividad{" "}
                  </label>
                  <InputText id="nombres" />
                </div>
              </div>

              <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-15 mb-4">
                <div className="w-full">
                  <label
                    htmlFor="nombres"
                    className="text-xs text-gray-600 sm:text-base"
                  >
                    Contacto contable/ tesoreria/facturación{" "}
                  </label>
                  <InputText id="nombres" />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="nombres"
                    className="text-xs text-gray-600 sm:text-base"
                  >
                    País{" "}
                  </label>
                  <InputText id="nombres" />
                </div>
              </div>
            </div>
            {/* fin datos de facturacion */}
            <div className="px-4 sm:px-12 mt-12">
              <hr />
            </div>
            {/* participantes */}
            <div className="px-5 lg:px-20 text-gray-600 mt-8">
              <p className="text-xl font-medium mb-5">Participantes</p>
              <div className="flex flex-col gap-y-4 lg:flex-row lg:items-start lg:gap-x-15 mb-4">
                <div className="w-full">
                  <label
                    htmlFor="nombres"
                    className="text-xs text-gray-600 sm:text-base"
                  >
                    Cantidad de inscripciones a comprar
                  </label>
                  <div className="w-full mt-1 flex items-center pl-7 h-13 text-gray-600 relative bg-white border border-gray-500 rounded-lg ">
                    <span className="absolute left-5">{cantidad}</span>
                    <div
                      className="absolute -right-1 bg-gray-500 h-13 w-8 flex flex-col"
                      style={{ top: "-1px" }}
                    >
                      <span
                        className="w-8 h-1/2  justify-center items-center flex text-white border-b border-white  px-2 cursor-pointer"
                        onClick={() => setCantidad((c) => c + 1)}
                      >
                        +
                      </span>
                      <span
                        className="w-8 h-1/2  text-white px-2  justify-center items-center flex border-t border-white cursor-pointer"
                        onClick={() =>
                          cantidad > 1 && setCantidad((c) => c - 1)
                        }
                      >
                        -
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="nombres"
                    className="text-xs text-gray-600 sm:text-base"
                  >
                    Total
                  </label>
                  <InputText id="nombres" />
                  <span className="text-secondary-600 text-xs font-bold sm:text-sm">
                    US $560.00 por participante inc. impuestos (Pre-venta)
                  </span>
                </div>
              </div>
            </div>
            {/* fin de participantes */}
            <div className="px-4 sm:px-12 mt-12">
              <hr />
            </div>
            {/* datos de participantes */}
            <div className="mt-8 px-5 lg:px-20 text-gray-600">
              <p className="text-xl font-medium mb-5">
                Ingresar datos de participante
              </p>
              <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-15 mb-4">
                <div className="w-full">
                  <label
                    htmlFor="nombres"
                    className="text-xs text-gray-600 sm:text-base"
                  >
                    Nombres*{" "}
                  </label>
                  <InputText id="nombres" />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="nombres"
                    className="text-xs text-gray-600 sm:text-base"
                  >
                    Apellidos*{" "}
                  </label>
                  <InputText id="nombres" />
                </div>
              </div>

              <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-15 mb-4">
                <div className="w-full">
                  <label
                    htmlFor="nombres"
                    className="text-xs text-gray-600 sm:text-base"
                  >
                    DNI*{" "}
                  </label>
                  <InputText id="nombres" />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="nombres"
                    className="text-xs text-gray-600 sm:text-base"
                  >
                    Correo*{" "}
                  </label>
                  <InputText id="nombres" />
                </div>
              </div>

              <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-15 mb-4">
                <div className="w-full">
                  <label
                    htmlFor="nombres"
                    className="text-xs text-gray-600 sm:text-base"
                  >
                    Ciudad*
                  </label>
                  <InputText id="nombres" />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="nombres"
                    className="text-xs text-gray-600 sm:text-base"
                  >
                    Cargo*
                  </label>
                  <InputText id="nombres" />
                </div>
              </div>

              <div className="flex flex-col gap-y-4 lg:flex-row lg:items-start lg:gap-x-15 mb-4">
                <div className="w-full">
                  <label
                    htmlFor="nombres"
                    className="text-xs text-gray-600 sm:text-base"
                  >
                    Celular*
                  </label>
                  <InputText id="nombres" />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="nombres"
                    className="text-xs text-gray-600 sm:text-sm"
                  >
                    Sufres algún tipo de Alergia, Hipertensión, Diabetes u otro?
                  </label>
                  <InputText id="nombres" />
                  <span className="text-xs text-gray-600 font-light sm:text-sm">
                    Si respondes Si, menciona cuales
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center mt-2 lg:gap-x-15 mb-4">
                <div className="w-full flex items-center">
                  <input
                    type="checkbox"
                    className="w-6 h-6 rounded-md"
                    id="invitado"
                  />
                  <label
                    htmlFor="invitado"
                    className="text-xs text-gray-600 sm:text-base ml-4"
                  >
                    Invitado
                  </label>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="nombres"
                    className="text-xs text-gray-600 sm:text-base"
                  >
                    Empresa
                  </label>
                  <InputText id="nombres" />
                </div>
              </div>
            </div>
            {/* fin datos de participantes */}
            <div className="px-4 sm:px-12 mt-12">
              <hr />
            </div>
            {/* Ingresar datos de inscritos por cantidad indicada  */}
            <div className="px-5 lg:px-20 text-gray-600 mt-8">
              <p className="text-xl font-medium mb-5">
                Ingresar datos de inscritos por cantidad indicada{" "}
              </p>

              <div className="w-full">
                <div className="w-full mt-1 flex items-center pl-7 h-13 text-gray-600 relative bg-white border border-gray-500 rounded-xl ">
                  <span className="absolute left-1 cursor-pointer text-3xl px-4 py-1">
                    +
                  </span>
                </div>
              </div>
            </div>
            {/* fin de ingresar datos de inscritos por cantidad indicada  */}
            <div className="flex justify-center px-5">
              <button
                className="bg-secondary-600 text-white font-bold sm:py-3
                    w-full text-base rounded-xl text-center py-2  sm:rounded-lg 
                   hover:opacity-80 transition-all duration-300 focus:outline-none md:max-w-44 mt-12"
              >
                Pagar
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer idiomas={props} />
      <ButtonWhassapt />
    </div>
  );
};
export default Registro;

// eslint-disable-next-line space-before-function-paren
export async function getStaticProps({ locale }) {
  const response = await import(`../../../lang/${locale}.json`);
  return {
    props: {
      Correo: response.default.Correo,
      Nombres: response.default.Nombres,
      Apellidos: response.default.Apellidos,
      Celular: response.default.Celular,
      Empresa: response.default.Empresa,
      Pais: response.default.Pais,
      Button: response.default.Button,
      PermanezcaConectado: response.default.PermanezcaConectado,
      AceptoLa: response.default.AceptoLa,
      PoliticaPrivacidad: response.default.PoliticaPrivacidad,
      Informacion: response.default.Informacion,
      DerechosReservados: response.default.DerechosReservados,
      DesarrolladoPor: response.default.DesarrolladoPor,
      Banner: response.default.Banner,
      ModalInscripcion: response.default.ModalInscripcion,
    },
  };
}
