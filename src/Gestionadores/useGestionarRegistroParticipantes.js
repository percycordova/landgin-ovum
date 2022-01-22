import {  useRegistroParticipantesMutation } from "../generated/graphql";


const useGestionarRegistroParticipantes = () => {

  const [regitsrarParticipanteMutation, { loading }] =
    useRegistroParticipantesMutation({
      onError: (error) => {
        console.log("onError creacion de registro de participantes", error);
      },
    });

  const RegistrarParticipantes = async (
    data = {
      nombres,
      apellidos,
      correo,
      nroCelular,
      pais,
    }
  ) => {
    const response = await regitsrarParticipanteMutation({
      variables: {
        input: { ...data },
      },
    });
    if (response?.data?.RegistroParticipantes) {
      return "ok";
    }
  };
  return { loading, RegistrarParticipantes };
};
export default useGestionarRegistroParticipantes;
