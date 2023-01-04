import { ContextFactory } from "./context-factory";
import { ContextKeys } from "./context-keys";

const TaskStateContext = ContextFactory.createContext(ContextKeys.TaskState);
const TaskDispatchContext = ContextFactory.createContext(
  ContextKeys.TaskDispatch
);

export {};
