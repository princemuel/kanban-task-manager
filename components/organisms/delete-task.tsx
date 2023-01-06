import { Dialog } from "@headlessui/react";
import { Text } from "components/atoms";
import { useModalDispatch, useModalState } from "context";
import { useRef } from "react";
import { BaseModal } from "./base-modal";

type Props = {};

export const DeleteTask = (props: Props) => {
  const modalState = useModalState();
  const modalDispatch = useModalDispatch();
  let deleteButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <BaseModal
      focusRef={deleteButtonRef}
      isOpen={modalState.open}
      closeModal={() => modalDispatch({ type: "CLOSE_MODAL" })}
    >
      <Dialog.Title as='h2' className={"font-bold text-accent-200"}>
        Delete this task?
      </Dialog.Title>

      <Text className='text-400 font-medium leading-400 text-brand-400'>
        Are you sure you want to delete the ‘Build settings UI’ task and its
        subtasks? This action cannot be reversed.
      </Text>

      <div className='flex flex-col items-center gap-8 md:flex-row'>
        <button
          type='button'
          className='inline-grid w-full place-items-center rounded-pill bg-accent-200 py-4 text-400 font-bold leading-400 text-neutral-100 hover:bg-accent-100 active:bg-accent-100'
          ref={deleteButtonRef}
        >
          Delete
        </button>

        <button
          type='button'
          className='inline-grid w-full place-items-center rounded-pill bg-brand-500/10 py-4 text-400 font-bold leading-400 text-brand-500 hover:bg-brand-500/25 active:bg-brand-500/25 dark:bg-neutral-100'
        >
          Cancel
        </button>
      </div>
    </BaseModal>
  );
};
