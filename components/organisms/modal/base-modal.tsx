import { ReactNode, useCallback, useEffect, useMemo, useRef } from 'react';

type Props = {
  open?: boolean;
  isLocked?: boolean;
  children: ReactNode;
  handleCloseModal: () => void;
};

type ReactModalEvent = React.SyntheticEvent<HTMLDialogElement>;

const BaseModal = ({ open, handleCloseModal, isLocked, children }: Props) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  const classes = useMemo(() => {
    const classNames = ['modal'];
    if (!open) classNames.push('modal--closing');

    return classNames.join(' ').trim();
  }, [open]);

  useEffect(() => {
    const { current: modal } = ref;
    if (open) {
      console.log('%c Useeffect Ran', 'color: green;');
      modal?.showModal();
    }
    return () => {
      modal?.close();
      console.log('%c Useeffect Cleanup', 'color: red;');
    };
  }, [open]);

  // Event Listener: Close Modal when The Escape Key is pressed
  const handleCancel = useCallback(
    (e: ReactModalEvent) => {
      e.preventDefault();
      if (!isLocked) handleCloseModal();
    },
    [handleCloseModal, isLocked]
  );

  // Event Listener: Close Modal when backdrop is clicked
  const handleBackdropClick = useCallback(
    (e: ReactModalEvent) => {
      const { current: modal } = ref;
      if (e.target === modal && !isLocked) handleCloseModal();
    },
    [handleCloseModal, isLocked]
  );

  // Event Listener: Close the modal when the animation ends
  const handleAnimationEnd = useCallback(() => {
    const { current: modal } = ref;
    if (!open) modal?.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={classes}
      onClose={handleCloseModal}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      onAnimationEnd={handleAnimationEnd}
    >
      <section className='modal-content'>{children}</section>
    </dialog>
  );
};

export { BaseModal };
