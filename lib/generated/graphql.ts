import { useQuery, UseQueryOptions } from '@tanstack/react-query';
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
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** The board model */
export type Board = {
  __typename?: 'Board';
  columns?: Maybe<Array<Column>>;
  id: Scalars['ID'];
  /** The name of the board */
  name: Scalars['String'];
};

/** The column model */
export type Column = {
  __typename?: 'Column';
  id: Scalars['ID'];
  /** The name of the column */
  name: Scalars['String'];
  tasks?: Maybe<Array<Task>>;
};

export type Query = {
  __typename?: 'Query';
  board?: Maybe<Board>;
  boards: Array<Board>;
};


export type QueryBoardArgs = {
  id: Scalars['ID'];
};

/** The sub-task model */
export type Subtask = {
  __typename?: 'Subtask';
  id: Scalars['ID'];
  isCompleted: Scalars['Boolean'];
  /** The title of the subtask */
  title: Scalars['String'];
};

/** The task model */
export type Task = {
  __typename?: 'Task';
  /** The description of the task */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The status of a task. can be (todo, doing and done) or (now, next and later) */
  status?: Maybe<Scalars['String']>;
  subtasks?: Maybe<Array<Subtask>>;
  /** The title of the task */
  title: Scalars['String'];
};

export type GetBoardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBoardsQuery = { __typename?: 'Query', boards: Array<{ __typename?: 'Board', id: string, name: string, columns?: Array<{ __typename?: 'Column', id: string, name: string }> | null }> };

export type GetBoardQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBoardQuery = { __typename?: 'Query', board?: { __typename?: 'Board', id: string, name: string, columns?: Array<{ __typename?: 'Column', id: string, name: string, tasks?: Array<{ __typename?: 'Task', title: string, description?: string | null, status?: string | null }> | null }> | null } | null };


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
      TData = GetBoardsQuery,
      TError = unknown
    >(
      variables?: GetBoardsQueryVariables,
      options?: UseQueryOptions<GetBoardsQuery, TError, TData>
    ) =>
    useQuery<GetBoardsQuery, TError, TData>(
      variables === undefined ? ['GetBoards'] : ['GetBoards', variables],
      fetcher<GetBoardsQuery, GetBoardsQueryVariables>(GetBoardsDocument, variables),
      options
    );

useGetBoardsQuery.getKey = (variables?: GetBoardsQueryVariables) => variables === undefined ? ['GetBoards'] : ['GetBoards', variables];
;

useGetBoardsQuery.fetcher = (variables?: GetBoardsQueryVariables) => fetcher<GetBoardsQuery, GetBoardsQueryVariables>(GetBoardsDocument, variables);
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
      TData = GetBoardQuery,
      TError = unknown
    >(
      variables: GetBoardQueryVariables,
      options?: UseQueryOptions<GetBoardQuery, TError, TData>
    ) =>
    useQuery<GetBoardQuery, TError, TData>(
      ['GetBoard', variables],
      fetcher<GetBoardQuery, GetBoardQueryVariables>(GetBoardDocument, variables),
      options
    );

useGetBoardQuery.getKey = (variables: GetBoardQueryVariables) => ['GetBoard', variables];
;

useGetBoardQuery.fetcher = (variables: GetBoardQueryVariables) => fetcher<GetBoardQuery, GetBoardQueryVariables>(GetBoardDocument, variables);