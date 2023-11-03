import { Button, TextField } from '@/components';

type Props = {};

export default function Page(props: Props) {
  return (
    <>
      <h1 className='text-2xl font-bold text-red-300'>Hello 🐼!</h1>;
      <TextField placeholder='Hello' />
      <Button intent='primary'>Hello</Button>
    </>
  );
}
