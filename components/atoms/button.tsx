import { cva, VariantProps } from "class-variance-authority";
import { ButtonOrLink, Props as ButtonOrLinkProps } from "./button-or-link";

export interface Props extends ButtonOrLinkProps, VariantProps<typeof styles> {}

export function Button({ intent, fullWidth, children, ...props }: Props) {
  return (
    <ButtonOrLink className={styles({ intent, fullWidth })} {...props}>
      {children}
    </ButtonOrLink>
  );
}

const styles = cva(
  "inline-flex items-center cursor-fancy disabled:pointer-events-none",
  {
    variants: {
      intent: {
        primary: "justify-center bg-brand-500 font-bold",
        secondary: "",
        danger:
          "justify-center rounded-pill text-neutral-100 bg-accent-200 hover:bg-accent-100 active:bg-accent-100",
      },
      fullWidth: {
        true: "w-full",
      },
      weight: {
        bold: "font-bold",
        medium: "font-medium",
      },
      size: {
        sm: "py-4 text-400 leading-400",
        md: "",
        lg: "",
      },
    },
    compoundVariants: [
      {
        intent: "danger",
        size: "sm",
        fullWidth: true,
      },
    ],
    defaultVariants: {
      intent: "primary",
    },
  }
);
