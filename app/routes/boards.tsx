import { Outlet } from "@remix-run/react";

function LayoutRoute() {
  return (
    <div className="">
      {/* HEADER */}
      <header>HEADER</header>
      {/* HEADER */}

      {/* SIDEBAR */}
      <aside className="">ASIDE</aside>
      {/* SIDEBAR */}

      {/* MAIN CONTENT */}
      <div className="">
        <Outlet />
      </div>
      {/* MAIN CONTENT */}
    </div>
  );
}

export default LayoutRoute;
