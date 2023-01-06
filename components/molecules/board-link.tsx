import { icons } from "common";
import { NavLink } from "components/atoms";

type Props = {
  id: string;
  name: string;
};

const BoardLink = ({ id, name }: Props) => {
  return (
    <NavLink href={`/boards/${id}`}>
      <a className="text-brand-400 aria-[current='page']:bg-brand-500 hover:bg-brand-500/10 active:bg-brand-500/10 group mr-8 flex items-center gap-6 px-10 py-4 text-500 font-bold leading-300 aria-[current='page']:rounded-r-full aria-[current='page']:text-neutral-100 hover:rounded-r-full active:rounded-r-full dark:hover:bg-neutral-100 dark:active:bg-neutral-100">
        <icons.board.board className="text-brand-400 group-hover:text-brand-500 group-active:text-brand-500 group-aria-[current='page']:group-hover:text-brand-500 fill-current group-aria-[current='page']:text-neutral-100" />
        <span className='group-hover:text-brand-500 group-active:text-brand-500'>
          {name}
        </span>
      </a>
    </NavLink>
  );
};

export { BoardLink };
