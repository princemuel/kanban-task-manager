import { Field, ID, ObjectType } from 'type-graphql';
import type { ITask } from 'types';
import { Task } from './tasks';

export interface IColumn {
  id: string;
  name: string;
  tasks: ITask[];
}
@ObjectType()
export class Column {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;

  @Field(() => [Task])
  tasks?: Task[];
}
