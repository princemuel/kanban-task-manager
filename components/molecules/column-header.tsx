import clsx from "clsx";
import { IColumn } from "types";

type Props = {
  column: IColumn;
};

const ColumnHeader = ({ column }: Props) => {
  return (
    <h4
      key={column.id}
      id={column.id}
      className='flex w-[28rem] items-center gap-2'
    >
      <span
        aria-hidden
        className={clsx(
          "mr-4 inline-block aspect-square w-6 rounded-full",
          column.name === "Todo"
            ? "bg-accent-300"
            : column.name === "Doing"
            ? "bg-accent-400"
            : "bg-accent-500"
        )}
      ></span>
      <span className='uppercase'>{column.name}</span>
      <output className='uppercase'>({column.tasks.length})</output>
    </h4>
  );
};

export { ColumnHeader };
