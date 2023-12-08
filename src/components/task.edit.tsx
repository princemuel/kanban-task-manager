"use client";

import { useApiState } from "@/hooks/use-api-state";
import { useZodForm } from "@/hooks/use-form";
import { StringContraint } from "@/lib/schema.fields";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useCallback } from "react";
import { useFieldArray } from "react-hook-form";
import { LuChevronDown, LuX } from "react-icons/lu";
import { v4 as uuid } from "uuid";
import { z } from "zod";
import { Button } from "./button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { TextField } from "./input";
import { BaseModal, ModalFooter, ModalHeader, ModalTitle } from "./modal";
import { SrOnly } from "./sr-only";
import { Text, text } from "./text";
import { TextArea } from "./textarea";

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
      }),
    )
    .nonempty(),
});

const options = ["Todo", "Doing", "Done"];

export default function CreateTaskModal() {
  const form = useZodForm({
    schema: schema,
    defaultValues: {
      title: "Add authentication endpoints",
      description: "",
      status: options[1],
      subtasks: [
        { id: uuid(), title: "Define user model", done: false },
        { id: uuid(), title: "Add auth endpoints", done: false },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "subtasks",
    control: form.control,
    rules: {
      required: "Please add at least one column",
    },
  });

  const { router, isMutating, controllerRef, startTransition, setFetchStatus } =
    useApiState();

  const { handleSubmit, reset } = form;

  const addItem = useCallback(() => {
    append({
      id: uuid(),
      title: "",
      done: false,
    });
  }, [append]);

  const onSubmit = handleSubmit(async (values) => {
    console.log("SUBMITTED", JSON.stringify(values, null, 2));

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

  return (
    <BaseModal id="task/edit">
      <Form {...form}>
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <ModalHeader>
            <ModalTitle>Add New Task</ModalTitle>
          </ModalHeader>

          <FormField
            name="title"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Title</FormLabel>

                <div className="relative w-full">
                  <FormControl>
                    <TextField
                      type="text"
                      placeholder="e.g. Take coffee break"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute right-4 top-2" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            name="description"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Description</FormLabel>

                <div className="relative w-full">
                  <FormControl>
                    <TextArea
                      placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute right-4 top-2" />
                </div>
              </FormItem>
            )}
          />

          <fieldset className="space-y-3">
            <Text as="legend" variant="accent">
              Subtasks
            </Text>

            <ul className="flex flex-col gap-3">
              {fields.map((field, index) => {
                return (
                  <li
                    key={field.id}
                    className="grid grid-cols-[1fr,auto] items-center"
                  >
                    <FormField
                      name={`subtasks.${index}.title`}
                      render={({ field }) => (
                        <FormItem>
                          <SrOnly>
                            <FormLabel>Subtask Title</FormLabel>
                          </SrOnly>

                          <div className="relative w-full">
                            <FormControl>
                              <TextField
                                type="text"
                                placeholder="e.g. Make coffee"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="absolute right-4 top-2" />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button
                      type="button"
                      className="justify-end text-brand-400 hover:text-accent-200 focus:text-accent-200"
                      onClick={() => void remove(index)}
                    >
                      <LuX />
                      <SrOnly>Remove</SrOnly>
                    </Button>
                  </li>
                );
              })}
            </ul>

            <Button
              type="button"
              intent="secondary"
              onClick={addItem}
              fullWidth
            >
              + Add New Subtask
            </Button>
          </fieldset>

          <fieldset className="space-y-2">
            <FormField
              name="status"
              render={({ field }) => (
                <Listbox {...field}>
                  <FormItem className="relative flex-col">
                    <Listbox.Label as={FormLabel}>Status</Listbox.Label>

                    <div className="relative z-[1] mt-1">
                      <Listbox.Button
                        title="select a payment term"
                        className="group relative inline-flex w-full items-center justify-between rounded border border-brand-400/25 bg-transparent px-4 py-2 outline-none transition-colors duration-300 ease-in hover:border-brand-500 focus:border-brand-500 focus-visible:outline-none"
                      >
                        {({ value }) => (
                          <>
                            <span
                              className={text({
                                size: "base",
                                className: "block truncate",
                              })}
                            >
                              {value}
                            </span>

                            <span className="pointer-events-none transform-gpu text-brand-500 transition-transform hui-open:-rotate-180">
                              <LuChevronDown
                                size={16}
                                strokeWidth={2}
                                aria-hidden
                              />
                              <SrOnly>Toggle Menu</SrOnly>
                            </span>
                          </>
                        )}
                      </Listbox.Button>

                      <Transition
                        as={Fragment}
                        enter="transition-opacity ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-20 mt-3 w-full rounded-lg bg-white shadow-[0_10px_20px_0_rgba(54,78,126,0.25)] transition-all duration-500 dark:bg-brand-800">
                          {options.map((option) => (
                            <Listbox.Option
                              key={option.toString()}
                              value={option}
                              className={text({
                                variant: "accent",
                                size: "base",
                                className:
                                  "block truncate px-4 py-2 outline-none hui-selected:text-brand-500 hui-active:text-brand-500 dark:hui-selected:text-brand-500 dark:hui-active:text-brand-500",
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
            <Button type="submit" intent="primary" fullWidth>
              Save Changes
            </Button>
          </ModalFooter>
        </form>
      </Form>
    </BaseModal>
  );
}
