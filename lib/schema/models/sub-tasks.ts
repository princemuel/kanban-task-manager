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
