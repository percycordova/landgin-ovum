import Head from 'next/head'
import Banner from '../components/banner/Banner'
import ButtonWhassapt from '../components/buttons/ButtonWhassapt'
import FomularioRegistro from '../components/Fomularios/FomularioRegistro'
import Footer from '../components/footer/Footer'
import ModalInscripcion from '../components/ModalGenerico/ModalInscripcion'
import { useTranslation } from 'react-i18next'
import { useModal } from '../hooks/useModal'

const Home = () => {
  const { t } = useTranslation()
  const [isOpen, openModal, closeModal] = useModal(false)
  // const [isOpenModalCorreo, openModalCorreo, closeModalCorreo] = useModal(false)
  return (
    <div>
      <Head>
        <title>OVUM 2022</title>
        <meta
          name="description"
          content="OVUM 2022 XXVIII Congreso Latinoamericano de Avicultura"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Banner />
        <section className=" p-8 flex flex-col justify-center items-center">
          <h6 className="text-xl sm:text-3xl text-center ">
            {t('PermanezcaConectado.1')}
          </h6>
          <FomularioRegistro openModal={openModal} />
          <div className="md:w-9/12  w-full border-b border-gray-500 mt-10"></div>
          <div className="text-center mt-8">
            <p className="text-3xl mb-3">{t('Informacion.1')}</p>
            <p className="text-gray-600 text-base">
              WhatsApp: <span className="font-bold ">+504 3297-4088</span>
            </p>
            <p className="text-gray-600 text-base">
              E-mail: <span className="font-bold ">operaciones@anavih.com</span>
            </p>
            <p></p>
          </div>
        </section>
      </main>
      <Footer />
      <ButtonWhassapt />
      <ModalInscripcion isOpen={isOpen} closeModal={closeModal} />
      {/* <ModalErrorCorreoRegistrado isOpen={isOpenModalCorreo} closeModal={closeModalCorreo}/> */}
    </div>
  )
}
export default Home
