import { LogoDark, LogoLight } from "@/common";
import { Text } from "@/components/text";
import { capitalize } from "@/helpers/utils";
import { Link, Outlet } from "@remix-run/react";

function LayoutRoute() {
  return (
    <div className="min-h-svh font-sans">
      <header className="grid grid-cols-[repeat(6,_[col-start]_1fr_[col-end])] bg-white dark:bg-brand-700">
        <div className="col-[col-start_/_col-end] border-r border-brand-200 p-6 dark:border-brand-600">
          <Link to="/" className="inline-flex items-center">
            <LogoLight className="hidden dark:block" />
            <LogoDark className="block dark:hidden" />
          </Link>
        </div>

        <div className="col-[col-start_2_/_-1] flex items-center justify-between p-6">
          <Text as="h1" size="xl" className="">
            {capitalize("Platform Launch")}
          </Text>
        </div>
      </header>

      <div className="grid w-full grid-cols-[repeat(6,_[col-start]_1fr_[col-end])] grid-rows-[calc(100vh_-_5rem)] overflow-hidden transition-[grid-template-columns] duration-500 ease-in">
        <aside className="group/aside peer col-[1_/_1] row-[1] grid grid-cols-[0fr] border-r border-brand-200 bg-white transition-[grid-template-columns] duration-500 ease-out has-[:checked]:col-[col-start_/_col-end] has-[:checked]:grid-cols-[1fr] dark:border-brand-600 dark:bg-brand-700">
          <div className="overflow-hidden group-has-[:checked]/aside:py-8 group-has-[:checked]/aside:pr-6">
            <div>
              <Text as="h4" variant="primary" size="sm" className="uppercase">
                <span>All Boards </span>
                <output>({3})</output>
              </Text>
            </div>
            <input
              type="checkbox"
              className="fixed bottom-5 size-4 accent-indigo-500"
            />
          </div>
        </aside>

        <div className="col-[col-start_1_/_-1] row-[1] w-full overflow-auto border-t border-brand-200 bg-brand-100 peer-has-[:checked]:col-[col-start_2_/_-1] dark:border-brand-600 dark:bg-brand-800">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LayoutRoute;
