import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode, RefObject } from "react";

type Props = {
  isOpen: boolean;
  children: ReactNode;
  closeModal: () => void;
  focusRef: RefObject<HTMLElement>;
};

const BaseModal = ({ isOpen, closeModal, children, focusRef }: Props) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        initialFocus={focusRef}
        className='relative z-50'
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div
            className='fixed inset-0 bg-neutral-900/50 '
            aria-hidden='true'
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 flex items-center justify-center p-6'>
            <Dialog.Panel
              as='form'
              className='mx-auto w-full max-w-3xl rounded-200 bg-neutral-100 dark:bg-brand-700'
            >
              <section className='flex w-full flex-col gap-10 p-[3.2rem]'>
                {children}
              </section>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export { BaseModal };
