import Link from "next/link";
import { useRouter } from "next/router";
import { Children, cloneElement, ReactElement, ReactNode } from "react";
import { $ElementProps } from "types";
import { clsx } from "utilities";

interface Props extends $ElementProps<typeof Link> {
  children: ReactNode;
  activeClassName?: string;
  href: string;
}

/**
 * This component adds page-aware properties to the Next.js'
 * default Link component similar to the NavLink component in
 * React-Router
 * @returns JSX.Element
 */
const NavLink = ({ href, children, activeClassName, ...props }: Props) => {
  const { asPath } = useRouter();

  const child = Children.only(children) as ReactElement;

  const sanitizedPath = asPath?.split("#")?.[0]?.split("?")?.[0];

  href = href && href !== "/" && href.endsWith("/") ? href.slice(0, -1) : href;

  const isCurrentPath =
    href === sanitizedPath || sanitizedPath?.startsWith(href + "/");

  const className = clsx(
    child?.props?.className,
    isCurrentPath && activeClassName,
    "cursor-fancy"
  );

  return (
    <Link href={href} passHref {...props}>
      {cloneElement(child, {
        className,
        "aria-current": isCurrentPath ? "page" : "false",
      })}
    </Link>
  );
};

export { NavLink };
