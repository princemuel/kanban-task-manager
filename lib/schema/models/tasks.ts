import { Field, ID, ObjectType } from "type-graphql";
import { Subtask } from "./subtasks";

@ObjectType({ description: "The task model" })
export class Task {
  @Field((type) => ID)
  readonly id: string;

  @Field({ description: "The title of the task" })
  title: string;

  @Field({ nullable: true, description: "The description of the task" })
  description?: string;

  @Field((type) => String, {
    nullable: true,
    description:
      "The status of a task. can be (todo, doing and done) or (now, next and later)",
  })
  status?: string;

  @Field((type) => [Subtask], { nullable: true })
  subtasks?: Subtask[];
}

// enum TaskStatus {
//   Todo = 'Todo',
//   Doing = 'Doing',
//   Done = 'Done',
//   Now = 'Now',
//   Next = 'Next',
//   Later = 'Later',
// }

// registerEnumType(TaskStatus, {
//   name: 'TaskStatus',
//   description:
//     'The status of a task. can be (todo, doing and done) or (now, next and later)',
// });
