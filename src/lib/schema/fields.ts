import { z } from 'zod';

// Zod Constraints
export const StringContraint = z
  .string()
  .min(3, { message: 'Must 3 or more char(s)' })
  .trim();

export const EmailContraint = z
  .string()
  .email({ message: 'Invalid email address' })
  .min(6, { message: 'Must 6 or more char(s)' })
  .toLowerCase()
  .trim();

export const IdContraint = z.object({ id: z.string().min(1) });