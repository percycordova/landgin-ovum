import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sO`, e.g. `2020-04-20T13:53:12+02:00`. */
  DateTimeTz: any;
  /** Can be used as an argument to upload files using https://github.com/jaydenseric/graphql-multipart-request-spec */
  Upload: any;
};

export type Blog = {
  __typename?: 'Blog';
  blogId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcionEspa?: Maybe<Scalars['String']>;
  descripcionIngl?: Maybe<Scalars['String']>;
  descripcionPort?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagenes>;
  tituloEspa?: Maybe<Scalars['String']>;
  tituloIngl?: Maybe<Scalars['String']>;
  tituloPort?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type BlogInput = {
  blogId?: InputMaybe<Scalars['Int']>;
  descripcionEspa?: InputMaybe<Scalars['String']>;
  descripcionIngl?: InputMaybe<Scalars['String']>;
  descripcionPort?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  tituloEspa?: InputMaybe<Scalars['String']>;
  tituloIngl?: InputMaybe<Scalars['String']>;
  tituloPort?: InputMaybe<Scalars['String']>;
};

export type Conferencistas = {
  __typename?: 'Conferencistas';
  conferencistaId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcionEspa?: Maybe<Scalars['String']>;
  descripcionIngl?: Maybe<Scalars['String']>;
  descripcionPort?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagenes>;
  nombreEspa?: Maybe<Scalars['String']>;
  nombreIngl?: Maybe<Scalars['String']>;
  nombrePort?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ConferencistasInput = {
  conferencistaId?: InputMaybe<Scalars['Int']>;
  descripcionEspa?: InputMaybe<Scalars['String']>;
  descripcionIngl?: InputMaybe<Scalars['String']>;
  descripcionPort?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  nombreEspa?: InputMaybe<Scalars['String']>;
  nombreIngl?: InputMaybe<Scalars['String']>;
  nombrePort?: InputMaybe<Scalars['String']>;
};

export type GetAllBlog = {
  __typename?: 'GetAllBlog';
  data?: Maybe<Array<Blog>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetAllConferencistas = {
  __typename?: 'GetAllConferencistas';
  data?: Maybe<Array<Conferencistas>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetRegistroParticipante = {
  __typename?: 'GetRegistroParticipante';
  NroItems?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<RegistroParticipante>>;
};

export type Imagenes = {
  __typename?: 'Imagenes';
  descripcion?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
};

export type ImagenesInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  descripcion?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateImage?: Maybe<Imagenes>;
  CreateaBlog?: Maybe<Blog>;
  CreateaConferencista?: Maybe<Conferencistas>;
  DeleteBlog?: Maybe<Scalars['String']>;
  DeleteConferencista?: Maybe<Scalars['String']>;
  DeleteImage?: Maybe<Scalars['String']>;
  RegistroParticipantes?: Maybe<RegistroParticipante>;
  UpdateBlog?: Maybe<Blog>;
  UpdateConferencista?: Maybe<Conferencistas>;
  UpdateImage?: Maybe<Imagenes>;
};


export type MutationCreateImageArgs = {
  imagen: Scalars['Upload'];
  input?: InputMaybe<ImagenesInput>;
};


export type MutationCreateaBlogArgs = {
  input?: InputMaybe<BlogInput>;
};


export type MutationCreateaConferencistaArgs = {
  input?: InputMaybe<ConferencistasInput>;
};


export type MutationDeleteBlogArgs = {
  input?: InputMaybe<BlogInput>;
};


export type MutationDeleteConferencistaArgs = {
  input?: InputMaybe<ConferencistasInput>;
};


export type MutationDeleteImageArgs = {
  input: ImagenesInput;
};


export type MutationRegistroParticipantesArgs = {
  input: RegistroParticipanteInput;
};


export type MutationUpdateBlogArgs = {
  input?: InputMaybe<BlogInput>;
};


export type MutationUpdateConferencistaArgs = {
  input?: InputMaybe<ConferencistasInput>;
};


export type MutationUpdateImageArgs = {
  input?: InputMaybe<ImagenesInput>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  field: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Total count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  GetAllBlog?: Maybe<GetAllBlog>;
  GetAllConferencistas?: Maybe<GetAllConferencistas>;
  GetAllRegistroPersonas?: Maybe<GetRegistroParticipante>;
  GetIdgBlog?: Maybe<Blog>;
  GetIdgConferencista?: Maybe<Conferencistas>;
  GetImagenes?: Maybe<Array<Imagenes>>;
  GetReporteExcel?: Maybe<Scalars['String']>;
};


export type QueryGetAllBlogArgs = {
  numberPaginate?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllConferencistasArgs = {
  numberPaginate?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllRegistroPersonasArgs = {
  numberPaginate?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetIdgBlogArgs = {
  blogId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetIdgConferencistaArgs = {
  conferencistaId?: InputMaybe<Scalars['Int']>;
};

export type RegistroParticipante = {
  __typename?: 'RegistroParticipante';
  apellidos?: Maybe<Scalars['String']>;
  correo?: Maybe<Scalars['String']>;
  empresa?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  nroCelular?: Maybe<Scalars['String']>;
  pais?: Maybe<Scalars['String']>;
  registroId?: Maybe<Scalars['Int']>;
};

export type RegistroParticipanteInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  correo?: InputMaybe<Scalars['String']>;
  empresa?: InputMaybe<Scalars['String']>;
  nombres?: InputMaybe<Scalars['String']>;
  nroCelular?: InputMaybe<Scalars['String']>;
  pais?: InputMaybe<Scalars['String']>;
  registroId?: InputMaybe<Scalars['Int']>;
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type RegistroParticipantesMutationVariables = Exact<{
  input: RegistroParticipanteInput;
}>;


export type RegistroParticipantesMutation = { __typename?: 'Mutation', RegistroParticipantes?: { __typename?: 'RegistroParticipante', nombres?: string | null | undefined, apellidos?: string | null | undefined, correo?: string | null | undefined, nroCelular?: string | null | undefined, pais?: string | null | undefined, empresa?: string | null | undefined } | null | undefined };

export type GetAllBlogQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  numberPaginate?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllBlogQuery = { __typename?: 'Query', GetAllBlog?: { __typename?: 'GetAllBlog', nroTotalItems?: number | null | undefined, data?: Array<{ __typename?: 'Blog', blogId?: number | null | undefined, tituloEspa?: string | null | undefined, tituloPort?: string | null | undefined, tituloIngl?: string | null | undefined, descripcionEspa?: string | null | undefined, descripcionPort?: string | null | undefined, descripcionIngl?: string | null | undefined, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined }> | null | undefined } | null | undefined };

export type GetAllConferencistasQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  numberPaginate?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllConferencistasQuery = { __typename?: 'Query', GetAllConferencistas?: { __typename?: 'GetAllConferencistas', nroTotalItems?: number | null | undefined, data?: Array<{ __typename?: 'Conferencistas', conferencistaId?: number | null | undefined, nombreEspa?: string | null | undefined, nombrePort?: string | null | undefined, nombreIngl?: string | null | undefined, descripcionEspa?: string | null | undefined, descripcionPort?: string | null | undefined, descripcionIngl?: string | null | undefined, created_at?: any | null | undefined, updated_at?: any | null | undefined, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined }> | null | undefined } | null | undefined };


export const RegistroParticipantesDocument = gql`
    mutation RegistroParticipantes($input: RegistroParticipanteInput!) {
  RegistroParticipantes(input: $input) {
    nombres
    apellidos
    correo
    nroCelular
    pais
    empresa
  }
}
    `;
export type RegistroParticipantesMutationFn = Apollo.MutationFunction<RegistroParticipantesMutation, RegistroParticipantesMutationVariables>;

/**
 * __useRegistroParticipantesMutation__
 *
 * To run a mutation, you first call `useRegistroParticipantesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegistroParticipantesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registroParticipantesMutation, { data, loading, error }] = useRegistroParticipantesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegistroParticipantesMutation(baseOptions?: Apollo.MutationHookOptions<RegistroParticipantesMutation, RegistroParticipantesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegistroParticipantesMutation, RegistroParticipantesMutationVariables>(RegistroParticipantesDocument, options);
      }
