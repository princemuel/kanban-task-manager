// 'use client';

// import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

export function BaseLayout({ children }: Props) {
  return <div>{children}</div>;
}

// // import { Header, MainContent } from '../organisms';
// import { useSidebar } from '@/hooks';
// import { Transition } from '@headlessui/react';

// interface Props {
//   children: React.ReactNode;
// }

// const sideVariants = {
//   closed: {
//     transition: {
//       staggerChildren: 0.2,
//       staggerDirection: -1,
//     },
//   },
//   open: {
//     transition: {
//       staggerChildren: 0.2,
//       staggerDirection: 1,
//     },
//   },
// };

// const sidebarVariants = {
//   open: { x: 0 },
//   closed: { x: '-100%' },
// };

// const links = [
//   { href: '/', text: 'Platform Launch' },
//   { href: '/a', text: 'Platform Launch' },
//   { href: '/b', text: 'Platform Launch' },
//   { href: '/c', text: 'Platform Launch' },
//   { href: '/d', text: 'Platform Launch' },
// ];

// const BaseLayout = ({ children }: Props) => {
//   const [show, setShow] = React.useState(false);

//   const close = React.useCallback(() => setShow(false), []);

//   const toggle = React.useCallback(() => setShow((value) => !value), []);

//   const sidebar = useSidebar();

//   return (
//     <React.Fragment>
//       <div>
//         <Transition show={sidebar.isVisible}>hi</Transition>
//         <main className='transition-all duration-300 ease-out'>{children}</main>
//       </div>
//     </React.Fragment>
//   );
// };

// export { BaseLayout };
