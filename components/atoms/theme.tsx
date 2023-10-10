import { IconMoon, IconSun } from '@/common/assets';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { Button } from './button';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [_, startTransition] = React.useTransition();

  return (
    <Button
      variant='monochrome'
      size='small'
      onClick={() => {
        startTransition(() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        });
      }}
    >
      {!theme ? null : theme === 'dark' ? (
        <IconMoon className='transition-all' />
      ) : (
        <IconSun className='transition-all' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
