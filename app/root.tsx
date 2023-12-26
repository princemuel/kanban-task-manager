import { ClerkApp, ClerkErrorBoundary } from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import NiceModal from "@ebay/nice-modal-react";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  json,
  type LinksFunction,
  type LoaderFunctionArgs,
} from "@remix-run/node";
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
import { useEffect } from "react";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider as RemixThemesProvider,
  useTheme,
} from "remix-themes";
import { getToast } from "remix-toast";
import { Toaster as ToastManager, toast as notify } from "sonner";
import { BreakpointIndicator } from "./components/breakpoint-indicator";
import styles from "./globals.css";
import { tw } from "./helpers/utils";
import { themeSessionResolver } from "./sessions.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = (args: LoaderFunctionArgs) => {
  return rootAuthLoader(args, async ({ request }) => {
    const { getTheme } = await themeSessionResolver(request);
    const { toast, headers } = await getToast(request);

    return json({ toast, theme: getTheme() }, { headers });
  });
};

export const ErrorBoundary = ClerkErrorBoundary();

function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  useEffect(() => {
    const type = data.toast?.type || "";
    const message = data.toast?.message;

    const methods = {
      error: notify.error,
      success: notify.success,
      info: notify.info,
      warning: notify.warning,
    };

    const toast = methods?.[type as keyof typeof methods];

    if (type && message && toast) toast(message);
  }, [data.toast?.message, data.toast?.type]);

  return (
    <html
      lang="en"
      dir="ltr"
      data-darkreader-mode="dynamic"
      data-darkreader-theme={theme ?? ""}
      className={tw`__sans__`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
        <style></style>
      </head>

      <body className="relative min-h-screen antialiased">
        <NiceModal.Provider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <Analytics />

          <ToastManager
            position="top-center"
            theme={theme || "system"}
            richColors
          />
          <BreakpointIndicator />
        </NiceModal.Provider>
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