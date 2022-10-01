/*===============================*
          EVENT TYPES
 *===============================*
*/
export type ReactFormEvent = React.FormEvent<HTMLFormElement>;
export type ReactSelectEvent = React.ChangeEvent<HTMLSelectElement>;
export type ReactInputEvent = React.ChangeEvent<HTMLInputElement>;
export type ReactMouseEvent = React.MouseEvent<HTMLButtonElement>;

/*===============================*
          HELPER TYPES
 *===============================*
*/
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
