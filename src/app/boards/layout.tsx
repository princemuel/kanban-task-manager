import { Fragment } from 'react';

export default function Layout({
  modal,
  children,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <main className='relative flex min-h-screen flex-col bg-white text-brand-900 antialiased dark:bg-brand-800 dark:text-white'>
      <Fragment>{children}</Fragment>
      <Fragment>{modal}</Fragment>
    </main>
  );
}
