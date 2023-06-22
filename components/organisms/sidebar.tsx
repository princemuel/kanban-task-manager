'use client';

import styles from '@/assets/styles/layout.module.scss';
import { icons } from '@/common';
import { cn, useSidebar } from '@/lib';
import { NavLink, Switch, Text } from '../atoms';

interface Props {}

const links = [
  { route: '/' },
  { route: '/a' },
  { route: '/b' },
  { route: '/c' },
  { route: '/d' },
];

const Sidebar = ({}: Props) => {
  const sidebar = useSidebar();

  return (
    <aside
      className={cn(
        'flex flex-col border-r border-brand-200 bg-white dark:border-brand-600 dark:bg-brand-700',
        styles.sidebar
      )}
    >
      <div className='mx-12 my-6'>
        <Text
          intent={'secondary'}
          size={'xs'}
          weight={'bold'}
          className='uppercase'
        >
          All Boards ({links?.length})
        </Text>
      </div>
      <nav>
        <ul aria-label='Board Links'>
          {links.map((link) => {
            return (
              <li key={link.route} className={cn('')}>
                <NavLink
                  // @ts-expect-error
                  href={link.route}
                  className={cn(
                    'group flex items-center gap-6 px-12 py-5 aria-[current="page"]:bg-brand-500'
                  )}
                >
                  <icons.board.board className='text-brand-400 group-hover:text-brand-500 group-aria-[current="page"]:text-white' />
                  <span
                    className={cn(
                      'text-500 font-bold leading-300 text-brand-400 group-aria-[current="page"]:text-white'
                    )}
                  >
                    Platform Launch
                  </span>
                </NavLink>
              </li>
            );
          })}

          <li>
            <button
              type='button'
              className={cn('group flex items-center gap-6 px-12 py-5')}
            >
              <icons.board.board className='text-brand-400' />
              <span className='text-500 font-bold leading-300 text-brand-500'>
                + Create New Board
              </span>
            </button>
          </li>
        </ul>
      </nav>

      <div className='mb-24 mt-auto'>
        <div className='mx-12 flex items-center justify-center gap-10 rounded-lg bg-brand-100 px-12 py-4 dark:bg-brand-800'>
          <icons.mode.sun />
          <Switch />
          <icons.mode.moon />
        </div>
      </div>
      {/* <div className='fixed bottom-12 left-0 z-20'>
        <Button
          intent={'primary'}
          size={'md'}
          weight={'bold'}
          className='group flex items-center gap-6 rounded-r-pill px-8 py-7'
          onClick={sidebar.open}
        >
          <icons.sidebar.show />
          <span className='sr-only'>Show Sidebar</span>
        </Button>
      </div> */}
    </aside>
  );
};

export { Sidebar };
