import { Outlet } from "@remix-run/react";

function LayoutRoute() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default LayoutRoute;
