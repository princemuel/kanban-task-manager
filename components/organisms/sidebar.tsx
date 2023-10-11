// 'use client';

// import styles from '@/assets/styles/layout.module.scss';
// import { icons } from '@/common';
// import { cn, useSidebar } from '@/lib';
// import { Button, NavLink, Text } from '../atoms';
// import { ThemeSwitch } from '../molecules';

// interface Props {}

// const links = [
//   { route: '/' },
//   { route: '/a' },
//   { route: '/b' },
//   { route: '/c' },
//   { route: '/d' },
// ];

// const Sidebar = ({}: Props) => {
//   const sidebar = useSidebar();

//   return (
//     <aside
//       // data-expanded={sidebar.show}
//       className={cn(
//         'relative flex flex-col border-r border-brand-200 bg-white dark:border-brand-600 dark:bg-brand-700',
//         styles.sidebar
//       )}
//     >
//       <div className={cn('sticky top-0 flex flex-col')}>
//         <div className='mx-12 my-6'>
//           <Text
//             intent={'secondary'}
//             size={'xs'}
//             weight={'bold'}
//             className='uppercase'
//           >
//             All Boards ({links?.length})
//           </Text>
//         </div>
//         <nav>
//           <ul aria-label='Board Links'>
//             {links.map((link) => {
//               return (
//                 <li key={link.route} className={cn('')}>
//                   <NavLink
//                     // @ts-expect-error
//                     href={link.route}
//                     className={cn(
//                       'group mr-6 flex items-center gap-6 rounded-r-pill px-12 py-5 aria-[current="page"]:bg-brand-500 hover:bg-brand-500/10 active:bg-brand-500/10 dark:hover:bg-white dark:active:bg-white'
//                     )}
//                   >
//                     <icons.board.board className='text-brand-400 group-hover:text-brand-500 group-active:text-brand-500 group-aria-[current="page"]:text-white group-aria-[current="page"]:group-hover:text-brand-500 group-aria-[current="page"]:group-active:text-brand-500' />
//                     <span
//                       className={cn(
//                         'text-500 font-bold leading-300 text-brand-400 group-hover:text-brand-500 group-active:text-brand-500 group-aria-[current="page"]:text-white group-aria-[current="page"]:group-hover:text-brand-500'
//                       )}
//                     >
//                       Platform Launch
//                     </span>
//                   </NavLink>
//                 </li>
//               );
//             })}

//             <li>
//               <button
//                 type='button'
//                 className={cn('group flex items-center gap-6 px-12 py-5')}
//               >
//                 <icons.board.board className='fill-current text-brand-500' />
//                 <span className='text-500 font-bold leading-300 text-brand-500'>
//                   + Create New Board
//                 </span>
//               </button>
//             </li>
//           </ul>
//         </nav>

//         <div className='mb-32 mt-96'>
//           <ThemeSwitch className='mx-12' />
//         </div>

//         <div className='fixed bottom-12 left-0 z-20 transition-all ease-linear'>
//           {!sidebar.show ? (
//             <Button
//               intent={'primary'}
//               size={'md'}
//               weight={'bold'}
//               className='group flex items-center gap-6 rounded-r-pill px-8 py-7'
//               onClick={sidebar.open}
//             >
//               <icons.sidebar.show />
//               <span className='sr-only'>Show Sidebar</span>
//             </Button>
//           ) : (
//             <div>
//               <Button
//                 intent={'unbranded'}
//                 size={'md'}
//                 weight={'bold'}
//                 className='group flex items-center gap-6 rounded-r-pill  px-12 py-5 hover:bg-brand-500/10 focus:bg-brand-500/10 dark:hover:bg-white dark:focus:bg-white'
//                 onClick={sidebar.close}
//               >
//                 <icons.sidebar.hide className=' text-brand-400 group-hover:text-brand-500 group-focus:text-brand-500 [&_path]:fill-current' />
//                 <span className='text-500 font-bold leading-300 text-brand-400 group-hover:text-brand-500 group-focus:text-brand-500'>
//                   Hide Sidebar
//                 </span>
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>
//     </aside>
//   );
// };

// export { Sidebar };

export {};
