import { data } from 'lib/data';
import { Query, Resolver } from 'type-graphql';
import { Task } from '../models';

@Resolver(Task)
export class TasksResolver {
  @Query(() => [Task])
  tasks(): Task[] {
    //@ts-expect-error
    return data?.boards?.[0]?.columns?.[0]?.tasks;
  }
}
