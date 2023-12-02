"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";
import { LuCheck } from "react-icons/lu";
import { tv } from "tailwind-variants";

const checkbox = tv({
  slots: {
    base: [
      "border-1 peer h-4 w-4 shrink-0 rounded-sm border-brand-400",
      "bg-white dark:bg-brand-700",
      "data-[state=checked]:!bg-brand-500 data-[state=checked]:!text-white",
    ],
    indicator: ["flex items-center justify-center text-current"],
    icon: ["h-3 w-3"],
  },
});

const { base, indicator, icon } = checkbox();

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...restProps }, forwardedRef) => (
  <CheckboxPrimitive.Root
    ref={forwardedRef}
    className={base({ className })}
    {...restProps}
  >
    <CheckboxPrimitive.Indicator className={indicator()}>
      <LuCheck size={16} strokeWidth={3} className={icon()} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
