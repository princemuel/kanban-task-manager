import { DialogTrigger } from '@/components/ui/radix-dialog';
import Link from 'next/link';

type Props = {};

const PageRoute = (props: Props) => {
  return (
    <div>
      <h1 className='text-3xl'>PageRoute</h1>
      <DialogTrigger asChild>
        <Link href='/boards/addboard'>Link to Add Board</Link>
      </DialogTrigger>
    </div>
  );
};

export default PageRoute;
