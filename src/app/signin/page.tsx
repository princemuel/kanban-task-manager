import { Github } from 'lucide-react';
import NextLink from 'next/link';

type Props = {};

const PageRoute = () => {
  return (
    <div className='flex min-h-full bg-white font-sans'>
      {/* <h1 className='font-sans text-3xl font-bold text-black'>Sign In Page</h1> */}
      <main className='flex flex-1 flex-shrink-0 flex-col items-center border-r border-[#E6E8EB] bg-[#f8f9fa] px-5 pb-8 pt-16 shadow-lg'>
        <div className='flex w-[20.7rem] flex-col justify-between sm:w-96'>
          <header className='mb-10'>
            <h1 className='mb-2 mt-8 text-2xl font-medium lg:text-3xl'>
              Welcome back
            </h1>
            <p className='text-xs font-medium text-[#687076]'>
              Sign in to your account
            </p>
          </header>

          <div className='flex flex-col gap-5'>
            <button
              type='button'
              className='text-foreground hover:bg-selection dark:bg-surface-300 hover:dark:bg-selection border-control hover:border-strong dark:border-strong hover:dark:border-stronger relative flex w-full items-center justify-center space-x-2 rounded-md border bg-[#fbfcfd] px-4 py-2 text-center text-base font-medium shadow-sm outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1 focus-visible:outline-brand-600'
            >
              <Github size={20} strokeWidth={1} />
              <span className='truncate'>Continue with GitHub</span>
            </button>

            <button
              type='button'
              className='text-foreground hover:bg-selection dark:bg-surface-300 hover:dark:bg-selection border-control hover:border-strong dark:border-strong hover:dark:border-stronger relative flex w-full items-center justify-center space-x-2 rounded-md border bg-[#fbfcfd] px-4 py-2 text-center text-base font-medium shadow-sm outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1 focus-visible:outline-brand-600'
            >
              <Github size={20} strokeWidth={1} />
              <span className='truncate'>Continue with GitHub</span>
            </button>

            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t border-[#DBDBDB] dark:border-[#3E3E3E]' />
              </div>
              <div className='relative flex justify-center text-xs font-medium'>
                <span className='text-foreground bg-[#F8F9FA] px-2'>or</span>
              </div>
            </div>

            <form id='signIn-form'>
              <div className='flex flex-col gap-4'>
                <div className='grid gap-2 text-sm md:grid md:grid-cols-12'></div>
                <div className='relative'>
                  <div className='grid gap-2 text-xs md:grid-cols-12'></div>
                  <a
                    className='text-foreground-lighter absolute right-0 top-0 text-xs'
                    href='/dashboard/forgot-password'
                  >
                    Forgot Password?
                  </a>
                </div>
                <button
                  type='submit'
                  form='signIn-form'
                  className='font-regular dark:bg-brand/70 dark:hover:bg-brand border-brand dark:border-brand relative flex w-full cursor-pointer items-center justify-center space-x-2 rounded-md border bg-brand-600 px-4 py-2 text-center text-base text-white shadow-sm outline-none outline-0 transition-all duration-200 ease-out hover:bg-brand-600/80 focus-visible:outline-4 focus-visible:outline-offset-1 focus-visible:outline-brand-600'
                >
                  <span className='truncate'>Sign In</span>{' '}
                </button>
              </div>
            </form>
          </div>

          <div className='my-8 self-center text-sm font-medium'>
            <div className='flex items-center gap-1'>
              <span className='text-foreground-light'>
                Don&apos;t have an account?
              </span>
              <NextLink
                href='/register'
                className='text-foreground hover:text-foreground-light underline transition'
              >
                Sign Up Now
              </NextLink>
            </div>
          </div>
        </div>
      </main>
      <aside className='hidden flex-1 flex-shrink basis-1/4 flex-col items-center justify-center bg-white xl:flex'></aside>
    </div>
  );
};

export default PageRoute;
