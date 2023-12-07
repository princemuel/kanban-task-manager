import { cache } from "react";
// import 'server-only';

export const serverContext = <T>(defaultValue: T) => {
  const cachedValue = cache(() => ({ current: defaultValue }));

  const getCachedValue = () => cachedValue().current;

  const setCachedValue = (value: T) => {
    cachedValue().current = value;
  };

  return [getCachedValue, setCachedValue] as const;
};
