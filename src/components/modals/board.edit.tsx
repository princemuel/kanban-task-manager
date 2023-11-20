'use client';

import { useApiState, useZodForm } from '@/hooks';
import { StringContraint } from '@/lib/schema/fields';
import { X } from 'lucide-react';
import { useCallback } from 'react';
import { useFieldArray } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { z } from 'zod';
import { Form, FormLabel, TextField } from '../form';
import { SrOnly } from '../helpers';
import { Button, Text } from '../shared';
import { BaseModal, ModalFooter, ModalHeader, ModalTitle } from './modal';

type Props = {};

const schema = z.object({
  name: StringContraint,
  columns: z
    .array(z.object({ id: z.string(), name: StringContraint }))
    .nonempty(),
});

export default function EditBoardModal() {
  // let inputRef = useRef<HTMLInputElement>(null);

  const form = useZodForm({
    schema: schema,
    defaultValues: {
      name: 'Platform Launch',
      columns: [
        { id: uuid(), name: 'Todo' },
        { id: uuid(), name: 'Doing' },
        // { id: uuid(), name: 'Done' },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'columns',
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
      name: '',
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
    <BaseModal id='board/edit'>
      <Form {...form}>
        <form onSubmit={onSubmit} className='flex flex-col gap-6'>
          <ModalHeader>
            <ModalTitle>Edit Board</ModalTitle>
          </ModalHeader>

          <div className='space-y-2'>
            <FormLabel htmlFor='name'>Board Name</FormLabel>
            <TextField
              type='text'
              id='name'
              placeholder='e.g. Web Design'
              {...register('name')}
              aria-invalid={Boolean(errors?.name)}
            />
          </div>

          <fieldset className='space-y-3'>
            <Text as='legend' variant='accent'>
              Board Columns
            </Text>

            <ul className='flex flex-col gap-3'>
              {fields.map((field, index) => {
                const fieldErrors = errors?.columns?.[index];
                return (
                  <li
                    key={field.id}
                    className='grid grid-cols-[1fr,auto] items-center'
                  >
                    <TextField
                      type='text'
                      id={`columns.${index}.name`}
                      placeholder='Todo'
                      {...register(`columns.${index}.name`)}
                      aria-invalid={Boolean(fieldErrors?.name)}
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
              + Add New Column
            </Button>
          </fieldset>

          <ModalFooter>
            <Button
              type='submit'
              intent='primary'
              disabled={!isSubmittable}
              fullWidth
            >
              Save Changes
            </Button>
          </ModalFooter>
        </form>
      </Form>
    </BaseModal>
  );
}
