import * as React from 'react';

export default function Layout({
  modal,
  children,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <main className='relative flex min-h-screen flex-col bg-white text-brand-900 antialiased dark:bg-brand-800 dark:text-white'>
      <React.Fragment>
        {children}
        {modal}
      </React.Fragment>
    </main>
  );
}
