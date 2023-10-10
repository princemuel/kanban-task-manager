import { cn } from '@/helpers';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'cva';
import * as React from 'react';

const buttonVariants = cva(
  [
    'relative inline-flex items-center',
    'transition-colors duration-300',
    'focus-visible:outline-none focus-visible:ring-1',
  ],
  {
    variants: {
      variant: {
        default: '',
        primary: 'bg-brand-500 hover:bg-brand-300',
        secondary:
          'bg-brand-500/10 text-brand-500 hover:bg-white dark:bg-brand-500/25 dark:hover:bg-white',
        destructive: 'bg-red-600 text-white',
        monochrome: 'border border-gray-400 bg-white text-black',
      },
      modifier: {
        outline:
          'border border-current bg-transparent shadow-[0_0_0_1px_currentColor]',
        plain:
          'border-none bg-transparent px-2 py-1 text-sm text-white shadow-none',
      },
      size: {
        slim: 'text-300 leading-200',
        small: 'text-400 leading-400',
        medium: 'text-500 leading-300',
        large: 'text-600 leading-400',
        xl: 'text-700 leading-500',
      },
      weight: {
        bold: 'font-bold',
        medium: 'font-medium',
        regular: 'font-normal',
      },
      rounded: {
        default: 'rounded-lg',
        pill: 'rounded-pill',
        full: 'rounded-full',
      },
      fullWidth: {
        true: 'w-full',
      },
      uppercase: {
        true: 'uppercase',
      },
      disabled: {
        true: 'pointer-events-none cursor-not-allowed opacity-50',
      },
    },
    compoundVariants: [
      {
        modifier: 'outline',
        variant: 'monochrome',
        className: 'text-neutral-100 hover:text-neutral-300',
      },
      {
        modifier: ['outline', 'plain'],
        variant: 'primary',
        className: 'text-blue-500 hover:bg-transparent hover:text-blue-600',
      },
      {
        modifier: ['outline', 'plain'],
        variant: 'secondary',
        className: 'text-green-500 hover:bg-transparent hover:text-green-600',
      },
      {
        modifier: ['outline', 'plain'],
        variant: 'destructive',
        className: 'text-red-500 hover:bg-transparent hover:text-red-600',
      },
      {
        modifier: ['outline'] || undefined,
        size: 'slim',
        className: 'px-3 py-1',
      },
      {
        modifier: ['outline'] || undefined,
        size: 'medium',
        className: 'px-4 py-2',
      },
      {
        modifier: ['outline'] || undefined,
        size: 'large',
        className: 'px-6 py-3',
      },
      { disabled: true, variant: 'default', className: 'border-gray-200' },
    ],

    defaultVariants: {
      variant: 'default',
      size: 'medium',
      weight: 'medium',
      rounded: 'default',
    },
  }
);

interface ButtonVariantProps extends VariantProps<typeof buttonVariants> {}

export const button = (variants: ButtonVariantProps, className = '') =>
  cn(buttonVariants(variants), className);

interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    ButtonVariantProps {
  asChild?: boolean;
  disabled?: boolean;
}

/**
 * This component will render either a button or the child,
 * depending on the props that are passed to it. This make it ideal for
 *  as the button props are passed to the nested component.
 */
export const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      variant,
      className,
      modifier,
      size,
      fullWidth,
      disabled,
      weight,
      rounded,
      uppercase,
      asChild,
      ...props
    },
    forwardedRef
  ) => {
    const As = asChild ? Slot : 'button';

    return (
      <As
        className={button(
          {
            variant,
            modifier,
            size,
            fullWidth,
            disabled,
            weight,
            rounded,
            uppercase,
          },
          className
        )}
        {...props}
        disabled={disabled}
        ref={forwardedRef}
      />
    );
  }
);

Button.displayName = 'Button';

// // only these two exports below are needed
// export { Button, button }; ///////////////
// // only these two exports above are needed
