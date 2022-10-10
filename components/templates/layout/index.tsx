import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      {/* SIDEBAR */}
      {/* HEADER */}
      {children}
    </>
  );
};

export { Layout };
