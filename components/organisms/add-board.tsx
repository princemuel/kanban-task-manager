import { Dialog } from "@headlessui/react";
import { icons } from "common";
import { FormInput, FormLabel } from "components/atoms";
import { useModalDispatch, useModalState } from "context";
import { useRef } from "react";
import { BaseModal } from "./base-modal";

type Props = {};

export const AddBoard = (props: Props) => {
  const modalState = useModalState();
  const modalDispatch = useModalDispatch();
  let inputRef = useRef<HTMLInputElement>(null);

  return (
    <BaseModal
      focusRef={inputRef}
      isOpen={modalState.open}
      closeModal={() => modalDispatch({ type: "CLOSE_MODAL" })}
    >
      <Dialog.Title as='h2' className={"font-bold"}>
        Add New Board
      </Dialog.Title>

      <div className='> * + * space-y-4'>
        <FormLabel htmlFor='name'>Board Name</FormLabel>
        <FormInput
          type='text'
          ref={inputRef}
          id='name'
          placeholder='e.g. Web Design'
        />
      </div>

      <fieldset className='> * + * space-y-4'>
        <FormLabel variant='legend'>Board Columns</FormLabel>

        <div className='grid grid-cols-[1fr,auto] items-center gap-8'>
          <FormInput type='text' name={`column`} placeholder='Todo' />
          <button
            type='button'
            className='inline-flex cursor-fancy items-center justify-end text-brand-400 hover:text-accent-100 active:text-accent-100'
          >
            <icons.board.cross className='fill-current ' />
            <span className='sr-only'>Remove</span>
          </button>
        </div>
        <div className='grid grid-cols-[1fr,auto] items-center gap-8'>
          <FormInput type='text' name={`column`} placeholder='Doing' />
          <button
            type='button'
            className='inline-flex cursor-fancy items-center justify-end text-brand-400 hover:text-accent-100 active:text-accent-100'
          >
            <icons.board.cross className='fill-current ' />
            <span className='sr-only'>Remove</span>
          </button>
        </div>

        <button
          type='button'
          className='inline-grid w-full cursor-fancy place-items-center rounded-pill bg-brand-500/10 py-4 text-400 font-bold leading-400 text-brand-500 dark:bg-neutral-100'
        >
          + Add New Column
        </button>
      </fieldset>

      <button
        type='button'
        className='inline-grid w-full cursor-fancy place-items-center rounded-pill bg-brand-500 py-4 text-400 font-bold leading-400 text-neutral-100'
      >
        Create New Board
      </button>
    </BaseModal>
  );
};
