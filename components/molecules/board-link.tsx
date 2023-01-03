import { icons } from "common";
import { NavLink } from "components/atoms";

type Props = {
  id: string;
  name: string;
};

const BoardLink = ({ id, name }: Props) => {
  return (
    <NavLink href={`/boards/${id}`}>
      <a className="group mr-8 flex items-center gap-6 px-10 py-4 text-500 font-bold leading-300 text-primary-400 aria-[current='page']:rounded-r-full aria-[current='page']:bg-primary-500 aria-[current='page']:text-neutral-100 hover:rounded-r-full hover:bg-primary-500/10 active:rounded-r-full active:bg-primary-500/10 dark:hover:bg-neutral-100 dark:active:bg-neutral-100">
        <icons.board.board className="fill-current text-primary-400 group-hover:text-primary-500 group-active:text-primary-500 group-aria-[current='page']:text-neutral-100 group-aria-[current='page']:group-hover:text-primary-500" />
        <span className="group-hover:text-primary-500 group-active:text-primary-500">
          {name}
        </span>
      </a>
    </NavLink>
  );
};

export { BoardLink };
