import InferNextPropsType from "infer-next-props-type";
import type { NextPage } from "next";
import { NextApiRequest, NextApiResponse } from "next";
import type { AppContext, AppProps } from "next/app";
import { ParsedUrlQuery } from "querystring";
import type { ReactElement, ReactNode } from "react";
import { User } from "server/models";

/*===============================*
          EVENT TYPES
 *===============================*
*/
export type ReactFormEvent = React.FormEvent<HTMLFormElement>;
export type ReactSelectEvent = React.ChangeEvent<HTMLSelectElement>;
export type ReactInputEvent = React.ChangeEvent<HTMLInputElement>;
export type ReactMouseEvent = React.MouseEvent<HTMLButtonElement>;

/*===============================*
          NEXTJS TYPES
 *===============================*
*/
export type {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
export type { InferNextPropsType };
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
export type AppPropsWithLayout<P = any> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
} & {
  getInitialProps?: (context: AppContext) => AppProps<P> | Promise<AppProps<P>>;
};

/*===============================*
          HELPER TYPES
 *===============================*
*/

export type IUserContext = {
  req: NextApiRequest;
  res: NextApiResponse;
  deserializeUser: (
    req: NextApiRequest,
    res: NextApiResponse
  ) => Promise<User | undefined>;
};

export interface Params extends ParsedUrlQuery {
  category: string;
  slug: string;
}
export type Unarray<T> = T extends Array<infer U> ? U : T;
export type ReturnValue<T> = T extends (...args: any[]) => infer R ? R : T;

export type Expand<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: Expand<O[K]> }
    : never
  : T;
export type KeyValuePair<K extends keyof any = string, V = string> = Record<
  K,
  V
>;
export interface RecursiveKeyValuePair<
  K extends keyof any = string,
  V = string
> {
  [key: string]: V | RecursiveKeyValuePair<K, V>;
}
