import styles from '@/assets/styles/layout.module.scss';
import { cn } from '@/lib';
import React from 'react';
import { Sidebar } from './sidebar';

interface Props {
  children: React.ReactNode;
}

const MainContent = ({ children }: Props) => {
  return (
    <div className={cn('', styles.content)}>
      <Sidebar />
      {children}
    </div>
  );
};

export { MainContent };
