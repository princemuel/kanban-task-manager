"use client";

import NextLink from "next/link";
import { useEffect } from "react";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section
      aria-label="Error Message"
      className="flex min-h-screen w-full items-center justify-center font-sans"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p className="text-xl font-medium">An error has occured...</p>
        <p className="text-sm font-normal">Error: {error?.message}</p>

        <div className="flex items-center gap-8">
          <button type="button" onClick={reset} className="text-sm font-normal">
            Try again
          </button>{" "}
          <span>Or</span>
          <NextLink href="/" className="text-sm font-normal underline">
            Go to the Homepage
          </NextLink>
        </div>
      </div>
    </section>
  );
}
