import { LogoDark } from 'common';
import type { NextPage } from 'next';
import Image from 'next/future/image';
import Head from 'next/head';
import { GlobalWrap } from 'styles';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kanban Task Manager</title>
      </Head>

      <header className='p-8'>
        <GlobalWrap className='flex items-center justify-between'>
          <div className='logo'>
            <Image src={LogoDark} alt='logo' />
          </div>

          <h1 className='text-primary-900 text-700 font-bold'>Design System</h1>
        </GlobalWrap>
      </header>

      <main>
        <GlobalWrap
          as='section'
          className='m-20 | flow'
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
          className='m-20 | flow'
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

        <GlobalWrap
          as='section'
          className='m-20 | flow'
          aria-labelledby='interactive-elements'
        >
          <header className='mb-10'>
            <h2 id='interactive-elements' className='text-700 font-bold'>
              <span className='text-primary-500'>03</span>
              <span className='ml-6 text-primary-900'>
                Interactive Elements
              </span>
            </h2>
          </header>

          <div className='light-version'>
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
                    className='w-7 aspect-square accent-primary-500 cursor-pointer'
                  />
                  <p className=''>Idle</p>
                </label>

                <label className='flex items-center gap-6 py-6 px-6 rounded-xl text-primary-900 bg-primary-500/25 text-400 leading-200 font-bold cursor-pointer'>
                  <input
                    type='checkbox'
                    name='check-1'
                    className='w-7 aspect-square accent-primary-500 cursor-pointer'
                  />
                  <p className=''>Hovered</p>
                </label>

                <label className='flex items-center gap-6 py-6 px-6 rounded-xl text-primary-900 bg-primary-100 text-400 leading-200 font-bold cursor-pointer'>
                  <input
                    type='checkbox'
                    name='check-1'
                    className='w-7 aspect-square accent-primary-500 cursor-pointer'
                    readOnly
                    checked
                  />
                  <p className='text-primary-400 line-through'>Completed</p>
                </label>
              </li>

              <li className='flex flex-col gap-4'>
                <label className='block flow flow-space--sm'>
                  <span className='block text-primary-400 text-300 font-bold'>
                    Text Field (Idle)
                  </span>
                  <input
                    type='text'
                    name='task-name'
                    placeholder='Enter task name'
                    className='w-full px-6 py-5 border rounded-xl border-primary-400/25 text-400 text-primary-900 font-bold placeholder-primary-900/25 focus:border-primary-400/25 focus:outline-none'
                  />
                </label>
              </li>

              <li className='flex flex-col gap-4'>label</li>
            </ul>
          </div>

          <div className='dark-version'>
            <p className='mb-10 text-primary-400 text-600 font-bold leading-400'>
              Dark Version
            </p>
          </div>
        </GlobalWrap>
      </main>
    </>
  );
};

export default Home;
