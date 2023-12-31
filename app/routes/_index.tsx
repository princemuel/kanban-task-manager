import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Kanban TM" }, { name: "description", content: "" }];
};

function PageRoute() {
  return (
    <div>
      <NavLink to="/boards">Boards</NavLink>
    </div>
  );
}

export default PageRoute;
