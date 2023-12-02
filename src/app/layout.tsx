import { BreakpointIndicator } from "@/components";
import { defineMeta } from "@/config";
import { RootProvider } from "@/context";
import { Analytics } from "@vercel/analytics/react";
import type { Viewport } from "next";
import * as React from "react";
import { Fragment } from "react";
import { fontVars } from "./fonts";
import "./globals.css";

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000112" },
    { media: "(prefers-color-scheme: light)", color: "#635fc7" },
  ],
};

export const metadata = defineMeta();

//className='relative flex min-h-screen flex-col text-brand-900 antialiased dark:bg-////brand-800 dark:text-white md:flex-row'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={fontVars} suppressHydrationWarning>
      <body className="text-brand-900 antialiased dark:text-white">
        <RootProvider>
          <Fragment>{children}</Fragment>

          <Analytics />
          <BreakpointIndicator />
        </RootProvider>
      </body>
    </html>
  );
}
