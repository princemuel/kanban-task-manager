import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost:3000/api/v1/graphql", {
    method: "POST",
    ...({"headers":{"Content-Type":"application/json"}}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
}

/** The board model */
export interface IBoard {
  columns?: Maybe<Array<IColumn>>;
  id: Scalars['ID'];
  /** The name of the board */
  name: Scalars['String'];
}

/** The column model */
export interface IColumn {
  id: Scalars['ID'];
  /** The name of the column */
  name: Scalars['String'];
  tasks?: Maybe<Array<ITask>>;
}

export interface ILoginData {
  email: Scalars['String'];
  password: Scalars['String'];
}

export interface ILoginResponse {
  access_token: Scalars['String'];
  status: Scalars['String'];
}

export interface IMutation {
  createUser: IUserResponse;
  login: ILoginResponse;
}


export interface IMutationCreateUserArgs {
  input: ISignupData;
}


export interface IMutationLoginArgs {
  input: ILoginData;
}

export interface IQuery {
  board?: Maybe<IBoard>;
  boards: Array<IBoard>;
  column?: Maybe<IColumn>;
  columns: Array<IColumn>;
  getUser: IUserResponse;
  logout: Scalars['Boolean'];
  refresh: ILoginResponse;
  subtasks: Array<ISubtask>;
  tasks: Array<ITask>;
}


export interface IQueryBoardArgs {
  id: Scalars['ID'];
}


export interface IQueryColumnArgs {
  id: Scalars['ID'];
}

export interface ISignupData {
  countersign: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  photo: Scalars['String'];
}

/** The sub-task model */
export interface ISubtask {
  id: Scalars['ID'];
  isCompleted: Scalars['Boolean'];
  /** The title of the subtask */
  title: Scalars['String'];
}

/** The task model */
export interface ITask {
  /** The description of the task */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The status of a task. can be (todo, doing and done) or (now, next and later) */
  status?: Maybe<Scalars['String']>;
  subtasks?: Maybe<Array<ISubtask>>;
  /** The title of the task */
  title: Scalars['String'];
}

export interface IUserData {
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  photo: Scalars['String'];
  role: Scalars['String'];
  updatedAt: Scalars['DateTime'];
}

export interface IUserResponse {
  status: Scalars['String'];
  user: IUserData;
}

export type IGetBoardsQueryVariables = Exact<{ [key: string]: never; }>;


export type IGetBoardsQuery = { boards: Array<{ id: string, name: string, columns?: Array<{ id: string, name: string }> | null }> };

export type IGetBoardQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type IGetBoardQuery = { board?: { id: string, name: string, columns?: Array<{ id: string, name: string, tasks?: Array<{ title: string, description?: string | null, status?: string | null }> | null }> | null } | null };

export type IGetColumnsQueryVariables = Exact<{ [key: string]: never; }>;


export type IGetColumnsQuery = { columns: Array<{ id: string, name: string, tasks?: Array<{ id: string, title: string }> | null }> };

export type IGetColumnQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type IGetColumnQuery = { column?: { id: string, name: string, tasks?: Array<{ id: string, title: string, description?: string | null, status?: string | null }> | null } | null };

export type ICreateUserMutationVariables = Exact<{
  input: ISignupData;
}>;


export type ICreateUserMutation = { createUser: { status: string, user: { name: string, email: string, photo: string, role: string } } };

export type ILoginMutationVariables = Exact<{
  input: ILoginData;
}>;


export type ILoginMutation = { login: { status: string, access_token: string } };


export const GetBoardsDocument = /*#__PURE__*/ `
    query GetBoards {
  boards {
    id
    name
    columns {
      id
      name
    }
  }
}
    `;
export const useGetBoardsQuery = <
      TData = IGetBoardsQuery,
      TError = unknown
    >(
      variables?: IGetBoardsQueryVariables,
      options?: UseQueryOptions<IGetBoardsQuery, TError, TData>
    ) =>
    useQuery<IGetBoardsQuery, TError, TData>(
      variables === undefined ? ['GetBoards'] : ['GetBoards', variables],
      fetcher<IGetBoardsQuery, IGetBoardsQueryVariables>(GetBoardsDocument, variables),
      options
    );

useGetBoardsQuery.getKey = (variables?: IGetBoardsQueryVariables) => variables === undefined ? ['GetBoards'] : ['GetBoards', variables];
;

