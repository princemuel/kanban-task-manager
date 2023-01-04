import * as React from "react";
import { ContextKeys } from "./context-keys";

const contextMap = new Map<ContextKeys, React.Context<any | null>>();

/**
 *
 */
export const ContextFactory = {
  createContext: <T,>(key: ContextKeys): React.Context<T | null> => {
    const context = React.createContext<T | null>(null);
    contextMap.set(key, context);
    return context;
  },

  useContext: <T,>(key: ContextKeys): T => {
    const contextValue = contextMap.get(key);
    if (contextValue == null)
      throw new Error(`${ContextKeys[key]} was not created`);

    const context = React.useContext<T | null>(contextValue);
    if (context == null)
      throw new Error(`Please use ${ContextKeys[key]} within its' Provider`);
    return context;
  },

  clearContextMap() {
    contextMap.clear();
  },
};
