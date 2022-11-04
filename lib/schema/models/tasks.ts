import { Field, ID, ObjectType } from 'type-graphql';
import type { TaskStatus } from 'types';
import { Subtask } from './sub-tasks';

@ObjectType({ description: 'The task model' })
export class Task {
  @Field((type) => ID)
  readonly id!: string;

  @Field({ description: 'The title of the task' })
  title!: string;

  @Field({ nullable: true, description: 'The description of the task' })
  description?: string;

  @Field({
    nullable: true,
    description: 'The status of the task. can be todo, doing or done',
  })
  status?: TaskStatus;

  @Field(() => [Subtask], { nullable: true })
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
