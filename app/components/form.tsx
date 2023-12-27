import { tw } from "@/helpers/utils";
import type * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import { Controller, useFormContext } from "react-hook-form";
import { RemixFormProvider } from "remix-hook-form";
import { Label } from "./label";
import { text } from "./text";

const Form = RemixFormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};
type FormItemContextValue = {
  id: string;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const FormItem = React.forwardRef(
  ({ as, className, ...restProps }, forwardedRef) => {
    const id = React.useId();
    const As = as || "div";

    return (
      <FormItemContext.Provider value={{ id }}>
        <As
          className={tw("group", className)}
          {...restProps}
          ref={forwardedRef}
        />
      </FormItemContext.Provider>
    );
  },
) as ForwardRefComponent<"div", {}>;
FormItem.displayName = "FormItem";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...restProps }, forwardedRef) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      id={formItemId}
      aria-describedby={
        !error ?
          `${formDescriptionId}`
        : `${formDescriptionId} ${formMessageId}`
      }
      aria-errormessage={formMessageId}
      aria-invalid={Boolean(error)}
      {...restProps}
      ref={forwardedRef}
    />
  );
});
FormControl.displayName = "FormControl";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...restProps }, forwardedRef) => {
  const { formItemId } = useFormField();

  return (
    <Label
      className={tw(text({ size: "sm", variant: "accent" }), className)}
      htmlFor={formItemId}
      {...restProps}
      ref={forwardedRef}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...restProps }, forwardedRef) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) return null;

  return (
    <p
      role="alert"
      aria-live="polite"
      id={formMessageId}
      className={text({
        variant: "destructive",
        size: "base",
        className,
      })}
      {...restProps}
      ref={forwardedRef}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...restProps }, forwardedRef) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      id={formDescriptionId}
      className={tw("text-xs", className)}
      {...restProps}
      ref={forwardedRef}
    />
  );
});
FormDescription.displayName = "FormDescription";

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
};
