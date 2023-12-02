import Link from "next/link";

type Props = {};

const PageRoute = () => {
  return (
    <div className="h-full">
      <div className="absolute top-0 mx-auto w-full px-8 pt-6 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-10">
          <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
            Logo
            <div className="flex w-full items-center justify-between md:w-auto">
              hello
            </div>
          </div>
        </nav>
      </div>

      <div className="flex min-h-full">
        <main className="flex flex-1 flex-shrink-0 flex-col items-center border-r border-[#2E2E2E] bg-[#1C1C1C] px-5 pb-8 pt-16 shadow-lg">
          <div className="flex w-[330px] flex-1 flex-col justify-center sm:w-[384px]">
            <div className="mb-10">
              <h1 className="mb-2 mt-8 text-2xl text-[#EDEDED] lg:text-3xl">
                Welcome back
              </h1>
              <h2 className="text-sm text-[#A0A0A0]">
                Sign in to your account
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <button
                type="button"
                className="font-regular bg-button hover:bg-selection hover:[#4f4f] relative flex w-full cursor-pointer items-center justify-center space-x-2 rounded-md border border-[##343434] px-4 py-2 text-center text-base text-[#EDEDED] shadow-sm outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1 focus-visible:outline-brand-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sbui-icon"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>{" "}
                <span className="truncate">Continue with GitHub</span>{" "}
              </button>
              <a
                type="button"
                className="font-regular hover:border-[#3D3D3D]er focus-visible:outline-border-[#3D3D3D] relative flex w-full cursor-pointer items-center justify-center space-x-2 rounded-md border border-[#3D3D3D] bg-transparent px-4 py-2 text-center text-base text-[#EDEDED] outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1"
                href="/dashboard/sign-in-sso"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sbui-icon"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span className="truncate">Continue with SSO</span>
              </a>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#3D3D3D]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-[#1C1C1C] px-2 text-sm text-[#EDEDED]">
                    or
                  </span>
                </div>
              </div>
              <form>
                <div className="flex flex-col gap-4">
                  <div className="grid gap-2 text-sm md:grid md:grid-cols-12">
                    <div className="col-span-12 flex flex-row justify-between space-x-2">
                      <label
                        className="block text-sm text-[#A0A0A0]"
                        htmlFor="email"
                      >
                        Email
                      </label>
                    </div>
                    <div className="col-span-12">
                      <div className="">
                        <div className="relative">
                          <input
                            autoComplete="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            type="email"
                            className="peer/input  focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border border px-4 py-2 text-sm text-[#EDEDED]   shadow-sm outline-none transition-all  focus:ring-2 focus:ring-current focus-visible:shadow-md"
                          />
                        </div>
                      </div>
                      <p
                        data-state="hide"
                        className="
        data-show:mt-2
        data-show:animate-slide-down-normal
        data-hide:animate-slide-up-normal
        text-sm
        text-red-900
       transition-all"
                      ></p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="grid gap-2 text-sm md:grid md:grid-cols-12">
                      <div className="col-span-12 flex flex-row justify-between space-x-2">
                        <label
                          className="block text-sm text-[#A0A0A0]"
                          htmlFor="password"
                        >
                          Password
                        </label>
                      </div>
                      <div className="col-span-12">
                        <div className="">
                          <div className="relative">
                            <input
                              autoComplete="current-password"
                              id="password"
                              name="password"
                              placeholder="••••••••"
                              type="password"
                              className="peer/input  focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border border px-4 py-2 text-sm text-[#EDEDED]   shadow-sm outline-none transition-all  focus:ring-2 focus:ring-current focus-visible:shadow-md"
                            />
                          </div>
                        </div>
                        <p
                          data-state="hide"
                          className="
        data-show:mt-2
        data-show:animate-slide-down-normal
        data-hide:animate-slide-up-normal
        text-sm
        text-red-900
       transition-all"
                        ></p>
                      </div>
                    </div>
                    <a
                      className="absolute right-0 top-0 text-sm text-[#7E7E7E]"
                      href="/dashboard/forgot-password"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="self-center">
                    <div>
                      <iframe
                        aria-hidden="true"
                        data-hcaptcha-widget-id="0dhiazyobfyu"
                        data-hcaptcha-response=""
                        style={{ display: "none" }}
                      ></iframe>
                      <textarea
                        id="g-recaptcha-response-0dhiazyobfyu"
                        name="g-recaptcha-response"
                        style={{ display: "none" }}
                      ></textarea>
                      <textarea
                        id="h-captcha-response-0dhiazyobfyu"
                        name="h-captcha-response"
                        style={{ display: "none" }}
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    form="signIn-form"
                    className="font-regular border-brand relative flex w-full cursor-pointer items-center justify-center space-x-2 rounded-md border bg-brand-500 px-4 py-2 text-center text-base text-white shadow-sm outline-none outline-0 transition-all duration-200 ease-out hover:bg-brand-300 focus-visible:outline-4 focus-visible:outline-offset-1 focus-visible:outline-brand-600"
                  >
                    {" "}
                    <span className="truncate">Sign In</span>{" "}
                  </button>
                </div>
              </form>
            </div>
            <div className="my-8 self-center text-sm">
              <div>
                <span className="text-[#A0A0A0]">
                  Don&apos;t have an account?
                </span>{" "}
                <Link
                  className="text-[#EDEDED] underline transition hover:text-[#A0A0A0]"
                  href="/dashboard/sign-up"
                >
                  Sign Up Now
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:text-center">
            <p className="text-xs text-[#7E7E7E] sm:mx-auto sm:max-w-sm">
              By continuing, you agree to Supabase&apos;s{" "}
              <a
                className="underline hover:text-[#A0A0A0]"
                href="https://supabase.com/terms"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="underline hover:text-[#A0A0A0]"
                href="https://supabase.com/privacy"
              >
                Privacy Policy
              </a>
              , and to receive periodic emails with updates.
            </p>
          </div>
        </main>
        <aside className="hidden flex-1 flex-shrink basis-1/4 flex-col items-center justify-center xl:flex">
          <div className="relative flex flex-col gap-6">
            <div className="absolute -left-11 -top-12 select-none">
              <span className="text-[160px] leading-none text-[hsl(0,_0%,_19%)]">
                “
              </span>
            </div>
            <blockquote className="z-10 max-w-lg text-3xl">
              This weekend I made a personal record 🥇 on the less time spent
              creating an application with social login / permissions, database,
              cdn, infinite scaling, git push to deploy and for free. Thanks to
              @supabase and @vercel
            </blockquote>
            <a
              href="https://twitter.com/jperelli/status/1366195769657720834"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4"
            >
              <img
                src="https://supabase.com/images/twitter-profiles/_ki30kYo_400x400.jpg"
                alt="jperelli"
                className="h-12 w-12 rounded-full"
              />
              <div className="flex flex-col">
                <cite className="whitespace-nowrap font-medium not-italic text-[#A0A0A0]">
                  @jperelli
                </cite>
              </div>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PageRoute;
