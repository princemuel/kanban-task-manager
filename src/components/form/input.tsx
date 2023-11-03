import * as React from 'react';
import { tv } from 'tailwind-variants';

export const FormInput = React.forwardRef(
  ({ className, ...restProps }, forwardedRef) => (
    <input {...restProps} ref={forwardedRef} className={input({ className })} />
  )
) as ForwardRefComponent<'input', {}>;
FormInput.displayName = 'FormInput';

const input = tv({
  base: 'w-full rounded border border-brand-400/25 bg-transparent px-4 py-2 text-400 font-medium leading-400 text-brand-800 caret-brand-500 outline-none placeholder:text-brand-800/25 autofill:bg-transparent aria-[invalid=true]:border-accent-200 aria-[invalid=true]:text-accent-200 dark:text-white dark:placeholder:text-white/25 dark:aria-[invalid=true]:text-accent-200',
});
