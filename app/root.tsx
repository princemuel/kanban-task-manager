import { ClerkApp, ClerkErrorBoundary } from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider as RemixThemesProvider,
  useTheme,
} from "remix-themes";
import { BreakpointIndicator } from "./components/breakpoint-indicator";
import styles from "./globals.css";
import { themeSessionResolver } from "./sessions.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = (args: LoaderFunctionArgs) => {
  return rootAuthLoader(args, async ({ request }) => {
    const { getTheme } = await themeSessionResolver(request);

    return { theme: getTheme() };
  });
};

export const ErrorBoundary = ClerkErrorBoundary();

function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  return (
    <html
      lang="en"
      dir="ltr"
      data-darkreader-mode="dynamic"
      data-darkreader-theme={theme ?? ""}
      // className={tw`__sans__`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>

      <body className="relative min-h-screen antialiased">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />

        <BreakpointIndicator />
      </body>
    </html>
  );
}

function Root() {
  const data = useLoaderData<typeof loader>();
  return (
    <RemixThemesProvider
      specifiedTheme={data.theme}
      themeAction="/action/set-theme"
    >
      <App />
    </RemixThemesProvider>
  );
}

export default ClerkApp(Root);
