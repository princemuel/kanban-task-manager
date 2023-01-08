import { Dialog } from "@headlessui/react";
import { icons } from "common";
import { FormInput, FormLabel, TextField } from "components/atoms";
import { SubtaskList } from "components/molecules";
import { useModalDispatch, useModalState } from "context";
import { useRef, useState } from "react";
import { BaseModal } from "./base-modal";

type Props = {};

export const EditTask = (props: Props) => {
  const modalState = useModalState();
  const modalDispatch = useModalDispatch();
  let inputRef = useRef<HTMLInputElement>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [optionValue, setOptionValue] = useState("");

  function handleStatusChange(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    setOptionValue(e.currentTarget.textContent!);
    setIsDropdownOpen(false);
  }

  return (
    <BaseModal
      focusRef={inputRef}
      isOpen={modalState.open}
      closeModal={() => modalDispatch({ type: "CLOSE_MODAL" })}
    >
      <Dialog.Title as='h2' className={"font-bold"}>
        Edit Task
      </Dialog.Title>

      <div className='> * + * space-y-4'>
        <FormLabel htmlFor='title'>Title</FormLabel>
        <FormInput
          type='text'
          ref={inputRef}
          id='title'
          placeholder='e.g. Take coffee break'
        />
      </div>

      <div className='> * + * space-y-4'>
        <FormLabel htmlFor='description'>Description</FormLabel>
        <TextField
          name='message'
          className='min-h-[10rem]'
          id='description'
          placeholder='e.g. It’s always good to take a break. This 15 minute break will
recharge the batteries a little.'
        ></TextField>
      </div>

      <fieldset className='> * + * space-y-4'>
        <FormLabel variant='legend'>Subtasks</FormLabel>
        <SubtaskList />
      </fieldset>

      <fieldset className='> * + * space-y-4'>
        <FormLabel variant='legend'>Status</FormLabel>

        <div className='relative w-full'>
          <button
            type='button'
            className='flex w-full items-center justify-between rounded-300 border border-brand-400/25 bg-inherit py-4 px-6 text-400 font-medium leading-400'
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <span>{optionValue || "Select a Status"}</span>
            <icons.chevron.down />
          </button>

          <ul
            className='absolute left-0 mt-4 w-full scale-0 rounded-100 bg-neutral-100 p-6 transition-all duration-500 data-[open=true]:scale-100 dark:bg-brand-800'
            data-open={isDropdownOpen}
          >
            <li
              className='cursor-fancy text-400 font-medium leading-400 text-brand-400'
              onClick={handleStatusChange}
            >
              Todo
            </li>
            <li
              className='cursor-fancy text-400 font-medium leading-400 text-brand-400'
              onClick={handleStatusChange}
            >
              Doing
            </li>
            <li
              className='cursor-fancy text-400  font-medium leading-400 text-brand-400'
              onClick={handleStatusChange}
            >
              Done
            </li>
          </ul>
        </div>
      </fieldset>

      <button
        type='button'
        className='inline-grid w-full place-items-center rounded-pill bg-brand-500 py-4 text-400 font-bold leading-400 text-neutral-100'
      >
        Save Changes
      </button>
    </BaseModal>
  );
};
