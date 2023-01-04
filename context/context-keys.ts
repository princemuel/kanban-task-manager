import React from "react";

export enum ContextKeys {
  TaskState = "TaskState",
  TaskDispatch = "TaskDispatch",
  BoardState = "BoardState",
  BoardDispatch = "BoardDispatch",
}
export type ContextValue = React.Context<any | null>;
