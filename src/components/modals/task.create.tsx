'use client';

import { useApiState, useZodForm } from '@/hooks';
import { StringContraint } from '@/lib/schema/fields';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDown, X } from 'lucide-react';
import { Fragment, useCallback } from 'react';
import { useFieldArray } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { z } from 'zod';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  TextArea,
  TextField,
} from '../form';
import { SrOnly } from '../helpers';
import { Button, Text, text } from '../shared';
import { BaseModal, ModalFooter, ModalHeader, ModalTitle } from './modal';

type Props = {};

const schema = z.object({
  title: StringContraint,
  description: StringContraint,
  status: StringContraint.toLowerCase(),
  subtasks: z
    .array(
      z.object({
        id: z.string(),
        title: StringContraint,
        done: z.boolean().default(false),
      })
    )
    .nonempty(),
});

export default function CreateTaskModal() {
  const form = useZodForm({
    schema: schema,
    defaultValues: { title: '', description: '', status: '', subtasks: [] },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'subtasks',
    control: form.control,
    rules: {
      required: 'Please add at least one column',
    },
  });

  const { router, isMutating, controllerRef, startTransition, setFetchStatus } =
    useApiState();

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors, isDirty, isValid },
  } = form;

  const addItem = useCallback(() => {
    append({
      id: uuid(),
      title: '',
      done: false,
    });
  }, [append]);

  const onSubmit = handleSubmit(async (values) => {
    console.log('SUBMITTED', JSON.stringify(values, null, 2));

    // try {
    //   const draft = produce(values, (draft) => {

    //   });

    //   const result = schema.safeParse(draft);
    //   if (!result.success) throw result.error;

    //   setFetchStatus('pending');
    //   controllerRef.current = new AbortController();

    //   const response = await timeout(
    //     request('/api/invoices/create', {
    //       method: 'POST',
    //       signal: controllerRef.current?.signal,
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         ...draft,
    //       }),
    //     }),
    //     { ms: 10000, controller: controllerRef.current }
    //   );

    //   const json = ServerResponseSchema.parse(response);
    //   if (json.status === 'failed') throw new Error(json.error);

    //   toast.success(json.data);

    //   startTransition(() => {
    //     router.refresh();
    //     reset();

    //   });
    // } catch (error: any) {
    //   if (error instanceof TimeoutError) {
    //     setFetchStatus('delayed');
    //     toast.error(`TimeoutError: ${error.message}`);
    //   } else if (error instanceof ZodError) {
    //     setFetchStatus('canceled');
    //     toast.error(`ValidationError: ${error.message}`);
    //   } else if (error.name === 'AbortError') {
    //     setFetchStatus('canceled');
    //     toast.error(`AbortError: ${error.message}`);
    //   } else {
    //     setFetchStatus('failed');
    //     toast.error(error.message);
    //     // toast.error(`There was a problem with the operation: ${error}`);
    //   }
    // }
  });

  const isSubmittable = Boolean(isDirty) && Boolean(isValid);

  return (
    <BaseModal id='task/create'>
      <Form {...form}>
        <form onSubmit={onSubmit} className='flex flex-col gap-6'>
          <ModalHeader>
            <ModalTitle>Add New Task</ModalTitle>
          </ModalHeader>

          <div className='space-y-2'>
            <FormLabel htmlFor='title'>Title</FormLabel>
            <TextField
              type='text'
              id='title'
              placeholder='e.g. Take coffee break'
              {...register('title')}
              aria-invalid={Boolean(errors?.title)}
            />
          </div>

          <div className='space-y-2'>
            <FormLabel htmlFor='description'>Description</FormLabel>
            <TextArea
              id='description'
              placeholder='e.g. It’s always good to take a break. This 15 minute break will
              recharge the batteries a little.'
              {...register('description')}
              aria-invalid={Boolean(errors?.description)}
            />
          </div>

          <fieldset className='space-y-3'>
            <Text as='legend' variant='accent'>
              Subtasks
            </Text>

            <ul className='flex flex-col gap-3'>
              {fields.map((field, index) => {
                const fieldErrors = errors?.subtasks?.[index];
                return (
                  <li
                    key={field.id}
                    className='grid grid-cols-[1fr,auto] items-center'
                  >
                    <TextField
                      type='text'
                      id={`subtasks.${index}.title`}
                      placeholder='e.g. Make coffee'
                      {...register(`subtasks.${index}.title`)}
                      aria-invalid={Boolean(fieldErrors?.title)}
                    />
                    <Button
                      type='button'
                      className='justify-end text-brand-400 hover:text-accent-200 focus:text-accent-200'
                      onClick={() => void remove(index)}
                    >
                      <X />
                      <SrOnly>Remove</SrOnly>
                    </Button>
                  </li>
                );
              })}
            </ul>

            <Button
              type='button'
              intent='secondary'
              onClick={addItem}
              fullWidth
            >
              + Add New Subtask
            </Button>
          </fieldset>

          <fieldset className='space-y-2'>
            <FormField
              name='status'
              render={({ field }) => (
                <Listbox {...field}>
                  <FormItem className='relative col-span-6 flex-col sm:col-span-3'>
                    <Listbox.Label as={FormLabel}>Status</Listbox.Label>

                    <div className='relative z-[1] mt-1'>
                      <Listbox.Button
                        title='select a payment term'
                        className='group relative inline-flex w-full items-center justify-between rounded border border-white bg-transparent px-4 py-3 outline-none transition-colors duration-300 ease-in hover:border-brand-500 focus:border-brand-500 focus-visible:outline-none dark:border-brand-600 dark:bg-brand-700 dark:hover:border-brand-500 dark:focus:border-brand-500'
                      >
                        {({ value }) => (
                          <>
                            <span
                              className={text({
                                size: 'base',
                                className: 'block truncate',
                              })}
                            >
                              {value}
                            </span>

                            <span className='pointer-events-none'>
                              <ChevronDown
                                size={16}
                                strokeWidth={1}
                                aria-hidden
                                className='transform-gpu transition-transform hui-open:-rotate-180'
                              />
                              <SrOnly>Toggle Menu</SrOnly>
                            </span>
                          </>
                        )}
                      </Listbox.Button>

                      <Transition
                        as={Fragment}
                        enter='transition-opacity ease-in-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='transition-opacity ease-in-out duration-300'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                      >
                        <Listbox.Options className='shadow-200 dark:shadow-300 absolute z-20 mt-2 w-full rounded-lg bg-white transition-all duration-500 dark:bg-brand-700'>
                          {['Todo', 'Doing', 'Done'].map((option) => (
                            <Listbox.Option
                              key={option.toString()}
                              value={option}
                              className={text({
                                size: 'base',
                                className:
                                  'block truncate px-4 py-2 font-medium text-brand-900 outline-none hui-selected:text-brand-500 hui-active:text-brand-500 dark:text-white dark:hui-selected:text-brand-500 dark:hui-active:text-brand-500',
                              })}
                            >
                              {option}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </FormItem>
                </Listbox>
              )}
            ></FormField>
          </fieldset>

          <ModalFooter>
            <Button
              type='submit'
              intent='primary'
              disabled={!isSubmittable}
              fullWidth
            >
              Create Task
            </Button>
          </ModalFooter>
        </form>
      </Form>
    </BaseModal>
  );
}

/* <Button className='text-brand-400'>
              <MoreVertical />
              <SrOnly>Show Actions Menu</SrOnly>
            </Button>*/
