import { icons } from 'common';
import Head from 'next/head';
import { GlobalWrap } from 'styles';
import type { NextPageWithLayout } from 'types';

const DesignSystem: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Design System</title>
      </Head>

      <header className='p-8'>
        <GlobalWrap className='px-20 flex items-center justify-between'>
          <div className='logo'>
            <icons.logo.dark />
          </div>

          <h1 className='text-primary-900 text-700 font-bold'>Design System</h1>
        </GlobalWrap>
      </header>

      <main>
        <GlobalWrap
          as='section'
          className='m-20 px-20 | flow'
          aria-labelledby='colors'
        >
          <header className='mb-10'>
            <h2 id='colors' className='text-700 font-bold'>
              <span className='text-primary-500'>01</span>
              <span className='ml-6 text-primary-900'>Colors</span>
            </h2>
          </header>

          <ul
            role={'list'}
            className='grid grid-cols-fit-big gap-10 | flow-space--none'
          >
            <li className='flex items-center justify-center p-14 rounded-xl text-neutral bg-primary-500 text-500 font-bold uppercase'>
              #635fc7
            </li>
            <li className='flex items-center justify-center p-14 rounded-xl text-neutral bg-primary-300 text-500 font-bold uppercase'>
              #a8a4ff
            </li>
            <li className='flex items-center justify-center p-14 rounded-xl text-neutral bg-primary-900 text-500 font-bold uppercase'>
              #000112
            </li>
            <li className='flex items-center justify-center p-14 rounded-xl text-neutral bg-primary-800 text-500 font-bold uppercase'>
              #20212c
            </li>

            <li className='flex items-center justify-center p-14 rounded-xl text-neutral bg-primary-700 text-500 font-bold uppercase'>
              #2b2c37
            </li>
            <li className='flex items-center justify-center p-14 rounded-xl text-neutral bg-primary-600 text-500 font-bold uppercase'>
              #3e3f4e
            </li>
            <li className='flex items-center justify-center p-14 rounded-xl text-neutral bg-primary-400 text-500 font-bold uppercase'>
              #828fa3
            </li>
            <li className='flex items-center justify-center p-14 rounded-xl text-primary-700 bg-primary-200 text-500 font-bold uppercase'>
              #e4ebfa
            </li>

            <li className='flex items-center justify-center p-14 rounded-xl text-primary-700 bg-primary-100 text-500 font-bold uppercase'>
              #f4f7fd
            </li>
            <li className='flex items-center justify-center p-14 border border-primary-200 rounded-xl text-primary-700 bg-neutral text-500 font-bold uppercase'>
              #ffffff
            </li>
            <li className='flex items-center justify-center p-14 rounded-xl text-neutral bg-accent-200 text-500 font-bold uppercase'>
              #ea5555
            </li>
            <li className='flex items-center justify-center p-14 rounded-xl text-neutral bg-accent-100 text-500 font-bold uppercase'>
              #ff9898
            </li>
          </ul>
        </GlobalWrap>

        <GlobalWrap
          as='section'
          className='m-20 px-20 | flow'
          aria-labelledby='typography'
        >
          <header className='mb-10'>
            <h2 id='typography' className='text-700 font-bold'>
              <span className='text-primary-500'>02</span>
              <span className='ml-6 text-primary-900'>Typography</span>
            </h2>
          </header>

          <div className='grid md:grid-flow-col md:auto-cols-fr gap-10'>
            <div className=''>
              <div className='mb-16'>
                <p className='mb-2 text-primary-400 text-400 font-medium'>
                  <span className=''>Plus Jakarta Sans</span>
                  <span className='ml-4 text-primary-900 font-medium'>
                    Bold
                  </span>
                  <span className='ml-4'>24px</span>
                  <span className='ml-4'>30px Line</span>
                </p>
                <p className='text-primary-900 text-700 font-bold leading-500'>
                  Heading (XL)
                </p>
              </div>
              <div className='mb-16'>
                <p className='mb-2 text-primary-400 text-400 font-medium'>
                  <span className=''>Plus Jakarta Sans</span>
                  <span className='ml-4 text-primary-900 font-medium'>
                    Bold
                  </span>
                  <span className='ml-4'>18px</span>
                  <span className='ml-4'>23px Line</span>
                </p>
                <p className='text-primary-900 text-600 leading-400 font-bold'>
                  Heading (L)
                </p>
              </div>
              <div className='mb-16'>
                <p className='mb-2 text-primary-400 text-400 font-medium'>
                  <span className=''>Plus Jakarta Sans</span>
                  <span className='ml-4 text-primary-900 font-medium'>
                    Bold
                  </span>
                  <span className='ml-4'>15px</span>
                  <span className='ml-4'>19px Line</span>
                </p>
                <p className='text-primary-900 text-500 leading-300 font-bold'>
                  Heading (M)
                </p>
              </div>

              <div className='mb-16'>
                <p className='mb-2 text-primary-400 text-400 font-medium'>
                  <span className=''>Plus Jakarta Sans</span>
                  <span className='ml-4 text-primary-900 font-medium'>
                    Bold
                  </span>
                  <span className='ml-4'>12px</span>
                  <span className='ml-4'>15px Line</span>
                  <span className='ml-4'>2.4px Kerning</span>
                </p>
                <p className='text-primary-400 text-300 leading-200 font-bold'>
                  Heading ( S )
                </p>
              </div>
            </div>

            <div className='flow-space--none'>
              <div className='mb-16'>
                <p className='mb-2 text-primary-400 text-400 font-medium'>
                  <span className=''>Plus Jakarta Sans</span>
                  <span className='ml-4 text-primary-900 font-medium'>
                    Medium
                  </span>
                  <span className='ml-4'>13px</span>
                  <span className='ml-4'>23px Line</span>
                </p>
                <p className='text-primary-700 text-400 leading-400 font-medium'>
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

              <div className='mb-16'>
                <p className='mb-2 text-primary-400 text-400 font-medium'>
                  <span className=''>Plus Jakarta Sans</span>
                  <span className='ml-4 text-primary-900 font-medium'>
                    Medium
                  </span>
                  <span className='ml-4'>12px</span>
                  <span className='ml-4'>25px Line</span>
                </p>
                <p className='text-primary-700 text-300 leading-200 font-bold'>
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
        </GlobalWrap>

        <section
          className='m-20 px-20 | flow'
          aria-labelledby='interactive-elements'
        >
          <GlobalWrap as='header' className='mb-10 px-20'>
            <h2 id='interactive-elements' className='text-700 font-bold'>
              <span className='text-primary-500'>03</span>
              <span className='ml-6 text-primary-900'>
                Interactive Elements
              </span>
            </h2>
          </GlobalWrap>

          <GlobalWrap className='light-version p-20'>
            <p className='mb-10 text-primary-400 text-600 font-bold leading-400'>
              Light Version
            </p>

            <ul
              role='list'
              className='mb-10 grid grid-cols-fit-big items-end gap-10'
            >
              <li>
                <button
                  type='button'
                  className='py-6 px-24 rounded-pill text-neutral bg-primary-500 hover:bg-primary-300 text-500 font-bold leading-300 transition-colors'
                >
                  Button Primary (L)
                </button>
                <p className='text-primary-400 text-400 leading-400 font-medium text-center'>
                  Idle
                </p>
              </li>
              <li>
                <button
                  type='button'
                  className='py-4 px-24 rounded-pill text-neutral bg-primary-500 hover:bg-primary-300 text-400 font-bold leading-400 transition-colors'
                >
                  Button Primary (S)
                </button>
                <p className='text-primary-400 text-400 leading-400 font-medium text-center'>
                  Idle
                </p>
              </li>
              <li>
                <button
                  type='button'
                  className='py-4 px-24 rounded-pill text-primary-500 bg-primary-500/10 hover:bg-primary-500/25 text-400 font-bold leading-400 transition-colors'
                >
                  Button Secondary
                </button>
                <p className='text-primary-400 text-400 leading-400 font-medium text-center'>
                  Idle
                </p>
              </li>
              <li>
                <button
                  type='button'
                  className='py-4 px-24 rounded-pill text-neutral bg-accent-200 hover:bg-accent-100 text-400 font-bold leading-400 transition-colors'
                >
                  Button Destructive
                </button>
                <p className='text-primary-400 text-400 leading-400 font-medium text-center'>
                  Idle
                </p>
              </li>

              <li>
                <button
                  type='button'
                  className='py-6 px-24 rounded-pill text-neutral bg-primary-300 text-500 font-bold leading-300'
                >
                  Button Primary (L)
                </button>
                <p className='text-primary-400 text-400 leading-400 font-medium text-center'>
                  Hover
                </p>
              </li>

              <li>
                <button
                  type='button'
                  className='py-4 px-24 rounded-pill text-neutral bg-primary-300 text-400 font-bold leading-400'
                >
                  Button Primary (S)
                </button>
                <p className='text-primary-400 text-400 leading-400 font-medium text-center'>
                  Hover
                </p>
              </li>
              <li>
                <button
                  type='button'
                  className='py-4 px-24 rounded-pill text-primary-500 bg-primary-500/25 text-400 font-bold leading-400'
                >
                  Button Secondary
                </button>
                <p className='text-primary-400 text-400 leading-400 font-medium text-center'>
                  Hover
                </p>
              </li>
              <li>
                <button
                  type='button'
                  className='py-4 px-24 rounded-pill text-neutral bg-accent-100 text-400 font-bold leading-400'
                >
                  Button Destructive
                </button>
                <p className='text-primary-400 text-400 leading-400 font-medium text-center'>
                  Hover
                </p>
              </li>
            </ul>

            <ul
              role='list'
              className='mb-10 grid grid-cols-fit-big items-start gap-10 flow-space--none'
            >
              <li className='flex flex-col gap-4'>
                <p className='text-primary-400 text-300'>Subtask Checkbox</p>
                <label className='flex items-center gap-6 py-6 px-6 rounded-xl text-primary-900 bg-primary-100 hover:bg-primary-500/25 text-400 leading-200 font-bold cursor-pointer'>
                  <input
                    type='checkbox'
                    name='check-1'
                    className='w-[1.6rem] aspect-square accent-primary-500 cursor-pointer'
                  />
                  <p className=''>Idle</p>
                </label>

                <label className='flex items-center gap-6 py-6 px-6 rounded-xl text-primary-900 bg-primary-500/25 text-400 leading-200 font-bold cursor-pointer'>
                  <input
                    type='checkbox'
                    name='check-1'
                    className='w-[1.6rem] aspect-square accent-primary-500 cursor-pointer'
                  />
                  <p className=''>Hovered</p>
                </label>

                <label className='flex items-center gap-6 py-6 px-6 rounded-xl text-primary-900 bg-primary-100 text-400 leading-200 font-bold cursor-pointer'>
                  <input
                    type='checkbox'
                    name='check-1'
                    className='w-[1.6rem] aspect-square accent-primary-500 cursor-pointer'
                    readOnly
                    checked
                  />
                  <p className='text-primary-400 line-through'>Completed</p>
                </label>
              </li>

              <li className='flex flex-col gap-4'>
                <label className='block'>
                  <span className='block text-primary-400 text-300 font-bold'>
                    Text Field (Idle)
                  </span>
                  <input
                    type='text'
                    name='task-name'
                    placeholder='Enter task name'
                    className='w-full px-6 py-5 border rounded-xl border-primary-400/25 text-400 text-primary-900 font-medium placeholder-primary-900/25 focus:border-primary-400/25 focus:outline-none'
                  />
                </label>
                <label className='block leading-4'>
                  <span className='block text-primary-400 text-300 font-bold'>
                    Text Field (Active)
                  </span>
                  <input
                    type='text'
                    name='task-name'
                    placeholder='Enter task name'
                    className='w-full px-6 py-5 border rounded-xl border-primary-400/25 text-400 text-primary-900 font-medium placeholder-primary-900 focus:border-primary-400/25 focus:outline-none'
                  />
                </label>

                <label className='relative block leading-4'>
                  <span className='block text-primary-400 text-300 font-bold'>
                    Text Field (Error)
                  </span>
                  <input
                    type='text'
                    name='task-name'
                    placeholder='Enter task name'
                    className='w-full px-6 py-5 border rounded-xl border-accent-200 text-400 text-primary-900 font-medium placeholder-primary-900/25 focus:border-primary-400/25 focus:outline-none'
                  />
                  <span className='absolute top-2/4 right-0 mr-6 text-accent-200 text-400 font-medium'>
                    Can’t be empty
                  </span>
                </label>
              </li>

              <li className='flex flex-col gap-4'>label</li>
            </ul>
          </GlobalWrap>

          <GlobalWrap className='dark-version p-20 bg-primary-700'>
            <p className='mb-10 text-primary-400 text-600 font-bold leading-400'>
              Dark Version
            </p>

            <ul
              role='list'
              className='mb-10 grid grid-cols-fit-big items-end gap-10'
            >
              <li>
                <button
                  type='button'
                  className='py-6 px-24 rounded-pill text-neutral bg-primary-500 hover:bg-primary-300 text-500 font-bold leading-300 transition-colors'
                >
                  Button Primary (L)
                </button>
                <p className='text-primary-400 text-400 leading-400 font-medium text-center'>
                  Idle
                </p>
              </li>
              <li>
                <button
                  type='button'
                  className='py-4 px-24 rounded-pill text-neutral bg-primary-500 hover:bg-primary-300 text-400 font-bold leading-400 transition-colors'
                >
                  Button Primary (S)
                </button>
                <p className='text-primary-400 text-400 leading-400 font-medium text-center'>
                  Idle
                </p>
              </li>
              <li>
                <button
                  type='button'
                  className='py-4 px-24 rounded-pill text-primary-500 bg-neutral hover:bg-neutral text-400 font-bold leading-400 transition-colors'
                >
                  Button Secondary
                </button>
                <p className='text-primary-400 text-400 leading-400 font-medium text-center'>
                  Idle
                </p>
              </li>
              <li>
                <button
                  type='button'
                  className='py-4 px-24 rounded-pill text-neutral bg-accent-200 hover:bg-accent-100 text-400 font-bold leading-400 transition-colors'
                >
                  Button Destructive
                </button>
                <p className='text-primary-400 text-400 leading-400 font-medium text-center'>
                  Idle
                </p>
              </li>

              <li>
                <button
                  type='button'
                  className='py-6 px-24 rounded-pill text-neutral bg-primary-300 text-500 font-bold leading-300'
                >
                  Button Primary (L)
                </button>
                <p className='text-primary-400 text-400 leading-400 font-medium text-center'>
                  Hover
                </p>
              </li>

              <li>
                <button
                  type='button'
                  className='py-4 px-24 rounded-pill text-neutral bg-primary-300 text-400 font-bold leading-400'
                >
                  Button Primary (S)
                </button>
                <p className='text-primary-400 text-400 leading-400 font-medium text-center'>
                  Hover
                </p>
              </li>
              <li>
                <button
                  type='button'
                  className='py-4 px-24 rounded-pill text-primary-500 bg-neutral hover:bg-neutral text-400 font-bold leading-400 transition-colors'
                >
                  Button Secondary
                </button>
                <p className='text-primary-400 text-400 leading-400 font-medium text-center'>
                  Hover
                </p>
              </li>
              <li>
                <button
                  type='button'
                  className='py-4 px-24 rounded-pill text-neutral bg-accent-100 text-400 font-bold leading-400'
                >
                  Button Destructive
                </button>
                <p className='text-primary-400 text-400 leading-400 font-medium text-center'>
                  Hover
                </p>
              </li>
            </ul>

            <ul
              role='list'
              className='mb-10 grid grid-cols-fit-big items-start gap-10 flow-space--none'
            >
              <li className='flex flex-col gap-4'>
                <p className='text-neutral text-300'>Subtask Checkbox</p>
                <label className='flex items-center gap-6 max-w-[35rem] max-h-[4rem] py-6 px-6 rounded-xl text-neutral bg-primary-800 hover:bg-primary-500/25 text-400 leading-200 font-bold cursor-pointer'>
                  <input
                    type='checkbox'
                    name='check-1'
                    className='w-[1.6rem] aspect-square accent-primary-500 cursor-pointer'
                  />
                  <p className=''>Idle</p>
                </label>

                <div className='flex flex-col gap-4'>
                  <p className='text-neutral text-300'>Subtask Checkbox</p>

                  <label className='relative flex items-center gap-6 max-w-[35rem] max-h-[4rem] py-6 px-6 rounded-xl text-neutral bg-primary-800 hover:bg-primary-500/25 text-400 leading-200 font-bold cursor-pointer'>
                    <span className='flex items-center justify-center w-[1.4rem] aspect-square rounded-sm bg-primary-700 checked:bg-primary-500'>
                      <span className='sr-only'>check off task</span>
                      <icons.board.check />
                    </span>
                    <input type='checkbox' className='sr-only' />
                    <p className=''>Idle</p>
                  </label>
                </div>

                <label className='flex items-center gap-6 max-w-[35rem] max-h-[4rem] py-6 px-6 rounded-xl text-neutral bg-primary-500/25 text-400 leading-200 font-bold cursor-pointer'>
                  <input
                    type='checkbox'
                    name='check-1'
                    className='w-[1.6rem] aspect-square accent-primary-500 cursor-pointer'
                  />
                  <p className=''>Hovered</p>
                </label>

                <label className='flex items-center gap-6 max-w-[35rem] max-h-[4rem] py-6 px-6 rounded-xl text-neutral/50 bg-primary-800 text-400 leading-200 font-bold cursor-pointer'>
                  <input
                    type='checkbox'
                    name='check-1'
                    className='w-[1.6rem] aspect-square accent-primary-500 cursor-pointer'
                    readOnly
                    checked
                  />
                  <p className='text-primary-400 line-through'>Completed</p>
                </label>
              </li>

              <li className='flex flex-col gap-4'>
                <label className='block'>
                  <span className='block text-primary-400 text-300 font-bold'>
                    Text Field (Idle)
                  </span>
                  <input
                    type='text'
                    name='task-name'
                    placeholder='Enter task name'
                    className='w-full px-6 py-5 border rounded-xl border-primary-400/25 text-400 text-primary-900 font-medium placeholder-primary-900/25 focus:border-primary-400/25 focus:outline-none'
                  />
                </label>
                <label className='block leading-4'>
                  <span className='block text-primary-400 text-300 font-bold'>
                    Text Field (Active)
                  </span>
                  <input
                    type='text'
                    name='task-name'
                    placeholder='Enter task name'
                    className='w-full px-6 py-5 border rounded-xl border-primary-400/25 text-400 text-primary-900 font-medium placeholder-primary-900 focus:border-primary-400/25 focus:outline-none'
                  />
                </label>

                <label className='relative block leading-4'>
                  <span className='block text-primary-400 text-300 font-bold'>
                    Text Field (Error)
                  </span>
                  <input
                    type='text'
                    name='task-name'
                    placeholder='Enter task name'
                    className='w-full px-6 py-5 border rounded-xl border-accent-200 text-400 text-primary-900 font-medium placeholder-primary-900/25 focus:border-primary-400/25 focus:outline-none'
                  />
                  <span className='absolute top-2/4 right-0 mr-6 text-accent-200 text-400 font-medium'>
                    Can’t be empty
                  </span>
                </label>
              </li>

              <li className='flex flex-col gap-4'>label</li>
            </ul>
          </GlobalWrap>
        </section>
      </main>
    </>
  );
};

export default DesignSystem;

DesignSystem.getLayout = function getLayout(page) {
  return <>{page}</>;
};