import { Button, FormInput } from '@/src/components';

type Props = {};

export default function Page(props: Props) {
  return (
    <>
      <h1 className='text-2xl font-bold text-red-300'>Hello 🐼!</h1>;
      <FormInput placeholder='Hello' />
      <Button intent='primary'>Hello</Button>
    </>
  );
}
