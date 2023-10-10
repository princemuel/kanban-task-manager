import { cn } from '@/helpers';
import { Plus_Jakarta_Sans } from 'next/font/google';
import localFont from 'next/font/local';

const isProduction = process.env.NODE_ENV === 'production';

const FontSans_Dev = localFont({
  src: './plus-jarkata-sans.ttf',
  variable: '--font-sans',
  display: 'swap',
});

const FontSans_Prod = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const fonts = cn(
  isProduction ? FontSans_Prod.variable : FontSans_Dev.variable
);
