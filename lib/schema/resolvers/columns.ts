import data from 'lib/data/data.json';
import { Query, Resolver } from 'type-graphql';
import { Column } from '../models';

@Resolver(Column)
export class ColumnsResolver {
  @Query(() => [Column])
  columns(): Column[] {
    return data?.boards?.[0]?.columns;
  }
}

const columns = [
  {
    id: 'c18a76',
    name: 'Todo',
    tasks: [
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
    ],
  },
  {
    id: '1577c1',
    name: 'Doing',
    tasks: [
      {
        id: '357bb8',
        title: 'Design settings and search pages',
        description: '',
        status: 'Doing',
        subtasks: [
          {
            id: 'f1d31e',
            title: 'Settings - Account page',
            isCompleted: true,
          },
          {
            id: '3c763b',
            title: 'Settings - Billing page',
            isCompleted: true,
          },
          {
            id: 'ece3ad',
            title: 'Search page',
            isCompleted: false,
          },
        ],
      },
      {
        id: '900769',
        title: 'Add account management endpoints',
        description: '',
        status: 'Doing',
        subtasks: [
          {
            id: 'e3e0c8',
            title: 'Upgrade plan',
            isCompleted: true,
          },
          {
            id: '2d04ba',
            title: 'Cancel plan',
            isCompleted: true,
          },
          {
            id: 'f9d56d',
            title: 'Update payment method',
            isCompleted: false,
          },
        ],
      },
      {
        id: 'fff9a7',
        title: 'Design onboarding flow',
        description: '',
        status: 'Doing',
        subtasks: [
          {
            id: '1d8518',
            title: 'Sign up page',
            isCompleted: true,
          },
          {
            id: '3796ff',
            title: 'Sign in page',
            isCompleted: false,
          },
          {
            id: '651068',
            title: 'Welcome page',
            isCompleted: false,
          },
        ],
      },
      {
        id: '6f2b4c',
        title: 'Add search enpoints',
        description: '',
        status: 'Doing',
        subtasks: [
          {
            id: '55d458',
            title: 'Add search endpoint',
            isCompleted: true,
          },
          {
            id: 'c87a20',
            title: 'Define search filters',
            isCompleted: false,
          },
        ],
      },
      {
        id: '30eeae',
        title: 'Add authentication endpoints',
        description: '',
        status: 'Doing',
        subtasks: [
          {
            id: 'c1e6f5',
            isCompleted: true,
            title: 'Define user model',
          },
          {
            id: 'a4a450',
            isCompleted: false,
            title: 'Add auth endpoints',
          },
        ],
      },
      {
        id: 'df4d69',
        title:
          'Research pricing points of various competitors and trial different business models',
        description:
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        status: 'Doing',
        subtasks: [
          {
            id: '69df2b',
            title: 'Research competitor pricing and business models',
            isCompleted: true,
          },
          {
            id: '90b3ed',
            title: 'Outline a business model that works for our solution',
            isCompleted: false,
          },
          {
            id: '10ecb7',
            title:
              'Talk to potential customers about our proposed solution and ask for fair price expectancy',
            isCompleted: false,
          },
        ],
      },
    ],
  },
  {
    id: 'a47197',
    name: 'Done',
    tasks: [
      {
        id: '9500b5',
        title: 'Conduct 5 wireframe tests',
        description:
          'Ensure the layout continues to make sense and we have strong buy-in from potential users.',
        status: 'Done',
        subtasks: [
          {
            id: 'e81486',
            title: 'Complete 5 wireframe prototype tests',
            isCompleted: true,
          },
        ],
      },
      {
        id: 'd5567c',
        title: 'Create wireframe prototype',
        description:
          'Create a greyscale clickable wireframe prototype to test our asssumptions so far.',
        status: 'Done',
        subtasks: [
          {
            id: '84faf4',
            title: 'Create clickable wireframe prototype in Balsamiq',
            isCompleted: true,
          },
        ],
      },
      {
        id: '75a3e7',
        title: 'Review results of usability tests and iterate',
        description:
          "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
        status: 'Done',
        subtasks: [
          {
            id: '2add23',
            title: 'Meet to review notes from previous tests and plan changes',
            isCompleted: true,
          },
          {
            id: '4b959b',
            title: 'Make changes to paper prototypes',
            isCompleted: true,
          },
          {
            id: '172688',
            title: 'Conduct 5 usability tests',
            isCompleted: true,
          },
        ],
      },
      {
        id: '66c172',
        title:
          'Create paper prototypes and conduct 10 usability tests with potential customers',
        description: '',
        status: 'Done',
        subtasks: [
          {
            id: 'b62f3e',
            title: 'Create paper prototypes for version one',
            isCompleted: true,
          },
          {
            id: '4d4ede',
            title: 'Complete 10 usability tests',
            isCompleted: true,
          },
        ],
      },
      {
        id: 'd97f83',
        title: 'Market discovery',
        description:
          'We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.',
        status: 'Done',
        subtasks: [
          {
            id: 'a91815',
            isCompleted: true,
            title: 'Interview 10 prospective customers',
          },
        ],
      },
      {
        id: 'c7ddbe',
        title: 'Competitor analysis',
        description: '',
        status: 'Done',
        subtasks: [
          {
            id: '49482a',
            title: 'Find direct and indirect competitors',
            isCompleted: true,
          },
          {
            id: 'ac46e7',
            title: 'SWOT analysis for each competitor',
            isCompleted: true,
          },
        ],
      },
      {
        id: 'f68b89',
        title: 'Research the market',
        description:
          'We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.',
        status: 'Done',
        subtasks: [
          {
            id: 'f00f00',
            title: 'Write up research analysis',
            isCompleted: true,
          },
          {
            id: '5ff8f0',
            title: 'Calculate TAM',
            isCompleted: true,
          },
        ],
      },
    ],
  },
];
