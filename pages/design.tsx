import { icons } from "common";
import Head from "next/head";
import type { NextPageWithLayout } from "types";

const DesignSystem: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Design System</title>
      </Head>

      <header className="p-8">
        <section className="flex items-center justify-between px-20">
          <div className="logo">
            <icons.logo.dark />
          </div>

          <h1>Design System</h1>
        </section>
      </header>

      <main>
        <section
          className="| flow m-20 px-20 h-container"
          aria-labelledby="colors"
        >
          <header className="mb-10">
            <h2 id="colors">
              <span className="text-primary-500">01</span>
              <span className="ml-6">Colors</span>
            </h2>
          </header>

          <ul
            role={"list"}
            className="| flow-space--none grid grid-cols-fit-big gap-10 text-500 font-bold uppercase"
          >
            <li className="flex items-center justify-center rounded-xl bg-primary-500 p-14 text-neutral-100">
              #635fc7
            </li>
            <li className="flex items-center justify-center rounded-xl bg-primary-300 p-14 text-neutral-100">
              #a8a4ff
            </li>
            <li className="flex items-center justify-center rounded-xl bg-primary-900 p-14 text-neutral-100">
              #000112
            </li>
            <li className="flex items-center justify-center rounded-xl bg-primary-800 p-14 text-neutral-100">
              #20212c
            </li>

            <li className="flex items-center justify-center rounded-xl bg-primary-700 p-14 text-neutral-100">
              #2b2c37
            </li>
            <li className="flex items-center justify-center rounded-xl bg-primary-600 p-14 text-neutral-100">
              #3e3f4e
            </li>
            <li className="flex items-center justify-center rounded-xl bg-primary-400 p-14 text-neutral-100">
              #828fa3
            </li>
            <li className="flex items-center justify-center rounded-xl bg-primary-200 p-14 text-primary-700">
              #e4ebfa
            </li>

            <li className="flex items-center justify-center rounded-xl bg-primary-100 p-14 text-primary-700">
              #f4f7fd
            </li>
            <li className="flex items-center justify-center rounded-xl border border-primary-200 bg-neutral-100 p-14 text-primary-700">
              #ffffff
            </li>
            <li className="flex items-center justify-center rounded-xl bg-accent-200 p-14 text-neutral-100">
              #ea5555
            </li>
            <li className="flex items-center justify-center rounded-xl bg-accent-100 p-14 text-neutral-100">
              #ff9898
            </li>
          </ul>
        </section>

        <section
          className="| flow m-20 px-20 h-container"
          aria-labelledby="typography"
        >
          <header className="mb-10">
            <h2 id="typography">
              <span className="text-primary-500">02</span>
              <span className="ml-6">Typography</span>
            </h2>
          </header>

          <div className="grid gap-10 md:auto-cols-fr md:grid-flow-col">
            <div className="">
              <div className="mb-16">
                <p className="body-100 mb-2 text-primary-400">
                  <span className="">Plus Jakarta Sans</span>
                  <span className="ml-4 font-medium text-primary-900">
                    Bold
                  </span>
                  <span className="ml-4">24px</span>
                  <span className="ml-4">30px Line</span>
                </p>
                <p className="text-700 font-bold leading-500 text-primary-900">
                  Heading (XL)
                </p>
              </div>
              <div className="mb-16">
                <p className="body-100 mb-2 text-primary-400">
                  <span className="">Plus Jakarta Sans</span>
                  <span className="ml-4 font-medium text-primary-900">
                    Bold
                  </span>
                  <span className="ml-4">18px</span>
                  <span className="ml-4">23px Line</span>
                </p>
                <p className="text-600 font-bold leading-400 text-primary-900">
                  Heading (L)
                </p>
              </div>
              <div className="mb-16">
                <p className="body-100 mb-2 text-primary-400">
                  <span className="">Plus Jakarta Sans</span>
                  <span className="ml-4 font-medium text-primary-900">
                    Bold
                  </span>
                  <span className="ml-4">15px</span>
                  <span className="ml-4">19px Line</span>
                </p>
                <p className="text-500 font-bold leading-300 text-primary-900">
                  Heading (M)
                </p>
              </div>

              <div className="mb-16">
                <p className="body-100 mb-2 text-primary-400">
                  <span className="">Plus Jakarta Sans</span>
                  <span className="ml-4 font-medium text-primary-900">
                    Bold
                  </span>
                  <span className="ml-4">12px</span>
                  <span className="ml-4">15px Line</span>
                  <span className="ml-4">2.4px Kerning</span>
                </p>
                <p className="text-300 font-bold leading-200 text-primary-400">
                  Heading ( S )
                </p>
              </div>
            </div>

            <div className="flow-space--none">
              <div className="mb-16">
                <p className="body-100 mb-2 text-primary-400">
                  <span className="">Plus Jakarta Sans</span>
                  <span className="ml-4 font-medium text-primary-900">
                    Medium
                  </span>
                  <span className="ml-4">13px</span>
                  <span className="ml-4">23px Line</span>
                </p>
                <p className="body-100 text-primary-700">
                  Body (L) - Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                  In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  pretium, ligula sollicitudin laoreet viverra, tortor libero
                  sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.
                  Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate
                  volutpat, eros pede semper est, vitae luctus metus libero eu
                  augue. Morbi purus libero, faucibus adipiscing, commodo quis,
                  gravida id, est.
                </p>
              </div>

              <div className="mb-16">
                <p className="body-100 mb-2 text-primary-400">
                  <span className="">Plus Jakarta Sans</span>
                  <span className="ml-4 font-medium text-primary-900">
                    Medium
                  </span>
                  <span className="ml-4">12px</span>
                  <span className="ml-4">25px Line</span>
                </p>
                <p className="text-300 font-bold leading-200 text-primary-700">
                  Body (M) - - Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit. Phasellus hendrerit. Pellentesque aliquet
                  nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis
                  vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra,
                  tortor libero sodales leo, eget blandit nunc tortor eu nibh.
                  Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas,
                  ante et vulputate volutpat, eros pede semper est, vitae luctus
                  metus libero eu augue. Morbi purus libero, faucibus
                  adipiscing, commodo quis, gravida id, est.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="| flow m-20 px-20 h-container"
          aria-labelledby="interactive-elements"
        >
          <header className="mb-10 px-20">
            <h2 id="interactive-elements" className="text-700 font-bold">
              <span className="text-primary-500">03</span>
              <span className="ml-6 text-primary-900">
                Interactive Elements
              </span>
            </h2>
          </header>

          <section className="light-version p-20">
            <p className="body-100 mb-10 text-600 text-primary-400">
              Light Version
            </p>

            <ul
              role="list"
              className="mb-10 grid grid-cols-fit-big items-end gap-10"
            >
              <li>
                <button type="button" className="btn-primary--xl btn">
                  Button Primary (L)
                </button>
                <p className="body-100 text-center text-primary-400">Idle</p>
              </li>
              <li>
                <button type="button" className="btn-primary--sm btn">
                  Button Primary (S)
                </button>
                <p className="body-100 text-center text-primary-400">Idle</p>
              </li>
              <li>
                <button type="button" className="btn-accent btn">
                  Button Secondary
                </button>
                <p className="body-100 text-center text-primary-400">Idle</p>
              </li>
              <li>
                <button type="button" className="btn-delete btn">
                  Button Destructive
                </button>
                <p className="body-100 text-center text-primary-400">Idle</p>
              </li>
            </ul>

            <ul
              role="list"
              className="flow-space--none mb-10 grid grid-cols-fit-big items-start gap-10"
            >
              <li className="flex flex-col gap-4">
                <p className="text-300 text-primary-400">Subtask Checkbox</p>
                <label className="flex cursor-pointer items-center gap-6 rounded-xl bg-primary-100 py-6 px-6 text-400 font-bold leading-200 text-primary-900 hover:bg-primary-500/25">
                  <input
                    type="checkbox"
                    name="check-1"
                    className="aspect-square w-[1.6rem] cursor-pointer accent-primary-500"
                  />
                  <p className="">Idle</p>
                </label>

                <label className="flex cursor-pointer items-center gap-6 rounded-xl bg-primary-500/25 py-6 px-6 text-400 font-bold leading-200 text-primary-900">
                  <input
                    type="checkbox"
                    name="check-1"
                    className="aspect-square w-[1.6rem] cursor-pointer accent-primary-500"
                  />
                  <p className="">Hovered</p>
                </label>

                <label className="flex cursor-pointer items-center gap-6 rounded-xl bg-primary-100 py-6 px-6 text-400 font-bold leading-200 text-primary-900">
                  <input
                    type="checkbox"
                    name="check-1"
                    className="aspect-square w-[1.6rem] cursor-pointer accent-primary-500"
                    readOnly
                    checked
                  />
                  <p className="text-primary-400 line-through">Completed</p>
                </label>
              </li>

              <li className="flex flex-col gap-4">
                <label className="block">
                  <span className="block text-300 font-bold text-primary-400">
                    Text Field (Idle)
                  </span>
                  <input
                    type="text"
                    name="task-name"
                    placeholder="Enter task name"
                    className="w-full rounded-xl border border-primary-400/25 px-6 py-5 text-400 font-medium text-primary-900 placeholder-primary-900/25 focus:border-primary-400/25 focus:outline-none"
                  />
                </label>
                <label className="leading-4 block">
                  <span className="block text-300 font-bold text-primary-400">
                    Text Field (Active)
                  </span>
                  <input
                    type="text"
                    name="task-name"
                    placeholder="Enter task name"
                    className="w-full rounded-xl border border-primary-400/25 px-6 py-5 text-400 font-medium text-primary-900 placeholder-primary-900 focus:border-primary-400/25 focus:outline-none"
                  />
                </label>

                <label className="leading-4 relative block">
                  <span className="block text-300 font-bold text-primary-400">
                    Text Field (Error)
                  </span>
                  <input
                    type="text"
                    name="task-name"
                    placeholder="Enter task name"
                    className="w-full rounded-xl border border-accent-200 px-6 py-5 text-400 font-medium text-primary-900 placeholder-primary-900/25 focus:border-primary-400/25 focus:outline-none"
                  />
                  <span className="body-100 absolute top-2/4 right-0 mr-6 text-accent-200">
                    Can’t be empty
                  </span>
                </label>
              </li>

              <li className="flex flex-col gap-4">label</li>
            </ul>
          </section>

          <section className="dark-version bg-primary-700 p-20">
            <p className="body-100 mb-10 text-600 text-primary-400">
              Dark Version
            </p>

            <ul
              role="list"
              className="mb-10 grid grid-cols-fit-big items-end gap-10"
            >
              <li>
                <button type="button" className="btn-accent btn">
                  Button Secondary
                </button>
                <p className="body-100 text-center text-primary-400">Idle</p>
              </li>

              <li>
                <button type="button" className="btn-accent btn">
                  Button Secondary
                </button>
                <p className="body-100 text-center text-primary-400">Hover</p>
              </li>
            </ul>

            <ul
              role="list"
              className="flow-space--none mb-10 grid grid-cols-fit-big items-start gap-10"
            >
              <li className="flex flex-col gap-4">
                <p className="text-300 text-neutral-100">Subtask Checkbox</p>
                <label className="flex max-h-[4rem] max-w-[35rem] cursor-pointer items-center gap-6 rounded-xl bg-primary-800 py-6 px-6 text-400 font-bold leading-200 text-neutral-100 hover:bg-primary-500/25">
                  <input
                    type="checkbox"
                    name="check-1"
                    className="aspect-square w-[1.6rem] cursor-pointer accent-primary-500"
                  />
                  <p className="">Idle</p>
                </label>

                <div className="flex flex-col gap-4">
                  <p className="text-300 text-neutral-100">Subtask Checkbox</p>

                  <label className="relative flex max-h-[4rem] max-w-[35rem] cursor-pointer items-center gap-6 rounded-xl bg-primary-800 py-6 px-6 text-400 font-bold leading-200 text-neutral-100 hover:bg-primary-500/25">
                    <span className="flex aspect-square w-[1.4rem] items-center justify-center rounded-sm bg-primary-700 checked:bg-primary-500">
                      <span className="sr-only">check off task</span>
                      <icons.board.check />
                    </span>
                    <input type="checkbox" className="sr-only" />
                    <p className="">Idle</p>
                  </label>
                </div>

                <label className="flex max-h-[4rem] max-w-[35rem] cursor-pointer items-center gap-6 rounded-xl bg-primary-500/25 py-6 px-6 text-400 font-bold leading-200 text-neutral-100">
                  <input
                    type="checkbox"
                    name="check-1"
                    className="aspect-square w-[1.6rem] cursor-pointer accent-primary-500"
                  />
                  <p className="">Hovered</p>
                </label>

                <label className="flex max-h-[4rem] max-w-[35rem] cursor-pointer items-center gap-6 rounded-xl bg-primary-800 py-6 px-6 text-400 font-bold leading-200 text-neutral-100/50">
                  <input
                    type="checkbox"
                    name="check-1"
                    className="aspect-square w-[1.6rem] cursor-pointer accent-primary-500"
                    readOnly
                    checked
                  />
                  <p className="text-primary-400 line-through">Completed</p>
                </label>
              </li>

              <li className="flex flex-col gap-4">
                <label className="block">
                  <span className="block text-300 font-bold text-primary-400">
                    Text Field (Idle)
                  </span>
                  <input
                    type="text"
                    name="task-name"
                    placeholder="Enter task name"
                    className="w-full rounded-xl border border-primary-400/25 px-6 py-5 text-400 font-medium text-primary-900 placeholder-primary-900/25 focus:border-primary-400/25 focus:outline-none"
                  />
                </label>
                <label className="leading-4 block">
                  <span className="block text-300 font-bold text-primary-400">
                    Text Field (Active)
                  </span>
                  <input
                    type="text"
                    name="task-name"
                    placeholder="Enter task name"
                    className="w-full rounded-xl border border-primary-400/25 px-6 py-5 text-400 font-medium text-primary-900 placeholder-primary-900 focus:border-primary-400/25 focus:outline-none"
                  />
                </label>

                <label className="leading-4 relative block">
                  <span className="block text-300 font-bold text-primary-400">
                    Text Field (Error)
                  </span>
                  <input
                    type="text"
                    name="task-name"
                    placeholder="Enter task name"
                    className="w-full rounded-xl border border-accent-200 px-6 py-5 text-400 font-medium text-primary-900 placeholder-primary-900/25 focus:border-primary-400/25 focus:outline-none"
                  />
                  <span className="body-100 absolute top-2/4 right-0 mr-6 text-accent-200">
                    Can’t be empty
                  </span>
                </label>
              </li>

              <li className="flex flex-col gap-4">label</li>
            </ul>
          </section>
        </section>
      </main>
    </>
  );
};

export default DesignSystem;

DesignSystem.getLayout = function getLayout(page) {
  return <>{page}</>;
};