export type RegistroParticipantesMutationHookResult = ReturnType<typeof useRegistroParticipantesMutation>;
export type RegistroParticipantesMutationResult = Apollo.MutationResult<RegistroParticipantesMutation>;
export type RegistroParticipantesMutationOptions = Apollo.BaseMutationOptions<RegistroParticipantesMutation, RegistroParticipantesMutationVariables>;
export const GetAllBlogDocument = gql`
    query GetAllBlog($page: Int, $numberPaginate: Int) {
  GetAllBlog(page: $page, numberPaginate: $numberPaginate) {
    nroTotalItems
    data {
      blogId
      tituloEspa
      tituloPort
      tituloIngl
      descripcionEspa
      descripcionPort
      descripcionIngl
      imagenPrincipal {
        id
        descripcion
        url
      }
    }
  }
}
    `;

/**
 * __useGetAllBlogQuery__
 *
 * To run a query within a React component, call `useGetAllBlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogQuery({
 *   variables: {
 *      page: // value for 'page'
 *      numberPaginate: // value for 'numberPaginate'
 *   },
 * });
 */
export function useGetAllBlogQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBlogQuery, GetAllBlogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBlogQuery, GetAllBlogQueryVariables>(GetAllBlogDocument, options);
      }
export function useGetAllBlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBlogQuery, GetAllBlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBlogQuery, GetAllBlogQueryVariables>(GetAllBlogDocument, options);
        }
