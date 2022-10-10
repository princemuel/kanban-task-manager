import { Header, MainContent, Sidebar } from 'components';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='grid min-h-screen overflow-hidden'>
      <Header />

      <div className='main-content'>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export { Layout };
