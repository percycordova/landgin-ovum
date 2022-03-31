import Head from "next/head";
import ButtonWhassapt from "../../components/buttons/ButtonWhassapt";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header";

const Registro = (props) => {
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
        <div className="max-w-256 border mx-auto pt-8 pb-15 mt-10">
          <h2 className="text-gray-600 text-2xl pl-8 md:text-2.5xl  md:pl-24 mb-3">
            Registro
          </h2>
          <div className="px-4 sm:px-2">
            <hr />
          </div>
          <div className="px-2 md:px-22 pt-10 ">
            <h3 className="text-2xl md:text-3xl font-light text-center text-gray-600">
              Inversión del 6 al 9 de Septiembre
            </h3>
            <div className=" border mt-12 py-3 md:py-7 text-gray-600 rounded-xl px-1 md:px-7 flex flex-col gap-y-1">
              <h4 className="text-2xl font-bold text-center mb-4 ">
                TARIFARIO
              </h4>
              {/* cabecera */}
              <div className=" md:gap-1 text-white flex font-black text-lg ">
                <p
                  className="w-2/3 md:py-1 text-center border-yellow-700 border bg-yellow-700 "
                  style={{ borderRadius: "10px 0 0 0" }}
                >
                  TIPO
                </p>
                <p
                  className="w-1/3 text-center md:py-1 border-yellow-700 border bg-yellow-700"
                  style={{ borderRadius: "0 10px 0 0" }}
                >
                  COSTO
                </p>
              </div>
              {/* tarifario 1 */}
              <div className=" md:gap-0  flex bg-gray-400 items-center">
                <div className="text-gray-600 w-2/3 px-2 md:px-7 py-4 ">
                  <p className="text-sm md:text-base font-bold">
                    Precio pago anticipado
                  </p>
                  <p className="text-sm md:text-base">Cupos limitados</p>
                  <p className="font-light text-sm md:text-base">
                    Hasta el 31 de Mayo 2022
                  </p>
                </div>
                <div className="w-1/3  px-2 py-4 lg:pr-6 flex flex-col items-center lg:flex-row lg:justify-between lg:items-center">
                  <p className="text-center mb-1 text-gray-600  text-lg">
                    560 USD
                  </p>
                  <button
                    className="bg-secondary-600 text-white font-bold sm:py-3
                        w-full text-base rounded-xl text-center py-2  sm:rounded-3xl 
                       hover:opacity-80 transition-all duration-300 focus:outline-none md:max-w-36"
                  >
                    Comprar
                  </button>
                </div>
              </div>
              {/* tarifario 2 */}
              <div className=" md:gap-0  flex bg-gray-300 items-center">
                <div className="w-2/3  text-gray-600  md:px-7 px-2 py-4 ">
                  <p className="text-sm font-bold md:text-base">Precio regular</p>
                  <p className="text-sm md:text-base">
                    Acceso a la inauguración, clausura, conferencias, zona
                    ferial y almuerzos
                  </p>
                  <p className="font-light text-sm md:text-base">
                    Hasta el 09 de Setiembre 2022
                  </p>
                </div>
                <div className="w-1/3  px-2 py-4 lg:pr-6 flex flex-col items-center lg:flex-row lg:justify-between lg:items-center">
                  <p className="text-center mb-1 text-gray-600  text-lg">
                    620 USD
                  </p>
                  <button
                    className="bg-secondary-600 text-white font-bold sm:py-3
                        w-full text-base rounded-xl text-center py-2  sm:rounded-3xl 
                       hover:opacity-80 transition-all duration-300 focus:outline-none md:max-w-36"
                  >
                    Comprar
                  </button>
                </div>
              </div>
              {/* tarifario 3 */}
              <div className=" md:gap-0  flex bg-gray-300 items-center">
                <div className="w-2/3  text-gray-600  md:px-7 px-2 py-4 ">
                  <p className="text-sm font-bold md:text-base">Estudiantes</p>

                  <p className="font-light text-sm md:text-base">Cupos limitados</p>
                </div>
                <div className="w-1/3  px-2 py-4 lg:pr-6 flex flex-col items-center lg:flex-row lg:justify-between lg:items-center">
                  <p className="text-center mb-1 text-gray-600  text-lg">
                    300 USD
                  </p>
                  <button
                    className="bg-secondary-600 text-white font-bold sm:py-3
                        w-full text-base rounded-xl text-center py-2  sm:rounded-3xl 
                       hover:opacity-80 transition-all duration-300 focus:outline-none md:max-w-36"
                  >
                    Comprar
                  </button>
                </div>
              </div>
              {/* traifario 4 */}
              <div className=" md:gap-0  flex bg-gray-400 items-center">
                <div className="w-2/3  text-gray-600 md:px-7 px-2 py-4 ">
                  <p className="text-sm font-bold md:text-base">Feria Virtual </p>
                  <p className="font-medium text-sm md:text-base">
                    Acceso a zona ferial virtual, webinar, ponencias, salas,
                    seminiarios, stand de empresas, talleres e investigaciones
                  </p>
                </div>
                <div className="w-1/3  px-2 py-4 lg:pr-6 flex flex-col items-center lg:flex-row lg:justify-between lg:items-center">
                  <p className="text-center mb-1 text-gray-600  text-lg">
                    300 USD
                  </p>
                  <button
                    className="bg-secondary-600 text-white font-bold sm:py-3
                    w-full text-base rounded-xl text-center py-2  sm:rounded-3xl 
                   hover:opacity-80 transition-all duration-300 focus:outline-none md:max-w-36"
                  >
                    Comprar
                  </button>
                </div>
              </div>
              {/* tarifario 5 */}
              <div className=" md:gap-0  flex bg-gray-400 items-center">
                <div className="w-2/3  text-gray-600 md:px-7 px-2 py-4 ">
                  <p className="text-sm text-secondary-600 font-bold md:text-base">
                    ACOMPAÑANTE OVUM
                  </p>
                  <p className="text-sm font-semibold md:text-base">
                    Programación exclusivo creado para acompañantes con acceso a
                    actividades sociales (inauguración y clausura), zona ferial
                    y
                  </p>
                  <p className="text-sm text-secondary-600 md:text-base">
                    programas turísticos Cupos limitados
                  </p>
                  <p className="font-light text-sm md:text-base"> Cupos limitados</p>
                </div>
                <div className="w-1/3  px-2 py-4 lg:pr-6 flex flex-col items-center lg:flex-row lg:justify-between lg:items-center ">
                  <p className="text-center mb-1 text-gray-600  text-lg">
                    450 USD
                  </p>
                  <button
                    className="bg-secondary-600 text-white font-bold sm:py-3
                    w-full text-base rounded-xl text-center py-2  sm:rounded-3xl 
                   hover:opacity-80 transition-all duration-300 focus:outline-none md:max-w-36"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
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
  const response = await import(`../../lang/${locale}.json`);
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
