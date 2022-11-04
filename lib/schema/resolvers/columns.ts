import { Field, ID, ObjectType } from 'type-graphql';
import { Task } from './tasks';

@ObjectType()
export class Column {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;

  @Field(() => [Task])
  tasks?: Task[];
}
