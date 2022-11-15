import { ModalType, useModalStore } from 'context';
import { ReactNode, useCallback, useEffect, useMemo, useRef } from 'react';

type Props = {
  open?: boolean;
  isLocked?: boolean;
  name: ModalType;
  children: ReactNode;
  handleCloseModal: () => void;
};

type ReactModalEvent = React.SyntheticEvent<HTMLDialogElement>;

const BaseModal = ({
  name,
  handleCloseModal,
  isLocked,
  children,
  ...rest
}: Props) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  const [modalName] = useModalStore((state) => state['currentModal']);
  const [isActive] = useModalStore((state) => state['isModalOpen']);

  const isCurrentModal = modalName === name && isActive;

  const classes = useMemo(() => {
    const classNames = ['modal'];
    if (!isCurrentModal) classNames.push('modal--closing');

    return classNames.join(' ').trim();
  }, [isCurrentModal]);

  useEffect(() => {
    const { current: modal } = ref;
    if (isCurrentModal) {
      console.log('%c Useeffect Ran', 'color: green;');
      modal?.showModal();
    }
    return () => {
      modal?.close();
      console.log('%c Useeffect Cleanup', 'color: red;');
    };
  }, [isCurrentModal]);

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
    if (!isCurrentModal) modal?.close();
  }, [isCurrentModal]);

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
