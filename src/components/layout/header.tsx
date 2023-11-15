import Link from 'next/link';

interface Props {
  children?: React.ReactNode;
}

export function LayoutHeader({ children }: Props) {
  return (
    <header>
      {children} <Link href='/signin'>Login</Link>
      <Link href='/register'>Register</Link>
    </header>
  );
}
