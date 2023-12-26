import { StringContraint } from "@/lib/schema";
import { Listbox, Transition } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment } from "react";
import { useFieldArray } from "react-hook-form";
import { LuChevronDown, LuMoreVertical } from "react-icons/lu";
import { useRemixForm } from "remix-hook-form";
import { v4 as uuid } from "uuid";
import { z } from "zod";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./form";
import { BaseModal, ModalDescription, ModalHeader, ModalTitle } from "./modal";
import { SrOnly } from "./sr-only";
import { Text, text } from "./text";

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

const resolver = zodResolver(schema);

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

export type FormData = z.infer<typeof schema>;

const ViewTaskModal = () => {
  const form = useRemixForm<FormData>({
    mode: "onSubmit",
    resolver: resolver,
    defaultValues: {
      title: "",
      description: "",
      status: options[0],
      subtasks: subtasks,
    },
  });

  const { fields } = useFieldArray({
    name: "subtasks",
    control: form.control,
    rules: {
      required: "Please add at least one column",
    },
  });

  return (
    <BaseModal id="task/view">
      <Form {...form}>
        <form onSubmit={form.handleSubmit} className="flex flex-col gap-6">
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
                              key={option}
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
