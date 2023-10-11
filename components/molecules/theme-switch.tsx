import { icons } from '@/common';
import { cn } from '@/helpers';
import { Switch } from '../atoms';

interface Props {
  className?: string;
}

const ThemeSwitch = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center gap-10 rounded-lg bg-brand-100 px-12 py-4 dark:bg-brand-800',
        className
      )}
    >
      <icons.mode.sun xlinkTitle='Home Logo' />
      <Switch />
      <icons.mode.moon />
    </div>
  );
};

export { ThemeSwitch };
