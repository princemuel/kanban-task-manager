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
        {children}
      </div>
    </div>
  );
};

export { Layout };
