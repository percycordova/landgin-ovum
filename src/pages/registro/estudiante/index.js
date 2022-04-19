import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import AcordionPagoEstudiante from "../../../components/acordion/AcordionPagoEstudiante";
import ButtonWhassapt from "../../../components/buttons/ButtonWhassapt";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header";
import InputText from "../../../components/inputs/InputText";
const defaulStateDatosParticipantes = {
  nombres: "",
  apellidos: "",
  dni: "",
  correo: "",
  ciudad: "",
  cargo: "",
  celular: "",
  alergias: "",
  empresa: "",
};

const Estudiante = (props) => {
  const [cantidad, setCantidad] = useState(1);
  const [montoTotal, setMontoTotal] = useState(300);
  const [rows, setRows] = useState([defaulStateDatosParticipantes]);

  const handleOnChangeAcordion = (index, name, value) => {
    const copyRows = [...rows];
    copyRows[index] = {
      ...copyRows[index],
      [name]: value,
    };
    setRows(copyRows);
  };
  const handleOnAdd = () => {
    setRows(rows.concat(defaulStateDatosParticipantes));
  };

  const handleOnRemove = () => {
    const copyRows = [...rows];
    copyRows.splice(rows.length-1, 1);
    setRows(copyRows);
  };
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
        <Header idiomas={props}/>
        <div className="max-w-256 border mx-auto pt-8 pb-15 mt-10 mb-20 ">
          <h2 className="text-gray-600 text-2xl pl-8 md:text-2.5xl  md:pl-24 mb-3">
            Registro
          </h2>
          <div className="px-4 sm:px-2">
            <hr />
          </div>

          <div className="flex items-center mt-10">
            <Link href="/registro">
              <img src="/icons/flecha-izquierda.png" alt="" className="w-10 ml-3 cursor-pointer" />
            </Link>
            <h3 className="text-xl md:text-3xl pl-4 font-bold md:pl-8  text-gray-600">
            Estudiantes $300 USD
            </h3>
          </div>

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
                      onClick={() => {
                        setCantidad((c) => c + 1);
                        setMontoTotal(montoTotal + 300);
                        handleOnAdd()
                      }}
                    >
                      +
                    </span>
                    <span
                      className="w-8 h-1/2  text-white px-2  justify-center items-center flex border-t border-white cursor-pointer"
                      onClick={() => {
                        if (cantidad > 1) {
                          setCantidad((c) => c - 1);
                          setMontoTotal(montoTotal - 300);
                          handleOnRemove()
                        }
                      }}
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
                <div className="w-full mt-1 flex items-center pl-7 h-13 text-gray-600 relative bg-white border border-gray-500 rounded-lg ">
                  <span className="absolute left-5 font-bold text-lg">
                    $ {montoTotal}.00
                  </span>
                </div>
                <span className="text-secondary-600 text-xs font-bold sm:text-sm">
                  US $300.00 por estudiante inc. impuestos
                </span>
              </div>
            </div>
          </div>
          {/* fin de participantes */}

          <form action="" className="mt-8">

            {/* datos de participantes */}
            <div className="mt-8 px-5 lg:px-20 text-gray-600">
              <p className="text-xl font-medium mb-5">
                Ingresar datos de participante
              </p>
              {rows.map((row, index) => (
                <AcordionPagoEstudiante
                  {...row}
                  onChange={(name, value) =>
                    handleOnChangeAcordion(index, name, value)
                  }
                  key={index}
                  index={index}
                />
              ))}
              
            </div>
            {/* fin datos de participantes */}
            <div className="px-4 sm:px-12 mt-12">
              <hr />
            </div>
            {/* Ingresar datos de inscritos por cantidad indicada  */}
            {/* <div className="px-5 lg:px-20 text-gray-600 mt-8">
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
            </div> */}
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
export default Estudiante;

// eslint-disable-next-line space-before-function-paren
// eslint-disable-next-line space-before-function-paren
export async function getStaticProps({ locale }) {
  const response = await import(`../../../lang/${locale}.json`)

  return {
    props: {
      HeaderIdiomas: response.default.HeaderIdiomas,
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
      HeaderMenu: response.default.HeaderMenu,
      AcercaOvum: response.default.AcercaOvum,
      LoUltimo: response.default.LoUltimo,
      BtnVerMas: response.default.BtnVerMas,
      Estructura: response.default.Estructura,
      Programa: response.default.Programa,
      QuieresParticipar: response.default.QuieresParticipar,
      ConoceHonduras: response.default.ConoceHonduras,
      Organizadores: response.default.Organizadores,
    }
  }
}
