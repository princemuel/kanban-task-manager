import * as React from 'react';
import { LayoutHeader } from './header';
import { LayoutSidebar } from './sidebar';

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <LayoutHeader />

      <div className=''>
        <LayoutSidebar />
        {children}
      </div>
    </React.Fragment>
  );
}

// export default RootProviders;