import { Dialog } from '@/components/ui/dialog';

type Props = {};

const PageRoute = (props: Props) => {
  return (
    <Dialog aria-labelledby='dialog-heading' appear={false}>
      <div className='mx-auto flex w-[700px] max-w-full flex-col overflow-hidden rounded-lg bg-white'>
        <div className='mb-4 flex flex-row justify-between bg-yellow-400 px-5 pt-2'>
          <h1
            id='dialog-heading'
            className='font-sans text-3xl font-bold text-black'
          >
            Sign In @auth
          </h1>
          <button
            type='button'
            className='mb-2 inline-flex h-8 w-8 cursor-pointer items-center rounded border-none bg-red-600 px-2 py-1 font-bold text-white'
          >
            x
          </button>
        </div>
        <div className='px-5 pb-6'>
          {Array(19)
            .fill(3)
            .map((el, idx) => (
              <p key={`${el}${idx}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                eligendi odio ipsa nostrum dolores voluptas architecto tempore
                nulla voluptatibus vel, placeat explicabo exercitationem id
                officia laborum doloremque blanditiis earum accusamus.
              </p>
            ))}

          <div className='mt-2 flex flex-row justify-end'>
            <button
              type='button'
              className='rounded border-none bg-green-500 px-2 py-1'
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default PageRoute;
