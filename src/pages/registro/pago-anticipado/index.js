import Head from "next/head";
import ButtonWhassapt from "../../../components/buttons/ButtonWhassapt";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header";


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
        <div className="max-w-256 border mx-auto pt-8 pb-15 mt-10 mb-20 ">
          <h2 className="text-gray-600 text-2xl pl-8 md:text-2.5xl  md:pl-24 mb-3">
            Registro
          </h2>
          <div className="px-4 sm:px-2">
            <hr />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mt-10 md:pl-24 text-gray-600">
            Pago anticipado $560 USD
          </h3>
          <div className="px-4 sm:px-12 mt-12">
            <hr />
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
