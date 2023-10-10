'use client';

import styles from '@/assets/styles/layout.module.scss';
import { cn } from '@/helpers';
import { useSidebar } from '@/hooks';
import React from 'react';
import { Aside } from './aside';

interface Props {
  children: React.ReactNode;
}

const MainContent = ({ children }: Props) => {
  const sidebar = useSidebar();
  return (
    <div
      // data-sidebar={sidebar.show ? 'opened' : 'closed'}
      className={cn('', styles.content)}
    >
      <Aside />
      {children}
    </div>
  );
};

export { MainContent };
