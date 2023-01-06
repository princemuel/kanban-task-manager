import { Dialog } from "@headlessui/react";
import { icons } from "common";
import { FormLabel, Text } from "components/atoms";
import { useModalDispatch, useModalState } from "context";
import { useRef, useState } from "react";
import { BaseModal } from "./base-modal";

type Props = {};

export const ViewTask = (props: Props) => {
  const modalState = useModalState();
  const modalDispatch = useModalDispatch();
  let inputRef = useRef<HTMLInputElement>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [optionValue, setOptionValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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
        Research pricing points of various competitors and trial different
        business models
      </Dialog.Title>

      <Text className='text-400 font-medium leading-400 text-brand-400'>
        We know what we&#39;re planning to build for version one. Now we need to
        finalise the first pricing model we&#39;ll use. Keep iterating the
        subtasks until we have a coherent proposition.
      </Text>

      <fieldset className='> * + * space-y-4'>
        <FormLabel
          variant='legend'
          className='text-300 leading-200 text-brand-400'
        >
          Subtasks (<output>2</output> of <output>3</output>)
        </FormLabel>

        <div className='grid gap-4'>
          <div className='grid grid-cols-[auto,1fr] items-center gap-6 rounded-300 bg-brand-100 py-5 px-6 dark:bg-brand-800'>
            <button
              type='button'
              className='group inline-grid aspect-square w-[1.6rem] place-items-center rounded-[0.2rem] border border-brand-400/25 bg-neutral-100 aria-pressed:bg-brand-500 dark:bg-brand-700 dark:aria-pressed:bg-brand-500'
              onClick={() => {
                setIsChecked((prev) => !prev);
              }}
              aria-pressed={isChecked}
            >
              <icons.board.check className='hidden group-aria-pressed:block' />
            </button>

            <Text className='text-300 font-bold leading-200 text-brand-900/50 line-through dark:text-neutral-100/50'>
              Research competitor pricing and business models
            </Text>
          </div>

          <div className='grid grid-cols-[auto,1fr] items-center gap-6 rounded-300 bg-brand-100 py-5 px-6 dark:bg-brand-800'>
            <button
              type='button'
              className='group inline-grid aspect-square w-[1.6rem] place-items-center rounded-[0.2rem] border border-brand-400/25 bg-neutral-100 aria-pressed:bg-brand-500 dark:bg-brand-700 dark:aria-pressed:bg-brand-500'
              onClick={() => {
                setIsChecked((prev) => !prev);
              }}
              aria-pressed={isChecked}
            >
              <icons.board.check className='hidden group-aria-pressed:block' />
            </button>

            <Text className='text-300 font-bold leading-200 text-brand-900/50 line-through dark:text-neutral-100/50'>
              Research competitor pricing and business models
            </Text>
          </div>

          <div className='grid grid-cols-[auto,1fr] items-center gap-6 rounded-300 bg-brand-100 py-5 px-6 dark:bg-brand-800'>
            <button
              type='button'
              className='group inline-grid aspect-square w-[1.6rem] place-items-center rounded-[0.2rem] border border-brand-400/25 bg-neutral-100 aria-pressed:bg-brand-500 dark:bg-brand-700 dark:aria-pressed:bg-brand-500'
              onClick={() => {
                setIsChecked((prev) => !prev);
              }}
              aria-pressed={isChecked}
            >
              <icons.board.check className='hidden group-aria-pressed:block' />
            </button>

            <Text className='text-300 font-bold leading-200 text-brand-900 dark:text-neutral-100'>
              Talk to potential customers about our proposed solution and ask
              for fair price expectancy
            </Text>
          </div>
        </div>
      </fieldset>

      <fieldset className='> * + * space-y-4'>
        <FormLabel variant='legend'>Status</FormLabel>

        <div className='relative w-full'>
          <button
            type='button'
            className='flex w-full items-center justify-between rounded-300 border border-brand-400/25 bg-inherit py-4 px-6 text-400 font-medium leading-400'
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <span>{optionValue || "Current Status"}</span>
            <icons.chevron.down />
          </button>

          <ul
            className='absolute left-0 mt-4 w-full scale-0 rounded-100 bg-neutral-100 p-6 transition-all duration-500 data-[open=true]:scale-100 dark:bg-brand-800'
            data-open={isDropdownOpen}
          >
            <li
              className='cursor-pointer text-400 font-medium leading-400 text-brand-400'
              onClick={handleStatusChange}
            >
              Todo
            </li>
            <li
              className='cursor-pointer text-400 font-medium leading-400 text-brand-400'
              onClick={handleStatusChange}
            >
              Doing
            </li>
            <li
              className='cursor-pointer text-400  font-medium leading-400 text-brand-400'
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
