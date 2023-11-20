import * as LabelPrimitive from '@radix-ui/react-label';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const label = tv({
  base: 'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
});

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof label>
>(({ className, ...restProps }, forwardedRef) => (
  <LabelPrimitive.Root
    {...restProps}
    className={label({ className })}
    ref={forwardedRef}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;
