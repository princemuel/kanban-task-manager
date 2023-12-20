import { Outlet } from "@remix-run/react";

function LayoutRoute() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Outlet />
    </main>
  );
}

export default LayoutRoute;
