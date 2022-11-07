type Props = {
  children: React.ReactNode;
  className: string;
};

export function MainContent({ children, ...rest }: Props) {
  return (
    <main id='main-content' {...rest}>
      {children}
    </main>
  );
}
