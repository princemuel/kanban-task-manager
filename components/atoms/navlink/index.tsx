import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { Children, cloneElement, ReactElement, ReactNode } from 'react';

interface Props extends LinkProps {
  children: ReactNode;
  activeClassName?: string;
}

const NavLink = ({ href, children, activeClassName, ...props }: Props) => {
  const child = Children.only(children) as ReactElement;
  const childClassName = child?.props?.className || '';
  const activeClass = activeClassName || 'navigation-link';

  const { asPath } = useRouter();

  const sanitizedPath = asPath?.split('#')?.[0]?.split('?')?.[0];
  // @ts-expect-error
  href = href && href !== '/' && href.endsWith('/') ? href.slice(0, -1) : href;

  const isCurrentPath =
    href === sanitizedPath || sanitizedPath.startsWith(href + '/');

  let className = isCurrentPath
    ? `${activeClass} ${childClassName} `.trim()
    : `${childClassName}`.trim();

  className = [...new Set(className?.split(' '))].join(' ');

  return (
    <Link href={href} passHref {...props}>
      {cloneElement(child, {
        className: className || null,
        'aria-current': isCurrentPath ? 'page' : false,
      })}
    </Link>
  );
};

export { NavLink };
