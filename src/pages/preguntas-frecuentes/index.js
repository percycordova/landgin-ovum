import Head from 'next/head'
import { useEffect } from 'react'
import ButtonWhassapt from '../../components/buttons/ButtonWhassapt'
import FomularioRegistro from '../../components/Fomularios/FomularioRegistro'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header'
import ModalInscripcion from '../../components/ModalGenerico/ModalInscripcion'
import { useModal } from '../../hooks/useModal'
import BannerLanding from '../../sections/landing/bannerLanding'
import Organizadores from '../../sections/landing/organizadores'
import Link from 'next/link'
// import Patrocinadores from '../../sections/landing/patrocinadores'

const PreguntasFrecuentes = (props) => {
  const [isOpenInscripcion, openModalInscripcion, closeModalInscripcion] =
    useModal(false)
  // const [isOpenModalCorreo, openModalCorreo, closeModalCorreo] = useModal(false)
  useEffect(() => {
    window.scroll({
      top: 10
    })
  }, [])

  return (
    <div className=''>
      <Head>
        <title>OVUM 2022 - PREGUNTAS FRECUENTES</title>
        <meta
          name='description'
          content='OVUM 2022 XXVIII Congreso Latinoamericano de Avicultura'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=''>
        <Header idiomas={props} />
        <div className='mt-11'>
          <div className='lg:w-256 max-w-7xl mx-auto px-4 lg:px-0 pb-52'>
            <h3 className='text-2xl  lg:text-3.5xl  text-center font-medium mb-8'>
              PREGUNTAS FRECUENTES
            </h3>
            <h4 className='mt-32 text-xl mb-13 '>PREGUNTAS GENERALES</h4>
            <p className='font-light' style={{ fontSize: '0.875rem' }}>
              <span className='font-semibold'>
                ¿Cuándo y dónde se realizarán el evento Ovum 2022?
              </span>
              <br />
              El Ovum 2022 se realizará en San Pedro Saula, Honduras desde el 6
              al 9 septiembre 2022
              <br /> <br />
              <span className='font-semibold'>
                ¿Quiénes pueden asistir al evento Ovum 2022?
              </span>{' '}
              <br />
              La inscripción está abierta a cualquier persona interesada en Ovum
              2022. Consulta las tarifas de inscripción para ver las cuotas de
              inscripción de este año.
              <br /> <br />{' '}
              <span className='font-semibold'>
                ¿Se ofrece servicio de interpretación simultánea durante el
                evento?
              </span>
              <br /> Ovum 2022 ofrece servicio de interpretación en varios
              idiomas durante la ceremonia de apertura, las sesiones generales y
              la ceremonia de clausura. La mayoría de sesiones paralelas se
              realizarán en español, pero algunas de ellas podrían también
              ofrecer este servicio. Consulta el programa del evento para
              comprobar qué sesiones contarán con servicio de interpretación al
              español.
              <br /> <br />{' '}
              <span className='font-semibold'>
                ¿Cuál es la temperatura en Honduras en septiembre?
              </span>
              <br /> En el mes de septiembre, las temperaturas oscilan entre los
              25 y 28 grados centígrados.
              <br /> <br /> Puesto que el centro de convenciones cuenta con aire
              acondicionado, considera la posibilidad de utilizar una chaqueta o
              suéter ligero.
              <br /> <br /> <span className='font-semibold'>Inscripción</span>
              <br /> <span className='font-semibold'>
                ¿Cómo me inscribo?
              </span>{' '}
              <br /> Los interesados en asistir al evento pueden inscribirse
              ellos mismos y a sus invitados en línea{' '}
              <span className='border-b border-black'>
                <Link href='/registro'>www.elovum.com/registro. </Link>
              </span>
              Si lo deseas, también podrás inscribirte en la sede del evento{' '}
              <br /> <br />{' '}
              <span className='font-semibold'>
                ¿Cuál es el costo de la inscripción?
              </span>
              <br /> Consulta el recuadro completo de las cuotas de inscripción,
              los tipos de participante, y lo que incluye tu inscripción.
              <br /> <br />
              Cancelación en línea (método preferido)
              <br /> Cancelación por correo electrónico: operaciones@anavih.com{' '}
              <br />
              Cancelación por fax: +504 3297-4088
              <br /> ¿Cómo registro a un invitado?
              <br /> Podrás agregar un invitado en tu registro en{' '}
              <span className='border-b border-black'>
                <Link href='/registro'>www.elovum.com/registro</Link>
              </span>
              <br /> <br />
              {/* <span className="font-semibold">
                ¿Cuál es la política sobre cancelaciones?
              </span> */}
              {/* <br />*/}
              {/* <span className="text-red-600">
                De acuerdo a la decisión tomada por la Directiva de Ovum 2022 en
                enero de 2016, las cancelaciones están sujetas a un recargo de
                USD 50 por persona. Las solicitudes de cancelación de
                inscripciones o entradas a eventos de Rotary deben recibirse por
                escrito a más tardar el 30 de abril de 2022. Las personas que
                cancelen su inscripción con posterioridad a dicha fecha no
                recibirán reembolso alguno. En casos de fuerza mayor, se
                estudiarán caso por caso las solicitudes de cancelación
                recibidas y el cargo de USD 50 se aplicará a todas las
                cancelaciones aprobadas. Las tarifas de inscripción y las
                tarifas de los eventos con entradas no serán reembolsadas en las
                solicitudes recibidas después del 30 de abril, a menos que se
                deban a una denegación de visado. Las cancelaciones causadas por
                la denegación del visado deben recibirse por
              </span>{" "}
              escrito a más tardar el 8 de junio de 2022. */}
              <span className='font-semibold'>
                Cancelé mi registro ¿Cómo puedo volver a registrarme?
              </span>
              <br /> Lamentablemente, una vez que se cancela la inscripción, no
              se puede volver a crear en línea. Si deseas volver a inscribirte,
              tendrás que enviar por fax o correo el formulario de inscripción y
              pedido de entradas.
              <br />
              <br /> Se aplicará la tarifa de inscripción en vigor.
              <br />
              <br />
              <span className='font-semibold'> Alojamiento y transporte</span>
              <br />
              <span className='font-semibold'>
                ¿Qué debo hacer para reservar una habitación de hotel y cuales
                son sus tarifas por noche?
              </span>
              <br /> Ovum 2022 pone a su disponibilidad distintos hoteles y
              tarifas en San Pedro Sula. Click aquí para ver
              <a
                className='border-b border-black'
                href='https://elovum.com/TARIFAS-DE-HOTELES.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                https://elovum.com/TARIFAS-DE-HOTELES.pdf
              </a>
              <br />
              <br /> <span className='font-semibold'> Transporte</span>
              <br />{' '}
              <span className='font-semibold'>
                ¿Qué transporte se ofrecerá?
              </span>
              <br /> Ovum 2022 proporcionará servicio de autobuses aptos para
              personas con discapacidades, entre los hoteles oficiales
              contratados Ovum 2022 y el Centro de Convenciones de la Cámara de
              Comercio e Industrias de Cortés.
              <br />
              <br />{' '}
              <span className='font-semibold'>
                ¿Existen otros métodos de transporte?
              </span>
              <br /> San Pedro Sula, tiene un sistema de transporte público,
              llamado Gran Central Metropolitana de San Pedro Sula, la terminal
              de buses mas grande y moderna de Centroamérica. También hay taxis
              y viajes compartidos (incluidos Uber) disponibles.
              <br />
              <br /> <span className='font-semibold'>Viajes</span>
              <br />
              <br />{' '}
              <span className='font-semibold'>
                ¿Qué debo hacer para obtener un visado para viajar al evento?
              </span>
              <br /> Ingresa a{' '}
              <span className='border-b border-black'>
                <Link href='/lo-ultimo'>www.elovum.com/lo-ultimo</Link>
              </span>{' '}
              o visita la página web del Departamento de Honduras para saber
              quién necesita un visado y cuándo solicitarlo, además de
              información adicional. La información sobre el visado varía según
              el país de ciudadanía. Ovum 2022 proporciona a los consulados y
              embajadas una lista actualizada de los inscritos en el evento y
              solicita que se concedan visados al mayor número posible de
              inscritos, pero la concesión de dichos visados depende en última
              instancia del gobierno de Honduras. Ovum 2022 no puede intervenir
              en nombre de las personas inscritas individualmente.
              <br />
              <br />
              <span className='font-semibold'>
                ¿Qué requisitos migratorios hay para entrar a Honduras?
              </span>
              <br /> -Los pasajeros deben efectuar un pre-registro migratorio
              electrónico, estableciendo la fecha de entrada y salida al país.
              <br />
              -Los pasajeros inmunizados deberán portar el carné original que le
              fue otorgado en el sitio de aplicación de la vacuna, mismo que
              deberá contener el esquema completo de dosis, con un tiempo
              ulterior a los 14 días desde su implementación.
              <br /> -En caso de no haberse vacunado debe subir en este enlace
              el resultado de cualquier prueba para la detección del COVID-19
              aceptada en el país Hisopado de detección de Antígenos e Hisopado
              rt-PCR. Se mantiene la disposición de realizar dicha prueba en un
              tiempo no mayor a setenta y dos (72) horas previo al viaje.
              <br /> -Cumplir con las medidas de bioseguridad.
              <br />
              -Pasajeros de origen Sudamericano deberán portar su carnet de
              vacunación contra la fiebre amarilla
              <br />
              <br /> <span className='font-semibold'>Eventos</span>
              <br />
              <span className='font-semibold'>
                ¿A qué eventos podré asistir durante el Ovum 2022?
              </span>
              <br /> La inscripción en la convención incluye los siguientes
              eventos:
              <br />
              <br />
              <span className='font-semibold'>Ceremonia de apertura: </span> 6
              de septiembre
              <br /> <span className='font-semibold'>
                Sesiones generales:
              </span>{' '}
              Del 7 al 9 de septiembre
              <br />
              <span className='font-semibold'>Sesiones paralelas:</span> Del 7
              al 9 de septiembre
              <br />
              <span className='font-semibold'>Ceremonia de clausura:</span> 9 de
              septiembre
              <br />
              Centro de Convenciones de la Cámara de Comercio e Industrias de
              Cortés, en la capital comercial del norte catracho, San Pedro
              Sula, Honduras del 6 al 9 de septiembre
            </p>
          </div>

          <BannerLanding idiomas={props} />
          {/* <Patrocinadores /> */}
          <Organizadores idiomas={props} />
          <section className=' p-8 flex flex-col justify-center items-center'>
            <FomularioRegistro
              openModal={openModalInscripcion}
              idiomas={props}
            />
            <div className='md:w-9/12  w-full border-b border-gray-500 mt-10'></div>
            <div className='text-center mt-8'>
              <p className='text-3xl mb-3'>{props.Informacion.value}</p>
              <p className='text-gray-600 text-base'>
                WhatsApp: <span className='font-bold '>+504 3297-4088</span>
              </p>
              <p className='text-gray-600 text-base'>
                E-mail:{' '}
                <span className='font-bold '>operaciones@anavih.com</span>
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
  )
}
export default PreguntasFrecuentes

// eslint-disable-next-line space-before-function-paren
// eslint-disable-next-line space-before-function-paren
export async function getStaticProps({ locale }) {
  const response = await import(`../../lang/${locale}.json`)

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
      Organizadores: response.default.Organizadores
    }
  }
}
