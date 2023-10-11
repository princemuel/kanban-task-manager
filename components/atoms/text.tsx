import { cn } from '@/helpers';
import type { VariantProps } from 'cva';
import { cva } from 'cva';

const textVariants = cva('', {
  defaultVariants: {
    intent: 'primary',
    size: 's',
  },
  variants: {
    intent: {
      primary: 'text-brand-900 dark:text-white',
      secondary: 'text-brand-400 dark:text-brand-400',
      outline: '',
    },
    size: {
      s: '',
      xs: 'text-300 leading-200',
      sm: 'text-400 leading-400',
      md: 'text-500 leading-300',
      lg: 'text-600 leading-400',
      xl: 'text-700 leading-500',
    },

    weight: {
      bold: 'font-bold',
      medium: 'font-medium',
      regular: 'font-normal',
    },
  },
  compoundVariants: [
    {
      intent: 'secondary',
      size: 'xs',
      weight: 'bold',
      class: 'tracking-100',
    },
  ],
});

interface TextVariants extends VariantProps<typeof textVariants> {}
const text = (variants: TextVariants, className = '') =>
  cn(textVariants(variants), className);

type Props<E extends React.ElementType = 'p'> = ElementProps<E> & TextVariants;

const Text = <E extends React.ElementType = 'p'>({
  as,
  intent,
  weight,
  size,
  className,
  children,
  ...rest
}: Props<E>) => {
  const Rendered = as || 'p';

  return (
    <Rendered className={text({ intent, weight, size }, className)} {...rest}>
      {children}
    </Rendered>
  );
};

export { Text };
