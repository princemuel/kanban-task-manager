import { Text } from '@/components';
import { cn } from '@/lib';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description:
    'The Kanban board is an easy-to-use agile project management tool using the Kanban methodology that is designed to bring clarity to your work process, and enhance productivity by minimizing work in progress and help you visualize and manage workflows.',
};

export default function PageRoute() {
  return (
    <main
      className={cn(
        'border-t border-brand-200 bg-brand-100 dark:border-brand-600 dark:bg-brand-800'
      )}
    >
      <Text as='h1' intent={'primary'} size={'xl'} weight={'bold'}>
        Main Content
      </Text>
    </main>
  );
}
