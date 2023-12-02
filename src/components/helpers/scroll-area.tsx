'use client';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as React from 'react';
import { tv } from 'tailwind-variants';

const scrollArea = tv({
  slots: {
    root: ['relative overflow-hidden'],
    viewport: ['h-full w-full rounded-[inherit]'],
    scrollbar: ['flex touch-none select-none p-0.5 transition-colors ease-out'],
    scrollthumb: ['bg-border relative flex-1 rounded-full'],
  },
  variants: {
    orientation: {
      vertical: {
        scrollbar: 'h-full w-2.5 border-l border-l-transparent',
      },
      horizontal: {
        scrollbar: 'h-2.5 flex-col border-t border-t-transparent',
      },
    },
  },
});

const { root, viewport, scrollbar, scrollthumb } = scrollArea();

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    orientation?: 'vertical' | 'horizontal' | undefined;
  }
>(({ className, orientation, children, ...props }, forwardedRef) => (
  <ScrollAreaPrimitive.Root
    ref={forwardedRef}
    className={root({ className })}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className={viewport()}>
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar orientation={orientation} />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, forwardedRef) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={forwardedRef}
    orientation={orientation}
    className={scrollbar({ orientation, className })}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className={scrollthumb()} />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
