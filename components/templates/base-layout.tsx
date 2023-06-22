import * as React from 'react';
import { Header, MainContent } from '../organisms';

interface Props {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Header />
      <MainContent>{children}</MainContent>
    </React.Fragment>
  );
};

export { BaseLayout };
