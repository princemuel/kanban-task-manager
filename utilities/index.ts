export const capitalize = (string: string) =>
  string?.charAt(0)?.toUpperCase() + string?.slice(1);

export const clean = (data: string) => {
  return data?.replace(/[|&;$%@"<>()\\+,]/g, "");
};

type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;

type ClassDictionary = {
  [key: string]: any;
};
type ClassArray = ClassValue[];

const filterBoolean = <T>(arg: T) => Boolean(arg) && typeof arg !== "boolean";
/**
 * This function returns classes based on conditions
 * that evaluate to true. It removes values that
 * evaluate to literal booleans, false, null and undefined.
 * @param args (string | boolean | null | undefined)[]
 * @returns string
 * @example clsx('base', undefined, ['more', 'classes'], hasError && 'bg-red', isEnabled || 'pointer-events-none', isTitle ? 'font-semibold' : 'font-normal')
 * @returns "base more classes bg-red font-normal"
 */
// (arg) => Boolean(arg) && typeof arg !== 'boolean'
export function clsx(...args: ClassValue[]) {
  return args.flat().filter(filterBoolean).join(" ").trim();
}

export const trim = (string: string) => string?.trim();

export function serialize<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}

export const removeFirstChar = (string: string) => {
  return string?.slice(1);
};

export const hasValues = <T>(
  array: T[] | undefined | null
): array is NonNullable<T[]> => {
  return (array || []).length > 0;
};

export const shortName = (name: string) => {
  const lastIndexOfSpace = name?.indexOf(" ");
  return name?.substring(0, lastIndexOfSpace);
};

export const compose =
  (...fns: any[]) =>
  (res: any) =>
    fns.reduce((accum, next) => next(accum), res);

export function pluck<I, K extends keyof I>(items: I[], key: K): I[K][] {
  return items.map((item) => item[key]);
}

/**
 * A Generic Ranking Algorithm
 * @param items T
 * @param rank 'asc' | 'desc'
 * @returns An array containing the sorted items according to the ranking algorithm
 */

export const ranker = <T>(
  items: T[],
  rank: "asc" | "desc",
  callbackfn: (value: T) => number
): T[] => {
  return items
    .map((item) => ({
      item,
      rank: callbackfn(item),
    }))
    .sort((a, b) => (rank === "asc" ? a.rank - b.rank : b.rank - a.rank))
    .map((ranked) => ranked.item);
};

export const noop = () => {};

export function addEventListener<
  T extends Window | Document | HTMLElement | EventTarget
>(
  obj: T | null,
  ...args: Parameters<T["addEventListener"]> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(
      ...(args as Parameters<HTMLElement["addEventListener"]>)
    );
  }
}

export function removeEventListener<
  T extends Window | Document | HTMLElement | EventTarget
>(
  obj: T | null,
  ...args:
    | Parameters<T["removeEventListener"]>
    | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(
      ...(args as Parameters<HTMLElement["removeEventListener"]>)
    );
  }
}

export const isBrowser = typeof window !== "undefined";
export const isNavigator = typeof navigator !== "undefined";


