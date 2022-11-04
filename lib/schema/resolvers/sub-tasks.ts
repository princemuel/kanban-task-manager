import { data } from 'lib/data';
import { Query, Resolver } from 'type-graphql';
import { Subtask } from '../models';

@Resolver(Subtask)
export class SubtasksResolver {
  @Query(() => [Subtask])
  subtasks(): Subtask[] {
    return data?.boards?.[0]?.columns?.[0]?.tasks?.[0]?.subtasks;
  }
}
