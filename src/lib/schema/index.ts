import { z } from 'zod';

export const ServerResponseSchema = z.discriminatedUnion('status', [
  z.object({ status: z.literal('success'), data: z.string() }),
  z.object({ status: z.literal('failed'), error: z.string() }),
  // z.object({ status: z.literal("error"), error: z.instanceof(Error) }),
]);
