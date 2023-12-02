import { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

interface TextProps extends VariantProps<typeof text> {}

export const Text = forwardRef(
  (
    { as, variant, modifier, size, className, children, ...restProps },
    forwardedRef,
  ) => {
    const As = as || "p";

    return (
      <As
        {...restProps}
        ref={forwardedRef}
        className={text({
          variant,
          modifier,
          size,
          className,
        })}
      >
        {children}
      </As>
    );
  },
) as ForwardRefComponent<"p", TextProps>;
Text.displayName = "Text";

//////////////////////////////////////////
//////////////////////////////////////////
///     TEXT VARIANTS
//////////////////////////////////////////
//////////////////////////////////////////

export const text = tv(
  {
    base: "aria-disabled:text-brand-900/50 aria-disabled:line-through aria-disabled:decoration-current aria-disabled:dark:text-white/50",
    variants: {
      variant: {
        default: "text-brand-900 dark:text-white",
        primary: "text-brand-400",
        secondary: "text-brand-300",
        accent: "text-brand-400 dark:text-white",
        brand: "text-brand-500",
        destructive: "text-accent-200",
      },
      modifier: {
        inverted: "text-white",
        "dark/50": "text-black/50",
      },
      size: {
        xl: "text-700 leading-500",
        lg: "text-600 leading-400",
        md: "text-500 leading-300",
        base: "text-400 leading-400",
        sm: "text-300 leading-200",
        xs: "",
      },
      ////////////
      uppercase: {
        true: "uppercase",
      },
    },
    compoundVariants: [
      { size: ["sm", "md", "lg", "xl"], className: "font-bold" },
      { size: ["base"], className: "font-medium" },
    ],
    defaultVariants: {
      variant: "default",
      size: "sm",
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
  },
);
