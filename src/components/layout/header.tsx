interface Props {
  children?: React.ReactNode;
}

export function LayoutHeader({ children }: Props) {
  return <header>{children}</header>;
}
