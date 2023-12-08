"use client";

import { useApiState } from "@/hooks/use-api-state";
import { useZodForm } from "@/hooks/use-form";
import { StringContraint } from "@/lib/schema.fields";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useCallback } from "react";
import { useFieldArray } from "react-hook-form";
import { LuChevronDown, LuMoreVertical } from "react-icons/lu";
import { v4 as uuid } from "uuid";
import { z } from "zod";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./form";
import { BaseModal, ModalDescription, ModalHeader, ModalTitle } from "./modal";
import { SrOnly } from "./sr-only";
import { Text, text } from "./text";

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
const subtasks = [
  {
    id: uuid(),
    title: "Research competitor pricing and business models",
    done: true,
  },
  {
    id: uuid(),
    title: "Outline a business model that works for our solution",
    done: true,
  },
  {
    id: uuid(),
    title:
      "Talk to potential customers about our proposed solution and ask for fair price expectancy",
    done: false,
  },
];

const ViewTaskModal = (props: Props) => {
  const form = useZodForm({
    schema: schema,
    defaultValues: {
      title: "",
      description: "",
      status: options[0],
      subtasks: subtasks,
    },
  });

  const { fields, append } = useFieldArray({
    name: "subtasks",
    control: form.control,
    rules: {
      required: "Please add at least one column",
    },
  });
  const { router, isMutating, controllerRef, startTransition, setFetchStatus } =
    useApiState();

  const { handleSubmit, reset, register } = form;

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
    <BaseModal id="task/view">
      <Form {...form}>
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <ModalHeader>
            <ModalTitle>
              Research pricing points of various competitors and trial different
              business models
            </ModalTitle>

            <Button className="pe-0 ps-4 text-brand-400">
              <LuMoreVertical />
              <SrOnly>Show Actions Menu</SrOnly>
            </Button>
          </ModalHeader>

          <ModalDescription>
            We know what we&#39;re planning to build for version one. Now we
            need to finalise the first pricing model we&#39;ll use. Keep
            iterating the subtasks until we have a coherent proposition.
          </ModalDescription>

          <fieldset className="space-y-3">
            <Text as="legend" variant="accent">
              Subtasks (
              <output>{fields.filter((field) => field.done).length}</output>
              &nbsp;of&nbsp;
              <output>{fields.length}</output>)
            </Text>

            <ul className="flex flex-col gap-3">
              {fields.map((subtask, index) => {
                return (
                  <FormField
                    key={subtask.id}
                    name={`subtasks.${index}.done`}
                    render={({ field }) => (
                      <FormItem
                        as="li"
                        className="grid cursor-pointer grid-cols-[auto,1fr] items-center gap-4 rounded bg-brand-100 px-4 py-3 hover:bg-brand-500/25 dark:bg-brand-800 dark:hover:bg-brand-500/25"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>

                        <FormLabel aria-disabled={field.value}>
                          {subtask.title}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                );
              })}
            </ul>
          </fieldset>

          <fieldset className="space-y-2">
            <FormField
              name="status"
              render={({ field }) => (
                <Listbox {...field}>
                  <FormItem className="relative col-span-6 flex-col sm:col-span-3">
                    <Listbox.Label as={FormLabel}>Current Status</Listbox.Label>

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
        </form>
      </Form>
    </BaseModal>
  );
};

export default ViewTaskModal;
