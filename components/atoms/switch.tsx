import { useTheme } from "next-themes";
import { Fragment, useEffect, useState } from "react";

type Props = {};

const Switch = (props: Props) => {
  const { setTheme, resolvedTheme } = useTheme();
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
    <Fragment>
      <label
        htmlFor="theme-switch"
        className="relative h-8 w-14 cursor-pointer"
        onChange={() => setTheme(isdarkTheme ? "light" : "dark")}
      >
        <input type="checkbox" id="theme-switch" className="peer sr-only" />
        <span className="absolute inset-0 rounded-full bg-primary-500 transition hover:bg-primary-300"></span>
        <span className="absolute inset-0 m-1 h-6 w-6 rounded-full bg-neutral-100 transition peer-checked:translate-x-6"></span>
      </label>
    </Fragment>
  );
};

export { Switch };
