import { BoardsResolver } from './boards';
import { ColumnsResolver } from './columns';
import { SubtasksResolver } from './subtasks';
import { TasksResolver } from './tasks';
import { UserResolver } from './user';

export const resolvers = [
  BoardsResolver,
  ColumnsResolver,
  TasksResolver,
  SubtasksResolver,
  UserResolver,
] as const;
