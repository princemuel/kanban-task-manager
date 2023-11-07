import { icons } from '@/common';
import NextLink from 'next/link';

type Props = {};
// supercharge your workflow

async function PageRoute(props: Props) {
  return (
    <>
      <main className='h-screen w-full  font-accent'>
        <div className='relative flex h-full'>
          <section className='mx-auto flex-1 ps-40'>
            <div className='flex flex-col gap-28 pt-16'>
              <NextLink href={'/'}>
                <icons.logo.light />
              </NextLink>

              <div className='flex flex-col items-start gap-16'>
                <div className='flex flex-col gap-6'>
                  <div className='flex items-center gap-5'>
                    <p className='rounded-pill bg-brand-700 px-4 py-1 text-base font-bold uppercase text-white'>
                      New
                    </p>
                    <p className='text-base uppercase tracking-[5px] text-brand-700/50'>
                      Monograph Dashbord
                    </p>
                  </div>

                  <header className='flex w-full max-w-md flex-col gap-6'>
                    <h1 className='break-words text-6xl font-bold uppercase text-brand-700'>
                      Powerful Insights Into Your Team
                    </h1>

                    <p
                      aria-label='lead'
                      className='font-sans text-lg font-normal text-brand-700/75 '
                    >
                      Project planning and time tracking for agile teams
                    </p>
                  </header>
                </div>

                <div className='flex items-center gap-2'>
                  <NextLink
                    href='/'
                    className='inline-flex h-10 items-center rounded-md bg-accent-200 px-5 py-4 text-base font-bold uppercase text-white transition-colors duration-300 hover:bg-accent-100 focus:bg-accent-100 md:h-12'
                  >
                    Schedule A Demo
                  </NextLink>

                  <NextLink
                    href='/'
                    className='inline-flex h-10 items-center rounded-md bg-brand-500 px-5 py-4 text-base font-bold uppercase text-white transition-colors duration-300 hover:bg-blue-300 focus:bg-accent-100 md:h-12'
                  >
                    See A Preview
                  </NextLink>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-1 flex-col bg-[url('/illustration-devices.svg')] bg-contain bg-center bg-no-repeat">
            <div className='flex-1 pt-16'>
              <span className='absolute right-0 top-0 -z-20 h-[50vh] w-[50vw] rounded-b-[3.75rem] bg-brand-100' />
              <ul className='flex items-center justify-center gap-10'>
                {['product', 'features', 'pricing'].map((current) => (
                  <li
                    key={current}
                    className='text-base font-bold uppercase text-brand-700'
                  >
                    <NextLink
                      href={'/'}
                      className='hover:underline focus:underline'
                    >
                      {current}
                    </NextLink>
                  </li>
                ))}

                <li className='text-base font-bold uppercase text-brand-700/50'>
                  <NextLink
                    href={'/signin'}
                    className='hover:underline focus:underline'
                  >
                    login
                  </NextLink>
                </li>
              </ul>
            </div>
            <div className='flex-1' />
          </section>
        </div>
      </main>
    </>
  );
}

export default PageRoute;
