import produce from "immer";
import { ContextFactory } from "./context-factory";
import { ContextKeys } from "./context-keys";

const BoardStateContext = ContextFactory.createContext(ContextKeys.BoardState);
const BoardDispatchContext = ContextFactory.createContext(
  ContextKeys.BoardDispatch
);

export {};
const reducer = produce((draft, action) => {
  switch (action.type) {
  }
});
