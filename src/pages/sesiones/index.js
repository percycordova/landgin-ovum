import Head from "next/head";
import { useEffect } from "react";
import ButtonWhassapt from "../../components/buttons/ButtonWhassapt";
import FomularioRegistro from "../../components/Fomularios/FomularioRegistro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header";
import ModalInscripcion from "../../components/ModalGenerico/ModalInscripcion";
import { useModal } from "../../hooks/useModal";
import BannerLanding from "../../sections/landing/bannerLanding";
import Organizadores from "../../sections/landing/organizadores";
import Link from "next/link";
// import Patrocinadores from '../../sections/landing/patrocinadores'

const PreguntasFrecuentes = (props) => {
  const [isOpenInscripcion, openModalInscripcion, closeModalInscripcion] =
    useModal(false);
  // const [isOpenModalCorreo, openModalCorreo, closeModalCorreo] = useModal(false)
  useEffect(() => {
    window.scroll({
      top: 10,
    });
  }, []);
  return (
    <div className="">
      <Head>
        <title>OVUM 2022 - PREGUNTAS FRECUENTES</title>
        <meta
          name="description"
          content="OVUM 2022 XXVIII Congreso Latinoamericano de Avicultura"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header />
        <div className="mt-11">
          <div className="lg:w-256 max-w-7xl mx-auto px-4 lg:px-0 pb-52">
            <h3 className="text-2xl  lg:text-3.5xl  text-center font-medium mb-8">
             SESIONES
            </h3>

            <p>EN FASE DE DESARROLLO...</p>
          </div>

          <BannerLanding />
          {/* <Patrocinadores /> */}
          <Organizadores />
          <section className=" p-8 flex flex-col justify-center items-center">
            <FomularioRegistro
              openModal={openModalInscripcion}
              idiomas={props}
            />
            <div className="md:w-9/12  w-full border-b border-gray-500 mt-10"></div>
            <div className="text-center mt-8">
              <p className="text-3xl mb-3">{props.Informacion.value}</p>
              <p className="text-gray-600 text-base">
                WhatsApp: <span className="font-bold ">+504 3297-4088</span>
              </p>
              <p className="text-gray-600 text-base">
                E-mail:{" "}
                <span className="font-bold ">operaciones@anavih.com</span>
              </p>
              <p></p>
            </div>
          </section>
        </div>
      </main>
      <Footer idiomas={props} />
      <ButtonWhassapt />
      <ModalInscripcion
        isOpen={isOpenInscripcion}
        closeModal={closeModalInscripcion}
        idiomas={props}
      />
      {/* <ModalErrorCorreoRegistrado isOpen={isOpenModalCorreo} closeModal={closeModalCorreo}/> */}
    </div>
  );
};
export default PreguntasFrecuentes;

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
