import { twcn } from '@/src/helpers';
import { Plus_Jakarta_Sans } from 'next/font/google';

const Font_Sans = Plus_Jakarta_Sans({
  weight: 'variable',
  display: 'swap',
  variable: '--font-sans',
  subsets: ['latin'],
});

export const fontVars = twcn(Font_Sans.variable);
