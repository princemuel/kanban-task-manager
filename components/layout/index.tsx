import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* <Header /> */}

      {/* <Sidebar /> */}
      {children}
    </div>
  );
};

export { Layout };
