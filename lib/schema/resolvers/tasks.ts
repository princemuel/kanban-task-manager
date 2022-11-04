import { Field, ID, ObjectType } from 'type-graphql';
import type { TaskStatus } from 'types';
import { Subtask } from './sub-tasks';

@ObjectType()
export class Task {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  title!: string;

  @Field(() => String)
  description?: string;

  @Field(() => String)
  status?: TaskStatus;

  @Field(() => [Subtask])
  subtasks?: Subtask[];
}

// @Resolver(Task)
// export class TasksResolver {
//   @Query(() => [Task])
//   boards(): Task[] {
//     return [
//       { id: 'hddd', title: 'Platform Launch', isCompleted: true },
//       { id: 'hdd', title: 'Marketing Plan', isCompleted: false },
//     ];
//   }
// }
