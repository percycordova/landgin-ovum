import { useGetAllBlogQuery } from "../generated/graphql";


const useBlogServices = () => {
  // Obtener datos
  const { data, loading: loadingGetData } = useGetAllBlogQuery({
    fetchPolicy: "network-only",
    variables: {
      numberPaginate: 1000,
      page: 1,
    },
  });
  const db = data ? data?.GetAllBlog.data : [];

  return {
    db,
    loadingGetData,
  };
};
export default useBlogServices;
