import { cx } from '@/styled-system/css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const Font_Sans = Plus_Jakarta_Sans({
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-sans',
  subsets: ['latin'],
});

export const fontVars = cx(Font_Sans.variable);
