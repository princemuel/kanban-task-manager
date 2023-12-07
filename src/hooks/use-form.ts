"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type UseFormProps } from "react-hook-form";
import * as z from "zod";

export function useZodForm<T extends z.ZodType<any, any, any>>(
  props: Omit<UseFormProps<T["_input"]>, "resolver"> & {
    schema: T;
  },
) {
  const { schema, ...rest } = props;

  return useForm<T["_input"]>({
    ...rest,
    resolver: async (data, context, options) => {
      // you can debug your validation schema here
      if (process.env.NODE_ENV !== "production") {
        console.log("Form Data: ", data);
        console.log(
          "Validation Result: ",
          await zodResolver(schema, undefined, { mode: "async" })(
            data,
            context,
            options,
          ),
        );
      }

      return zodResolver(schema, undefined, { mode: "async" })(
        data,
        context,
        options,
      );
    },
  });
}
