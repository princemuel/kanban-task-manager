import { dehydrate, DehydratedState, QueryClient } from '@tanstack/react-query';

export function serialize<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}

export function createDehydratedState<T>(
  data: QueryClient | null
): DehydratedState | null {
  if (!data) return null;
  return serialize(dehydrate(data));
}
