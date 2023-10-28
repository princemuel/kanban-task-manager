import { cn } from '@/helpers';
import { Plus_Jakarta_Sans } from 'next/font/google';

const Font_Sans = Plus_Jakarta_Sans({
  weight: 'variable',
  display: 'swap',
  variable: '--font-sans',
  subsets: ['latin'],
});

export const fontVars = cn(Font_Sans.variable);
