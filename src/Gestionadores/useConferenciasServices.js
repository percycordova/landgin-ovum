import { useGetAllConferencistasQuery } from "../generated/graphql";

const useConferenciasServices = () => {
  // Obtener datos
  const {
    data,
    loading: loadingGetData,
  } = useGetAllConferencistasQuery({
    fetchPolicy: "network-only",
    variables: {
      numberPaginate: 1000,
      page: 1,
    },
  });
  const db = data ? data?.GetAllConferencistas.data : [];

  return {
    db,
    loadingGetData,
  };
};

export default useConferenciasServices;
