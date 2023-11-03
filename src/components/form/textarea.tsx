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

const textarea = tv({
  base: '-tracking-200 peer w-full rounded border border-brand-100 bg-transparent px-5 py-4 text-400 font-bold leading-200 text-brand-900 caret-brand-500 outline-none transition-colors autofill:bg-white aria-[invalid="true"]:!border-accent-200 aria-[invalid="true"]:!text-accent-200 hover:border-brand-500 focus:border-brand-500 focus:aria-[invalid="true"]:!border-accent-200 focus:aria-[invalid="true"]:!ring-accent-200 dark:border-brand-600 dark:bg-brand-700 dark:text-white dark:autofill:bg-brand-700 dark:hover:border-brand-500 dark:focus:border-brand-500',
});