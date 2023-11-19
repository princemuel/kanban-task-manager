'use client';

import { Slot } from '@radix-ui/react-slot';
import type { Route } from 'next';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useRef } from 'react';
import { tv } from 'tailwind-variants';

const dialogVariants = tv({
  slots: {
    base: [
      // 'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
      // 'max-h-[60vh] w-full max-w-md rounded-md p-5 md:p-8',
      'mx-auto max-h-[60vh] w-[28rem] max-w-[90vw] rounded-md p-5 md:p-8',
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
      'fixed inset-0 grid place-items-center overflow-y-auto',
      'min-h-screen w-full max-w-full',
      'bg-black/50 backdrop-blur-sm backdrop:bg-gray-800/50',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-100',
    ],
    header: [''],
    footer: [''],
  },
});

const { base, overlay, header, footer } = dialogVariants();
type DialogPropsWithNavigate<T extends string> =
  React.DialogHTMLAttributes<HTMLDialogElement> &
    DefaultProps & { navigate: true; to: Route<T> | URL };
type DialogPropsWithoutNavigate =
  React.DialogHTMLAttributes<HTMLDialogElement> &
    DefaultProps & { navigate?: never };

type DefaultProps = { name?: string; appear?: boolean };
/**
 * Requirements:
 * - should close on escape key
 * - should close on backdrop click
 * - should close on cancel/close button
 * - should close on form submission
 */
type Props<T extends string> =
  | DialogPropsWithNavigate<T>
  | DialogPropsWithoutNavigate;

const Dialog = <T extends string>(props: Props<T>) => {
  const { name, appear, navigate, className, children, ...rest } = props;

  const href = navigate ? props.to : '/';

  const router = useRouter();
  const searchParams = useSearchParams();

  const dialog = useRef<HTMLDialogElement>(null);
  const modalName = searchParams.get('modal');
  const currentModal = name ? name === modalName : appear;

  const onDismiss = useCallback(() => {
    dialog?.current?.close();
    //@ts-expect-error
    if (navigate) router.push(href);
  }, [navigate, href, router]);

  useEffect(() => {
    currentModal ? dialog?.current?.showModal() : dialog?.current?.close();
  }, [currentModal]);

  const onClick = useCallback(
    (evt: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
      if (evt.target === dialog.current) onDismiss?.();
    },
    [onDismiss]
  );

  const onKeyDown = useCallback(
    (evt: React.KeyboardEvent<HTMLDialogElement>) => {
      if (evt.key === 'Escape') onDismiss?.();
    },
    [onDismiss]
  );

  if (!currentModal) return null;

  return (
    <DialogProvider>
      <dialog
        ref={dialog}
        aria-modal={currentModal}
        onClick={onClick}
        onKeyDown={onKeyDown}
        {...rest}
        className={overlay({ className })}
      >
        <DialogContent>{children}</DialogContent>
      </dialog>
    </DialogProvider>
  );
};

type DialogItemContextValue = {
  id: string;
};

const DialogItemContext = React.createContext<DialogItemContextValue>(
  {} as DialogItemContextValue
);

function useDialog() {
  const itemContext = React.useContext(DialogItemContext);

  const { id } = itemContext;

  return {
    id,
    dialogTitleId: `${id}-dialog-title`,
    dialogDescriptionId: `${id}-dialog-description`,
    dialogCloseId: `${id}-dialog-close`,
  };
}

const DialogProvider = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...restProps }, forwardedRef) => {
  const id = React.useId();

  return (
    <DialogItemContext.Provider value={{ id }}>
      <Slot
        id={id}
        aria-labelledby={`${id}-dialog-title`}
        {...restProps}
        ref={forwardedRef}
      />
    </DialogItemContext.Provider>
  );
});
DialogProvider.displayName = 'DialogProvider';

const DialogContent = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ className, ...restProps }, forwardedRef) => (
  <Slot {...restProps} className={base({ className })} ref={forwardedRef} />
));
DialogContent.displayName = 'DialogContent';

const DialogHeader = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ className, ...restProps }, forwardedRef) => {
  return (
    <Slot {...restProps} className={header({ className })} ref={forwardedRef} />
  );
});
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ className, ...restProps }, forwardedRef) => (
  <Slot {...restProps} className={footer({ className })} ref={forwardedRef} />
));
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...restProps }, forwardedRef) => {
  const { dialogTitleId } = useDialog();

  return <Slot id={dialogTitleId} {...restProps} ref={forwardedRef} />;
});
DialogTitle.displayName = 'DialogTitle';

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...restProps }, forwardedRef) => {
  const { dialogDescriptionId } = useDialog();

  return <Slot id={dialogDescriptionId} {...restProps} ref={forwardedRef} />;
});
DialogDescription.displayName = 'DialogDescription';

const DialogClose = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...restProps }, forwardedRef) => {
  const { dialogCloseId } = useDialog();

  return <Slot id={dialogCloseId} {...restProps} ref={forwardedRef} />;
});
DialogClose.displayName = 'DialogClose';

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogProvider,
  DialogTitle,
  useDialog,
};
