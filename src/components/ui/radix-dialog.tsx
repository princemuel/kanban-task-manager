'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';
import { tv } from 'tailwind-variants';

const dialog = tv({
  slots: {
    base: [
      'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
      'max-h-[60vh] w-full max-w-md rounded-md p-5 md:p-8',
      'bg-white dark:bg-brand-700',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-100',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-100',
      'data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2',
      'data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-top-1/2',
      'overflow-y-auto focus:outline-none',
    ],
    content: [],
    overlay: [
      // 'fixed inset-0 grid place-items-center overflow-y-auto',
      'fixed inset-0 ',
      'bg-black/50 backdrop-blur-sm',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-100',
    ],
    header: [''],
    footer: [''],
  },
});

const { base, overlay, header, footer } = dialog();

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, ...rest }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className={overlay()}>
      <DialogPrimitive.Content
        {...rest}
        className={base({ className })}
        ref={forwardedRef}
      />
    </DialogPrimitive.Overlay>
  </DialogPrimitive.Portal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = React.forwardRef(
  ({ className, ...rest }, forwardedRef) => {
    return (
      <header {...rest} className={header({ className })} ref={forwardedRef} />
    );
  }
) as ForwardRefComponent<'header', {}>;
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = React.forwardRef(
  ({ className, ...rest }, forwardedRef) => {
    return (
      <footer {...rest} className={footer({ className })} ref={forwardedRef} />
    );
  }
) as ForwardRefComponent<'footer', {}>;
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ ...rest }, forwardedRef) => (
  <DialogPrimitive.Title ref={forwardedRef} {...rest} />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ ...rest }, forwardedRef) => (
  <DialogPrimitive.Description ref={forwardedRef} {...rest} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
};
