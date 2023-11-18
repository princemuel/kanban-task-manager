import { Button } from '@/components';

type Props = {};

const PageRoute = () => {
  return (
    // <div className='flex h-screen flex-row '>
    //   <aside className='hidden min-h-full border-r border-brand-600 md:flex md:w-[260px] lg:min-w-[300px]'>
    //     {/* top */}
    //     <div></div>
    //     {/* top */}
    //     {/* bottom */}
    //     <div></div>
    //     {/* bottom */}
    //   </aside>
    //   <main className='flex-1 bg-brand-800 px-6'>main</main>
    // </div>

    // FLEX SOLUTION

    // <div className='h-screen bg-brand-800'>
    //   <nav className='flex max-h-16 items-center bg-brand-700 md:max-h-20 lg:max-h-24'>
    //     {/* left */}
    //     <div className='border-none px-4 py-3 md:w-[260px] md:border-r md:border-solid md:border-r-brand-600 md:px-7 md:py-8 lg:w-[300px] lg:px-9 lg:py-8'>
    //       <h1 className='text-4xl font-semibold'>kanban</h1>
    //     </div>

    //     {/* right */}
    //     <div className='flex flex-1 items-center justify-between md:border-b md:border-brand-600'>
    //       <h1 className='text-600 font-bold md:px-7 md:py-6 md:text-700 md:text-xl lg:px-9 lg:py-8 lg:text-2xl'>
    //         Platform Launch
    //       </h1>
    //       <div>
    //         <Button intent='primary' className=''>
    //           Add new task
    //         </Button>
    //         ...
    //       </div>
    //     </div>
    //   </nav>
    //   <div className='flex h-screen'>
    //     <aside className='hidden md:flex md:w-[260px] md:border-r md:border-brand-600 md:bg-brand-700 md:px-6 lg:w-[300px] lg:px-8'>
    //       <p className='uppercase'>
    //         all boards <span>(3)</span>
    //       </p>
    //     </aside>
    //     <main className='flex-1 self-end p-8'>main</main>
    //   </div>
    // </div>

    // GRID SOLUTION
    <div className='grid h-screen grid-cols-[4rem_1fr] grid-rows-[4rem_1fr] bg-brand-800 md:grid-cols-[16.25rem_1fr] md:grid-rows-[5rem_1fr] lg:grid-cols-[18.75rem_1fr] lg:grid-rows-[6rem_1fr]'>
      <div className='border-brand-600 bg-brand-700 pl-9 pt-8 md:border-r '>
        <h1 className='hidden text-4xl font-semibold md:block'>kanban</h1>
      </div>
      <nav className='flex items-center justify-between border-b border-brand-600 bg-brand-700 p-6'>
        <h1 className='text-600 font-bold md:text-[20px] lg:text-700'>
          Platform Launch
        </h1>
        <div>
          <Button intent='primary' rounded='normal' className='capitalize'>
            + <span className='hidden md:inline'> Add new task</span>
          </Button>
        </div>
      </nav>
      <aside className='hidden flex-col justify-between border-r border-brand-600 bg-brand-700 pb-4 pl-9 md:flex'>
        <div>
          <p className='text-300 font-bold uppercase tracking-100 text-brand-400'>
            all boards <span>(3)</span>
          </p>
          <ul className='mt-8 flex flex-col items-start'>
            <li className='-ml-9 flex items-baseline justify-center rounded-r-3xl py-[14px] pl-9 pr-28 text-[15px] font-bold text-brand-400 hover:bg-brand-800 hover:text-white'>
              <span className='h-4 w-4 '>@</span>Platform Launch
            </li>
            <li className='-ml-9 flex items-baseline justify-center rounded-r-3xl py-[14px] pl-9 pr-28 text-[15px] font-bold text-brand-400 hover:bg-brand-800 hover:text-white'>
              <span className='h-4 w-4 '>@</span>Marketing Plan
            </li>
            <li className='-ml-9 flex items-baseline justify-center rounded-r-3xl py-[14px] pl-9 pr-28 text-[15px] font-bold text-brand-400 hover:bg-brand-800 hover:text-white'>
              <span className='h-4 w-4'>@</span>Roadmap
            </li>
          </ul>
        </div>

        <div>
          <div className='flex items-center justify-center gap-3 rounded-md bg-brand-800 py-[14px] md:w-[210px] lg:w-[250px]'>
            <div>eyes</div>
            <div>switch</div>
            <div>moon</div>
          </div>
          <div className='mt-[22px] text-500 font-bold text-brand-400'>
            <span>@</span>
            <span className='ml-[15px] '>Hide Sidebar</span>
          </div>
        </div>
      </aside>
      <main className='col-span-2 col-start-1 flex w-full flex-col items-center justify-center gap-6 p-6 md:col-span-1 md:col-start-2'>
        <p className='text-center text-600 font-bold text-brand-400 md:px-8'>
          This board is empty. Create a new column to get started.
        </p>
        <Button intent='primary' className='capitalize'>
          + add new column
        </Button>
      </main>
    </div>
  );
};

export default PageRoute;
