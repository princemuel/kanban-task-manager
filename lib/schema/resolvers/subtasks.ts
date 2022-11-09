import data from 'lib/data/data.json';
import { Query, Resolver } from 'type-graphql';
import { Subtask } from '../models';

@Resolver(Subtask)
export class SubtasksResolver {
  @Query(() => [Subtask])
  subtasks(): Subtask[] {
    return data?.boards?.[0]?.columns?.[0]?.tasks?.[0]?.subtasks;
  }
}

const subtasks = [
  {
    id: '97e378',
    title: 'Sign up page',
    isCompleted: true,
  },
  {
    id: 'c25af7',
    title: 'Sign in page',
    isCompleted: false,
  },
  {
    id: '122f44',
    title: 'Welcome page',
    isCompleted: false,
  },
];
