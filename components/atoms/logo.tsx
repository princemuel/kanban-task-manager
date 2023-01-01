import { icons } from "common";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {};

const LogoIcon = (props: Props) => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const isdarkTheme = resolvedTheme === "dark";

  if (!isMounted) return <></>;
  return (
    <Link href={"/"} passHref>
      <a className="flex items-center">
        {isdarkTheme ? <icons.logo.dark /> : <icons.logo.light />}
      </a>
    </Link>
  );
};

export { LogoIcon };
