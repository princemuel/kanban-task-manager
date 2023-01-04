import { ContextFactory } from "./context-factory";
import { ContextKeys } from "./context-keys";

const BoardStateContext = ContextFactory.createContext(ContextKeys.BoardState);
const BoardDispatchContext = ContextFactory.createContext(
  ContextKeys.BoardDispatch
);

export {};
