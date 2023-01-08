import { icons } from "common";
import { Switch } from "components/atoms";
import { clsx } from "utilities";

type Props = {
  className?: string;
};

const ThemeModeToggler = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        "flex cursor-fancy items-center justify-center  gap-10 rounded-200 bg-brand-100 py-4 px-12 dark:bg-brand-800",
        className || ""
      )}
    >
      <icons.mode.sun />
      <Switch />
      <icons.mode.moon />
    </div>
  );
};

export { ThemeModeToggler };
