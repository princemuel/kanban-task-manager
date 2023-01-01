import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

type Props = {
  isOpen?: boolean;
  children: ReactNode;
  closeModal: () => void;
};

type ReactModalEvent = React.SyntheticEvent<HTMLDialogElement>;

const BaseModal = ({ isOpen, closeModal, children }: Props) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="dialog" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="bg-black fixed inset-0 bg-opacity-25" />
        </Transition.Child>
      </Dialog>
      <section className="modal-content">{children}</section>
    </Transition>
  );
};

export { BaseModal };
