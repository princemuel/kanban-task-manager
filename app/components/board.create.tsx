import { StringContraint } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useFieldArray } from "react-hook-form";
import { LuX } from "react-icons/lu";
import { useRemixForm } from "remix-hook-form";
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
import { Text } from "./text";

const schema = z.object({
  name: StringContraint,
  columns: z
    .array(z.object({ id: z.string(), name: StringContraint.toLowerCase() }))
    .nonempty(),
});

const resolver = zodResolver(schema);

export type FormData = z.infer<typeof schema>;

export default function CreateBoardModal() {
  const form = useRemixForm<FormData>({
    mode: "onSubmit",
    resolver: resolver,
    defaultValues: {
      name: "",
      columns: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "columns",
    control: form.control,
    rules: {
      required: "Please add at least one column",
    },
  });

  const addItem = useCallback(() => {
    append({
      id: uuid(),
      name: "",
    });
  }, [append]);

  return (
    <BaseModal id="board/create">
      <Form {...form}>
        <form onSubmit={form.handleSubmit} className="flex flex-col gap-6">
          <ModalHeader>
            <ModalTitle>Add New Board</ModalTitle>
          </ModalHeader>

          <FormField
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Board Name</FormLabel>

                <div className="relative w-full">
                  <FormControl>
                    <TextField
                      type="text"
                      placeholder="e.g. Web Design"
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
              Board Columns
            </Text>

            <ul className="flex flex-col gap-3">
              {fields.map((field, index) => {
                return (
                  <li
                    key={field.id}
                    className="grid grid-cols-[1fr,auto] items-center"
                  >
                    <FormField
                      name={`columns.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <SrOnly>
                            <FormLabel>Column Name</FormLabel>
                          </SrOnly>

                          <div className="relative w-full">
                            <FormControl>
                              <TextField
                                type="text"
                                placeholder="Todo"
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
              + Add New Column
            </Button>
          </fieldset>

          <ModalFooter>
            <Button type="submit" intent="primary" fullWidth>
              Create New Board
            </Button>
          </ModalFooter>
        </form>
      </Form>
    </BaseModal>
  );
}
