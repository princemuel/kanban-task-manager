type Props = {
  children: React.ReactNode;
  className: string;
};

const MainContent = ({ children, ...rest }: Props) => {
  return (
    <main id="main-content" {...rest}>
      {children}
    </main>
  );
};
export { MainContent };
