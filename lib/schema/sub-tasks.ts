import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Subtask {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  title!: string;

  @Field(() => Boolean)
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
