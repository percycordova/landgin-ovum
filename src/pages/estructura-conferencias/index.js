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

const EstructurasConferencias = (props) => {
  const { Estructura } = props;
  const { conferencias, titulo } = Estructura;
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
        <title>OVUM 2022 - ESTRUCTURA CONFERENCIAS</title>
        <meta
          name="description"
          content="OVUM 2022 XXVIII Congreso Latinoamericano de Avicultura"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header idiomas={props} />
        <div className="mt-11">
          <div className="lg:w-256 max-w-7xl mx-auto px-4 lg:px-0 pb-52">
            <h3 className="text-3xl  lg:text-3.5xl  text-center  mb-8">
              {titulo}
            </h3>
            <div className="flex items-center gap-3 mb-9">
              <div className="w-18 h-20  bg-primary-850 rounded-2xl">
                <img src="/ala.png" className="w-14 mx-auto h-20" alt="" />
              </div>
              <h4 className="font-bold text-2xl lg:text-3xl text-green-500 ">
                {conferencias.titulo}
              </h4>
            </div>
            <div className=" flex flex-col-reverse gap-5 lg:flex-row lg:items-center">
              <p className="text-sm font-light">
                Destacados especialistas internacionales desarrollarán tópicos
                de trascendencia para futuro del sector avícola. <br />
                <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <img
                src="estructura__conferencias.png"
                alt=""
                className="max-w-120 h-auto lg:h-80 object-cover"
              />
            </div>

            <div className="mt-14">
              <div className="mb-8">
                <h6 className="text-sm mb-4 font-semibold">
                  Transmitidas presencial e interactivamente, permitirán
                  encontrar soluciones conjuntas a los principales retos de
                  nuestra industria.
                </h6>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br /> <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="mb-8">
                <h6 className="text-sm mb-4 font-semibold">
                  Transmitidas presencial e interactivamente, permitirán
                  encontrar soluciones conjuntas a los principales retos de
                  nuestra industria.
                </h6>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br /> <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="mb-8">
                <h6 className="text-sm mb-4 font-semibold">
                  Dár encontrar soluciones conjuntas a los principales retos de
                  nuestra industria.
                </h6>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br /> <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="mb-8">
                <h6 className="text-sm mb-4 font-semibold">
                  Dár encontrar soluciones conjuntas a los principales retos de
                  nuestra industria.
                </h6>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br /> <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          <BannerLanding idiomas={props} />
          {/* <Patrocinadores /> */}
          <Organizadores idiomas={props} />
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
export default EstructurasConferencias;

// eslint-disable-next-line space-before-function-paren
export async function getStaticProps({ locale }) {
  const response = await import(`../../lang/${locale}.json`);

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
    },
  };
}
