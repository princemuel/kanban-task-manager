'use client';

import { twcn } from '@/helpers';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useRef } from 'react';
import { tv } from 'tailwind-variants';

interface Props extends React.DialogHTMLAttributes<HTMLDialogElement> {
  name?: string;
  appear?: boolean;
  cancel?: boolean;
}

export const Dialog = ({
  name,
  appear = false,
  cancel = true,
  className,
  children,
  ...restProps
}: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const dialog = useRef<HTMLDialogElement>(null);
  const currentModal = name ? name === searchParams.get('modal') : appear;

  const onDismiss = useCallback(() => {
    dialog?.current?.close();
    cancel && router.back();
  }, [cancel, router]);

  const onClick: React.MouseEventHandler<HTMLDialogElement> = useCallback(
    (e) => {
      if (e.target === dialog.current) onDismiss?.();
    },
    [onDismiss]
  );

  const onKeyDown: React.KeyboardEventHandler<HTMLDialogElement> = useCallback(
    (e) => {
      if (e.key === 'Escape') onDismiss?.();
    },
    [onDismiss]
  );

  useEffect(() => {
    if (currentModal) dialog?.current?.showModal();
    else dialog?.current?.close();
  }, [currentModal]);

  if (!currentModal) return null;

  return (
    <dialog
      ref={dialog}
      aria-modal={currentModal}
      onClick={onClick}
      onKeyDown={onKeyDown}
      {...restProps}
      className={dialogVariants({ className })}
    >
      {children}
    </dialog>
  );
};

const dialogVariants = tv({
  base: ['overflow-y-auto rounded-lg bg-gray-800/50 backdrop:bg-gray-800/50'],
});
