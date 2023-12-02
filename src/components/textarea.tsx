import * as React from "react";
import { tv } from "tailwind-variants";

export const TextArea = React.forwardRef(
  ({ className, ...restProps }, forwardedRef) => (
    <textarea
      {...restProps}
      ref={forwardedRef}
      className={textarea({ className })}
    />
  ),
) as ForwardRefComponent<"textarea", {}>;
TextArea.displayName = "TextArea";

const textarea = tv({
  base: [
    "peer min-h-min w-full rounded px-4 py-2 caret-brand-500 outline-none",
    "font-sans text-400 font-medium leading-400",
    "border border-brand-400/25 hover:border-brand-500 focus:border-brand-500 ",
    "text-brand-900 dark:text-white",
    "bg-transparent autofill:bg-transparent",
    "placeholder:text-brand-900/25 dark:placeholder:text-white/25",
    "aria-[invalid=true]:!text-accent-200 dark:aria-[invalid=true]:!text-accent-200",
    "aria-[invalid=true]:!border-accent-200 aria-[invalid=true]:caret-accent-200",
  ],
});
