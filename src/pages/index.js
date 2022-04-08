import Head from 'next/head'
import Banner from '../components/banner/Banner'
import ButtonWhassapt from '../components/buttons/ButtonWhassapt'
import FomularioRegistro from '../components/Fomularios/FomularioRegistro'
import Footer from '../components/footer/Footer'
import Header from '../components/header'
import ModalInscripcion from '../components/ModalGenerico/ModalInscripcion'
// import ModalErrorCorreoRegistrado from '../components/ModalGenerico/ModalErrorCorreoRegistrado'
import { useModal } from '../hooks/useModal'
import Acerca from '../sections/landing/acerca'
import Auspiciadores from '../sections/landing/auspiciadores'
import BannerLanding from '../sections/landing/bannerLanding'
import Conferencia from '../sections/landing/conferencia'
import Conferencista from '../sections/landing/conferencista'
import Conoce from '../sections/landing/conoce'
import Estructura from '../sections/landing/estructura'
import Feria from '../sections/landing/feria'
import LoUltimo from '../sections/landing/loUltimo'
import Organizadores from '../sections/landing/organizadores'
import Patrocinadores from '../sections/landing/patrocinadores'
import Programa from '../sections/landing/programa'

const Home = (props) => {
  const [isOpenInscripcion, openModalInscripcion, closeModalInscripcion] = useModal(false)
  // const [isOpenModalCorreo, openModalCorreo, closeModalCorreo] = useModal(false)

  return (
    <div className='font-sans'>
      <Head>
          <title>OVUM 2022</title>
          <link rel="icon" href="/Captura_1.ico" />
          <meta
            name="description"
            content="OVUM 2022 XXVIII Congreso Latinoamericano de Avicultura"
          />
          <meta property="og:title" content="OVUM 2022" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://ovum-next-gamma.vercel.app/"
          />
          <meta
            name="keywords"
            content="OVUM, OVUM 22, CONGRESO AVICULTURA, CONGRESO, AVICULTURA"
          />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="viewport" content="width=device-width" />
          <meta name="title" content="OVUM 2022" />
          <meta
            name="description"
            content="OVUM 2022 XXVIII Congreso Latinoamericano de Avicultura"
          />
          <meta name="image" content="/logo-ovum.png" />

          <meta name="twitter:title" content="OVUM 2022" />
          <meta
            name="twitter:description"
            content="OVUM 2022 XXVIII Congreso Latinoamericano de Avicultura"
          />
          <meta name="twitter:image" content="/logo-ovum.png" />
          <meta
            name="twitter:url"
            content="https://ovum-next-gamma.vercel.app/"
          />
          <meta name="twitter:card" content="summary_large_image" />

          <meta property="og:title" content="OVUM 2022" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="OVUM 2022" />
          <meta
            property="og:url"
            content="https://ovum-next-gamma.vercel.app/"
          />
          <meta property="og:image" content="/logo-ovum.png" />
          <meta property="og:image:secure_url" content="/logo-ovum.png" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="300" />
          <meta
            property="og:description"
            content="OVUM 2022 XXVIII Congreso Latinoamericano de Avicultura"
          />
        </Head>

      <main className="">
        <Header idiomas={props} />
        <Banner idiomas={props} />
        <div className="">
          <Acerca />
          <LoUltimo />
          {/* <Conferencia /> */}
          <Estructura />
          <Programa />
          {/* <Conferencista /> */}
          <BannerLanding />
          <Conoce />
          {/* <Feria /> */}
          {/* <Patrocinadores /> */}
          {/* <Auspiciadores /> */}
          <Organizadores />
          <section className=" p-8 flex flex-col justify-center items-center">
            <FomularioRegistro openModal={openModalInscripcion} idiomas={props} />
            <div className="md:w-9/12  w-full border-b border-gray-500 mt-10"></div>
            <div className="text-center mt-8">
              <p className="text-3xl mb-3">{props.Informacion.value}</p>
              <p className="text-gray-600 text-base">
                WhatsApp: <span className="font-bold ">+504 3297-4088</span>
              </p>
              <p className="text-gray-600 text-base">
                E-mail: <span className="font-bold ">operaciones@anavih.com</span>
              </p>
              <p></p>
            </div>
          </section>
        </div>
      </main>
      <Footer idiomas={props} />
      <ButtonWhassapt />
      <ModalInscripcion isOpen={isOpenInscripcion} closeModal={closeModalInscripcion} idiomas={props} />
      {/* <ModalErrorCorreoRegistrado isOpen={isOpenModalCorreo} closeModal={closeModalCorreo}/> */}
    </div>
  )
}
export default Home

// eslint-disable-next-line space-before-function-paren
export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`)
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
      ModalInscripcion: response.default.ModalInscripcion
    }
  }
}
