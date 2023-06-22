'use client';

import { cn, useThemeMode } from '@/lib';
import { Switch as HeadlessSwitch } from '@headlessui/react';
import { cx } from 'cva';
import { Fragment } from 'react';

interface Props {}

const Switch = (props: Props) => {
  const { isMounted, isDarkMode, updateTheme } = useThemeMode();
  if (!isMounted) return null;

  return (
    <Fragment>
      <HeadlessSwitch
        checked={isDarkMode}
        onChange={updateTheme}
        className={cx(
          `relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-brand-500 transition-colors duration-200 ease-in-out hover:bg-brand-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`
        )}
      >
        <span className='sr-only'>Toggle the Theme</span>
        <span
          aria-hidden='true'
          className={cn(
            'pointer-events-none inline-block aspect-square w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out',
            isDarkMode ? 'translate-x-6' : 'translate-x-0'
          )}
        />
      </HeadlessSwitch>
    </Fragment>
  );
};

export { Switch };
