import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  boards: Array<Board>;
  columns: Array<Column>;
  subtasks: Array<Subtask>;
  tasks: Array<Task>;
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
  status?: Maybe<TaskStatus>;
  subtasks?: Maybe<Array<Subtask>>;
  /** The title of the task */
  title: Scalars['String'];
};

/** The status of a task. can be (todo, doing and done) or (now, next and later) */
export enum TaskStatus {
  Doing = 'Doing',
  Done = 'Done',
  Later = 'Later',
  Next = 'Next',
  Now = 'Now',
  Todo = 'Todo'
}

export type GetBoardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBoardsQuery = { __typename?: 'Query', boards: Array<{ __typename?: 'Board', id: string, name: string, columns?: Array<{ __typename?: 'Column', name: string }> | null }> };


export const GetBoardsDocument = gql`
    query getBoards {
  boards {
    id
    name
    columns {
      name
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getBoards(variables?: GetBoardsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetBoardsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBoardsQuery>(GetBoardsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBoards', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;