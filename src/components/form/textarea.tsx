import * as React from 'react';
import { tv } from 'tailwind-variants';

export const TextArea = React.forwardRef(
  ({ className, ...restProps }, forwardedRef) => (
    <textarea
      {...restProps}
      ref={forwardedRef}
      className={textarea({ className })}
    />
  )
) as ForwardRefComponent<'textarea', {}>;
TextArea.displayName = 'TextArea';

// "border-brand-400/25 placeholder:text-brand-900/25 w-full rounded-300 border bg-inherit py-4 px-6 text-400 font-medium leading-400 focus:outline-none dark:placeholder:text-neutral-100/25",
const textarea = tv({
  // base: '-tracking-200 peer w-full rounded border border-brand-100 bg-transparent px-5 py-4 text-400 font-bold leading-200 text-brand-900 caret-brand-500 outline-none transition-colors autofill:bg-white aria-[invalid="true"]:!border-accent-200 aria-[invalid="true"]:!text-accent-200 hover:border-brand-500 focus:border-brand-500 focus:aria-[invalid="true"]:!border-accent-200 focus:aria-[invalid="true"]:!ring-accent-200 dark:border-brand-600 dark:bg-brand-700 dark:text-white dark:autofill:bg-brand-700 dark:hover:border-brand-500 dark:focus:border-brand-500',

  base: [
    'peer min-h-min w-full rounded px-4 py-2 caret-brand-500 outline-none',
    'font-sans text-400 font-medium leading-400',
    'border border-brand-400/25',
    'text-brand-900 dark:text-white',
    'bg-transparent autofill:bg-transparent',
    'placeholder:text-brand-900/25 dark:placeholder:text-white/25',
    'aria-[invalid=true]:text-accent-200 dark:aria-[invalid=true]:text-accent-200',
  ],
});
