"use client";

import { useRef, useState } from "react";

export function useReactState<T>(initialState: T) {
  const [_index, setIndex] = useState(0);

  const proxy = useRef<T>(
    // @ts-expect-error
    new Proxy(initialState, {
      set(target: any, prop, newValue) {
        target[prop] = newValue;
        setIndex((idx) => idx + 1);
        return true;
      },
    }),
  );

  return proxy.current;
}
