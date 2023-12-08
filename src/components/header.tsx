interface Props {
  children?: React.ReactNode;
}

export function LayoutHeader({ children }: Props) {
  return (
    <header className="flex items-center bg-slate-200 py-7 pl-9">
      <div className="w-[300px] border-r font-semibold">kanban</div>
      <div className="ml-6 font-medium capitalize">Platform Launch</div>
    </header>
  );
}
