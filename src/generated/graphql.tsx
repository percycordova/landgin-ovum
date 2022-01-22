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

export type GetRegistroParticipante = {
  __typename?: 'GetRegistroParticipante';
  NroItems?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<RegistroParticipante>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  RegistroParticipantes?: Maybe<RegistroParticipante>;
};


export type MutationRegistroParticipantesArgs = {
  input: RegistroParticipanteInput;
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
  GetAllRegistroPersonas?: Maybe<GetRegistroParticipante>;
  GetReporteExcel?: Maybe<Scalars['String']>;
};


export type QueryGetAllRegistroPersonasArgs = {
  numberPaginate?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
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