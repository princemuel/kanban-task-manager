import { Header, Sidebar } from 'components/organisms';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='grid min-h-screen overflow-hidden'>
      <Header />

      <div>
        <Sidebar />
        <main
          id='main-content'
          className='py-10 px-8 bg-primary-300 text-neutral text-900 font-bold'
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export { Layout };
