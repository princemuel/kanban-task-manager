import { Field, ID, ObjectType } from 'type-graphql';
import { Task } from './tasks';

@ObjectType({ description: 'The column model' })
export class Column {
  @Field((type) => ID)
  readonly id: string;

  @Field({ description: 'The name of the column' })
  name: string;

  @Field((type) => [Task], { nullable: true })
  tasks?: Task[];
}
