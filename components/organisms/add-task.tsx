import { Dialog } from "@headlessui/react";
import { icons } from "common";
import { SubtaskList } from "components/molecules";
import { useModalDispatch, useModalState } from "context";
import { useRef, useState } from "react";
import { BaseModal } from "./base-modal";

type Props = {};

export const AddTask = (props: Props) => {
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
        Add New Task
      </Dialog.Title>

      <div className='> * + * space-y-4'>
        <label
          className='block text-300 font-bold leading-200 text-primary-400 dark:text-neutral-100'
          htmlFor='title'
        >
          Title
        </label>
        <input
          type='text'
          ref={inputRef}
          className='w-full rounded-300 border border-primary-400/25 bg-inherit py-4 px-6 text-400 font-medium leading-400 placeholder:text-primary-900/25 focus:outline-none dark:placeholder:text-neutral-100/25'
          id='title'
          placeholder='e.g. Take coffee break'
        />
      </div>

      <div className='> * + * space-y-4'>
        <label
          className='block text-300 font-bold leading-200 text-primary-400 dark:text-neutral-100'
          htmlFor='description'
        >
          Description
        </label>
        <textarea
          name='message'
          className='min-h-[10rem] w-full rounded-300 border border-primary-400/25 bg-inherit py-4 px-6 text-400 font-medium leading-400 placeholder:text-primary-900/25 focus:outline-none dark:placeholder:text-neutral-100/25'
          id='description'
          placeholder='e.g. It’s always good to take a break. This 15 minute break will
recharge the batteries a little.'
        ></textarea>
      </div>

      <fieldset className='> * + * space-y-4'>
        <legend className='block text-300 font-bold leading-200 text-primary-400 dark:text-neutral-100'>
          Subtasks
        </legend>
        <SubtaskList />
      </fieldset>

      <fieldset className='> * + * space-y-4'>
        <legend className='block text-300 font-bold leading-200 text-primary-400 dark:text-neutral-100'>
          Status
        </legend>

        <div className='relative w-full'>
          <button
            type='button'
            className='flex w-full items-center justify-between rounded-300 border border-primary-400/25 bg-inherit py-4 px-6 text-400 font-medium leading-400'
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <span>{optionValue || "Select a Status"}</span>
            <icons.chevron.down />
          </button>

          <ul
            className='absolute left-0 mt-4 w-full scale-0 rounded-100 bg-neutral-100 p-6 transition-all duration-500 data-[open=true]:scale-100 dark:bg-primary-800'
            data-open={isDropdownOpen}
          >
            <li
              className='cursor-pointer text-400 font-medium leading-400 text-primary-400'
              onClick={handleStatusChange}
            >
              Todo
            </li>
            <li
              className='cursor-pointer text-400 font-medium leading-400 text-primary-400'
              onClick={handleStatusChange}
            >
              Doing
            </li>
            <li
              className='cursor-pointer text-400  font-medium leading-400 text-primary-400'
              onClick={handleStatusChange}
            >
              Done
            </li>
          </ul>
        </div>
      </fieldset>

      <button
        type='button'
        className='inline-grid w-full place-items-center rounded-pill bg-primary-500 py-4 text-400 font-bold leading-400 text-neutral-100'
      >
        Create Task
      </button>
    </BaseModal>
  );
};
