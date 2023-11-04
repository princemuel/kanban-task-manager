'use client';

import { twcn } from '@/helpers';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as ToastPrimitives from '@radix-ui/react-toast';
import * as React from 'react';
import { VariantProps, tv } from 'tailwind-variants';

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
type ToastActionElement = React.ReactElement<typeof ToastAction>;

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...restProps }, forwardedRef) => (
  <ToastPrimitives.Viewport
    {...restProps}
    ref={forwardedRef}
    className={twcn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className
    )}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = tv({
  base: 'group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',

  variants: {
    variant: {
      default: 'bg-background text-foreground border',
      success:
        'success text-green-500-foreground group border-green-500 bg-green-500',
      destructive:
        'destructive border-destructive bg-destructive text-destructive-foreground group',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...restProps }, forwardedRef) => {
  return (
    <ToastPrimitives.Root
      ref={forwardedRef}
      className={twcn(toastVariants({ variant, className }))}
      {...restProps}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...restProps }, forwardedRef) => (
  <ToastPrimitives.Action
    {...restProps}
    ref={forwardedRef}
    className={twcn(
      'hover:bg-secondary focus:ring-ring group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors focus:outline-none focus:ring-1 disabled:pointer-events-none disabled:opacity-50',
      className
    )}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...restProps }, forwardedRef) => (
  <ToastPrimitives.Close
    {...restProps}
    ref={forwardedRef}
    className={twcn(
      'text-foreground/50 hover:text-foreground absolute right-1 top-1 rounded-md p-1 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-1 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      className
    )}
    toast-close=''
  >
    <Cross2Icon className='h-4 w-4' />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...restProps }, forwardedRef) => (
  <ToastPrimitives.Title
    {...restProps}
    ref={forwardedRef}
    className={twcn('text-sm font-semibold [&+div]:text-xs', className)}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...restProps }, forwardedRef) => (
  <ToastPrimitives.Description
    {...restProps}
    ref={forwardedRef}
    className={twcn('text-sm opacity-90', className)}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  type ToastActionElement,
  type ToastProps,
};
