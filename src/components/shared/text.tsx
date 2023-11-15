import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

interface TextProps extends VariantProps<typeof text> {}

export const Text = forwardRef(
  (
    {
      as,
      variant,
      modifier,
      disabled,
      size,
      className,
      children,
      ...restProps
    },
    forwardedRef
  ) => {
    const As = as || 'p';

    return (
      <As
        {...restProps}
        ref={forwardedRef}
        className={text({
          variant,
          modifier,
          size,
          disabled,
          className,
        })}
      >
        {children}
      </As>
    );
  }
) as ForwardRefComponent<'p', TextProps>;
Text.displayName = 'Text';

//////////////////////////////////////////
//////////////////////////////////////////
///     TEXT VARIANTS
//////////////////////////////////////////
//////////////////////////////////////////

const text = tv(
  {
    base: '',
    variants: {
      variant: {
        default: 'text-brand-900 dark:text-white',
        primary: 'text-brand-400',
        secondary: 'text-brand-300',
        accent: 'text-[#858BB2]',
        brand: 'text-brand-500',
      },
      modifier: {
        inverted: 'text-white',
        'dark/50': 'text-black/50',
      },
      size: {
        xl: 'text-700 leading-500',
        lg: 'text-600 leading-400',
        md: 'text-500 leading-300',
        base: 'text-400 leading-400',
        sm: 'text-300 leading-200',
        xs: '',
      },
      ////////////
      uppercase: {
        true: 'uppercase',
      },
      disabled: {
        true: 'line-through',
      },
    },
    compoundVariants: [
      { size: ['base', 'md', 'lg', 'xl'], className: 'font-bold' },
      { size: ['sm'], className: 'font-medium' },
      {
        variant: ['primary', 'secondary', 'accent'],
        className: 'dark:text-brand-100',
      },
      {
        variant: ['default', 'primary', 'secondary', 'accent'],
        disabled: true,
        className: '!text-brand-500/20',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  },
  {
    twMergeConfig: {
      classGroups: {
        'font-size': [
          {
            text: [
              '100',
              '200',
              '300',
              '400',
              '500',
              '600',
              '700',
              '800',
              '900',
            ],
          },
        ],
      },
    },

    responsiveVariants: true,
  }
);
