// 'use client';

import { Text } from '@/components';

type Props = {};

const PageRoute = () => {
  return (
    <>
      <div className=''>
        <form action='' className='flex w-full flex-col gap-6'>
          <header>
            <Text as='h1' size='md'>
              Add New Board
            </Text>
          </header>

          {[1, 2, 3, 4, 5].map((current) => (
            <Text as='p' key={current}>
              This modal has the functionality to create a new board
            </Text>
          ))}
        </form>
      </div>
    </>
  );
};

export default PageRoute;
