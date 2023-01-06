import * as React from "react";
import { clsx } from "utilities";

type TextFieldProps<E extends React.ElementType<any>> = {
  className?: string;
  variant?: E;
};

type Props<E extends React.ElementType<any>> = TextFieldProps<E> &
  Omit<React.ComponentPropsWithRef<E>, keyof TextFieldProps<E>>;

const TextFieldInner = <E extends React.ElementType = "textarea">(
  { variant, className, ...rest }: Props<E>,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) => {
  const RenderedElement = variant || "textarea";
  return (
    <RenderedElement
      className={clsx(
        "border-brand-400/25 placeholder:text-brand-900/25 w-full rounded-300 border bg-inherit py-4 px-6 text-400 font-medium leading-400 focus:outline-none dark:placeholder:text-neutral-100/25",
        className || null
      )}
      {...rest}
      ref={ref}
    />
  );
};

export const TextField = React.forwardRef(TextFieldInner);
