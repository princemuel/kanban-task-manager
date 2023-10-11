import { css } from '@/styled-system/css';

type Props = {};

export default function Page(props: Props) {
  return (
    <div
      className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'red.300' })}
    >
      Hello 🐼!
    </div>
  );
}
