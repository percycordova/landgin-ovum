import Head from 'next/head'
import Banner from '../components/banner/Banner'
import ButtonWhassapt from '../components/buttons/ButtonWhassapt'
import FomularioRegistro from '../components/Fomularios/FomularioRegistro'
import Footer from '../components/footer/Footer'
import ModalInscripcion from '../components/ModalGenerico/ModalInscripcion'
import { useModal } from '../hooks/useModal'
import Acerca from '../sections/landing/acerca'
import LoUltimo from '../sections/landing/loUltimo'

const Home = (props) => {
  const [isOpen, openModal, closeModal] = useModal(false)
  // const [isOpenModalCorreo, openModalCorreo, closeModalCorreo] = useModal(false)
  return (
    <div className=''>
      <Head>
        <title>OVUM 2022</title>
        <meta
          name="description"
          content="OVUM 2022 XXVIII Congreso Latinoamericano de Avicultura"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Banner idiomas={props} />
        <div className="md:w-9/12 mt-5 max-w-7xl mx-auto">
          <Acerca />
          <LoUltimo />
          <section className=" p-8 flex flex-col justify-center items-center">
            <h6 className="text-xl sm:text-3xl text-center ">
              {props.PermanezcaConectado.value}
            </h6>
            <FomularioRegistro openModal={openModal} idiomas={props} />
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
      <ModalInscripcion isOpen={isOpen} closeModal={closeModal} idiomas={props} />
      {/* <ModalErrorCorreoRegistrado isOpen={isOpenModalCorreo} closeModal={closeModalCorreo}/> */}
    </div>
  )
}
export default Home

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
