'use client';

import { cn } from '@/lib';
import type { VariantProps } from 'cva';
import { cva } from 'cva';
import Link from 'next/link';
import * as React from 'react';

const buttonVariants = cva(
  [
    'flex items-center font-bold text-white',
    'transition-colors duration-300',
    'disabled:pointer-events-none disabled:cursor-not-allowed',
  ],
  {
    defaultVariants: {
      intent: 'primary',
      size: 'xs',
    },

    variants: {
      intent: {
        primary: 'bg-brand-500 hover:bg-brand-300',
        secondary:
          'bg-brand-500/10 dark:bg-brand-500/25 text-brand-500 hover:bg-white dark:hover:bg-white',
        outline: '',
        ghost: '',
        destructive: 'bg-accent-200 hover:bg-accent-100',
        link: 'underline-offset-2 hover:underline',
        unbranded: '',
      },
      size: {
        s: '',
        xs: 'text-300 leading-200',
        sm: 'text-400 leading-400',
        md: 'text-500 leading-300',
        lg: 'text-600 leading-400',
        xl: 'text-700 leading-500',
      },
      fullWidth: {
        true: 'w-full',
      },
      radius: {
        pill: 'rounded-pill',
        full: 'rounded-full',
      },
      weight: {
        bold: 'font-bold',
        medium: 'font-medium',
      },
    },
    compoundVariants: [
      {
        intent: 'primary',
        size: 'lg',
        fullWidth: true,
        weight: 'bold',
      },
      {
        intent: 'destructive',
        size: 'sm',
        fullWidth: true,
      },
    ],
  }
);

interface ButtonVariants extends VariantProps<typeof buttonVariants> {}

const button = (variants: ButtonVariants, className = '') =>
  cn(buttonVariants(variants), className);

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  href?: __next_route_internal_types__.RouteImpl<string>;
}

const Button = ({
  href,
  intent,
  weight,
  size,
  radius,
  className,
  fullWidth,
  children,
  ...rest
}: Props) => {
  return (
    //@ts-expect-error button and next/link component types are mixing
    <ButtonOrLink
      href={href}
      className={button({ intent, size, weight, radius, fullWidth }, className)}
      {...rest}
    >
      {children}
    </ButtonOrLink>
  );
};

// only these two exports below are needed
export { Button, button }; ///////////////
// only these two exports above are needed

type ButtonOrLinkProps = React.ComponentProps<'button'> &
  React.ComponentProps<'a'>;

interface ButtonProps extends ButtonOrLinkProps {
  children: React.ReactNode;
  href?: __next_route_internal_types__.RouteImpl<string>;
}

/**
 * This is a base component that will render either a button or a link,
 * depending on the props that are passed to it. The link rendered will
 * also correctly get wrapped in a next/link component to ensure ideal
 * page-to-page transitions.
 */
function ButtonOrLink({ href, ...props }: ButtonProps) {
  const isAnchor = typeof href !== 'undefined';
  const ButtonOrLink = isAnchor ? 'a' : 'button';

  const element = <ButtonOrLink {...props} />;

  if (isAnchor) {
    return (
      <Link href={href} legacyBehavior>
        {element}
      </Link>
    );
  }

  return element;
}
