import { twcn } from "@/helpers/utils";
import { Slot } from "@radix-ui/react-slot";

type Props = { asChild?: boolean } & React.HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className, asChild, ...rest }: Props) {
  const As = asChild ? Slot : "div";

  return (
    <As
      className={twcn("animate-pulse rounded-md bg-gray-900/10", className)}
      {...rest}
    />
  );
}
