/*===============================*
          ELEMENT TYPES
 *===============================*
*/
type ExtractElementProps<T> = T extends React.ComponentType<infer Props>
  ? Props extends object
    ? Props
    : never
  : never;

type $ElementProps<E extends React.ElementType<any>> = {
  children: React.ReactNode;
  as?: E;
};

type ElementProps<E extends React.ElementType<any>> = $ElementProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof $ElementProps<E>>;

interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {}

type Level = [0, 1, 2, 3, 4, 5, 6][number];

interface CSSStyleProps extends React.CSSProperties {
  '--min-column-size': string;
}

/*===============================*
          EVENT TYPES
 *===============================*
*/
type ReactFormEvent = React.FormEvent<HTMLFormElement>;
type ReactSelectEvent = React.ChangeEvent<HTMLSelectElement>;
type ReactInputEvent = React.ChangeEvent<HTMLInputElement>;
type ReactMouseEvent = React.MouseEvent<HTMLButtonElement>;
