import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

type ButtonVariants = Omit<VariantProps<typeof button>, "_content">;
type ButtonProps = Partial<ButtonVariants> & {
  asChild?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
};

export const Button = React.forwardRef(
  (
    {
      intent,
      size,
      fullWidth,
      disabled,
      rounded,
      asChild,
      className,
      ...restProps
    },
    forwardedRef,
  ) => {
    const As = asChild ? Slot : "button";

    return (
      <As
        {...restProps}
        ref={forwardedRef}
        className={button({
          intent,
          size,
          fullWidth,
          disabled,
          rounded,
          className,
        })}
      />
    );
  },
) as ForwardRefComponent<"button", ButtonProps>;
Button.displayName = "Button";

const button = tv(
  {
    base: "group relative inline-flex items-center transition-colors duration-300 ease-in focus-visible:outline-none",
    variants: {
      intent: {
        generic: "",
        primary: "bg-brand-500 hover:bg-brand-300 focus:bg-brand-300",
        secondary:
          "bg-brand-500/10 hover:bg-brand-500/25 focus:bg-brand-500/25 dark:bg-white",
        destructive: "bg-accent-200 hover:bg-accent-100",
      },
      size: {
        small: "text-400 leading-400",
        medium: "text-400 leading-400",
        large: "text-500 leading-300",
      },
      rounded: {
        normal: "",
        full: "",
      },
      _content: {
        text: "",
        textAndIcon: "",
        icon: "",
      },
      fullWidth: {
        true: "w-full",
      },
      disabled: {
        true: "pointer-events-none cursor-not-allowed opacity-50",
      },
    },
    compoundVariants: [
      {
        intent: ["primary", "secondary", "destructive"],
        _content: ["text", "textAndIcon"],
        className: "font-bold",
      },
      {
        intent: ["primary", "destructive"],
        _content: ["text", "textAndIcon"],
        className: "text-white",
      },
      {
        intent: ["secondary"],
        _content: ["text", "textAndIcon"],
        className: "text-brand-500",
      },
      {
        intent: ["primary", "secondary", "destructive"],
        size: ["large"],
        className: "h-12 px-5",
      },
      {
        intent: ["primary", "secondary", "destructive"],
        size: ["small", "medium"],
        className: "h-10 px-4",
      },
      {
        _content: ["text", "textAndIcon"],
        rounded: "normal",
        className: "rounded-pill",
      },
      {
        _content: ["icon"],
        rounded: "normal",
        className: "rounded-pill",
      },
      {
        _content: ["icon"],
        rounded: "full",
        className: "rounded-full",
      },
      {
        fullWidth: true,
        className: "justify-center text-center",
      },
      { disabled: true, intent: "generic", className: "border-gray-200" },
    ],

    defaultVariants: {
      intent: "generic",
      size: "small",
      rounded: "normal",
      _content: "text",
    },
  },
  {
    twMergeConfig: {
      classGroups: {
        "font-size": [
          {
            text: [
              "100",
              "200",
              "300",
              "400",
              "500",
              "600",
              "700",
              "800",
              "900",
            ],
          },
        ],
      },
    },

    responsiveVariants: true,
  },
);

// type RequiredVariantProps<
//   T extends (...args: any) => any,
//   // By default, all variants will be required
//   Keys extends keyof VariantProps<T> = keyof VariantProps<T>,
// > = Simplify<
//   // Create an intersection of all variants with those being marked as required
//   VariantProps<T> & {
//     // For each variant being marked as required, remove null and undefined
//     [Variant in Keys]: Exclude<VariantProps<T>[Variant], null | undefined>;
//   }
// >;

// type Simplify<ObjectType> = {
//   [KeyType in keyof ObjectType]: ObjectType[KeyType];
// } & {};
