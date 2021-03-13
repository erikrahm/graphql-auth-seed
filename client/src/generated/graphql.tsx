import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  poems?: Maybe<Array<Maybe<Poem>>>;
  username: Scalars['String'];
};

export type Token = {
  __typename?: 'Token';
  token: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  checkUsernameAvailability: Scalars['Boolean'];
  currentUser: User;
  getCurrentUser: User;
  getUserByID: User;
  login: Token;
};


export type QueryCheckUsernameAvailabilityArgs = {
  username: Scalars['String'];
};


export type QueryGetUserByIdArgs = {
  userID: Scalars['ID'];
};


export type QueryLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: Token;
};


export type MutationCreateUserArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type Poem = {
  __typename?: 'Poem';
  title: Scalars['String'];
  content: Scalars['String'];
  isPrivate: Scalars['Boolean'];
  author: User;
};

export type LoginQueryQueryVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginQueryQuery = (
  { __typename?: 'Query' }
  & { login: (
    { __typename?: 'Token' }
    & Pick<Token, 'token'>
  ) }
);

export type RegistrationMutationMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegistrationMutationMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'Token' }
    & Pick<Token, 'token'>
  ) }
);

export type UsernameQueryQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type UsernameQueryQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'checkUsernameAvailability'>
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { getCurrentUser: (
    { __typename?: 'User' }
    & Pick<User, 'username'>
  ) }
);

export type CurrentCachedUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentCachedUserQuery = (
  { __typename?: 'Query' }
  & { currentUser: (
    { __typename?: 'User' }
    & Pick<User, 'username'>
  ) }
);


export const LoginQueryDocument = gql`
    query LoginQuery($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
  }
}
    `;

/**
 * __useLoginQueryQuery__
 *
 * To run a query within a React component, call `useLoginQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQueryQuery({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginQueryQuery(baseOptions: Apollo.QueryHookOptions<LoginQueryQuery, LoginQueryQueryVariables>) {
        return Apollo.useQuery<LoginQueryQuery, LoginQueryQueryVariables>(LoginQueryDocument, baseOptions);
      }
export function useLoginQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQueryQuery, LoginQueryQueryVariables>) {
          return Apollo.useLazyQuery<LoginQueryQuery, LoginQueryQueryVariables>(LoginQueryDocument, baseOptions);
        }
export type LoginQueryQueryHookResult = ReturnType<typeof useLoginQueryQuery>;
export type LoginQueryLazyQueryHookResult = ReturnType<typeof useLoginQueryLazyQuery>;
export type LoginQueryQueryResult = Apollo.QueryResult<LoginQueryQuery, LoginQueryQueryVariables>;
export const RegistrationMutationDocument = gql`
    mutation RegistrationMutation($username: String!, $password: String!) {
  createUser(username: $username, password: $password) {
    token
  }
}
    `;
export type RegistrationMutationMutationFn = Apollo.MutationFunction<RegistrationMutationMutation, RegistrationMutationMutationVariables>;

/**
 * __useRegistrationMutationMutation__
 *
 * To run a mutation, you first call `useRegistrationMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegistrationMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registrationMutationMutation, { data, loading, error }] = useRegistrationMutationMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegistrationMutationMutation(baseOptions?: Apollo.MutationHookOptions<RegistrationMutationMutation, RegistrationMutationMutationVariables>) {
        return Apollo.useMutation<RegistrationMutationMutation, RegistrationMutationMutationVariables>(RegistrationMutationDocument, baseOptions);
      }
export type RegistrationMutationMutationHookResult = ReturnType<typeof useRegistrationMutationMutation>;
export type RegistrationMutationMutationResult = Apollo.MutationResult<RegistrationMutationMutation>;
export type RegistrationMutationMutationOptions = Apollo.BaseMutationOptions<RegistrationMutationMutation, RegistrationMutationMutationVariables>;
export const UsernameQueryDocument = gql`
    query UsernameQuery($username: String!) {
  checkUsernameAvailability(username: $username)
}
    `;

/**
 * __useUsernameQueryQuery__
 *
 * To run a query within a React component, call `useUsernameQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsernameQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsernameQueryQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUsernameQueryQuery(baseOptions: Apollo.QueryHookOptions<UsernameQueryQuery, UsernameQueryQueryVariables>) {
        return Apollo.useQuery<UsernameQueryQuery, UsernameQueryQueryVariables>(UsernameQueryDocument, baseOptions);
      }
export function useUsernameQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsernameQueryQuery, UsernameQueryQueryVariables>) {
          return Apollo.useLazyQuery<UsernameQueryQuery, UsernameQueryQueryVariables>(UsernameQueryDocument, baseOptions);
        }
export type UsernameQueryQueryHookResult = ReturnType<typeof useUsernameQueryQuery>;
export type UsernameQueryLazyQueryHookResult = ReturnType<typeof useUsernameQueryLazyQuery>;
export type UsernameQueryQueryResult = Apollo.QueryResult<UsernameQueryQuery, UsernameQueryQueryVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  getCurrentUser {
    username
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const CurrentCachedUserDocument = gql`
    query CurrentCachedUser {
  currentUser @client {
    username
  }
}
    `;

/**
 * __useCurrentCachedUserQuery__
 *
 * To run a query within a React component, call `useCurrentCachedUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentCachedUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentCachedUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentCachedUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentCachedUserQuery, CurrentCachedUserQueryVariables>) {
        return Apollo.useQuery<CurrentCachedUserQuery, CurrentCachedUserQueryVariables>(CurrentCachedUserDocument, baseOptions);
      }
export function useCurrentCachedUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentCachedUserQuery, CurrentCachedUserQueryVariables>) {
          return Apollo.useLazyQuery<CurrentCachedUserQuery, CurrentCachedUserQueryVariables>(CurrentCachedUserDocument, baseOptions);
        }
export type CurrentCachedUserQueryHookResult = ReturnType<typeof useCurrentCachedUserQuery>;
export type CurrentCachedUserLazyQueryHookResult = ReturnType<typeof useCurrentCachedUserLazyQuery>;
export type CurrentCachedUserQueryResult = Apollo.QueryResult<CurrentCachedUserQuery, CurrentCachedUserQueryVariables>;