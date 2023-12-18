import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Kanban TM" }, { name: "description", content: "" }];
};

export default function Index() {
  return <h1>Kanban Task Manager</h1>;
}
