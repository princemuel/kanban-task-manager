import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({ description: 'The sub-task model' })
export class Subtask {
  @Field((type) => ID)
  readonly id!: string;

  @Field({ description: 'The title of the subtask' })
  title!: string;

  @Field()
  isCompleted!: boolean;
}

// @Resolver(Subtask)
// export class SubtasksResolver {
//   @Query(() => [Subtask])
//   boards(): Subtask[] {
//     return [
//       { id: 'hddd', title: 'Platform Launch', isCompleted: true },
//       { id: 'hdd', title: 'Marketing Plan', isCompleted: false },
//     ];
//   }
// }