export type GetAllBlogQueryHookResult = ReturnType<typeof useGetAllBlogQuery>;
export type GetAllBlogLazyQueryHookResult = ReturnType<typeof useGetAllBlogLazyQuery>;
export type GetAllBlogQueryResult = Apollo.QueryResult<GetAllBlogQuery, GetAllBlogQueryVariables>;
export const GetAllConferencistasDocument = gql`
    query GetAllConferencistas($page: Int, $numberPaginate: Int) {
  GetAllConferencistas(page: $page, numberPaginate: $numberPaginate) {
    nroTotalItems
    data {
      conferencistaId
      nombreEspa
      nombrePort
      nombreIngl
      descripcionEspa
      descripcionPort
      descripcionIngl
      imagenPrincipal {
        id
        descripcion
        url
      }
      created_at
      updated_at
    }
  }
}
    `;

/**
 * __useGetAllConferencistasQuery__
 *
 * To run a query within a React component, call `useGetAllConferencistasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllConferencistasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllConferencistasQuery({
 *   variables: {
 *      page: // value for 'page'
 *      numberPaginate: // value for 'numberPaginate'
 *   },
 * });
 */
export function useGetAllConferencistasQuery(baseOptions?: Apollo.QueryHookOptions<GetAllConferencistasQuery, GetAllConferencistasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllConferencistasQuery, GetAllConferencistasQueryVariables>(GetAllConferencistasDocument, options);
      }
export function useGetAllConferencistasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllConferencistasQuery, GetAllConferencistasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllConferencistasQuery, GetAllConferencistasQueryVariables>(GetAllConferencistasDocument, options);
        }
export type GetAllConferencistasQueryHookResult = ReturnType<typeof useGetAllConferencistasQuery>;
export type GetAllConferencistasLazyQueryHookResult = ReturnType<typeof useGetAllConferencistasLazyQuery>;
export type GetAllConferencistasQueryResult = Apollo.QueryResult<GetAllConferencistasQuery, GetAllConferencistasQueryVariables>;