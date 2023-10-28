// 'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { UseFormProps, useForm } from 'react-hook-form';
import type { ZodType } from 'zod';

export function useZodForm<T extends ZodType<any, any, any>>({
  schema,
  ...restProps
}: Omit<UseFormProps<T['_input']>, 'resolver'> & {
  schema: T;
}) {
  return useForm<T['_input']>({
    ...restProps,
    resolver: async (data, context, options) => {
      // you can debug your validation schema here
      if (process.env.NODE_ENV !== 'production') {
        console.log('FormData', data);
        console.log(
          'validation result',
          await zodResolver(schema, undefined, {
            raw: true,
          })(data, context, options)
        );
      }

      return zodResolver(schema, undefined, {
        raw: true,
      })(data, context, options);
    },
  });
}