useGetBoardsQuery.fetcher = (variables?: IGetBoardsQueryVariables) => fetcher<IGetBoardsQuery, IGetBoardsQueryVariables>(GetBoardsDocument, variables);
export const GetBoardDocument = /*#__PURE__*/ `
    query GetBoard($id: ID!) {
  board(id: $id) {
    id
    name
    columns {
      id
      name
      tasks {
        title
        description
        status
      }
    }
  }
}
    `;
export const useGetBoardQuery = <
      TData = IGetBoardQuery,
      TError = unknown
    >(
      variables: IGetBoardQueryVariables,
      options?: UseQueryOptions<IGetBoardQuery, TError, TData>
    ) =>
    useQuery<IGetBoardQuery, TError, TData>(
      ['GetBoard', variables],
      fetcher<IGetBoardQuery, IGetBoardQueryVariables>(GetBoardDocument, variables),
      options
    );

useGetBoardQuery.getKey = (variables: IGetBoardQueryVariables) => ['GetBoard', variables];
;

useGetBoardQuery.fetcher = (variables: IGetBoardQueryVariables) => fetcher<IGetBoardQuery, IGetBoardQueryVariables>(GetBoardDocument, variables);
export const GetColumnsDocument = /*#__PURE__*/ `
    query GetColumns {
  columns {
    id
    name
    tasks {
      id
      title
    }
  }
}
    `;
export const useGetColumnsQuery = <
      TData = IGetColumnsQuery,
      TError = unknown
    >(
      variables?: IGetColumnsQueryVariables,
      options?: UseQueryOptions<IGetColumnsQuery, TError, TData>
    ) =>
    useQuery<IGetColumnsQuery, TError, TData>(
      variables === undefined ? ['GetColumns'] : ['GetColumns', variables],
      fetcher<IGetColumnsQuery, IGetColumnsQueryVariables>(GetColumnsDocument, variables),
      options
    );

useGetColumnsQuery.getKey = (variables?: IGetColumnsQueryVariables) => variables === undefined ? ['GetColumns'] : ['GetColumns', variables];
;

useGetColumnsQuery.fetcher = (variables?: IGetColumnsQueryVariables) => fetcher<IGetColumnsQuery, IGetColumnsQueryVariables>(GetColumnsDocument, variables);
export const GetColumnDocument = /*#__PURE__*/ `
    query GetColumn($id: ID!) {
  column(id: $id) {
    id
    name
    tasks {
      id
      title
      description
      status
    }
  }
}
    `;
export const useGetColumnQuery = <
      TData = IGetColumnQuery,
      TError = unknown
    >(
      variables: IGetColumnQueryVariables,
      options?: UseQueryOptions<IGetColumnQuery, TError, TData>
    ) =>
    useQuery<IGetColumnQuery, TError, TData>(
      ['GetColumn', variables],
      fetcher<IGetColumnQuery, IGetColumnQueryVariables>(GetColumnDocument, variables),
      options
    );

useGetColumnQuery.getKey = (variables: IGetColumnQueryVariables) => ['GetColumn', variables];
;

useGetColumnQuery.fetcher = (variables: IGetColumnQueryVariables) => fetcher<IGetColumnQuery, IGetColumnQueryVariables>(GetColumnDocument, variables);
export const CreateUserDocument = /*#__PURE__*/ `
    mutation CreateUser($input: SignupData!) {
  createUser(input: $input) {
    status
    user {
      name
      email
      photo
      role
    }
  }
}
    `;
export const useCreateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ICreateUserMutation, TError, ICreateUserMutationVariables, TContext>) =>
    useMutation<ICreateUserMutation, TError, ICreateUserMutationVariables, TContext>(
      ['CreateUser'],
      (variables?: ICreateUserMutationVariables) => fetcher<ICreateUserMutation, ICreateUserMutationVariables>(CreateUserDocument, variables)(),
      options
    );
useCreateUserMutation.fetcher = (variables: ICreateUserMutationVariables) => fetcher<ICreateUserMutation, ICreateUserMutationVariables>(CreateUserDocument, variables);
export const LoginDocument = /*#__PURE__*/ `
    mutation Login($input: LoginData!) {
  login(input: $input) {
    status
    access_token
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ILoginMutation, TError, ILoginMutationVariables, TContext>) =>
    useMutation<ILoginMutation, TError, ILoginMutationVariables, TContext>(
      ['Login'],
      (variables?: ILoginMutationVariables) => fetcher<ILoginMutation, ILoginMutationVariables>(LoginDocument, variables)(),
      options
    );
useLoginMutation.fetcher = (variables: ILoginMutationVariables) => fetcher<ILoginMutation, ILoginMutationVariables>(LoginDocument, variables);