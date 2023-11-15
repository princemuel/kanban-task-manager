// 'use client';

import { Text } from '@/components';
import {
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/radix-dialog';

type Props = {};

const PageRoute = (props: Props) => {
  return (
    <>
      <DialogContent className=''>
        <form action='' className='flex w-full flex-col gap-6'>
          <DialogHeader>
            <DialogTitle asChild>
              <Text as='h1' size='md'>
                Add New Board
              </Text>
            </DialogTitle>
          </DialogHeader>

          {[1, 2, 3, 4, 5].map((current) => (
            <DialogDescription key={current} asChild>
              <Text as='p'>
                This modal has the functionality to create a new board
              </Text>
            </DialogDescription>
          ))}
        </form>
      </DialogContent>
    </>
  );
};

export default PageRoute;
