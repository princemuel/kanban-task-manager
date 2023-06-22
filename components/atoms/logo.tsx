'use client';

import { icons } from '@/common';
import { useThemeMode } from '@/lib';
import Link from 'next/link';

interface Props {}

const LogoIcon = (props: Props) => {
  const { isDarkMode } = useThemeMode();
  // if (!isMounted) return null;

  return (
    <Link href={'/'} className='flex items-center' title='Home Logo'>
      <span className='sr-only'>Home Logo</span>
      {isDarkMode ? <icons.logo.dark /> : <icons.logo.light />}
    </Link>
  );
};

export { LogoIcon };
