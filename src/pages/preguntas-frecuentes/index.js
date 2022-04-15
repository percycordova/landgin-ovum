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
              PREGUNTAS FRECUENTES
            </h3>
            <h4 className="mt-32 text-xl mb-13 ">PREGUNTAS GENERALES</h4>
            <p className="text-sm font-light">
              ¿Cuándo y dónde se realizarán el evento Ovum 2022 l y los eventos
              preconvención? <br /> Evento <br /> 6-9 de Septiembre de 2022{" "}
              <br /> <br /> ¿Quiénes pueden asistir al evento Ovum 2022? <br />{" "}
              La inscripción está abierta a cualquier persona interesada en Ovum
              2022. Consulta las tarifas de inscripción para ver las cuotas de
              inscripción de este año.
              <br /> <br /> ¿Se ofrece servicio de interpretación simultánea
              durante el evento?
              <br /> Ovum 2022 ofrece servicio de interpretación en varios
              idiomas durante la ceremonia de apertura, las sesiones generales y
              la ceremonia de clausura. La mayoría de sesiones paralelas se
              realizarán en español, pero algunas de ellas podrían también
              ofrecer este servicio. Consulta el programa del evento para
              comprobar qué sesiones contarán con servicio de interpretación al
              español.
              <br /> <br /> ¿Cuál es la temperatura en Honduras en septiembre?{" "}
              <br /> En el mes de junio, las temperaturas oscilan entre los 24 y
              32 grados centígrados.
              <br /> <br /> Puesto que el centro de convenciones cuenta con aire
              acondicionado, considera la posibilidad de utilizar una chaqueta o
              suéter ligero.
              <br /> <br /> Inscripción
              <br /> ¿Cómo me inscribo? <br /> Los interesados en asistir al
              evento pueden inscribirse ellos mismos y a sus invitados en línea.
              Si lo deseas, también podrás inscribirte en la sede del evento{" "}
              <br /> <br /> ¿Cuál es el costo de la inscripción?
              <br /> Consulta el recuadro completo de las cuotas de inscripción,
              los tipos de participante, y lo que incluye tu inscripción.
              <br /> <br /> ¿Cuál es la política sobre cancelaciones?
              <br />{" "}
              <span className="text-red-600">
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
              escrito a más tardar el 8 de junio de 2022.
              <br />
              <br /> Cancelación en línea (método preferido)
              <br /> Cancelación por correo electrónico: operaciones@anavih.com{" "}
              <br />
              Cancelación por fax: +504 3297-4088
              <br /> ¿Cómo registro a un invitado?
              <br /> Podrás agregar un invitado en tu registro en{" "}
              <span className="border-b border-black">
                <Link href="/registro">www.elovum.com/registro</Link>
              </span>{" "}
              <br />
              <br />
              <br /> Cancelé mi inscripción. ¿Cómo puedo volver a inscribirme?{" "}
              <br /> Lamentablemente, una vez que se cancela la inscripción, no
              se puede volver a crear en línea.<br /> Si deseas volver a inscribirte,
              tendrás que enviar por fax o correo el formulario de inscripción y
              pedido de entradas.<br /><br /> Se aplicará la tarifa de inscripción en vigor.<br /><br />
              Alojamiento y transporte<br /> ¿Qué debo hacer para reservar una
              habitación de hotel?<br /> Puedes obtener el mejor precio reservando tu
              viaje con Maritz Global Events, la agencia oficial de Rotary
              encargada de coordinar el alojamiento para este evento.<br /><br /> Para
              reservar tu hotel en línea, visita el sitio web oficial de
              reservas de Rotary hasta el 11 de mayo de 2022 (la disponibilidad
              está limitada después de esta fecha). Para reservar tu hotel por
              teléfono, llama al +1-864-699-5084. No se aceptarán reservas
              realizadas por correo electrónico.<br /><br /> ¿Cómo podría modificar mi
              reserva si, por ejemplo, necesito cambiar mi fecha de llegada o de
              partida?<br /> Podrás modificar tu reserva en el sitio web oficial de
              reservas de hotel de Rotary International, Maritz Global Events.
              Selecciona la opción “Attendee” (Asistente individual) o “Group
              Attendee” (Asistente parte de un grupo) y luego haz clic en el
              botón “Edit Existing Reservation” (Modificar reserva existente). A
              continuación, ingresa tu dirección de correo electrónico y la
              contraseña que creaste al realizar tu reserva.<br /><br /> Si lo deseas,
              también podrás modificar tu reserva comunicándote con
              rotary@maritz.com o llamando al teléfono +1-847-699-5084.<br /><br /> ¿Qué
              hoteles están disponibles y cuáles son sus tarifas por noche?<br /> Para
              ver la lista más reciente, visita el sitio web oficial de reservas
              de hotel Rotary, Maritz Global Events. La disponibilidad de
              hoteles cambia constantemente y no se pueden garantizar los
              hoteles preferidos. Sin embargo, recomendamos reservar tu segunda
              opción de hotel dentro del bloque oficial de hoteles de Rotary y
              utilizar nuestra opción de lista de espera. Reserva una habitación
              en tu segunda opción de hotel y luego comunícate con Maritz Global
              Events para ser incluido/a en una lista de espera para tu primera
              opción. Toma en cuenta que se requiere una reservación confirmada
              antes de ser incluido/a en una lista de espera para un hotel
              diferente. Si tu hotel preferido está disponible, Maritz
              actualizará automáticamente tu reserva y enviará una nueva
              confirmación.<br /><br /> ¿Es necesario realizar un depósito para reservar mi
              habitación?<br /> No, pero se te pedirá que proporciones los datos de tu
              tarjeta de crédito para garantizar tu reserva. La tarjeta de
              crédito debe tener validez hasta julio de 2022, y la información
              de tu tarjeta de crédito será enviada al hotel con los detalles de
              tu reserva en mayo. No se garantizarán reservas sin una tarjeta de
              crédito.<br /><br /> La política sobre depósitos para las reservas de grupos
              de 15 o más habitaciones es diferente. Para más información,
              consulta nuestras pautas para el alojamiento de grupos.<br /><br /> ¿Cómo
              puedo cancelar mi reserva?<br /> Podrás modificar tu reserva en el sitio
              web oficial de reservas de hotel de Rotary International, Maritz
              Global Events. Selecciona la opción “Attendee” (Asistente
              individual) o “Group Attendee” (Asistente parte de un grupo), e
              ingresa tu dirección de correo electrónico y la contraseña que
              creaste al momento de hacer tu reserva. Luego selecciona el ícono
              “Cancel Room” (Cancelar reserva de habitación).<br /><br /> También podrás
              cancelar tu reserva enviando un mensaje a rotary@maritz.com.<br /><br /> ¿Cuál
              es la distancia entre el centro de convenciones y mi hotel?<br /> Puedes
              encontrar un mapa y una lista de hoteles en el sitio web oficial
              de reservas de hoteles de Rotary International: Maritz Global
              Events. Selecciona la opción “Attendee” (Asistente individual), y
              consulta el mapa ubicado en la parte inferior o al lado de la
              pantalla. Selecciona la pestaña “List View” para ver la distancia
              desde tu hotel al Centro de Convenciones George R. Brown.<br /><br /> ¿Por qué
              no puedo añadir más personas a mi reserva de habitación?<br /> La
              mayoría de las habitaciones en Houston tienen una ocupación máxima
              de dos adultos por habitación. Si necesitas reservar una
              habitación para más de dos adultos, puedes buscar hoteles
              configurando la sección de huéspedes/habitaciones en el sitio web
              de reserva de hoteles con el número de huéspedes que ocuparán la
              habitación. Como alternativa, puedes reservar una habitación
              adicional para acomodar tus necesidades.<br /><br /> Transporte<br /> ¿Qué
              transporte se ofrecerá?<br /> Rotary proporcionará servicio de autobuses
              aptos para personas con discapacidades, entre los hoteles
              oficiales contratados por Rotary y el Centro de Convenciones
              George R. Brown.<br /><br /> ¿Existen otros métodos de transporte?<br /> Houston
              tiene un sistema de transporte público, llamado Metro, que incluye
              autobuses y ferrocarril. También hay taxis y viajes compartidos
              (incluidos Uber y Lyft) disponibles.<br /><br /> Viajes<br /> ¿Qué debo hacer para
              obtener un visado para viajar a la Convención?<br /> Visita la página
              web del Departamento de Estado de Estados Unidos para saber quién
              necesita un visado y cuándo solicitarlo, además de información
              adicional. La información sobre el visado varía según el país de
              ciudadanía. Rotary International proporciona a los consulados y
              embajadas una lista actualizada de los inscritos en la Convención
              y solicita que se concedan visados al mayor número posible de
              inscritos, pero la concesión de dichos visados depende en última
              instancia del gobierno de los Estados Unidos. Rotary International
              no puede intervenir en nombre de las personas inscritas
              individualmente.<br /><br /> Eventos<br /> ¿A qué eventos podré asistir durante la
              Convención?<br /> La inscripción en la convención incluye los siguientes
              eventos:<br /><br /> Ceremonia de apertura: 5 de junio<br /> Sesiones generales: Del
              6 al 8 de junio<br /> Sesiones paralelas: Del 6 al 8 de junio<br /> Ceremonia
              de clausura: 8 de junio<br /> Casa de la Amistad: Del 4 al 8 de junio<br /><br />
              Puedes adquirir entradas para:<br /><br /> Eventos de Rotary con entrada.
              Estos eventos suelen tener lugar en la sede de la convención, ya
              sea antes o durante esta.<br /><br /> Eventos con entrada de la Comisión
              Organizadora Anfitriona Estos eventos suelen tener lugar fuera de
              la sede de la convención.<br /><br /> ¿Se ofrecen excursiones en Houston?<br />
              Visita el sitio web de la Comisión Organizadora Anfitriona, donde
              encontrarás información sobre excursiones y disponibilidad de
              entradas.
            </p>
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
