import { cn } from '@/helpers';
import * as React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const FormInput = React.forwardRef<HTMLInputElement, Props>(
  ({ className, ...rest }, forwardedRef) => {
    return (
      <input
        className={cn(
          'rounded-300 w-full border border-brand-400/25 bg-inherit px-6 py-4 text-400 font-medium leading-400 placeholder:text-brand-900/25 focus:outline-none dark:placeholder:text-white/25',
          className
        )}
        {...rest}
        ref={forwardedRef}
      />
    );
  }
);

FormInput.displayName = 'FormInput';
