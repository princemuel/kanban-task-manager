import styles from '@/assets/styles/layout.module.scss';
import { cn } from '@/lib';
import { LogoIcon, Text } from '../atoms';

interface Props {}

const Header = (props: Props) => {
  return (
    <header className={cn('bg-white dark:bg-brand-700', styles.header)}>
      <figure className='border-r border-brand-200 px-8 py-10 dark:border-brand-600'>
        <LogoIcon />
      </figure>
      <div className='px-8 py-10'>
        <Text as='h1' intent={'primary'} size={'xl'} weight={'bold'}>
          Header
        </Text>
      </div>
    </header>
  );
};

export { Header };
