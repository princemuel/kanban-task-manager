export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <main className='relative flex min-h-screen flex-col bg-white text-brand-900 antialiased dark:bg-brand-800 dark:text-white'>
    //   <BaseLayout>{children}</BaseLayout>
    //   <Fragment>{modal}</Fragment>
    // </main>

    // <section className='flex min-h-screen flex-col bg-brand-700 md:pl-7 lg:pl-9'>
    //   <nav className='flex h-24 flex-row items-baseline justify-center'>
    //     <div className='flex h-full items-center border-r border-brand-600 md:w-[260px] lg:min-w-[300px]'>
    //       {/* Logo */}
    //       <Link href='/' className='text-4xl font-semibold'>
    //         kanban
    //       </Link>
    //     </div>
    //     {/* Logo */}

    //     {/* Others */}
    //     <div className='flex w-full justify-between px-6'>
    //       <h1 className='text-lg font-bold md:text-xl lg:text-2xl'>
    //         Platform Launch
    //       </h1>
    //       <div>
    //         <Button intent='primary' className='capitalize'>
    //           <span>+</span> <span className='hidden'>Add new task</span>
    //         </Button>
    //       </div>
    //     </div>
    //     {/* Others */}
    //   </nav>
    <section> {children}</section>
  );
}
