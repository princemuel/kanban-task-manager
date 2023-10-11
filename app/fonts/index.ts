import { Plus_Jakarta_Sans } from 'next/font/google';

const Font_Sans = Plus_Jakarta_Sans({
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-sans',
  subsets: ['latin'],
});

export const fonts = Font_Sans.variable;
