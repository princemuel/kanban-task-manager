import * as React from "react";
import { clsx } from "utilities";

type FormInputProps<E extends React.ElementType<any>> = {
  className?: string;
  variant?: E;
};

type Props<E extends React.ElementType<any>> = FormInputProps<E> &
  Omit<React.ComponentPropsWithRef<E>, keyof FormInputProps<E>>;

const FormInputInner = <E extends React.ElementType = "input">(
  { variant, className, ...rest }: Props<E>,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const RenderedElement = variant || "input";
  return (
    <RenderedElement
      className={clsx(
        "w-full rounded-300 border border-primary-400/25 bg-inherit py-4 px-6 text-400 font-medium leading-400 placeholder:text-primary-900/25 focus:outline-none dark:placeholder:text-neutral-100/25",
        className || null
      )}
      {...rest}
      ref={ref}
    />
  );
};

export const FormInput = React.forwardRef(FormInputInner);
