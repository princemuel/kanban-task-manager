import type { ClassValue } from "clsx";
import clsx from "clsx";

export function tw(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/*---------------------------------*
            NUMBER UTILS           *
  ---------------------------------*
 */

export function approximate(num = 0, fractionDigits = 2) {
  return Number.parseFloat(num.toFixed(fractionDigits));
}

export function safeNum(value: unknown, defaultValue = 0): number {
  const num = Number(value);
  return (Number.isNaN(num) || isNaN(num)) && !Object.is(num, 0) ?
      defaultValue
    : num;
}

/*---------------------------------*
            ARRAY UTILS            *
  ---------------------------------*
 */

export function hasValues<T>(
  value: T[] | null | undefined,
): value is NonNullable<T[]> {
  return Array.isArray(value) && value.length > 0;
}

/*---------------------------------*
            OBJECT UTILS           *
  ---------------------------------*
 */

export function serialize<T>(data: T) {
  return JSON.parse(JSON.stringify(data)) as NonNullable<T>;
}

export function singleton<T>(name: string, callback: () => T): NonNullable<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const g = globalThis as any;
  g.__singletons ??= new Map();

  if (!g.__singletons.has(name)) g.__singletons.set(name, callback());
  return g.__singletons.get(name);
}

/*---------------------------------*
            MISC                   *
  ---------------------------------*
 */

export function buildItemCountMsg(message: string) {
  return function (data: unknown[]) {
    const itemCount = data?.length || 0;
    const verb = itemCount === 1 ? "is" : "are";

    return message
      .replace("{{ verb }}", verb)
      .replace("{{ count }}", `${itemCount}`);
  };
}
