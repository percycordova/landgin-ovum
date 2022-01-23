import {  useRegistroParticipantesMutation } from "../generated/graphql.tsx";


const useGestionarRegistroParticipantes = () => {

  const [regitsrarParticipanteMutation, { loading }] =
    useRegistroParticipantesMutation({
      onError: (error) => {
        console.log("onError creacion de registro de participantes", error?.graphQLErrors[0]?.message);
      },
    });

  const RegistrarParticipantes = async (
    data = {
      nombres,
      apellidos,
      correo,
      nroCelular,
      pais,
      empresa
    }
  ) => {
    const response = await regitsrarParticipanteMutation({
      variables: {
        input: { ...data },
      },
    });
    console.log(response)
    if (response?.data?.RegistroParticipantes) {
      return "ok";
    }else{
      return 'error'
    }
  };
  return { loading, RegistrarParticipantes };
};
export default useGestionarRegistroParticipantes;
