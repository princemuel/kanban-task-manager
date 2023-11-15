import { Dialog } from '@/components/ui/dialog';

type Props = {};

const PageRoute = (props: Props) => {
  return (
    <Dialog appear={true}>
      <h1 className='font-sans text-3xl font-bold text-black'>
        Register @auth
      </h1>
    </Dialog>
  );
};

export default PageRoute;
