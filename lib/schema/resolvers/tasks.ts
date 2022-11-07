import data from 'lib/data/data.json';
import { Query, Resolver } from 'type-graphql';
import { Task } from '../models';

@Resolver(Task)
export class TasksResolver {
  @Query(() => [Task])
  tasks(): Task[] {
    return data?.boards?.[0]?.columns?.[0]?.tasks;
  }
}

const tasks = [
  {
    id: '4fdaaa',
    title: 'Build UI for onboarding flow',
    description: '',
    status: 'Todo',
    subtasks: [
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
    ],
  },
  {
    id: '2a4e5f',
    title: 'Build UI for search',
    description: '',
    status: 'Todo',
    subtasks: [
      {
        id: '85c978',
        title: 'Search page',
        isCompleted: false,
      },
    ],
  },
  {
    id: '8684af',
    title: 'Build settings UI',
    description: '',
    status: 'Todo',
    subtasks: [
      {
        id: '11dc4a',
        isCompleted: false,
        title: 'Account page',
      },
      {
        id: 'e18d8c',
        isCompleted: false,
        title: 'Billing page',
      },
    ],
  },
  {
    id: '88f786',
    title: 'QA and test all major user journeys',
    description:
      'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.',
    status: 'Todo',
    subtasks: [
      {
        id: 'b2f5eb',
        isCompleted: false,
        title: 'Internal testing',
      },
      {
        id: '409b7a',
        isCompleted: false,
        title: 'External testing',
      },
    ],
  },
];
