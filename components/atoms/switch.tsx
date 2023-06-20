import { Switch as HeadlessSwitch } from "@headlessui/react";
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

  const isDarkTheme = resolvedTheme === "dark";

  if (!isMounted) return <></>;

  return (
    <Fragment>
      <HeadlessSwitch
        checked={isDarkTheme}
        onChange={() => setTheme(isDarkTheme ? "light" : "dark")}
        className={`relative inline-flex h-8 w-14 shrink-0 cursor-fancy rounded-full border-2 border-transparent bg-brand-500 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-100  focus-visible:ring-opacity-75 hover:bg-brand-300`}
      >
        <span className='sr-only'>Toggle the Theme</span>
        <span
          aria-hidden='true'
          className={`${isDarkTheme ? "translate-x-6" : "translate-x-0"}
            pointer-events-none inline-block h-6 w-6 transform rounded-full bg-neutral-100 shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </HeadlessSwitch>
    </Fragment>
  );
};

export { Switch };
